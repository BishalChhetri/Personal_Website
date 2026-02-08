import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/siteData";

// Sample blog content - in a real app, this would come from MDX files or a CMS
const blogContent: Record<string, string> = {
  "federated-learning-evcs": `
## Introduction

Federated Learning (FL) has emerged as a powerful paradigm for training machine learning models on distributed data while preserving privacy. In the context of Electric Vehicle Charging Stations (EVCS), this approach becomes particularly relevant as we deal with sensitive user data and distributed infrastructure.

## The Challenge

Electric Vehicle Charging Stations generate vast amounts of data, including:
- Charging patterns and schedules
- Energy consumption metrics
- User behavior data
- Network communication logs

Traditional centralized machine learning approaches require collecting all this data in one location, raising significant privacy concerns and creating potential security vulnerabilities.

## Our Approach

We implemented a federated learning framework that:
1. Keeps data on local EVCS nodes
2. Trains local models on each station
3. Aggregates model updates (not raw data) at a central server
4. Distributes improved global models back to stations

## Results

Our experiments demonstrated that FedAvgM consistently outperforms standard FedAvg under heterogeneous scenarios, ensuring robust convergence and high anomaly detection accuracy even with non-IID data distributions.

## Conclusion

Federated Learning provides an effective, privacy-preserving solution for anomaly detection in decentralized EVCS networks, paving the way for more secure and efficient charging infrastructure.
  `,
  "genetic-algorithms-optimization": `
## Introduction

Location optimization is a critical challenge in infrastructure planning. When determining where to place Electric Vehicle Charging Stations, multiple competing criteria must be balanced simultaneously.

## The Multi-Criteria Problem

Key factors in EVCS placement include:
- Traffic density and accessibility
- Distance from existing infrastructure
- Land and operational costs
- Power grid connectivity
- Environmental impact

## Genetic Algorithm Approach

We developed a hybrid approach combining:
- **Analytic Hierarchy Process (AHP)** for criteria weighting
- **Genetic Algorithm (GA)** for optimization

The GA evolves candidate solutions through:
1. Selection of fittest solutions
2. Crossover to combine good solutions
3. Mutation to explore new possibilities

## GeoGA Framework

Our GeoGA framework incorporates geographical constraints and domain-specific rules, ensuring that solutions are not just mathematically optimal but practically implementable.

## Case Study

Applied to rural Tennessee, our framework demonstrated efficient, well-distributed EVCS placements that balance all key criteria while respecting real-world constraints.
  `,
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="section-container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  const content = blogContent[slug || ""] || "";

  return (
    <Layout>
      <article className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {content.split("\n").map((line, index) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={index} className="text-muted-foreground ml-4">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 list-decimal">
                    {line.replace(/^\d+\.\s/, "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-muted-foreground mb-4">
                  {line.replace(/\*\*(.*?)\*\*/g, (_, text) => text)}
                </p>
              );
            })}
          </div>
        </motion.div>
      </article>
    </Layout>
  );
}

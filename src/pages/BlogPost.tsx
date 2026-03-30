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

In today's hyperconnected world, our devices constantly collect and share data. From smartphones to smart homes, every connected device generates information that helps improve services but also raises important questions about privacy and security.

## The Privacy Challenge

Modern IoT devices face a fundamental dilemma:
- They need data to provide personalized, intelligent services
- Users want their personal information protected
- Centralized data collection creates security vulnerabilities
- Data breaches can expose millions of users at once

Traditional approaches require sending all data to central servers, where it becomes a tempting target for cybercriminals and raises concerns about who has access to your personal information.

## A New Paradigm

Privacy-preserving technologies are changing how we think about data and machine learning. Instead of moving data to where computation happens, these approaches bring computation to where data lives.

The key principles include:
1. Data stays on local devices
2. Only insights, not raw data, are shared
3. Multiple devices collaborate without exposing individual information
4. Security is built in from the ground up

## Why This Matters

The implications of privacy-preserving technologies extend far beyond technical considerations. They represent a fundamental shift in how we balance innovation with individual rights. As devices become more integrated into our daily lives, the choice between convenience and privacy shouldn't be binary—these approaches allow us to have both.

## Real-World Applications

Privacy-preserving methods are already making a difference across various sectors:
- Healthcare: Hospitals collaborate on disease prediction models without sharing patient records
- Smart Cities: Traffic optimization learns from millions of devices without tracking individual movements
- Financial Services: Fraud detection systems improve while keeping transaction details private
- Connected Infrastructure: Critical systems enhance security through collaborative learning without exposing vulnerabilities

Each application demonstrates that we don't have to sacrifice privacy for progress.

## Looking Forward

As more devices come online and data privacy regulations tighten globally, privacy-preserving technologies will become essential rather than optional. The future of IoT lies not just in connectivity, but in secure, respectful connectivity that puts users in control of their information.

## Conclusion

The evolution of privacy-preserving technologies marks a turning point in how we approach data and machine learning. Rather than viewing privacy and functionality as opposing forces, we're learning to design systems where they complement each other. As these technologies mature and become more accessible, they'll play a crucial role in building a digital ecosystem that respects individual rights while enabling collective progress. The question is no longer whether we can protect privacy in a connected world—it's how quickly we can make privacy-preserving approaches the standard rather than the exception.
  `,
  "genetic-algorithms-optimization": `
## Introduction

Every day, planners and decision-makers face complex questions: Where should we build a new hospital? Which roads need upgrading first? How do we distribute resources fairly across communities? These aren't simple problems with obvious answers—they're multi-dimensional challenges where multiple factors compete for priority.

## The Complexity of Real-World Decisions

When planning infrastructure, decision-makers must balance numerous considerations:
- Economic factors and budget constraints
- Environmental impact and sustainability
- Accessibility for all community members
- Long-term maintenance and operational costs
- Population growth and future demand
- Existing infrastructure and resources

The challenge isn't just evaluating each factor independently—it's weighing them against each other. Is it better to choose a cheaper location that's less accessible, or spend more to ensure everyone can benefit equally?

## Beyond Gut Feeling

Traditionally, infrastructure planning relied heavily on experience and intuition. While expertise remains valuable, modern data-driven approaches bring objectivity and comprehensiveness to the process.

These methods help by:
1. Systematically evaluating multiple criteria simultaneously
2. Quantifying trade-offs between competing priorities
3. Considering far more scenarios than humanly possible
4. Identifying patterns that might not be obvious
5. Ensuring decisions are defensible and transparent

## The Power of Systematic Analysis

Data-driven planning brings transparency and thoroughness to decision-making. When every option is evaluated against the same criteria, stakeholders can understand why certain choices were made. This systematic approach reduces the risk of overlooking important factors or making decisions based on incomplete information.

Moreover, it allows planners to test "what if" scenarios. What happens if budget decreases by 10%? How does population growth affect the optimal solution? These insights help create resilient plans that can adapt to changing circumstances.

## The Human Element

While data and algorithms are powerful tools, they don't replace human judgment. The best outcomes come from combining computational power with domain expertise, community input, and ethical considerations.

Technology helps us make better-informed decisions, but humans still decide what "better" means—whether that's minimizing cost, maximizing accessibility, or finding the right balance for a specific community's needs.

## Challenges and Considerations

Despite their benefits, data-driven approaches aren't without challenges:
- Data quality matters: Poor input data leads to poor decisions, regardless of analytical sophistication
- Bias can hide in algorithms: If historical data reflects past inequities, models may perpetuate them
- Over-optimization risks: Sometimes the "perfect" solution on paper doesn't work in practice due to factors that are hard to quantify
- Communication is crucial: Technical outputs must be translated into insights that non-experts can understand and trust

Acknowledging these limitations is essential for responsible implementation.

## Moving Forward

As cities grow and infrastructure demands increase, data-driven planning will become even more critical. The goal isn't perfect solutions—those rarely exist—but rather making the most informed, equitable, and sustainable choices possible given real-world constraints and competing priorities.

## Conclusion

The integration of systematic, data-driven methods into infrastructure planning represents a maturation of how we approach complex decisions. By combining computational tools with human wisdom, we can tackle challenges that would overwhelm traditional approaches. The key is maintaining balance—using technology to enhance rather than replace human judgment, and ensuring that efficiency doesn't come at the cost of equity or sustainability. As we look to the future, the communities that thrive will be those that harness data intelligently while keeping human needs and values at the center of every decision.
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

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
            {(() => {
              const lines = content.split("\n");
              const elements: JSX.Element[] = [];
              let i = 0;

              while (i < lines.length) {
                const line = lines[i];

                if (line.startsWith("## ")) {
                  elements.push(
                    <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                      {line.replace("## ", "")}
                    </h2>,
                  );
                  i++;
                } else if (line.startsWith("- ")) {
                  // Group bullet points together
                  const bulletItems: string[] = [];
                  while (i < lines.length && lines[i].startsWith("- ")) {
                    bulletItems.push(lines[i].replace("- ", ""));
                    i++;
                  }
                  elements.push(
                    <ul key={i} className="list-disc ml-6 mb-4">
                      {bulletItems.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>,
                  );
                } else if (line.match(/^\d+\.\s/)) {
                  // Group numbered items together
                  const numberedItems: string[] = [];
                  while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
                    numberedItems.push(lines[i].replace(/^\d+\.\s/, ""));
                    i++;
                  }
                  elements.push(
                    <ol key={i} className="list-decimal ml-6 mb-4">
                      {numberedItems.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ol>,
                  );
                } else if (line.trim() === "") {
                  elements.push(<br key={i} />);
                  i++;
                } else {
                  elements.push(
                    <p key={i} className="text-muted-foreground mb-4">
                      {line.replace(/\*\*(.*?)\*\*/g, (_, text) => text)}
                    </p>,
                  );
                  i++;
                }
              }

              return elements;
            })()}
          </div>
        </motion.div>
      </article>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import {
  Brain,
  Code2,
  BarChart3,
  Shield,
  Cpu,
  GitBranch,
  Server,
  Lock,
  Eye,
  Layers,
} from "lucide-react";
import {
  skills,
  researchInterests,
  projects,
  publications,
} from "@/data/siteData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Icon mapping for skills categories
const skillIcons = {
  machineLearning: Brain,
  softwareDev: Code2,
  dataAnalysis: BarChart3,
};

// Icon mapping for research interests
const researchIconMap: Record<string, any> = {
  "Artificial Intelligence": Brain,
  "AI for Security": Shield,
  "Security of AI": Lock,
  "Software Engineering": Code2,
  "Large Language Models (LLMs)": Layers,
  "LLM Security": Shield,
  "Optimization Techniques": Cpu,
  "Internet of Things (IoTs)": Server,
  "Computer Vision": Eye,
};

export default function Work() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            My Skills, Projects, Research Interests, and Publications.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.section
          id="skills"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <motion.div variants={itemVariants} className="glass-card p-6">
            {Object.entries(skills).map(
              ([key, category]: [string, any], index) => {
                const IconComponent =
                  skillIcons[key as keyof typeof skillIcons] || Code2;
                return (
                  <div
                    key={key}
                    className={
                      index !== Object.keys(skills).length - 1
                        ? "mb-8 pb-8 border-b border-border/50"
                        : ""
                    }
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-3">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item: string, i: number) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs py-1 px-2.5 hover:bg-primary/20 transition-colors cursor-default"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard
                  {...project}
                  description={
                    (project as any).fullDescription || project.description
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Interests */}
        <motion.section
          id="research-interests"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">Research Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchInterests.map((interest, index) => {
              const IconComponent = researchIconMap[interest] || GitBranch;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-4 hover:shadow-md transition-all duration-300 group hover:border-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{interest}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          id="publications"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="scroll-mt-24"
        >
          <h2 className="text-2xl font-bold mb-8">Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}

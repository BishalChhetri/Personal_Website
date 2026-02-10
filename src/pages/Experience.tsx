import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code2,
  Database,
  Server,
  Layers,
  BarChart3,
  Shield,
  Cpu,
  GitBranch,
  Cloud,
  Lock,
  Eye,
} from "lucide-react";
import { skills, researchInterests } from "@/data/siteData";

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

export default function Skills() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground">
            Technical proficiencies and research interests
          </p>
        </motion.div>

        {/* Technical Skills */}
        <section className="mb-16">
          <SectionHeader title="Technical Skills" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-1 gap-6 mt-8"
          >
            {Object.entries(skills).map(
              ([key, category]: [string, any], index) => {
                const IconComponent =
                  skillIcons[key as keyof typeof skillIcons] || Code2;
                return (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    className="glass-card p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-4">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item: string, i: number) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-sm py-1.5 px-3 hover:bg-primary/20 transition-colors cursor-default"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              },
            )}
          </motion.div>
        </section>

        {/* Research Interests */}
        <section>
          <SectionHeader
            title="Research Interests"
            subtitle="Areas of academic and professional focus"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
          >
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
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}

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

export default function Experience() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h1>
          <p className="text-xl text-muted-foreground">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Work Experience */}
        <section className="mb-16">
          <SectionHeader title="Work Experience" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExperienceCard
                  {...exp}
                  isLast={index === experience.length - 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <SectionHeader title="Education" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution} • {edu.location}
                          </p>
                        </div>
                        <div className="text-right">
                          {/* <Badge variant="secondary">GPA: {edu.gpa}</Badge> */}
                          <p className="text-xs text-muted-foreground mt-1">
                            {edu.period}
                          </p>
                        </div>
                      </div>

                      {edu.highlights && (
                        <ul className="mt-3 space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {edu.coursework && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">
                            Key Coursework:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge
                                key={course}
                                variant="outline"
                                className="text-xs"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeader title="Technical Skills" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6"
          >
            {Object.values(skills).map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="glass-card p-6 h-full">
                  <h3 className="font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}

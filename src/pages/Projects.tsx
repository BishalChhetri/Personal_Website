import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/siteData";

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

export default function Projects() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Research projects and technical work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
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
        </motion.div>
      </div>
    </Layout>
  );
}

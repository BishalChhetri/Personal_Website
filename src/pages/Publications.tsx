import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/data/siteData";

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

export default function Publications() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Peer-reviewed research papers and articles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {publications.map((pub, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PublicationCard {...pub} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}

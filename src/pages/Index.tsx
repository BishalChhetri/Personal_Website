import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Gallery } from "@/components/Gallery";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { BlogCard } from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import {
  personalInfo,
  experience,
  projects,
  publications,
  certifications,
  blogPosts,
  researchInterests,
} from "@/data/siteData";

// Sample gallery items - these would be replaced with real images
const galleryItems = [
  { type: "image" as const, src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400", caption: "Coding session" },
  { type: "image" as const, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", caption: "Tech setup" },
  { type: "image" as const, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400", caption: "Development" },
  { type: "image" as const, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", caption: "Working remotely" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-primary mb-4"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{personalInfo.location}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {personalInfo.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {personalInfo.tagline}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {researchInterests.slice(0, 5).map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <SectionHeader
            title="My Journey"
            subtitle="From the Himalayas to the Appalachians"
          />
          <InteractiveMap />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            title="Gallery"
            subtitle="Moments from my journey"
          />
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader title="Experience" />
            <Link
              to="/experience"
              className="text-primary hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {experience.slice(0, 2).map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExperienceCard {...exp} isPreview />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader title="Research Projects" />
            <Link
              to="/projects"
              className="text-primary hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.slice(0, 3).map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader title="Publications" />
            <Link
              to="/publications"
              className="text-primary hover:underline flex items-center gap-1 text-sm"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {publications.slice(0, 2).map((pub, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            title="Certifications"
            subtitle="Professional credentials and achievements"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex items-start gap-4 hover-lift block"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      {blogPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <SectionHeader title="Latest Posts" />
              <Link
                to="/blog"
                className="text-primary hover:underline flex items-center gap-1 text-sm"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {blogPosts.slice(0, 2).map((post, index) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
}

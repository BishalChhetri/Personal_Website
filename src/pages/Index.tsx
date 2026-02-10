import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Award, GraduationCap } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Gallery } from "@/components/Gallery";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationCard } from "@/components/PublicationCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { EducationCard } from "@/components/EducationCard";
import { BlogCard } from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import {
  personalInfo,
  education,
  experience,
  projects,
  publications,
  certifications,
  blogPosts,
  researchInterests,
} from "@/data/siteData";

// Import images
import image1 from "@/images/image1.jpeg";
import image2 from "@/images/image2.jpeg";
import image3 from "@/images/image3.jpeg";
import image4 from "@/images/image4.jpeg";
import video from "@/images/video.mp4";

// Gallery items with personal photos
const galleryItems = [
  { type: "image" as const, src: image1, caption: "Mountain range" },
  { type: "video" as const, src: video, caption: "Trail moments" },
  { type: "image" as const, src: image3, caption: "Trekking adventure" },
  { type: "image" as const, src: image2, caption: "Mountain views" },
  { type: "image" as const, src: image4, caption: "Snowy mountains" },
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
  const navigate = useNavigate();

  const handleSectionNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    const [pathname, hash] = path.split("#");
    navigate(pathname);

    // Wait for navigation to complete, then scroll to section
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            {/* Profile Picture - Centered at Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border border-border">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {personalInfo.name}
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                {personalInfo.tagline}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-2xl pt-2">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-2 justify-center pt-4">
              {researchInterests.slice(0, 5).map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Map integrated into introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-4xl pt-8"
            >
              <InteractiveMap />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            title="Gallery"
            subtitle="Moments from the trail where every step tells a story."
          />
          <Gallery items={galleryItems} />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <div className="mb-8">
            <SectionHeader title="Education" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mt-8"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <EducationCard {...edu} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="mb-8">
            <SectionHeader title="Work Experience" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              title="Projects"
              subtitle="Technical implementations and research work"
            />
            <Link
              to="/work#projects"
              onClick={(e) => handleSectionNavigation(e, "/work#projects")}
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
            {projects.slice(0, 4).map((project, index) => (
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
              to="/work#publications"
              onClick={(e) => handleSectionNavigation(e, "/work#publications")}
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
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.period}
                    </p>
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

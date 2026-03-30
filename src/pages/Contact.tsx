import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Layout } from "@/components/Layout";
import { personalInfo } from "@/data/siteData";

export default function Contact() {
  return (
    <Layout>
      <div className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground">
            Let's connect and discuss opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-4 hover:shadow-md transition-all duration-300 hover:border-primary/30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Email</span>
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:shadow-md transition-all duration-300 hover:border-primary/30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:shadow-md transition-all duration-300 hover:border-primary/30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">GitHub</span>
            </a>

            <a
              href={personalInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:shadow-md transition-all duration-300 hover:border-primary/30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">Instagram</span>
            </a>
          </div>

          {/* Divider Line */}
          <div className="border-t border-border/40 my-12"></div>

          {/* Get in Touch Section - Centered */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-xl mx-auto">
              I'm always open to discussing interesting projects, research
              opportunities, or collaborations. You can mail me at{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-primary hover:underline"
              >
                {personalInfo.email}
              </a>{" "}
              or message me on{" "}
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>{" "}
              and I'll respond as soon as possible.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

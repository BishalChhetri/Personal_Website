import { motion } from "framer-motion";
import { ExternalLink, FileText, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    live?: string;
    paper?: string;
  };
}

export function ProjectCard({ title, description, tags, links }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-6 hover-lift"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {links && (
        <div className="flex gap-3">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {links.paper && (
            <a
              href={links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

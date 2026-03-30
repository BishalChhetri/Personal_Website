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

export function ProjectCard({
  title,
  description,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-6 hover-lift h-full flex flex-col"
    >
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
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
        <div className="flex gap-3 mt-auto pt-2 border-t border-border/50">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
              title="View Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          {links.paper && (
            <a
              href={links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
              title="Read Paper"
            >
              <FileText className="w-4 h-4" />
              <span>Paper</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

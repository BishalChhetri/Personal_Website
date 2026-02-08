import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: string[];
  isPreview?: boolean;
}

export function ExperienceCard({
  title,
  company,
  companyUrl,
  location,
  period,
  highlights,
  isPreview = false,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="glass-card p-6 hover-lift"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                {company} <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>{company}</span>
            )}
            <span>•</span>
            <span>{location}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{period}</p>
          
          {!isPreview && (
            <ul className="mt-3 space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

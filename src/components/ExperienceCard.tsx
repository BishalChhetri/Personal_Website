import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  highlights: string[];
  isPreview?: boolean;
  companyLogo?: string;
  isLast?: boolean;
}

export function ExperienceCard({
  title,
  company,
  companyUrl,
  location,
  period,
  highlights,
  isPreview = false,
  companyLogo,
  isLast = false,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(!isPreview);
  const [logoError, setLogoError] = useState(false);

  // Default placeholder logo
  const defaultLogo = "/placeholder.svg";
  const logoSrc = logoError ? defaultLogo : companyLogo || defaultLogo;

  return (
    <div className="relative pl-16 pb-8 pt-3">
      {/* Timeline line - equal gaps above and below image, hidden for last item */}
      {!isLast && (
        <div className="absolute left-[24px] top-[72px] bottom-[12px] w-[2px] bg-border" />
      )}

      {/* Company Logo */}
      <div className="absolute left-0 top-3 w-12 h-12 rounded-full border border-border bg-background overflow-hidden flex items-center justify-center">
        <img
          src={logoSrc}
          alt={`${company} logo`}
          className="w-full h-full object-cover"
          onError={() => setLogoError(true)}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-2"
      >
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
          <p className="text-sm text-muted-foreground mt-1">{period}</p>
        </div>

        {isPreview && !isExpanded ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
          >
            View details <ChevronDown className="w-4 h-4" />
          </button>
        ) : (
          <>
            <motion.ul
              initial={isPreview ? { opacity: 0, height: 0 } : false}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2"
            >
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>
            {isPreview && (
              <button
                onClick={() => setIsExpanded(false)}
                className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
              >
                Hide details <ChevronUp className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}

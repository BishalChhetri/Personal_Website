import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  doi: string;
  arxiv?: string;
  date: string;
}

export function PublicationCard({
  title,
  authors,
  journal,
  doi,
  arxiv,
  date,
}: PublicationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="glass-card p-6 hover-lift h-full flex flex-col"
    >
      <h3 className="font-semibold mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{authors}</p>
      <p className="text-sm text-muted-foreground italic mb-3 flex-1">
        {journal}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted-foreground">{date}</span>
        <div className="flex gap-2">
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            DOI <ExternalLink className="w-3 h-3" />
          </a>
          {arxiv && (
            <a
              href={arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              arXiv <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

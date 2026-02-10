import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  institutionLogo?: string;
}

export function EducationCard({
  degree,
  institution,
  location,
  period,
  gpa,
  institutionLogo,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
          {institutionLogo ? (
            <img
              src={institutionLogo}
              alt={`${institution} logo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-lg font-bold">
                {institution.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-semibold">{degree}</h3>
              <p className="text-sm text-muted-foreground">
                {institution} • {location}
              </p>
            </div>
            <div className="text-right">
              {/* {gpa && <Badge variant="secondary">GPA: {gpa}</Badge>} */}
              <p className="text-xs text-muted-foreground mt-1">{period}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

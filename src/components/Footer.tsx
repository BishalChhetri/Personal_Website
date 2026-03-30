import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { personalInfo } from "@/data/siteData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
  { icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, url: personalInfo.socialLinks.github, label: "GitHub" },
  {
    icon: Instagram,
    url: personalInfo.socialLinks.instagram,
    label: "Instagram",
  },
  { icon: Facebook, url: personalInfo.socialLinks.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="py-8 mt-20">
      <div className="section-container">
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 order-1 md:order-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors [&]:cursor-pointer"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 pointer-events-none" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

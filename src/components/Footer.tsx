import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { personalInfo } from "@/data/siteData";

const socialLinks = [
  { icon: Linkedin, url: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Github, url: personalInfo.socialLinks.github, label: "GitHub" },
  { icon: Instagram, url: personalInfo.socialLinks.instagram, label: "Instagram" },
  { icon: Facebook, url: personalInfo.socialLinks.facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

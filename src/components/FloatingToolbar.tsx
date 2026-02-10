import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  FolderKanban,
  BookOpen,
  FileText,
  Mail,
  User,
  Link2,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "@/data/siteData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Briefcase, label: "Work Experience", path: "/experience" },
  // { icon: FolderKanban, label: "Projects", path: "/projects" },
  { icon: BookOpen, label: "Publications", path: "/publications" },
  { icon: FileText, label: "Blog", path: "/blog" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export function FloatingToolbar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [showProfile, setShowProfile] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const themeIcon = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  }[theme];

  const ThemeIcon = themeIcon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="floating-toolbar"
      >
        {/* Profile Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setShowProfile(true)}
              className="toolbar-button"
            >
              <User className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Profile</p>
          </TooltipContent>
        </Tooltip>

        <div className="h-px bg-border my-1" />

        {/* Navigation Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Tooltip key={item.path}>
              <TooltipTrigger asChild>
                <Link
                  to={item.path}
                  className={`toolbar-button ${isActive ? "active" : ""}`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}

        <div className="h-px bg-border my-1" />

        {/* Links Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setShowLinks(true)}
              className="toolbar-button"
            >
              <Link2 className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Social Links</p>
          </TooltipContent>
        </Tooltip>

        {/* Theme Toggle */}
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <button className="toolbar-button">
                  <ThemeIcon className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent align="end" side="left">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="w-4 h-4 mr-2" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="w-4 h-4 mr-2" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Monitor className="w-4 h-4 mr-2" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Profile Modal */}
      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="sr-only">Profile Card</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary-foreground">
                {personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground text-sm">
              {personalInfo.location}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Links Modal */}
      <Dialog open={showLinks} onOpenChange={setShowLinks}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect with Me</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center">
                <span className="text-primary-foreground font-bold">in</span>
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-muted-foreground">
                  Professional Network
                </p>
              </div>
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold">GH</span>
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-muted-foreground">Code & Projects</p>
              </div>
            </a>
            <a
              href={personalInfo.socialLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center">
                <span className="text-primary-foreground font-bold">GS</span>
              </div>
              <div>
                <p className="font-medium">Google Scholar</p>
                <p className="text-sm text-muted-foreground">
                  Research Publications
                </p>
              </div>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  {personalInfo.email}
                </p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

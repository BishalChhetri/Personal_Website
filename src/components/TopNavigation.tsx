import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sun,
  Moon,
  Monitor,
  Home,
  Briefcase,
  FolderKanban,
  BookOpen,
  FileText,
  Mail,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "@/data/siteData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Briefcase, label: "Portfolio", path: "/work" },
  { icon: FileText, label: "Blogs", path: "/blog" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export function TopNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const themeIcon = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  }[theme];

  const ThemeIcon = themeIcon;

  return (
    <nav className="sticky top-4 z-50 w-full px-6">
      <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-md border border-border/40 rounded-3xl shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Favicon */}
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-foreground dark:bg-background border-2 border-background dark:border-foreground flex items-center justify-center">
                <img
                  src="/favicon.ico"
                  alt="Logo"
                  loading="lazy"
                  className="w-5 h-5"
                  onError={(e) => {
                    // Fallback to initials if favicon fails to load
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="text-xs font-bold text-background dark:text-foreground">BK</span>';
                  }}
                />
              </div>
            </Link>

            {/* Navigation Links with Icons + Theme Toggle */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavClick(e, item.path)}
                        className={`p-2 rounded-lg transition-colors relative ${
                          isActive
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-foreground rounded-full" />
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}

              {/* Theme Toggle Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors ml-1">
                    <ThemeIcon className="w-5 h-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

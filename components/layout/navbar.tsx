"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievement", label: "Achievement" },
  { id: "testimonials", label: "Testimonials" },
  { id: "stats", label: "Stats" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = 100;
          const sections = navItems.map((item) => item.id);
          const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= threshold && rect.bottom >= threshold;
            }
            return false;
          });
          
          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=113_POijTQjOWuOOI3cmw0AMcwuZziP5S",
      "_blank"
    );
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-background/90 dark:bg-background/95 backdrop-blur-2xl border border-border/60 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl transition-all duration-300 max-w-6xl w-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors tracking-tight flex items-center gap-2 group shrink-0"
          aria-label="Go to home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse group-hover:scale-125 transition-transform" />
          <span className="truncate max-w-[130px] sm:max-w-none">Omatsola Eyitemi</span>
        </button>

        {/* Desktop Navigation Links with Framer Motion Sliding Pill */}
        <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 bg-muted/60 dark:bg-muted/40 backdrop-blur-md rounded-full p-1 border border-border/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2.5 xl:px-3 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold transition-colors focus:outline-none shrink-0 ${
                  isActive 
                    ? "text-white dark:text-white font-bold" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 dark:bg-primary rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Theme Toggle, CV Button & Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button
            onClick={downloadCV}
            variant="default"
            size="sm"
            className="rounded-full gap-1.5 text-xs font-semibold px-4 shadow-sm bg-blue-600 hover:bg-blue-700 text-white dark:bg-primary dark:hover:bg-primary/90 transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 left-4 right-4 bg-background/98 dark:bg-background/98 backdrop-blur-3xl rounded-3xl p-5 shadow-2xl lg:hidden border border-border/80 ring-1 ring-border/20 z-50"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-colors text-left ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white dark:bg-primary dark:text-primary-foreground font-bold shadow-md"
                      : "text-foreground hover:bg-accent/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


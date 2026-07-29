import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownRight, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import VideoPlayer from "@/components/VideoPlayer";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40 py-3.5 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Name */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 font-editorial text-xl sm:text-2xl font-light text-foreground hover:text-primary transition-colors"
          >
            <span>Atharva Naik</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-xs uppercase tracking-[0.18em] transition-colors py-1 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <div className="pl-2 border-l border-border/40">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Right Side (Theme toggle + Hamburger) */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-card border-l border-border z-50 md:hidden p-8 flex flex-col justify-between"
            >
              <div className="pt-16 space-y-4">
                <p className="label-caps text-muted-foreground mb-4">Navigation</p>
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left py-2.5 text-base font-light transition-colors border-b border-border/20 ${
                      activeSection === item.id
                        ? "text-primary font-medium pl-2 border-l-2 border-l-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-8 border-t border-border/40 text-xs text-muted-foreground">
                © 2026 Atharva Naik
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section Content */}
      <div
        id="home"
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-20 max-w-5xl mx-auto text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="label-caps text-muted-foreground text-[0.65rem]">
            AI &amp; ML Student · Event Lead · Maker
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-editorial text-foreground text-5xl sm:text-7xl lg:text-8xl font-light mb-6 tracking-tight leading-[1.05]"
        >
          Atharva Naik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          B.Tech CS (AI &amp; ML) student at VIT Bhopal University. Co-Leading Event Management at UX Club, building intelligent software, and engineering physical systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground text-xs uppercase tracking-widest font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            Explore Projects
            <ArrowDownRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-md border border-border bg-background text-foreground text-xs uppercase tracking-widest font-medium hover:border-primary/50 hover:bg-muted/40 transition-all"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Testimonial Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <VideoPlayer title="Atharva Naik - Testimonial" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
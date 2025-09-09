import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import TypewriterText from "@/components/TypewriterText";
import MobileNav from "@/components/MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-1 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold text-foreground"
            >
              Atharva Naik
            </motion.h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'certifications', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div 
        id="home"
        className="flex-1 flex items-center justify-center relative bg-gradient-nature"
        style={{
          backgroundImage: `linear-gradient(rgba(158, 184, 162, 0.3), rgba(158, 184, 162, 0.1)), url('/hero-nature.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center px-6 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Atharva Naik
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto min-h-[60px] flex items-center justify-center"
          >
            <TypewriterText 
              text="Aspiring AI & ML Engineer | Tech Enthusiast | Innovator"
              delay={80}
              className="text-shadow-lg bg-background/20 px-4 py-2 rounded-lg backdrop-blur-sm"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-hero hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
            >
              Connect with me on LinkedIn
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
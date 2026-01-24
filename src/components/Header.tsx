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
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl font-bold text-foreground"
            >
              Atharva Naik
            </motion.h1>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {['home', 'about', 'certifications', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-colors relative group text-sm lg:text-base"
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
        className="flex-1 flex items-center justify-center relative bg-gradient-nature min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(158, 184, 162, 0.3), rgba(158, 184, 162, 0.1)), url('/hero-nature.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="text-center px-4 sm:px-6 py-16 sm:py-20 w-full max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
          >
            Atharva Naik
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto min-h-[50px] sm:min-h-[60px] flex items-center justify-center px-2"
          >
            <TypewriterText 
              text="Aspiring AI & ML Engineer | Tech Enthusiast | Innovator"
              delay={80}
              className="text-shadow-lg bg-background/30 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm text-center leading-relaxed"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <Button 
              size="lg"
              className="bg-gradient-hero hover:shadow-hover transition-all duration-300 transform hover:scale-105 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
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
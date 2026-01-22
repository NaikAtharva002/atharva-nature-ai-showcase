import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import TypewriterText from "@/components/TypewriterText";
import MobileNav from "@/components/MobileNav";
import ParticleBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]"
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
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative group text-sm lg:text-base font-medium"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
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
        className="flex-1 flex items-center justify-center relative min-h-screen overflow-hidden"
      >
        {/* Particle background */}
        <ParticleBackground />
        
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero-nature.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: typeof window !== 'undefined' && window.innerWidth > 768 ? 'fixed' : 'scroll'
          }}
        />
        
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-10" />

        <div className="relative z-20 text-center px-4 sm:px-6 py-16 sm:py-20 w-full max-w-5xl mx-auto">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
              Atharva Naik
            </span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto min-h-[60px] sm:min-h-[70px] flex items-center justify-center px-2"
          >
            <TypewriterText 
              text="Aspiring AI & ML Engineer | Tech Enthusiast | Innovator"
              delay={80}
              className="font-medium text-foreground/90 bg-background/40 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-md border border-border/30 text-center leading-relaxed shadow-lg"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-base px-8 py-6 h-auto rounded-xl font-semibold"
              onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
            >
              Connect on LinkedIn
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-base px-8 py-6 h-auto rounded-xl font-semibold"
              onClick={() => scrollToSection('about')}
            >
              Explore My Work
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

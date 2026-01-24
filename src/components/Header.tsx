import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import TypewriterText from "@/components/TypewriterText";
import MobileNav from "@/components/MobileNav";
import SnowParticles from "@/components/SnowParticles";
import { motion } from "framer-motion";
import { Mountain, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Base Camp' },
    { id: 'about', label: 'The Ascent' },
    { id: 'certifications', label: 'Summit Skills' },
    { id: 'contact', label: 'Begin Journey' }
  ];

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <Mountain className="h-6 w-6 text-accent" />
              <h1 className="text-lg sm:text-xl font-bold text-white">
                Atharva Naik
              </h1>
            </motion.div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-accent transition-colors relative group text-sm lg:text-base peak-underline"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Mountain Background */}
      <div 
        id="home"
        className="flex-1 flex items-center justify-center relative min-h-screen overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-secondary/75" />
        
        {/* Snow Particles */}
        <SnowParticles />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 py-16 sm:py-20 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <Mountain className="h-16 w-16 mx-auto text-accent animate-float" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-shadow-hero"
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
              text="Scaling New Heights in AI & ML | Tech Enthusiast | Innovator"
              delay={80}
              className="text-shadow-lg bg-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-xl backdrop-blur-md text-center leading-relaxed text-white border border-white/20"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto animate-pulse-glow"
              onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
            >
              Start the Climb
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto"
              onClick={() => scrollToSection('about')}
            >
              Explore the Trail
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/70 hover:text-accent transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;

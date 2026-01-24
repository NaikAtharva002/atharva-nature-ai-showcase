import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain } from "lucide-react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrolled > 300);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-accent via-primary to-secondary transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-glow transition-all z-50"
          >
            <Mountain className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;

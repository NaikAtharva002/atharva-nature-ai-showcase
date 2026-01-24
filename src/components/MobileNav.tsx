import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Base Camp', icon: '🏕️' },
    { id: 'about', label: 'The Ascent', icon: '🧗' },
    { id: 'certifications', label: 'Summit Skills', icon: '🏔️' },
    { id: 'contact', label: 'Begin Journey', icon: '🧭' }
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden h-9 w-9 px-0 text-white hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/90 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu - slides down from top like descending from peak */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 right-0 top-0 bg-gradient-to-b from-primary to-secondary z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col pt-20 pb-8 px-6">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8 justify-center">
                  <Mountain className="h-8 w-8 text-accent" />
                  <span className="text-xl font-bold text-white">Trail Menu</span>
                </div>
                
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-4 w-full text-left py-4 px-6 text-lg font-medium text-white/90 hover:text-accent hover:bg-white/10 rounded-xl transition-all"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      {item.label}
                    </motion.button>
                  ))}
                </div>
                
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="mt-8 py-3 px-6 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                >
                  Close Trail Map
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

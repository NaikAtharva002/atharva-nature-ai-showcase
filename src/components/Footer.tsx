import { Heart, Mountain, Github, Linkedin, Instagram } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-forest text-forest-foreground overflow-hidden">
      {/* Mountain silhouette at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-secondary/30">
          <path d="M0,0 L0,60 L200,30 L400,70 L600,20 L800,50 L1000,10 L1200,40 L1200,0 Z" />
        </svg>
      </div>
      
      <div className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* About */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  <Mountain className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">Atharva Naik</h3>
                </div>
                <p className="text-forest-foreground/70 text-sm leading-relaxed">
                  Scaling new heights in AI & ML. Passionate about emerging technologies, 
                  hackathons, and building innovative solutions.
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Base Camp', id: 'home' },
                    { label: 'The Ascent', id: 'about' },
                    { label: 'Summit Skills', id: 'certifications' },
                    { label: 'Begin Journey', id: 'contact' }
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-forest-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Connect */}
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex gap-4 justify-center md:justify-end">
                  <motion.a
                    href="https://github.com/NaikAtharva002"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/atharva-naik-"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/atharvadhanraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <Mountain className="h-5 w-5 text-accent" />
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <p className="text-forest-foreground/70 flex items-center justify-center gap-2 text-sm">
                © 2025 Atharva Naik | Built with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Heart className="h-4 w-4 text-accent fill-current" />
                </motion.span>
                and Alpine Spirit 🏔️
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

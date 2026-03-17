import { Heart, Github, Linkedin, Instagram } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
              © 2025 Atharva Naik | Built with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              and Code
            </p>
          </motion.div>
          <div className="mt-4 w-16 h-0.5 bg-gradient-hero mx-auto rounded-full"></div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
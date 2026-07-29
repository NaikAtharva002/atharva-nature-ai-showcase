import { Heart, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-light">
          <span>Made with</span>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline-block animate-pulse" />
          <span>by <strong className="font-medium text-foreground">Atharva Naik</strong></span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NaikAtharva002"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-naik-"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/atharvadhanraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <p className="text-[11px] label-caps text-muted-foreground/70">
          © {new Date().getFullYear()} Atharva Naik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
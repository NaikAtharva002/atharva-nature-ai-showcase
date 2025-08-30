import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Atharva Naik | Built with 
            <Heart className="h-4 w-4 text-red-500 fill-current" /> 
            and Code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
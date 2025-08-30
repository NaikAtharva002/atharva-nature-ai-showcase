import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Atharva Naik</h1>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        id="home"
        className="flex-1 flex items-center justify-center relative bg-gradient-nature"
        style={{
          backgroundImage: `linear-gradient(rgba(158, 184, 162, 0.3), rgba(158, 184, 162, 0.1)), url('/src/assets/hero-nature.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Atharva Naik
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aspiring AI & ML Engineer | Tech Enthusiast | Innovator
          </p>
          <Button 
            size="lg"
            className="bg-gradient-hero hover:shadow-hover transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
          >
            Connect with me on LinkedIn
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
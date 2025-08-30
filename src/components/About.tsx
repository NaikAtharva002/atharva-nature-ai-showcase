import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Linkedin, Instagram } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <Card className="p-8 md:p-12 shadow-card bg-gradient-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I am a B.Tech student at VIT Bhopal specializing in Computer Science with a focus on 
                Artificial Intelligence and Machine Learning. Passionate about emerging technologies, 
                hackathons, and building innovative solutions that can make a positive impact on the world.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
                <p className="text-sm text-muted-foreground">VIT Bhopal</p>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-2">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI & ML</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">IoT</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
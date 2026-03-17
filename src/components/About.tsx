import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Linkedin, Instagram, Github } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Card className="p-8 md:p-12 shadow-card bg-gradient-card hover:shadow-hover transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I am a B.Tech student at VIT Bhopal specializing in Computer Science with a focus on 
                  Artificial Intelligence and Machine Learning. Passionate about emerging technologies, 
                  hackathons, and building innovative solutions that can make a positive impact on the world.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all group"
                      onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                    >
                      <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all group"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://www.instagram.com/atharvadhanraj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      Instagram
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="bg-muted/50 p-6 rounded-lg hover:bg-muted/70 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">VIT Bhopal</p>
                </motion.div>
                
                <motion.div 
                  className="bg-muted/50 p-6 rounded-lg hover:bg-muted/70 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI & ML', 'IoT', 'Innovation'].map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
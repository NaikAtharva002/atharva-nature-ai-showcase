import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Linkedin, Instagram, Github, Mountain, Compass, Flag } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import MountainDivider from "@/components/MountainDivider";
import { motion } from "framer-motion";

const About = () => {
  const milestones = [
    { icon: <Flag className="h-4 w-4" />, label: 'AI & ML', description: 'Focus Area' },
    { icon: <Compass className="h-4 w-4" />, label: 'IoT', description: 'Exploration' },
    { icon: <Mountain className="h-4 w-4" />, label: 'Innovation', description: 'Summit Goal' }
  ];

  return (
    <section id="about" className="relative">
      <MountainDivider className="bg-gradient-to-b from-transparent to-background" flip />
      
      <div className="py-20 px-6 bg-background topo-pattern">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Compass className="h-6 w-6 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">The Ascent</h2>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground">My journey through the peaks of technology</p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <Card className="p-8 md:p-12 shadow-card glass hover:shadow-hover transition-all duration-500 border-border/50">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    I am a B.Tech student at VIT Bhopal specializing in Computer Science with a focus on 
                    Artificial Intelligence and Machine Learning. Like a mountaineer scaling new heights, 
                    I'm passionate about emerging technologies, hackathons, and building innovative solutions 
                    that can make a positive impact on the world.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all group"
                        onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                      >
                        <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        LinkedIn
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 hover:bg-foreground hover:text-background hover:border-foreground transition-all group"
                        onClick={() => window.open('https://github.com/NaikAtharva002', '_blank')}
                      >
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        GitHub
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all group"
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
                    className="bg-glacier/50 dark:bg-muted/50 p-6 rounded-xl border border-border/50 hover:border-accent/30 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Mountain className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Education</h3>
                    </div>
                    <p className="text-muted-foreground">B.Tech in Computer Science</p>
                    <p className="text-sm text-muted-foreground">VIT Bhopal 🏔️</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-glacier/50 dark:bg-muted/50 p-6 rounded-xl border border-border/50 hover:border-accent/30 transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Flag className="h-5 w-5 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground">Summit Goals</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={milestone.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm cursor-default border border-accent/20"
                        >
                          {milestone.icon}
                          {milestone.label}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;

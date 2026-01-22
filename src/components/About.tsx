import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Linkedin, Instagram, GraduationCap, Sparkles, Brain, Cpu, Lightbulb } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const About = () => {
  const focusAreas = [
    { tag: 'AI & ML', icon: <Brain className="h-3 w-3" />, color: 'from-violet-500 to-purple-500' },
    { tag: 'IoT', icon: <Cpu className="h-3 w-3" />, color: 'from-blue-500 to-cyan-500' },
    { tag: 'Innovation', icon: <Lightbulb className="h-3 w-3" />, color: 'from-amber-500 to-orange-500' }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Introduction
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <Card className="p-8 md:p-12 border-border/50 backdrop-blur-sm bg-card/80 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I am a B.Tech student at VIT Bhopal specializing in Computer Science with a focus on 
                  <span className="text-primary font-medium"> Artificial Intelligence and Machine Learning</span>. 
                  Passionate about emerging technologies, hackathons, and building innovative solutions 
                  that can make a positive impact on the world.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all group"
                      onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                    >
                      <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-500/25 transition-all group"
                      onClick={() => window.open('https://www.instagram.com/atharvadhanraj', '_blank')}
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
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 hover:border-primary/20 transition-all"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                  </div>
                  <p className="text-foreground font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">VIT Bhopal University</p>
                </motion.div>
                
                <motion.div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/10 hover:border-secondary/20 transition-all"
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">Focus Areas</h3>
                  <div className="flex flex-wrap gap-3">
                    {focusAreas.map((item, index) => (
                      <motion.span
                        key={item.tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-medium shadow-lg cursor-default`}
                      >
                        {item.icon}
                        {item.tag}
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

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, MapPin, Github, Mountain, Send } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import MountainDivider from "@/components/MountainDivider";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <MountainDivider className="bg-background" />
      
      <div className="py-20 px-6 bg-gradient-to-b from-primary/90 to-secondary/80 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 topo-pattern opacity-30" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">Begin Your Journey</h2>
              <Mountain className="h-8 w-8 text-accent" />
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-white/80">
              Let's connect and explore opportunities together
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Card className="p-8 md:p-12 glass-strong shadow-2xl hover:shadow-glow transition-all duration-500 border-white/20">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="p-3 bg-accent/20 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Mail className="h-5 w-5 text-accent" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a 
                          href="mailto:atharvanaik002@gmail.com"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          atharvanaik002@gmail.com
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="p-3 bg-accent/20 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <MapPin className="h-5 w-5 text-accent" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">VIT Bhopal, India 🏔️</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Trail Companions</h3>
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-white hover:border-primary transition-all group"
                        onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                      >
                        <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform text-[#0077b5]" />
                        LinkedIn Profile
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start gap-3 h-12 hover:bg-foreground hover:text-background hover:border-foreground transition-all group"
                        onClick={() => window.open('https://github.com/NaikAtharva002', '_blank')}
                      >
                        <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        GitHub Profile
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start gap-3 h-12 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-500 transition-all group"
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
                        <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform text-pink-500" />
                        Instagram Profile
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-glow transition-all duration-300 mt-6"
                        onClick={() => window.open('mailto:atharvanaik002@gmail.com', '_blank')}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Reach the Summit
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;

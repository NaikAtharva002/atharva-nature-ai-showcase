
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, MapPin, Github } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Let's connect and explore opportunities together
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Card className="p-8 md:p-12 shadow-card bg-gradient-card hover:shadow-hover transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:atharvanaik002@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        atharvanaik002@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">VIT Bhopal, India</p>
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
                <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all group"
                      onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                    >
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      LinkedIn Profile
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all group"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://www.instagram.com/atharvadhanraj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNW==';
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      Instagram Profile
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all group"
                      onClick={() => window.open('https://github.com/NaikAtharva002', '_blank')}
                    >
                      <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      GitHub Profile
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className="w-full h-12 bg-gradient-hero hover:shadow-hover transition-all duration-300 transform hover:scale-105 mt-6"
                      onClick={() => window.open('mailto:atharvanaik002@gmail.com', '_blank')}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send me an Email
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, MapPin, Send, MessageCircle } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <MessageCircle className="h-4 w-4" />
            Contact
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Card className="p-8 md:p-12 border-border/50 backdrop-blur-sm bg-card/80 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <motion.a 
                    href="mailto:atharvanaik002@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-transparent hover:border-primary/20 transition-all group cursor-pointer"
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        atharvanaik002@gmail.com
                      </p>
                    </div>
                  </motion.a>
                  
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-secondary/10 to-transparent"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MapPin className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
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
                <h3 className="text-2xl font-bold text-foreground mb-8">Connect With Me</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full justify-start gap-3 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20 transition-all group rounded-xl"
                      onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                    >
                      <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">LinkedIn Profile</span>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full justify-start gap-3 h-14 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-500/20 transition-all group rounded-xl"
                      onClick={() => window.open('https://www.instagram.com/atharvadhanraj', '_blank')}
                    >
                      <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Instagram Profile</span>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }} className="pt-2">
                    <Button 
                      className="w-full h-14 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white shadow-xl shadow-primary/25 transition-all rounded-xl font-bold text-base"
                      onClick={() => window.open('mailto:atharvanaik002@gmail.com', '_blank')}
                    >
                      <Send className="h-5 w-5 mr-2" />
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

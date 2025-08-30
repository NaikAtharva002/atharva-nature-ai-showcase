import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Let's connect and explore opportunities together
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-card bg-gradient-card">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:atharvanaik002@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      atharvanaik002@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">VIT Bhopal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => window.open('https://www.linkedin.com/in/atharva-naik-', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                  Instagram Profile
                </Button>
                
                <Button 
                  className="w-full h-12 bg-gradient-hero hover:shadow-hover transition-all duration-300 transform hover:scale-105 mt-6"
                  onClick={() => window.open('mailto:atharvanaik002@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send me an Email
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
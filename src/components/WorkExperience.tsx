import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, MapPin, Mountain, Flag, Compass } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import companyIcon from "@/assets/company-icon.webp";
import uxClubLogo from "@/assets/ux-club-logo.jpg";

const WorkExperience = () => {
  const experiences = [
    {
      company: "UX Club",
      title: "Core Member At Event Management",
      type: "Full-time",
      period: "Sep 2025 - Present",
      location: "Bhopal · On-site",
      logo: uxClubLogo,
      accomplishments: "Serving as a Core Member in the Event Management Team, organizing and coordinating design-focused events, workshops, and initiatives to foster UX learning and community engagement."
    },
    {
      company: "Study Together",
      title: "IT HELPER",
      duration: "11 months",
      period: "November 2023 - September 2024",
      logo: companyIcon,
      accomplishments: "Provided timely and empathetic technical assistance to a diverse user base, successfully resolving a wide range of server-related queries and maintaining a high level of user satisfaction."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-glacier/30 via-background to-background topo-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Mountain className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Compass className="h-24 w-24 text-secondary" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flag className="h-6 w-6 text-accent" />
              <motion.h2 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                The Expedition
              </motion.h2>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Base camps and milestones along my professional climbing route
            </motion.p>
          </div>
        </ScrollAnimation>

        {/* Trail line connecting experiences */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary rounded-full opacity-30" />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ScrollAnimation key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="relative pl-10 md:pl-16"
                >
                  {/* Trail marker */}
                  <div className="absolute left-0 md:left-4 top-6 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                    <Flag className="h-4 w-4 text-white" />
                  </div>
                  
                  <Card className="group hover:shadow-hover transition-all duration-300 border-2 border-border/50 hover:border-accent/30 glass overflow-hidden hover-lift">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors border border-accent/20">
                            <img src={experience.logo} alt={experience.company} className="w-8 h-8 object-contain rounded" />
                          </div>
                          <div>
                            <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                              {experience.title}
                            </CardTitle>
                            <CardDescription className="text-base font-semibold text-muted-foreground flex items-center gap-2">
                              <Mountain className="h-4 w-4 text-accent" />
                              {experience.company} {experience.type && `· ${experience.type}`}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2">
                          {experience.duration && (
                            <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent border border-accent/20">
                              <Calendar className="w-3 h-3" />
                              {experience.duration}
                            </Badge>
                          )}
                          <Badge variant="outline" className="px-3 py-1 text-xs border-primary/30">
                            {experience.period}
                          </Badge>
                          {experience.location && (
                            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 text-xs border-secondary/30">
                              <MapPin className="w-3 h-3 text-secondary" />
                              {experience.location}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                        <div className="p-1.5 rounded-full bg-accent/20 mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Flag className="h-4 w-4 text-accent" />
                            Key Accomplishments
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {experience.accomplishments}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, MapPin, Briefcase, Sparkles } from "lucide-react";
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
      accomplishments: "Serving as a Core Member in the Event Management Team, organizing and coordinating design-focused events, workshops, and initiatives to foster UX learning and community engagement.",
      color: "from-violet-500 to-purple-600",
      current: true
    },
    {
      company: "Study Together",
      title: "IT HELPER",
      period: "November 2023 - September 2024",
      duration: "11 months",
      logo: companyIcon,
      accomplishments: "Provided timely and empathetic technical assistance to a diverse user base, successfully resolving a wide range of server-related queries and maintaining a high level of user satisfaction.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Briefcase className="h-4 w-4" />
              Career
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Work Experience
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional journey and key accomplishments in the tech industry
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-px bg-gradient-to-r ${experience.color} rounded-lg opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                    
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className={`p-3 rounded-2xl bg-gradient-to-br ${experience.color} shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring" }}
                          >
                            <img src={experience.logo} alt={experience.company} className="w-8 h-8 object-contain rounded-lg" />
                          </motion.div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-2xl font-bold text-foreground">
                                {experience.title}
                              </CardTitle>
                              {experience.current && (
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                              )}
                            </div>
                            <CardDescription className="text-lg font-semibold text-muted-foreground">
                              {experience.company} {experience.type && `· ${experience.type}`}
                            </CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.duration && (
                            <Badge className={`bg-gradient-to-r ${experience.color} text-white border-0 shadow-sm`}>
                              <Calendar className="w-3 h-3 mr-1" />
                              {experience.duration}
                            </Badge>
                          )}
                          <Badge variant="outline" className="px-3 py-1 text-xs border-border/50">
                            {experience.period}
                          </Badge>
                          {experience.location && (
                            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 text-xs border-border/50">
                              <MapPin className="w-3 h-3" />
                              {experience.location}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 relative z-10">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent">
                        <div className="p-2 rounded-full bg-green-500/20 flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Key Accomplishments</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {experience.accomplishments}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

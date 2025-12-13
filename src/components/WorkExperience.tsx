import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, MapPin } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import companyIcon from "@/assets/company-icon.webp";
import uxClubLogo from "@/assets/ux-club-logo.jpg";

const WorkExperience = () => {
  const experiences = [
    {
      company: "UX Club",
      title: "Core Member",
      type: "Full-time",
      period: "Sep 2025 - Present",
      location: "Bhopal · On-site",
      logo: uxClubLogo,
      accomplishments: "Contributing to design initiatives and collaborating with team members to enhance user experience practices within the club."
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
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Work Experience
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional journey and key accomplishments in the tech industry
            </motion.p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <img src={experience.logo} alt={experience.company} className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {experience.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-muted-foreground">
                            {experience.company} {experience.type && `· ${experience.type}`}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        {experience.duration && (
                          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
                            <Calendar className="w-3 h-3" />
                            {experience.duration}
                          </Badge>
                        )}
                        <Badge variant="outline" className="px-3 py-1 text-xs">
                          {experience.period}
                        </Badge>
                        {experience.location && (
                          <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 text-xs">
                            <MapPin className="w-3 h-3" />
                            {experience.location}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-green-500/10 mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Accomplishments</h4>
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
    </section>
  );
};

export default WorkExperience;
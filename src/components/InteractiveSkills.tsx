import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Wifi, FileSpreadsheet, HardDrive, Bot, ChevronRight, Mountain, Flag } from "lucide-react";

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const skills = [
    {
      title: "Internet of Things (IoT)",
      provider: "MKCL",
      icon: <Wifi className="h-8 w-8 text-accent" />,
      description: "Comprehensive IoT development and implementation",
      details: "Advanced understanding of IoT ecosystems, sensor integration, data collection, and smart device connectivity. Experienced in building end-to-end IoT solutions.",
      tags: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration"],
      level: 4
    },
    {
      title: "Advanced Excel",
      provider: "MKCL", 
      icon: <FileSpreadsheet className="h-8 w-8 text-accent" />,
      description: "Advanced data analysis and spreadsheet management",
      details: "Expert-level proficiency in Excel including advanced formulas, pivot tables, data visualization, and automation using VBA macros.",
      tags: ["Data Analysis", "VBA", "Pivot Tables", "Automation"],
      level: 5
    },
    {
      title: "Hardware and Networking",
      provider: "MKCL",
      icon: <HardDrive className="h-8 w-8 text-accent" />,
      description: "Computer hardware troubleshooting and network configuration",
      details: "Comprehensive knowledge of computer hardware components, troubleshooting techniques, and network infrastructure setup and maintenance.",
      tags: ["Troubleshooting", "Network Config", "Hardware Setup", "System Admin"],
      level: 4
    },
    {
      title: "Amazon Q in Code & Play Event",
      provider: "Amazon",
      icon: <Bot className="h-8 w-8 text-accent" />,
      description: "AI-powered coding assistant and development tools",
      details: "Hands-on experience with Amazon's AI-powered development tools, learning advanced coding techniques and best practices in AI-assisted development.",
      tags: ["AI Coding", "AWS", "Development Tools", "Automation"],
      level: 3
    }
  ];

  // Mountain peak rating component
  const PeakRating = ({ level }: { level: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((peak) => (
        <Mountain
          key={peak}
          className={`h-4 w-4 transition-colors ${
            peak <= level ? 'text-accent fill-accent/30' : 'text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-background via-glacier/30 to-background topo-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flag className="h-6 w-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Summit Skills</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">Click on any skill to explore the trail in detail</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`p-6 shadow-card transition-all duration-300 cursor-pointer glass group relative overflow-hidden hover-lift ${
                  selectedSkill === index ? 'shadow-hover ring-2 ring-accent/30 scale-[1.02]' : ''
                }`}
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              >
                {/* Decorative mountain peak in corner */}
                <div className="absolute -top-2 -right-2 opacity-10">
                  <Mountain className="h-20 w-20 text-primary" />
                </div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className="flex-shrink-0 p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors border border-accent/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                      <motion.div
                        animate={{ rotate: selectedSkill === index ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border border-secondary/20">
                        <Award className="h-3 w-3 mr-1" />
                        {skill.provider}
                      </Badge>
                      <PeakRating level={skill.level} />
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    
                    <AnimatePresence>
                      {selectedSkill === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-border pt-4 mt-4">
                            <p className="text-sm text-muted-foreground mb-4">{skill.details}</p>
                            <div className="flex flex-wrap gap-2">
                              {skill.tags.map((tag, tagIndex) => (
                                <motion.span
                                  key={tagIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: tagIndex * 0.1 }}
                                  className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 flex items-center gap-1"
                                >
                                  <Flag className="h-3 w-3" />
                                  {tag}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;

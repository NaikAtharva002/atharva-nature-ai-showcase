import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Wifi, FileSpreadsheet, HardDrive, Bot, ChevronRight } from "lucide-react";

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  const skills = [
    {
      title: "Internet of Things (IoT)",
      provider: "MKCL",
      icon: <Wifi className="h-8 w-8 text-primary" />,
      description: "Comprehensive IoT development and implementation",
      details: "Advanced understanding of IoT ecosystems, sensor integration, data collection, and smart device connectivity. Experienced in building end-to-end IoT solutions.",
      tags: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration"]
    },
    {
      title: "Advanced Excel",
      provider: "MKCL", 
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      description: "Advanced data analysis and spreadsheet management",
      details: "Expert-level proficiency in Excel including advanced formulas, pivot tables, data visualization, and automation using VBA macros.",
      tags: ["Data Analysis", "VBA", "Pivot Tables", "Automation"]
    },
    {
      title: "Hardware and Networking",
      provider: "MKCL",
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      description: "Computer hardware troubleshooting and network configuration",
      details: "Comprehensive knowledge of computer hardware components, troubleshooting techniques, and network infrastructure setup and maintenance.",
      tags: ["Troubleshooting", "Network Config", "Hardware Setup", "System Admin"]
    },
    {
      title: "Amazon Q in Code & Play Event",
      provider: "Amazon",
      icon: <Bot className="h-8 w-8 text-primary" />,
      description: "AI-powered coding assistant and development tools",
      details: "Hands-on experience with Amazon's AI-powered development tools, learning advanced coding techniques and best practices in AI-assisted development.",
      tags: ["AI Coding", "AWS", "Development Tools", "Automation"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Interactive Skills</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">Click on any skill to explore in detail</p>
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
                className={`p-6 shadow-card transition-all duration-300 cursor-pointer bg-gradient-card group relative overflow-hidden ${
                  selectedSkill === index ? 'shadow-hover scale-105 ring-2 ring-primary/20' : 'hover:shadow-hover hover:scale-102'
                }`}
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
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
                    <Badge variant="secondary" className="mb-3">
                      <Award className="h-3 w-3 mr-1" />
                      {skill.provider}
                    </Badge>
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
                                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                >
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
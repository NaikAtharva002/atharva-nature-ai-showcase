import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Wifi, FileSpreadsheet, HardDrive, Bot, ChevronRight, Sparkles } from "lucide-react";

const InteractiveSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      title: "Internet of Things (IoT)",
      provider: "MKCL",
      icon: <Wifi className="h-8 w-8" />,
      description: "Comprehensive IoT development and implementation",
      details: "Advanced understanding of IoT ecosystems, sensor integration, data collection, and smart device connectivity. Experienced in building end-to-end IoT solutions.",
      tags: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration"],
      proficiency: 85,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Advanced Excel",
      provider: "MKCL", 
      icon: <FileSpreadsheet className="h-8 w-8" />,
      description: "Advanced data analysis and spreadsheet management",
      details: "Expert-level proficiency in Excel including advanced formulas, pivot tables, data visualization, and automation using VBA macros.",
      tags: ["Data Analysis", "VBA", "Pivot Tables", "Automation"],
      proficiency: 90,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hardware and Networking",
      provider: "MKCL",
      icon: <HardDrive className="h-8 w-8" />,
      description: "Computer hardware troubleshooting and network configuration",
      details: "Comprehensive knowledge of computer hardware components, troubleshooting techniques, and network infrastructure setup and maintenance.",
      tags: ["Troubleshooting", "Network Config", "Hardware Setup", "System Admin"],
      proficiency: 80,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Amazon Q in Code & Play Event",
      provider: "Amazon",
      icon: <Bot className="h-8 w-8" />,
      description: "AI-powered coding assistant and development tools",
      details: "Hands-on experience with Amazon's AI-powered development tools, learning advanced coding techniques and best practices in AI-assisted development.",
      tags: ["AI Coding", "AWS", "Development Tools", "Automation"],
      proficiency: 75,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Professional Skills
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any skill to explore in detail and see proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <Card 
                className={`relative p-6 transition-all duration-500 cursor-pointer group overflow-hidden border-border/50 ${
                  selectedSkill === index 
                    ? 'shadow-2xl shadow-primary/20 scale-[1.02] border-primary/30' 
                    : 'hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.01] hover:border-primary/20'
                }`}
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-px bg-gradient-to-r ${skill.color} rounded-lg opacity-0 blur-sm`}
                  animate={{ opacity: hoveredSkill === index ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground truncate pr-2">{skill.title}</h3>
                        <motion.div
                          animate={{ rotate: selectedSkill === index ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                      <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                        <Award className="h-3 w-3 mr-1" />
                        {skill.provider}
                      </Badge>
                      <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                      
                      {/* Proficiency bar */}
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-muted-foreground">Proficiency</span>
                          <span className="text-xs font-bold text-primary">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {selectedSkill === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="border-t border-border/50 pt-4 mt-4">
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skill.details}</p>
                              <div className="flex flex-wrap gap-2">
                                {skill.tags.map((tag, tagIndex) => (
                                  <motion.span
                                    key={tagIndex}
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: tagIndex * 0.05 }}
                                    className={`px-3 py-1.5 bg-gradient-to-r ${skill.color} text-white text-xs font-medium rounded-full shadow-sm`}
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

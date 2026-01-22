import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Target, Lightbulb, Rocket, Sparkles, ExternalLink } from "lucide-react";

const BentoGrid = () => {
  const achievements = [
    {
      title: "Dawn of Code Hackathon",
      description: "Participated in competitive programming and innovation challenge. Built innovative solutions under time pressure.",
      icon: <Code className="h-8 w-8" />,
      category: "Hackathon",
      size: "large",
      stats: "24hrs",
      color: "from-violet-500 to-purple-600",
      highlight: true
    },
    {
      title: "Innovation Mindset",
      description: "Constantly exploring new technologies and solutions",
      icon: <Lightbulb className="h-6 w-6" />,
      category: "Philosophy",
      size: "small",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Tech Enthusiasm",
      description: "Passionate about emerging AI/ML technologies",
      icon: <Rocket className="h-6 w-6" />,
      category: "Passion",
      size: "small",
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Future Goals",
      description: "Building impactful AI solutions for tomorrow. Committed to continuous learning and growth.",
      icon: <Target className="h-8 w-8" />,
      category: "Vision",
      size: "medium",
      stats: "∞ Potential",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2';
      case 'small':
      default:
        return 'md:col-span-1';
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
      
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
            <Trophy className="h-4 w-4" />
            Milestones
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Achievements & Vision
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey and aspirations in the world of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={getGridClasses(achievement.size)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className={`relative p-6 h-full transition-all duration-500 group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10`}>
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated border glow */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${achievement.color} rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`} />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring" }}
                        >
                          {achievement.icon}
                        </motion.div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.category}
                        </span>
                      </div>
                      {achievement.stats && (
                        <span className={`text-sm font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.stats}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-bold text-foreground mb-3 ${
                        achievement.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {achievement.size === 'large' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-6 pt-4 border-t border-border/50"
                      >
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-sm">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                              <Trophy className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">Achievement</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                              <Users className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">Team Event</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

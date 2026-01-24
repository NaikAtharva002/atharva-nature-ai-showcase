import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Target, Lightbulb, Rocket } from "lucide-react";

const BentoGrid = () => {
  const achievements = [
    {
      title: "Dawn of Code Hackathon",
      description: "Participated in competitive programming and innovation challenge",
      icon: <Code className="h-8 w-8 text-primary" />,
      category: "Hackathon",
      size: "large",
      stats: "24hrs",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Innovation Mindset",
      description: "Constantly exploring new technologies and solutions",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      category: "Philosophy",
      size: "small",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Tech Enthusiasm",
      description: "Passionate about emerging AI/ML technologies",
      icon: <Rocket className="h-6 w-6 text-primary" />,
      category: "Passion",
      size: "small",
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      title: "Future Goals",
      description: "Building impactful AI solutions for tomorrow",
      icon: <Target className="h-8 w-8 text-primary" />,
      category: "Vision",
      size: "medium",
      stats: "∞ Potential",
      gradient: "from-primary/30 to-secondary/30"
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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Achievements & Vision</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">My journey and aspirations in tech</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={getGridClasses(achievement.size)}
            >
              <Card className={`p-6 h-full shadow-card hover:shadow-hover transition-all duration-300 group relative overflow-hidden bg-gradient-to-br ${achievement.gradient}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {achievement.icon}
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    {achievement.stats && (
                      <span className="text-sm font-bold text-primary">
                        {achievement.stats}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-semibold text-foreground mb-3 ${
                      achievement.size === 'large' ? 'text-2xl' : 'text-lg'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {achievement.size === 'large' && (
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Achievement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Team Event</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Code, Target, Lightbulb, Rocket, Mountain, Flag } from "lucide-react";

const BentoGrid = () => {
  const achievements = [
    {
      title: "Dawn of Code Hackathon",
      description: "Participated in competitive programming and innovation challenge - reaching new heights in problem-solving",
      icon: <Code className="h-8 w-8 text-accent" />,
      category: "Summit",
      size: "large",
      stats: "24hrs",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Innovation Mindset",
      description: "Constantly exploring new technologies and solutions like an explorer mapping uncharted peaks",
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      category: "Trail",
      size: "small",
      gradient: "from-secondary/20 to-accent/10"
    },
    {
      title: "Tech Enthusiasm",
      description: "Passionate about emerging AI/ML technologies - the compass guiding my expedition",
      icon: <Rocket className="h-6 w-6 text-accent" />,
      category: "Expedition",
      size: "small",
      gradient: "from-primary/20 to-secondary/10"
    },
    {
      title: "Future Goals",
      description: "Building impactful AI solutions for tomorrow - ascending towards greater peaks",
      icon: <Target className="h-8 w-8 text-accent" />,
      category: "Vision",
      size: "medium",
      stats: "∞ Potential",
      gradient: "from-accent/30 to-primary/20"
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
    <section className="py-20 px-6 bg-gradient-to-b from-background to-glacier/20 topo-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-6 w-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Summit Achievements</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">Peaks conquered and trails blazed in tech</p>
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
              <Card className={`p-6 h-full shadow-card transition-all duration-300 group relative overflow-hidden glass hover-lift bg-gradient-to-br ${achievement.gradient}`}>
                {/* Decorative mountain */}
                <div className="absolute -bottom-4 -right-4 opacity-10">
                  <Mountain className="h-24 w-24 text-primary" />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full flex flex-col relative z-10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors border border-accent/20">
                        {achievement.icon}
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 flex items-center gap-1">
                        <Flag className="h-3 w-3" />
                        {achievement.category}
                      </span>
                    </div>
                    {achievement.stats && (
                      <span className="text-sm font-bold text-accent">
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
                      <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                        <Trophy className="h-4 w-4 text-accent" />
                        <span className="text-sm text-muted-foreground">Peak Achievement</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Team Expedition</span>
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

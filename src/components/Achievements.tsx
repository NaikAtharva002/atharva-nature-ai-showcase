import { Card } from "@/components/ui/card";
import { Trophy, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Dawn of Code Hackathon",
      description: "Participated in competitive programming and innovation challenge",
      icon: <Code className="h-8 w-8 text-primary" />,
      category: "Hackathon"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">Highlights of my journey in tech</p>
        </div>

        <div className="grid gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card group"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
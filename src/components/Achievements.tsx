import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Award, Trophy, Users, Code, Sparkles, CheckCircle2 } from "lucide-react";

interface Achievement {
  title: string;
  category: "Leadership" | "Hackathons" | "Certificates" | "Open Source" | "Events";
  date: string;
  description: string;
  icon: any;
  metric?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Co-Lead Event Management",
    category: "Leadership",
    date: "2025 – Present",
    description: "Leading event operations, workshop logistics, and design hackathons for UX Club at VIT Bhopal.",
    icon: Users,
    metric: "1000+ Participants",
  },
  {
    title: "Dawn of Code Hackathon",
    category: "Hackathons",
    date: "24-Hour Intensive",
    description: "Participated in competitive programming and innovative algorithmic prototyping challenge.",
    icon: Trophy,
    metric: "Top Contender",
  },
  {
    title: "IoT & Systems Certification",
    category: "Certificates",
    date: "MKCL Certified",
    description: "Certified in Internet of Things (IoT) hardware programming, sensor integration, and networking.",
    icon: Award,
    metric: "Hardware Specialization",
  },
  {
    title: "Amazon Q Code & Play Event",
    category: "Events",
    date: "AWS / Amazon",
    description: "Hands-on participation in AI-assisted developer tools and generative coding workflows.",
    icon: Sparkles,
    metric: "AI Developer Track",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-8 bg-muted/20 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="h-4 w-4 text-primary" />
            <p className="label-caps text-muted-foreground">Recognition &amp; Milestones</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-16">
            Achievements &amp; Leadership
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="p-6 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-semibold bg-primary/10 text-primary border border-primary/20">
                        {ach.category}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-light">{ach.date}</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-2xl text-foreground font-light mb-1">
                          {ach.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {ach.metric && (
                    <div className="pt-4 border-t border-border/20 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-primary font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {ach.metric}
                      </span>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
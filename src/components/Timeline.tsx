import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { GraduationCap, BookOpen, Users, Palette, Cpu, Rocket } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  highlight?: boolean;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2020 – 2022",
    title: "Schooling & Foundations",
    subtitle: "Higher Secondary Education",
    description: "Built strong foundations in mathematics, computer science fundamentals, and physical sciences.",
    icon: GraduationCap,
  },
  {
    year: "2023 – Present",
    title: "VIT Bhopal University",
    subtitle: "B.Tech Computer Science (AI & ML)",
    description: "Deep-diving into machine learning algorithms, data structures, neural networks, and embedded systems.",
    icon: BookOpen,
    highlight: true,
  },
  {
    year: "2024 – Present",
    title: "UX Club",
    subtitle: "Co-Lead, Event Management",
    description: "Directing event execution, organizing design workshops, hackathons, and fostering student design engagement.",
    icon: Users,
    highlight: true,
  },
  {
    year: "2025",
    title: "Perplex Digital",
    subtitle: "UI & Experience Designer",
    description: "Crafting digital product interfaces, design systems, and seamless user experiences.",
    icon: Palette,
  },
  {
    year: "Present",
    title: "AI & Hardware Builder",
    subtitle: "Independent Innovator",
    description: "Engineering real-time radar systems, automated distance detectors, and experimental AI projects.",
    icon: Cpu,
    highlight: true,
  },
  {
    year: "Beyond",
    title: "The Future",
    subtitle: "Next Horizon",
    description: "Pioneering intelligent autonomous systems and human-AI interaction frameworks.",
    icon: Rocket,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-8 bg-muted/20 border-t border-border/40">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="label-caps text-muted-foreground">Evolution</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-16">
            Journey &amp; Timeline
          </h2>
        </ScrollAnimation>

        <div className="relative">
          {/* Vertical central connector line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border/80 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                    {/* Icon Node Marker */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 z-10 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md text-primary">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Timeline Card */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                      <div
                        className={`p-6 rounded-xl border ${
                          item.highlight
                            ? "border-primary/40 bg-card shadow-lg"
                            : "border-border/60 bg-card/60"
                        } card-lift`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="label-caps text-primary text-[0.65rem] font-semibold">
                            {item.year}
                          </span>
                          {item.highlight && (
                            <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider bg-primary/10 text-primary font-medium">
                              Active / Key
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

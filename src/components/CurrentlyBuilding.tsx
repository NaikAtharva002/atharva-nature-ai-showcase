import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Hammer, Sparkles, Activity, Layers } from "lucide-react";

interface ActiveProject {
  title: string;
  category: string;
  status: string;
  progress: number;
  description: string;
  targetCompletion: string;
  tags: string[];
}

const CURRENTLY_BUILDING: ActiveProject[] = [
  {
    title: "Autonomous Drone Path Finder (Simulated)",
    category: "AI & Embedded Robotics",
    status: "Active Development",
    progress: 68,
    description: "Developing spatial pathfinding algorithms coupled with obstacle detection sensors to enable autonomous navigation in simulated environments.",
    targetCompletion: "Q3 2026",
    tags: ["Python", "OpenCV", "ROS2", "Simulation"],
  },
  {
    title: "Editorial AI Design System & Telemetry Web App",
    category: "Web Engineering & UI",
    status: "Finalizing v2 Release",
    progress: 90,
    description: "Architecting a modular, dark-mode first design system featuring smooth hardware telemetry integrations and modern editorial typography.",
    targetCompletion: "Active Now",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

const CurrentlyBuilding = () => {
  return (
    <section id="building" className="py-24 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <Hammer className="h-4 w-4 text-primary" />
            <p className="label-caps text-muted-foreground">Active R&amp;D</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-12">
            Currently Building
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {CURRENTLY_BUILDING.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="p-8 rounded-2xl border border-primary/30 bg-card shadow-lg card-lift h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="label-caps text-primary text-[10px] font-semibold flex items-center gap-1.5">
                      <Activity className="h-3 w-3 animate-pulse" />
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-primary/10 text-primary border border-primary/20">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-foreground font-light mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-muted-foreground font-light">Progress</span>
                      <span className="text-primary font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-muted/60 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-muted-foreground font-light">
                    Target: {item.targetCompletion}
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;

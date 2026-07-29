import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Code, Brain, Layout, Server, Wrench, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Vite", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & Ecosystem",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Arduino IDE", "Figma"],
  },
  {
    title: "Automation & IoT",
    icon: Cpu,
    skills: ["Arduino", "ESP32", "Ultrasonic Sensors", "Servo Control", "Hardware Logic"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-muted/20 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="label-caps text-muted-foreground">Competencies</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-16">
            Technical Stack &amp; Skills
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.08}>
                <div className="p-6 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/40">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-editorial text-xl text-foreground font-light">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="px-3 py-1 rounded-md text-xs bg-background border border-border/60 text-foreground font-light shadow-sm transition-colors hover:border-primary/40 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

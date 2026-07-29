import { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Github, ExternalLink, Cpu, Code2, Layers, Image as ImageIcon } from "lucide-react";

interface SoftwareProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

interface HardwareProject {
  title: string;
  description: string;
  image: string;
  components: string[];
  galleryLink?: string;
}

const FEATURED_PROJECT = {
  title: "Atharva's Nature & AI Showcase",
  category: "Featured ML & Web Architecture",
  description: "A high-performance editorial web showcase and AI portfolio integrating interactive hardware telemetry, responsive visualization, and minimal aesthetics.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Machine Learning"],
  github: "https://github.com/NaikAtharva002/atharva-nature-ai-showcase",
  demo: "https://atharva002.netlify.app",
};

const SOFTWARE_PROJECTS: SoftwareProject[] = [
  {
    title: "AI Variant Analysis Pipeline",
    description: "An automated genomic variant effect interpreter predicting pathogenic impact across non-coding regions using transformer representations.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "PyTorch", "Bioinformatics", "FastAPI"],
    github: "https://github.com/NaikAtharva002",
    demo: "#",
  },
  {
    title: "UX Club Event Management Hub",
    description: "Centralized event scheduling, registration tracking, and interactive participant feedback system engineered for campus UX initiatives.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/NaikAtharva002",
    demo: "#",
  },
  {
    title: "Smart Data Analytics Dashboard",
    description: "Real-time analytics engine visualizing high-throughput sensor telemetry with custom chart components and anomaly alerts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Recharts", "Express", "Tailwind"],
    github: "https://github.com/NaikAtharva002",
    demo: "#",
  },
];

const HARDWARE_PROJECTS: HardwareProject[] = [
  {
    title: "Arduino Radar Visualization System",
    description: "Built an Arduino-based radar system using an HC-SR04 ultrasonic sensor and servo motor to scan a 180° field and visualize real-time object detection through a custom radar interface.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    components: ["Arduino Uno", "HC-SR04 Ultrasonic Sensor", "Servo Motor (180°)", "Processing IDE"],
  },
  {
    title: "Smart Object Detection System",
    description: "Developed an Arduino automation system that detects nearby objects using an ultrasonic sensor and actuates a servo motor based on configurable distance thresholds.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
    components: ["Arduino Microcontroller", "Ultrasonic Sensor", "Servo Motor", "Jumper Wires"],
  },
];

const Projects = () => {
  const [selectedHardwareImg, setSelectedHardwareImg] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="label-caps text-muted-foreground">Portfolio Showcase</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-16">
            Featured Works &amp; Systems
          </h2>
        </ScrollAnimation>

        {/* ─── FEATURED PROJECT CARD ─── */}
        <ScrollAnimation delay={0.1}>
          <div className="mb-20 rounded-2xl border border-primary/30 bg-card overflow-hidden shadow-xl card-lift">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-muted">
                <img
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-semibold">
                  Featured Project
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <p className="label-caps text-primary mb-2">{FEATURED_PROJECT.category}</p>
                  <h3 className="font-editorial text-3xl font-light text-foreground mb-4">
                    {FEATURED_PROJECT.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                    {FEATURED_PROJECT.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {FEATURED_PROJECT.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded border border-border/60 bg-muted/40 text-muted-foreground text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  {FEATURED_PROJECT.github && (
                    <a
                      href={FEATURED_PROJECT.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-border text-foreground hover:bg-muted text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  )}
                  {FEATURED_PROJECT.demo && (
                    <a
                      href={FEATURED_PROJECT.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* ─── SOFTWARE PROJECTS GRID ─── */}
        <div className="mb-20">
          <ScrollAnimation>
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="h-5 w-5 text-primary" />
              <h3 className="text-2xl font-editorial text-foreground font-light">Software Engineering</h3>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {SOFTWARE_PROJECTS.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="h-full rounded-xl border border-border/60 bg-card overflow-hidden flex flex-col justify-between card-lift">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-editorial text-xl text-foreground font-light mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-xs font-light leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] bg-muted text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between border-t border-border/20 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1.5 font-medium"
                      >
                        Demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* ─── HARDWARE PROJECTS SUBSECTION ─── */}
        <div>
          <ScrollAnimation>
            <div className="flex items-center gap-2 mb-8">
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="text-2xl font-editorial text-foreground font-light">Hardware &amp; Embedded Systems</h3>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {HARDWARE_PROJECTS.map((hp, index) => (
              <ScrollAnimation key={index} delay={index * 0.15}>
                <div className="rounded-xl border border-primary/20 bg-muted/20 p-6 sm:p-8 card-lift">
                  <div className="relative h-52 rounded-lg overflow-hidden mb-6 border border-border/40">
                    <img
                      src={hp.image}
                      alt={hp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-background/80 backdrop-blur-sm text-[10px] label-caps text-primary border border-border/40">
                      Hardware
                    </div>
                  </div>

                  <h4 className="font-editorial text-2xl text-foreground font-light mb-3">
                    {hp.title}
                  </h4>

                  <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {hp.description}
                  </p>

                  <div className="mb-6">
                    <p className="label-caps text-muted-foreground text-[0.6rem] mb-2">Components Used</p>
                    <div className="flex flex-wrap gap-2">
                      {hp.components.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-[11px] bg-background border border-border/60 text-foreground font-light"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedHardwareImg(hp.image)}
                    className="w-full py-2.5 rounded border border-border hover:border-primary/40 bg-card text-foreground text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <ImageIcon className="h-4 w-4 text-primary" />
                    View Hardware Gallery
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal Preview */}
      {selectedHardwareImg && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedHardwareImg(null)}
        >
          <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img src={selectedHardwareImg} alt="Hardware detail" className="w-full h-auto max-h-[80vh] object-contain bg-black" />
            <button
              onClick={() => setSelectedHardwareImg(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background text-foreground text-xs font-medium border border-border"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { GraduationCap, Award, Cpu, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="label-caps text-muted-foreground">Identity &amp; Background</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-12">
            About Me
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main Bio Text */}
          <div className="md:col-span-7 space-y-6">
            <ScrollAnimation delay={0.1}>
              <p className="text-foreground text-lg sm:text-xl font-light leading-relaxed">
                I am a B.Tech Computer Science student at VIT Bhopal University, specializing in Artificial Intelligence and Machine Learning.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Driven by curiosity for both cognitive algorithms and hardware-level automation, I spend my time building machine learning prototypes, embedded systems, and managing high-impact design events as Co-Lead of Event Management at UX Club.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                My approach combines analytical precision with user-centric design — striving to make complex AI capabilities feel natural and accessible.
              </p>
            </ScrollAnimation>
          </div>

          {/* Quick Highlight Cards */}
          <div className="md:col-span-5 space-y-4">
            <ScrollAnimation delay={0.2}>
              <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm mb-1">Education</h3>
                    <p className="text-xs text-muted-foreground">B.Tech Computer Science (AI &amp; ML)</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-0.5">VIT Bhopal University</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm mb-1">Leadership</h3>
                    <p className="text-xs text-muted-foreground">Co-Lead, Event Management</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-0.5">UX Club, VIT Bhopal</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm mb-1">Technical Focus</h3>
                    <p className="text-xs text-muted-foreground">Artificial Intelligence, ML, IoT &amp; Embedded Systems</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
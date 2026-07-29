import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Github, Linkedin, Instagram, Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";

const CONTACT_LINKS = [
  {
    name: "Email",
    value: "atharvanaik002@gmail.com",
    href: "mailto:atharvanaik002@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/atharva-naik-",
    href: "https://www.linkedin.com/in/atharva-naik-",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/NaikAtharva002",
    href: "https://github.com/NaikAtharva002",
    icon: Github,
  },
  {
    name: "Instagram",
    value: "@atharvadhanraj",
    href: "https://www.instagram.com/atharvadhanraj",
    icon: Instagram,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <p className="label-caps text-muted-foreground">Initiate Contact</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl text-foreground font-light mb-6">
            Let's build something <br className="hidden sm:inline" />
            <span className="italic font-normal text-primary">meaningful together.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg font-light max-w-xl mb-16 leading-relaxed">
            Open for AI/ML engineering opportunities, hardware telemetry collaborations, event initiatives, and creative tech partnerships.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Location & Quick Info */}
          <div className="md:col-span-4 space-y-6">
            <ScrollAnimation delay={0.1}>
              <div className="p-6 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="label-caps text-foreground text-xs font-semibold">Location</span>
                </div>
                <p className="text-base text-foreground font-light">VIT Bhopal University</p>
                <p className="text-xs text-muted-foreground font-light">Bhopal, Madhya Pradesh, India</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="p-6 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                  <span className="label-caps text-foreground text-xs font-semibold">Availability</span>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Currently available for internships, project collaborations, and event leadership roles.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Social Links List */}
          <div className="md:col-span-8 space-y-3">
            {CONTACT_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <ScrollAnimation key={link.name} delay={i * 0.08}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="p-5 rounded-xl border border-border/60 bg-card/60 hover:border-primary/40 card-lift flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs label-caps text-muted-foreground mb-0.5">{link.name}</p>
                        <p className="text-sm sm:text-base font-light text-foreground group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

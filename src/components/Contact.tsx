import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

/* ─── Links ──────────────────────────────────── */
const LINKS = [
  {
    id: "github-link",
    label: "GitHub",
    handle: "NaikAtharva002",
    href: "https://github.com/NaikAtharva002",
    icon: Github,
  },
  {
    id: "linkedin-link",
    label: "LinkedIn",
    handle: "atharva-naik-",
    href: "https://www.linkedin.com/in/atharva-naik-",
    icon: Linkedin,
  },
  {
    id: "instagram-link",
    label: "Instagram",
    handle: "@atharvadhanraj",
    href: "https://www.instagram.com/atharvadhanraj",
    icon: Instagram,
  },
  {
    id: "email-link",
    label: "Email",
    handle: "atharvanaik002@gmail.com",
    href: "mailto:atharvanaik002@gmail.com",
    icon: Mail,
  },
];

/* ─── Component ──────────────────────────────── */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12"
      style={{ backgroundColor: "#F2F4F3" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <ScrollAnimation>
          <p className="label-caps text-[#A9927D] mb-12">Connect</p>
        </ScrollAnimation>

        {/* Heading */}
        <ScrollAnimation delay={0.05}>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="font-editorial text-[#0A0908] mb-16"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 300 }}
          >
            Let's talk.
          </motion.h2>
        </ScrollAnimation>

        {/* Link rows */}
        <div style={{ borderTop: "1px solid rgba(10,9,8,0.1)" }}>
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <ScrollAnimation key={link.id} delay={i * 0.07}>
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  id={link.id}
                  className="flex items-center justify-between py-5 group"
                  style={{ borderBottom: "1px solid rgba(10,9,8,0.08)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ x: 4 }}
                >
                  {/* Left: icon + label + handle */}
                  <div className="flex items-center gap-5">
                    <Icon
                      className="h-4 w-4 text-[#A9927D] group-hover:text-[#49111C] transition-colors duration-200 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p
                        className="text-[#0A0908] group-hover:text-[#49111C] transition-colors duration-200"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400 }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="text-[#A9927D]"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 300 }}
                      >
                        {link.handle}
                      </p>
                    </div>
                  </div>

                  {/* Right: arrow */}
                  <ArrowRight
                    className="h-4 w-4 text-[#A9927D] group-hover:text-[#49111C] transition-all duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </motion.a>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

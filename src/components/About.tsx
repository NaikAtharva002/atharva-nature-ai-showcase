import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12"
      style={{ backgroundColor: "#F2F4F3" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <ScrollAnimation>
          <p className="label-caps text-[#A9927D] mb-12">Identity</p>
        </ScrollAnimation>

        {/* Two-column editorial grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — name + identity tags */}
          <ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2
                className="font-editorial text-[#0A0908] mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, lineHeight: 1.05 }}
              >
                Atharva<br />Naik
              </h2>

              {/* Education metadata */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 text-[#0A0908] label-caps"
                    style={{ border: "1px solid rgba(10,9,8,0.15)", fontSize: "0.6rem" }}
                  >
                    VIT Bhopal University
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 text-[#5E503F] label-caps"
                    style={{ border: "1px solid rgba(94,80,63,0.3)", fontSize: "0.6rem" }}
                  >
                    B.Tech · Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 text-[#49111C] label-caps"
                    style={{ border: "1px solid rgba(73,17,28,0.3)", fontSize: "0.6rem" }}
                  >
                    AI &amp; Machine Learning
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>

          {/* Right — bio paragraph */}
          <ScrollAnimation delay={0.15}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <p
                className="text-[#0A0908] leading-relaxed mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.75 }}
              >
                I'm a Computer Science student at VIT Bhopal, specialising in Artificial
                Intelligence and Machine Learning. Outside the classroom, I lead event
                management at UX Club — coordinating design workshops, competitions, and
                community initiatives that bridge technology and human experience.
              </p>

              <p
                className="text-[#5E503F] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7 }}
              >
                I'm drawn to the intersection of systems and people — building things that
                are useful, intentional, and a little bit beautiful.
              </p>
            </motion.div>
          </ScrollAnimation>

        </div>

        {/* Bottom hairline */}
        <div
          className="mt-24"
          style={{ borderTop: "1px solid rgba(10,9,8,0.1)" }}
        />
      </div>
    </section>
  );
};

export default About;
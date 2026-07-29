import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

/* ─── Experience data ────────────────────────── */
const EXPERIENCES = [
  {
    org: "UX Club",
    orgMeta: "Full-time · On-site · Bhopal, MP",
    roles: [
      {
        title: "Co-Lead, Event Management",
        period: "May 2026 — Present",
        desc: "Leading the event management vertical — scoping and executing design-focused events, workshops, and community initiatives across campus.",
      },
      {
        title: "Core Member, Event Management",
        period: "Jul 2025 — Jun 2026",
        desc: "Coordinated design workshops and UX learning events, fostering community engagement and cross-functional collaboration within the club.",
      },
    ],
  },
  {
    org: "Study Together",
    orgMeta: "IT Helper · Freelance",
    roles: [
      {
        title: "IT Helper",
        period: "Nov 2024 — Sep 2025",
        desc: "Provided technical assistance to a diverse user base — resolving server queries, hardware issues, and network configurations with high user satisfaction.",
      },
    ],
  },
];

/* ─── Component ──────────────────────────────── */
const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-12"
      style={{ backgroundColor: "#0A0908" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <ScrollAnimation>
          <p className="label-caps text-[#A9927D] mb-12">Experience</p>
        </ScrollAnimation>

        {/* Heading */}
        <ScrollAnimation delay={0.05}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-editorial text-[#F2F4F3] mb-16"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 300 }}
          >
            Work
          </motion.h2>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-[1px]"
            style={{ backgroundColor: "rgba(94,80,63,0.25)" }}
          />

          <div className="space-y-16 pl-10">
            {EXPERIENCES.map((exp, expIdx) => (
              <ScrollAnimation key={expIdx} delay={expIdx * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: expIdx * 0.1 }}
                  className="relative"
                >
                  {/* Dot marker */}
                  <div
                    className="absolute -left-[43px] top-[6px] w-[15px] h-[15px] rounded-full"
                    style={{ backgroundColor: "#49111C", border: "2px solid rgba(10,9,8,0.8)" }}
                  />

                  {/* Org name */}
                  <div className="mb-6">
                    <h3
                      className="font-editorial text-[#F2F4F3] mb-1"
                      style={{ fontSize: "1.4rem", fontWeight: 400 }}
                    >
                      {exp.org}
                    </h3>
                    <p className="label-caps text-[#5E503F]" style={{ fontSize: "0.6rem" }}>
                      {exp.orgMeta}
                    </p>
                  </div>

                  {/* Roles */}
                  <div className="space-y-8">
                    {exp.roles.map((role, roleIdx) => (
                      <div
                        key={roleIdx}
                        className="pl-5"
                        style={{ borderLeft: "1px solid rgba(73,17,28,0.3)" }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                          <p
                            className="text-[#F2F4F3] font-light"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
                          >
                            {role.title}
                          </p>
                          <p className="label-caps text-[#A9927D]" style={{ fontSize: "0.58rem" }}>
                            {role.period}
                          </p>
                        </div>
                        <p
                          className="text-[#A9927D] leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.65 }}
                        >
                          {role.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Separator (not after last item) */}
                  {expIdx < EXPERIENCES.length - 1 && (
                    <div
                      className="mt-14"
                      style={{ borderTop: "1px solid rgba(94,80,63,0.15)" }}
                    />
                  )}
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
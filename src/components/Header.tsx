import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";

/* ─── Nav links ─────────────────────────────── */
const NAV_LINKS = [
  { id: "about",      label: "About"      },
  { id: "experience", label: "Work"       },
  { id: "contact",    label: "Connect"    },
];

/* ─── Hero video section ─────────────────────── */
const VideoArea = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement | null;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-14 mb-4">
      {/* Aspect-ratio container */}
      <div className="relative w-full aspect-video bg-[#0d0c0b] border border-[#5E503F]/25 overflow-hidden group cursor-pointer"
           onClick={handlePlay}
           id="video-container"
           aria-label="Play video testimonial"
           role="button"
           tabIndex={0}
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handlePlay(); }}
      >
        {/* The actual video — replace src with your .mp4 path */}
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          src=""
          playsInline
          loop
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Play / Pause overlay */}
        <AnimatePresence>
          {!playing && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0908]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Burgundy play ring */}
              <motion.div
                className="flex items-center justify-center w-16 h-16 rounded-full border border-[#49111C] mb-5"
                whileHover={{ borderColor: "#F2F4F3", scale: 1.06 }}
                transition={{ duration: 0.2 }}
              >
                <Play
                  className="h-5 w-5 ml-0.5 text-[#49111C]"
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* Upload hint */}
              <p className="label-caps text-[#A9927D] mb-1">
                Video Testimonial
              </p>
              <p className="text-[#5E503F] text-[11px] font-light tracking-wide">
                Replace src="" in Header.tsx with your video path
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thin accent edge — top */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#49111C]/40" />
      </div>
    </div>
  );
};

/* ─── Header (Nav + Hero) ────────────────────── */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="relative flex flex-col" style={{ backgroundColor: "#0A0908" }}>

      {/* ── Sticky Nav ──────────────────────── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          backgroundColor: "rgba(10, 9, 8, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(94, 80, 63, 0.18)",
        }}
      >
        {/* Name mark */}
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="label-caps text-[#F2F4F3] cursor-default tracking-[0.18em]"
        >
          Atharva Naik
        </motion.span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.07 }}
              onClick={() => scrollTo(link.id)}
              className="label-caps text-[#A9927D] hover:text-[#F2F4F3] transition-colors duration-200"
            >
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#A9927D] hover:text-[#F2F4F3] transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#0A0908]/75 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 h-full w-64 z-50 md:hidden flex flex-col pt-20 px-8"
              style={{ backgroundColor: "#0A0908", borderLeft: "1px solid rgba(94,80,63,0.25)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.id)}
                  className="label-caps text-[#A9927D] hover:text-[#F2F4F3] text-left py-4 transition-colors border-b border-[#5E503F]/20 last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Hero ────────────────────────────── */}
      <div
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-16"
        style={{ backgroundColor: "#0A0908" }}
      >
        <div className="w-full max-w-4xl mx-auto text-center">

          {/* Pre-title label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="label-caps text-[#A9927D] mb-6"
          >
            Portfolio
          </motion.p>

          {/* Display heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
            className="font-editorial text-[#F2F4F3] mb-5"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", fontWeight: 300, letterSpacing: "-0.025em" }}
          >
            Atharva Naik
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[#A9927D] font-light text-base md:text-lg mb-14 tracking-wide"
          >
            AI / ML Student&nbsp;&nbsp;·&nbsp;&nbsp;Event Lead&nbsp;&nbsp;·&nbsp;&nbsp;Curious Builder
          </motion.p>

          {/* Video area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <VideoArea />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <button
              onClick={() => scrollTo("experience")}
              className="label-caps text-[#F2F4F3] hover:text-[#A9927D] transition-colors duration-200 flex items-center gap-2"
            >
              View Work
              <span className="text-[#49111C]">→</span>
            </button>

            <span className="text-[#5E503F]/40">|</span>

            <button
              onClick={() => scrollTo("contact")}
              className="label-caps text-[#F2F4F3] px-5 py-2.5 transition-colors duration-200 hover:bg-[#49111C]/70"
              style={{
                border: "1px solid #49111C",
                letterSpacing: "0.18em",
              }}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
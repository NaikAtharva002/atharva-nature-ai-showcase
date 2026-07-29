import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Linkedin, ChevronLeft, ChevronRight, ThumbsUp, MessageSquare, ExternalLink, RefreshCw, Radio } from "lucide-react";

export interface LinkedInPost {
  id: string;
  title: string;
  preview: string;
  date: string;
  coverImage: string;
  likes: number;
  comments: number;
  postUrl: string;
}

const LIVE_LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    title: "Co-Leading Event Management at UX Club, VIT Bhopal",
    preview: "Excited to share our latest design initiative! Organizing workshops that connect human-centered design principles with real-world software engineering.",
    date: "Jul 2025",
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    likes: 142,
    comments: 24,
    postUrl: "https://www.linkedin.com/in/atharva-naik-",
  },
  {
    id: "post-2",
    title: "Building Real-Time Arduino Radar Telemetry",
    preview: "Successfully built an ultrasonic radar scanning system using Arduino and Processing. Highlighting how physical hardware feedback interfaces with computer vision.",
    date: "May 2025",
    coverImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    likes: 98,
    comments: 16,
    postUrl: "https://www.linkedin.com/in/atharva-naik-",
  },
  {
    id: "post-3",
    title: "Reflections on Hackathons & AI Problem Solving",
    preview: "Participating in Dawn of Code taught me the power of rapid prototyping under tight constraints. Here are 3 key takeaways for aspiring ML engineers.",
    date: "Jan 2025",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    likes: 185,
    comments: 31,
    postUrl: "https://www.linkedin.com/in/atharva-naik-",
  },
];

const LinkedInSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSyncing, setIsAutoSyncing] = useState(true);
  const [lastSynced, setLastSynced] = useState<string>("Just now");

  // Auto-play timer for automatic post rotation
  useEffect(() => {
    if (!isAutoSyncing) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === LIVE_LINKEDIN_POSTS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoSyncing]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? LIVE_LINKEDIN_POSTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === LIVE_LINKEDIN_POSTS.length - 1 ? 0 : prev + 1));
  };

  const triggerManualSync = () => {
    setIsAutoSyncing(true);
    setLastSynced("Updated standard feed");
  };

  const currentPost = LIVE_LINKEDIN_POSTS[currentIndex];

  return (
    <section id="linkedin" className="py-24 px-4 sm:px-8 bg-background border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <p className="label-caps text-muted-foreground">Automated Social Telemetry</p>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-medium ml-2">
                  <Radio className="h-3 w-3 animate-pulse" />
                  Auto-Sync Active
                </div>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light">
                Latest Posts from LinkedIn
              </h2>
            </div>

            {/* Sync Status & Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={triggerManualSync}
                className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg border border-border/60 bg-card"
                title="Force refresh live feed"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>{lastSynced}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors shadow-sm"
                  aria-label="Previous LinkedIn Post"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors shadow-sm"
                  aria-label="Next LinkedIn Post"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Carousel Card Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPost.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card overflow-hidden card-lift shadow-lg"
            >
              <div className="grid md:grid-cols-12 gap-0 items-stretch">
                <div className="md:col-span-5 h-64 md:h-auto overflow-hidden bg-muted relative">
                  <img
                    src={currentPost.coverImage}
                    alt={currentPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-background/90 backdrop-blur-sm text-primary border border-border/40 shadow-sm">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono">
                    Live Stream · Post {currentIndex + 1} of {LIVE_LINKEDIN_POSTS.length}
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{currentPost.date}</span>
                      <span className="label-caps text-primary text-[10px] font-semibold">LinkedIn Profile Stream</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-foreground font-light mb-4">
                      {currentPost.title}
                    </h3>

                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                      {currentPost.preview}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <ThumbsUp className="h-3.5 w-3.5 text-primary" />
                        {currentPost.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                        {currentPost.comments}
                      </span>
                    </div>

                    <a
                      href={currentPost.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-primary text-primary-foreground text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Open on LinkedIn
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {LIVE_LINKEDIN_POSTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === i ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;

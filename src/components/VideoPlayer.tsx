import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = ({ src = "", poster, title = "Testimonial Video" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-2 sm:px-0">
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden glass-panel border border-border/40 shadow-2xl group cursor-pointer"
        onClick={togglePlay}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        role="button"
        tabIndex={0}
        aria-label={`Play or pause ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePlay();
          }
        }}
      >
        {/* HTML5 Video element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Ambient background glow behind video */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#49111C]/20 via-[#A9927D]/10 to-[#5E503F]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {/* Play Overlay when Paused */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm z-20"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl border border-primary-foreground/20 mb-3"
              >
                <Play className="h-7 w-7 sm:h-9 sm:w-9 ml-1 fill-current text-white" />
              </motion.div>
              <p className="label-caps text-foreground font-medium mb-1 tracking-wider">
                Watch Testimonial
              </p>
              <p className="text-xs text-muted-foreground font-light">
                {src ? "Click to play video" : "Upload your video to public/ to display here"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Controls Bar */}
        <AnimatePresence>
          {(showControls || !isPlaying) && isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={togglePlay}
                className="text-white hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoPlayer;

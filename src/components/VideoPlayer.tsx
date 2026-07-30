import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  youtubeUrl?: string;
  youtubeId?: string;
  src?: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = ({
  youtubeUrl = "https://youtu.be/r40dXJqUXX8",
  youtubeId = "r40dXJqUXX8",
  poster = "https://img.youtube.com/vi/r40dXJqUXX8/maxresdefault.jpg",
  title = "Atharva Naik - Video Showcase",
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube ID if URL provided
  const extractId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : youtubeId;
  };

  const activeYoutubeId = youtubeUrl ? extractId(youtubeUrl) : youtubeId;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-2 sm:px-0">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-panel border border-border/40 shadow-2xl group">
        
        {/* Ambient Glow Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {isPlaying ? (
          /* Live YouTube iFrame Embed */
          <iframe
            className="w-full h-full object-cover rounded-2xl"
            src={`https://www.youtube-nocookie.com/embed/${activeYoutubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          /* Interactive Thumbnail & Play Overlay */
          <div
            className="relative w-full h-full cursor-pointer flex flex-col items-center justify-center bg-black overflow-hidden"
            onClick={() => setIsPlaying(true)}
            role="button"
            tabIndex={0}
            aria-label={`Play ${title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsPlaying(true);
              }
            }}
          >
            {/* High Quality Video Poster Thumbnail */}
            <img
              src={poster}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                // Fallback to HQ thumbnail if maxres is not available
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeYoutubeId}/hqdefault.jpg`;
              }}
            />

            {/* Dark Gradient Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

            {/* Play Button Badge */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl border border-white/20 mb-4"
            >
              <Play className="h-7 w-7 sm:h-9 sm:w-9 ml-1 fill-current text-white" />
            </motion.div>

            <p className="relative z-10 label-caps text-white font-medium text-xs sm:text-sm tracking-widest mb-1 drop-shadow-md">
              Watch Showcase Video
            </p>
            <p className="relative z-10 text-[11px] text-white/70 font-light drop-shadow">
              Click to play YouTube Video
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

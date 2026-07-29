import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Github, GitCommit, GitFork, Star, Users, BookOpen, ExternalLink } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

const GITHUB_STATS = {
  repositories: 18,
  followers: 42,
  contributionsThisYear: 384,
  username: "NaikAtharva002",
  profileUrl: "https://github.com/NaikAtharva002",
};

const RECENT_REPOS: Repository[] = [
  {
    name: "atharva-nature-ai-showcase",
    description: "Minimalist, editorial personal portfolio and AI showcase web application built with React & Vite.",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    url: "https://github.com/NaikAtharva002/atharva-nature-ai-showcase",
  },
  {
    name: "arduino-radar-telemetry",
    description: "Arduino ultrasonic radar scanning system with Processing GUI visualizer.",
    language: "C++ / Processing",
    stars: 8,
    forks: 2,
    url: "https://github.com/NaikAtharva002",
  },
  {
    name: "smart-distance-detector",
    description: "Microcontroller automation system with distance threshold actuation.",
    language: "C++",
    stars: 5,
    forks: 1,
    url: "https://github.com/NaikAtharva002",
  },
];

const GitHubActivity = () => {
  // Generate a mock contribution heat grid (52 weeks x 7 days)
  const weeks = Array.from({ length: 36 });

  return (
    <section id="github" className="py-24 px-4 sm:px-8 bg-muted/20 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimation>
          <div className="flex items-center gap-2 mb-3">
            <Github className="h-4 w-4 text-primary" />
            <p className="label-caps text-muted-foreground">Open Source Activity</p>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl text-foreground font-light mb-12">
            GitHub &amp; Code Telemetry
          </h2>
        </ScrollAnimation>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <ScrollAnimation delay={0.1}>
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift text-center">
              <BookOpen className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-editorial font-medium text-foreground">{GITHUB_STATS.repositories}</p>
              <p className="text-[11px] label-caps text-muted-foreground">Repositories</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.15}>
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift text-center">
              <Users className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-editorial font-medium text-foreground">{GITHUB_STATS.followers}</p>
              <p className="text-[11px] label-caps text-muted-foreground">Followers</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift text-center">
              <GitCommit className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-editorial font-medium text-foreground">{GITHUB_STATS.contributionsThisYear}</p>
              <p className="text-[11px] label-caps text-muted-foreground">Contributions</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.25}>
            <div className="p-5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm card-lift text-center flex flex-col items-center justify-center">
              <a
                href={GITHUB_STATS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium hover:underline"
              >
                View Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Contribution Graph Visualization Container */}
        <ScrollAnimation delay={0.2}>
          <div className="p-6 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm mb-12">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-medium text-foreground">Contribution Heatmap</p>
              <span className="text-[10px] label-caps text-muted-foreground">Last 12 Months</span>
            </div>

            {/* Grid of contribution squares */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[600px] justify-between">
                {weeks.map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, dIdx) => {
                      const level = (wIdx + dIdx) % 5;
                      const bgClasses = [
                        "bg-muted/40",
                        "bg-primary/20",
                        "bg-primary/40",
                        "bg-primary/70",
                        "bg-primary",
                      ];
                      return (
                        <div
                          key={dIdx}
                          className={`w-3 h-3 rounded-sm ${bgClasses[level]} transition-colors hover:scale-125`}
                          title={`Contributions on week ${wIdx + 1}, day ${dIdx + 1}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Recent Repositories Grid */}
        <div className="space-y-4">
          <p className="text-xs label-caps text-muted-foreground">Recent Repositories</p>
          <div className="grid md:grid-cols-3 gap-4">
            {RECENT_REPOS.map((repo, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-xl border border-border/60 bg-card/60 hover:border-primary/40 card-lift transition-all h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h4 className="text-sm font-medium text-foreground truncate">{repo.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-4 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t border-border/20">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;

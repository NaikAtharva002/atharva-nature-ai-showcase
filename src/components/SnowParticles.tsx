import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const SnowParticles = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 30; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
        size: 2 + Math.random() * 4,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 1, 1, 0],
            x: [0, 20, -20, 10, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SnowParticles;

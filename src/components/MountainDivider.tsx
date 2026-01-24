import { motion } from "framer-motion";

interface MountainDividerProps {
  className?: string;
  flip?: boolean;
}

const MountainDivider = ({ className = "", flip = false }: MountainDividerProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
        fill="hsl(var(--primary))"
      >
        <path 
          d="M0,120 L0,80 L100,95 L200,60 L300,85 L400,40 L500,70 L600,20 L700,55 L800,35 L900,65 L1000,25 L1100,50 L1200,30 L1200,120 Z"
          opacity="0.15"
        />
        <path 
          d="M0,120 L0,90 L150,105 L250,75 L350,95 L450,55 L550,80 L650,35 L750,65 L850,45 L950,75 L1050,40 L1150,60 L1200,45 L1200,120 Z"
          opacity="0.08"
        />
      </motion.svg>
    </div>
  );
};

export default MountainDivider;

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const NewtonsCradle = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.25]">
      <div className="relative flex flex-col items-center">
        {/* Top Metallic Support Bar */}
        <div className="w-[450px] h-3 bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 rounded-full shadow-[0_5px_15px_rgba(255,255,255,0.1)] relative z-10" />
        
        {/* The Cradle System */}
        <div className="relative flex justify-center pt-1" style={{ width: '420px' }}>
           {/* 5 Balls */}
           {[0, 1, 2, 3, 4].map((i) => {
             const isFirst = i === 0;
             const isLast = i === 4;
             
             return (
               <motion.div
                 key={i}
                 style={{ transformOrigin: "top center" }}
                 animate={
                   isFirst
                     ? { rotate: [0, 45, 0, 0, 0] }
                     : isLast
                     ? { rotate: [0, 0, 0, -45, 0] }
                     : { rotate: 0 }
                 }
                 transition={{
                   duration: 2.4, // Slowed down from 1.5
                   repeat: Infinity,
                   ease: "easeInOut",
                   times: [0, 0.25, 0.5, 0.75, 1]
                 }}
                 className="relative w-20 flex flex-col items-center h-[40vh] min-h-[300px]"
               >
                 {/* Dual Gradient Strings */}
                 <div className="absolute left-[20%] w-[1.5px] h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-300" />
                 <div className="absolute right-[20%] w-[1.5px] h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-300" />
                 
                 {/* 3D Metallic Ball */}
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 via-gray-500 to-gray-900 shadow-[inset_-8px_-8px_15px_rgba(0,0,0,0.7),inset_8px_8px_15px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,0,0,0.5)] inset-0 absolute -bottom-10 mt-auto" />
               </motion.div>
             )
           })}
        </div>
      </div>
    </div>
  );
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated wave background */}
      <NewtonsCradle />

      {/* Grid pattern overlay for minimal aesthetic */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-block text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">
            Product Designer
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight uppercase"
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
          }}
        >
          DESIGN WITH INTENT.
          <br />
          SOLVE FOR IMPACT.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <div className="text-gray-500 text-xs mb-4">SCROLL TO EXPLORE</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 right-10 text-white/5 text-9xl font-bold select-none hidden lg:block"
      >
        ✦
      </motion.div>
    </div>
  );
}
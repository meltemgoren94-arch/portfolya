import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  detailImages?: string[];
}

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudySection({ caseStudy, index }: CaseStudySectionProps) {
  const navigate = useNavigate();

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.8, 1]);

  return (
    <div id={caseStudy.id} ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-32 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        {/* Image — always left */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-transparent flex items-center justify-center [perspective:1000px] group">
            <motion.div
              style={{
                y: imageY,
                rotateX: rotateX,
                opacity: imageOpacity,
                transformStyle: "preserve-3d"
              }}
              className="w-full h-full relative z-10"
            >
              {/* Special interactive glow for the IsBank/chatbot case */}
              {caseStudy.id === "isbank-case" && (
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              )}

              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                className="w-[60%] h-[60%] mx-auto my-[20%] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:scale-[1.1] hover:-translate-y-4 hover:drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] relative z-10"
              />
            </motion.div>
            
            {/* Animated border for IsBank/chatbot case */}
            {caseStudy.id === "isbank-case" && (
              <div className="absolute inset-4 rounded-2xl border border-blue-500/0 group-hover:border-blue-500/30 transition-colors duration-500 pointer-events-none" />
            )}
            
            <div className="absolute inset-0 pointer-events-none" />
          </div>
        </motion.div>

        {/* Content — always right */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="mb-4">
              <span className="text-xl md:text-2xl font-medium text-white tracking-tight">
                {caseStudy.category}
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-none">
              {caseStudy.title}
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-lg">
              {caseStudy.description}
            </p>

            <div>
              <motion.button
                onClick={() => navigate(`/case-study/${caseStudy.id}`)}
                className="inline-flex items-center gap-4 bg-white text-black pl-8 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold text-sm md:text-base whitespace-nowrap">See more</span>
                <div className="bg-black text-white rounded-full p-2 group-hover:translate-x-1 transition-transform border border-black group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

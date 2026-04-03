import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Users, Target } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: id } })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero — headline left, icon right */}
      <div className="pt-32 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex items-center justify-between gap-12"
        >
          {/* Left — text */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                {caseStudy.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter">
              {caseStudy.title}
            </h1>
          </div>

          {/* Right — small 3D icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex shrink-0 w-52 h-52"
          >
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>

        {/* Description below */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto text-xl text-gray-400 leading-relaxed mt-4"
        >
          {caseStudy.description}
        </motion.p>
      </div>

      {/* Project Details */}
      <div className="px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Calendar className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-white font-semibold mb-2">Timeline</h3>
            <p className="text-gray-400">3 months</p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Users className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-white font-semibold mb-2">Team</h3>
            <p className="text-gray-400">2 Designers, 3 Developers</p>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Target className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-white font-semibold mb-2">Impact</h3>
            <p className="text-gray-400">40% increased engagement</p>
          </div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="px-6 mb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Challenge</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Users were struggling to engage with complex interfaces that didn't provide
              clear feedback or guidance. The existing solution lacked personality and
              failed to create an emotional connection with users.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our goal was to reimagine the user experience from the ground up, focusing
              on intuitive interactions and delightful details that would make the product
              stand out in a crowded market.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Solution</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              We developed a comprehensive design system that prioritized user feedback
              and micro-interactions. Every touchpoint was carefully crafted to provide
              immediate visual and haptic feedback, creating a sense of responsiveness
              and control.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              The new interface combines modern aesthetics with functional simplicity,
              ensuring users can accomplish their goals efficiently while enjoying the
              experience.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 text-gray-400 text-lg">
                <span className="text-orange-500 font-bold">01</span>
                <span>Intelligent micro-interactions that guide users through complex workflows</span>
              </li>
              <li className="flex gap-4 text-gray-400 text-lg">
                <span className="text-orange-500 font-bold">02</span>
                <span>Responsive animations that provide clear feedback for every action</span>
              </li>
              <li className="flex gap-4 text-gray-400 text-lg">
                <span className="text-orange-500 font-bold">03</span>
                <span>Accessibility-first design ensuring inclusive experience for all users</span>
              </li>
              <li className="flex gap-4 text-gray-400 text-lg">
                <span className="text-orange-500 font-bold">04</span>
                <span>Scalable design system that adapts across multiple platforms and devices</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-xl border border-orange-500/20">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-400">Increase in user engagement</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-xl border border-blue-500/20">
                <div className="text-4xl font-bold text-white mb-2">25%</div>
                <div className="text-gray-400">Reduction in support tickets</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-xl border border-purple-500/20">
                <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-gray-400">User satisfaction rating</div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Detail Gallery — full-page vertical panels */}
      {caseStudy.detailImages && caseStudy.detailImages.length > 0 && (
        <div>
          {caseStudy.detailImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="w-full"
              style={{ minHeight: "100vh" }}
            >
              <ImageWithFallback
                src={img}
                alt={`${caseStudy.title} Detail ${idx + 1}`}
                className="w-full h-full object-cover"
                style={{ minHeight: "100vh", display: "block" }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Next Project */}
      <div className="px-6 py-20 border-t border-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Explore More Work
          </h2>
          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: id } })}
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">View All Projects</span>
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

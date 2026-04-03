import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

// Retail Case Images and Video
import retailImg1 from "../../retail-case/section 1 - Onmichannel/1.png";
import retailImg2 from "../../retail-case/section 1 - Onmichannel/2.png";
import retailImg3 from "../../retail-case/section 1 - Onmichannel/3.png";
import retailImg4 from "../../retail-case/section 1 - Onmichannel/4.png";
import researchImg from "../../retail-case/section 1 - Onmichannel/KullaniciGorusmeleri1.jpg";
import retailVideo from "../../retail-case/section 1 - Onmichannel/flo_DGTL_2.mp4";
import mobileVideo from "../../retail-case/section 1 - Onmichannel/toplama_listeme_ekle.mp4";

// Flow pages
import flow1 from "../../retail-case/section 1 - Onmichannel/flow/flow1.png";
import flow2 from "../../retail-case/section 1 - Onmichannel/flow/flow2.png";
import flow3 from "../../retail-case/section 1 - Onmichannel/flow/flow3.png";
import flow4 from "../../retail-case/section 1 - Onmichannel/flow/flow4.png";

export function RetailDetailPage() {
  const navigate = useNavigate();
  // We use ecommerce-platform as the internal ID mapping to this page in routes
  const caseStudy = caseStudies.find((cs) => cs.id === "ecommerce-platform");

  const [currentSlide, setCurrentSlide] = useState(0);
  const phoneSlides = [
    { type: "video", src: mobileVideo },
    { type: "image", src: retailImg1 },
    { type: "image", src: retailImg2 },
    { type: "image", src: retailImg3 },
    { type: "image", src: retailImg4 },
  ];

  const [flowSlideIndex, setFlowSlideIndex] = useState(0);
  const flowSlides = [
    { img: flow1, title: "Operational Dashboard", desc: "Real-time metrics and immediate access to critical store workflows." },
    { img: flow2, title: "Order Grouping", desc: "Organizing incoming omni-orders into smart collection lists for faster picking." },
    { img: flow3, title: "Collection Tracking", desc: "Live progress bars and guided paths to locate items efficiently across the shop floor." },
    { img: flow4, title: "Fulfillment Details", desc: "Detailed item specs, quality control checkboxes, and automated tracking." }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: "ecommerce-platform" } })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex items-center justify-between gap-12"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                {caseStudy?.category || "Sr Product Designer"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-6">
              The Power of Employee Experience (EX): <br/>Retail Digitalization
            </h1>
          </div>
          {caseStudy?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex shrink-0 w-52 h-52"
            >
              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Overview Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto text-xl text-gray-400 leading-relaxed mt-4"
        >
          In the fast-paced retail sector, intelligent digitalization is crucial for both operational efficiency and customer satisfaction. This case study explores end-to-end user experiences designed for major retail corporations, combining complex supply chain workflows with intuitive employee experiences.
        </motion.p>
      </div>

      {/* SECTION 1: Two-Column Strategy & Features + Mobile Slider */}
      <section className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] text-blue-500 uppercase mb-4 block">Project 01 — FLO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Store Personnel App for Omnichannel - FLO Digital</h2>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-6">
            I designed a high-tech digital assistant to empower store personnel by simplifying complex retail workflows into a single mobile interface. The goal was to transform traditional staff into "Omni-Personnel" capable of managing the entire store ecosystem from their palm.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column (Text & Features) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            {/* Unified Hub */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-blue-500 font-bold text-xl">01</span>
                <h2 className="text-3xl font-bold text-white">Unified Operational Hub</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                By centralizing fragmented tools, the app provides a seamless "Smart Layer" for daily tasks:
              </p>
              <div className="space-y-4 text-gray-400 text-lg">
                <p><strong className="text-white">Real-Time Inventory:</strong> Instant "In-Store" and "Omni-Stock" queries via barcode scanning.</p>
                <p><strong className="text-white">In-Store Ordering (ISO):</strong> Enabling staff to place orders for home delivery directly from the floor.</p>
                <p><strong className="text-white">Intelligent OMS:</strong> A dynamic dashboard for tracking "Same Day," "Click & Collect," and "Standard" delivery orders.</p>
              </div>
            </div>

            {/* Frictionless Fulfillment */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-blue-500 font-bold text-xl">02</span>
                <h2 className="text-3xl font-bold text-white">Frictionless Fulfillment & CRM</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                The design focuses on speed and accuracy in high-traffic environments:
              </p>
              <div className="space-y-4 text-gray-400 text-lg">
                <p><strong className="text-white">Guided Packing:</strong> A step-by-step workflow for quality control, automated labeling, and shipment readiness.</p>
                <p><strong className="text-white">On-the-Spot CRM:</strong> Personnel can open and track customer complaints or requests instantly, increasing service mobility.</p>
                <p><strong className="text-white">Smart Notifications:</strong> Real-time push alerts for new orders and urgent tasks to minimize response time.</p>
              </div>
            </div>

            {/* Impact & Results */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Impact & Results</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 font-medium">
                This EX-centered approach significantly optimized store productivity:
              </p>
              <ul className="space-y-3 text-gray-400 text-lg list-disc ml-5">
                <li><strong className="text-blue-400">90% Benefit Rate</strong> achieved in overall operational efficiency.</li>
                <li>Reduced training time through an intuitive "Guide" interface.</li>
                <li>Enhanced customer satisfaction by providing instant, data-driven answers on the sales floor.</li>
              </ul>
            </div>

            {/* Design Strategy & EX=CX (Moved from unreadable overlays) */}
            <div className="grid sm:grid-cols-2 gap-6 pb-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-3 block">Design Strategy</span>
                <p className="text-base text-gray-400 leading-relaxed">The UI was built for professional handheld terminals, prioritizing high-contrast elements and ergonomic touch targets.</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-3 block">EX = CX</span>
                <p className="text-base text-gray-400 leading-relaxed">By focusing on Employee Experience (EX), we indirectly perfected the Customer Experience (CX).</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Mobile Phone Slider) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 w-full flex justify-center"
          >
            {/* Mobile Phone Mockup */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/19.5] bg-gray-100 rounded-[3rem] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-300">
              
              {/* Phone Bezel Base */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-inner group">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-30 flex justify-center items-center shadow-sm">
                  <div className="w-16 h-1 rounded-full bg-gray-800 mt-2" />
                </div>

                {/* Inner Screen Area (Slider) */}
                <div className="absolute inset-0 bg-gray-50 flex overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {phoneSlides[currentSlide].type === "video" ? (
                        <video 
                          src={phoneSlides[currentSlide].src}
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <ImageWithFallback 
                          src={phoneSlides[currentSlide].src} 
                          alt={`Retail app interface ${currentSlide + 1}`} 
                          className="w-full h-full object-cover object-top" 
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Left/Right Controls overlay */}
                <button
                  onClick={() => setCurrentSlide(c => (c - 1 + phoneSlides.length) % phoneSlides.length)}
                  className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-12 bg-black/0 hover:bg-black/10 z-20 flex items-center justify-center transition-colors rounded-r-xl"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-black/50" />
                </button>
                <button
                  onClick={() => setCurrentSlide(c => (c + 1) % phoneSlides.length)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-12 bg-black/0 hover:bg-black/10 z-20 flex items-center justify-center transition-colors rounded-l-xl"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-black/50" />
                </button>

                {/* Swipe Indicator */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full z-30 pointer-events-none text-white shadow-lg animate-bounce">
                  <Hand className="w-4 h-4 pr-0.5" />
                  <span className="text-xs font-semibold tracking-widest uppercase">Swipe</span>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                  {phoneSlides.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-4 bg-black" : "w-1.5 bg-black/30"}`}
                    />
                  ))}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/30 rounded-full z-40 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: Flow Iterations Slider */}
      <section className="px-6 py-24 bg-gray-950 border-t border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-blue-500 uppercase mb-4 block">Interactive Workflows</span>
            <h2 className="text-4xl font-bold text-white mb-4">Task Management Flows</h2>
            <p className="text-gray-400 text-lg">Optimizing high-frequency touchpoints for floor personnel.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* The Image Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={flowSlideIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <ImageWithFallback 
                    src={flowSlides[flowSlideIndex].img} 
                    alt={`Flow visual ${flowSlideIndex + 1}`} 
                    className="w-full h-full object-cover object-top" 
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Overlays for Flow */}
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-100 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setFlowSlideIndex(c => (c - 1 + flowSlides.length) % flowSlides.length)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur transition-all -ml-6"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setFlowSlideIndex(c => (c + 1) % flowSlides.length)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black text-white shadow-xl backdrop-blur transition-all -mr-6"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Step indicator */}
              <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs font-semibold text-white tracking-widest backdrop-blur shadow-lg">
                {flowSlideIndex + 1} / {flowSlides.length}
              </div>
            </div>

            {/* Bottom Target Text Description */}
            <div className="mt-8 text-center bg-gray-900 border border-gray-800 p-6 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-900 border-l border-t border-gray-800 rotate-45" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={flowSlideIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{flowSlides[flowSlideIndex].title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{flowSlides[flowSlideIndex].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: Research & Video Demonstration */}
      <section className="px-6 py-24 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.25em] text-blue-500 uppercase mb-4 block">Validation & Research</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Field Testing & Rapid Prototyping
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our strategy included conducting hands-on user interviews on the shop floor to ensure actual personnel pain points were resolved seamlessly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Research image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl flex items-center justify-center p-4 lg:p-0"
            >
              <ImageWithFallback 
                src={researchImg} 
                alt="User interviews and field testing" 
                className="w-full h-full object-cover lg:max-h-[500px] rounded-xl"
              />
            </motion.div>

            {/* Right: Video implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-xl flex items-center justify-center aspect-video lg:aspect-auto"
            >
              <video 
                className="w-full h-full object-cover lg:max-h-[500px]"
                autoPlay 
                muted 
                loop 
                playsInline
                preload="metadata"
              >
                <source src={retailVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project / Footer */}
      <div className="px-6 py-20 border-t border-gray-900 bg-black">
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
            onClick={() => navigate("/")}
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

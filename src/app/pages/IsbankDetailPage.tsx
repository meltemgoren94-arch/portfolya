import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { caseStudies } from "../data/caseStudies";

// Section 1 Images
import s1Img1 from "../../Isbank-case/Section 1 imgs/dash1.png";
import s1Img2 from "../../Isbank-case/Section 1 imgs/dash1.1.png";
import s1Img3 from "../../Isbank-case/Section 1 imgs/credit detail 2.png";
import s1Img4 from "../../Isbank-case/Section 1 imgs/Widget.png";
import s1Img5 from "../../Isbank-case/Section 1 imgs/maxi.png";
import s1ImgDashboard from "../../Isbank-case/Section 1 imgs/dashboard.png";

// Section 2 Images
import s2Img1 from "../../Isbank-case/Section 2 imgs/Hayatım Dashboard İlerleyen Fazlar.png";
import s2Img2 from "../../Isbank-case/Section 2 imgs/Widget.png";
import s2Img3 from "../../Isbank-case/Section 2 imgs/İşlem Arama.png";
import s2Img4 from "../../Isbank-case/Section 2 imgs/İşlem Arama-1.png";
import s2Img5 from "../../Isbank-case/Section 2 imgs/İşlem Ön Plana Çıkartma Aksiyonları.png";
import s2ImgRight from "../../Isbank-case/Section 2 imgs/hayatim-dikey.png";

// Section 3 Video
import s1VideoDesktop from "../../Isbank-case/Section 1 imgs/kredi_odeme_yolculugu_journeyy.mp4";

export function IsbankDetailPage() {
  const navigate = useNavigate();
  const caseStudy = caseStudies.find((cs) => cs.id === "isbank-case");

  const [s2CurrentSlide, setS2CurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setS2CurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const s1Images = [s1Img1, s1Img2, s1Img3, s1Img4, s1Img5];
  const s2CarouselData = [
    { src: s2Img3, title: "Transaction Search", desc: "A streamlined search interface that helps users quickly locate their past transactions." },
    { src: s2Img5, title: "Promoted Actions", desc: "Smart, context-aware suggestions directly on the dashboard to speed up frequent tasks." },
    { src: s2Img4, title: "Advanced Filtering", desc: "Refined filtering options that allow sorting by date, amount, and category." },
    { src: s2Img1, title: "Future Phases", desc: "A sneak peek at the upcoming features designed to make the daily banking experience even more personalized." },
  ];

  return (
    <div className="bg-black min-h-screen font-sans text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: "isbank-case" } })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero */}
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
                {caseStudy?.category || "UX Design"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tighter">
              Banking and Beyond:<br />Digital Experiences
            </h1>
            <p className="max-w-3xl text-xl text-gray-400 leading-relaxed mt-4">
              {caseStudy?.description}
            </p>
          </div>
          {caseStudy?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex shrink-0 w-64 h-64"
            >
              <ImageWithFallback
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Section 1 */}
      <div className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16 lg:sticky lg:top-32"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-500 font-bold text-xl">01</span>
                <h2 className="text-3xl font-bold text-white">Strategic Dashboard Personalization</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                The core objective was to transform the İşCep homepage into an intent-driven space for loan holders. By analyzing user behavior, we identified that active loan customers require quicker access to their debt status.
              </p>
              <div className="space-y-4 text-gray-400 text-lg">
                <p><strong>Contextual Widgets:</strong> We introduced a dynamic "My Loans" widget on the homepage. This is not a static element; it is suggested only to customers with active loans, ensuring a decluttered and relevant UI.</p>
                <p><strong>Intent-Based Delivery:</strong> Instead of requiring users to navigate through multiple menus, the most critical financial information is brought to the forefront when it is most needed.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-500 font-bold text-xl">02</span>
                <h2 className="text-3xl font-bold text-white">Proactive Debt Management & Financial Health</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Moving beyond simple reminders, we integrated "nudge" mechanics to support the user's financial health and prevent payment delays.
              </p>
              <div className="space-y-4 text-gray-400 text-lg">
                <p><strong>Proactive Delay Prevention:</strong> For users with insufficient balances, the system offers smart alternatives such as Overdraft (Ek Hesap) suggestions, "Pull Funds" from linked accounts at other banks, or the "Bring Money" feature.</p>
                <p><strong>AI-Powered Assistance (Maxi):</strong> As the payment date approaches, the "Pay Loan" button is prioritized within the AI assistant (Maxi).</p>
                <p><strong>Financial Wellness Coaching:</strong> For users with high debt-to-income ratios, we integrated personalized budget management tips and spending habit insights to foster long-term financial stability.</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-500 font-bold text-xl">03</span>
                <h2 className="text-3xl font-bold text-white">Enhanced Menu Experience & Emotional Connection</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                We refined the internal loan menus to move from a "transactional" feel to an "achievable journey," aligning the UI with the user's mental model.
              </p>
              <div className="space-y-4 text-gray-400 text-lg">
                <p><strong>Visualizing Progress:</strong> We added progress bars to visualize paid installments. Seeing the progress bar fill up creates an emotional sense of accomplishment and clarity.</p>
                <p><strong>UI Consistency & Hierarchy:</strong> Research showed that many users still use the general "Payments" menu to pay loans due to ingrained habits. To address this, we synchronized the experience across both the "Payments" and "Loans" menus.</p>
                <p><strong>Microcopy Refinement:</strong> We standardized the Call-to-Action (CTA) from "Pay consumer loan" to "Pay loan debt" to ensure terminology remains consistent, clear, and professional across all touchpoints.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 1 Images Custom Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-16"
          >
            {/* 1st - Mobile Phone Mockup */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/19.5] bg-gray-100 rounded-[3rem] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-300">
                {/* Phone Bezel Base */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-inner group">
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-20 flex justify-center items-center shadow-sm">
                    <div className="w-16 h-1 rounded-full bg-gray-800 mt-2" />
                  </div>

                  {/* Inner Screen Area (Scrollable) */}
                  <div className="absolute inset-0 overflow-y-auto overflow-x-hidden pb-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                    <ImageWithFallback src={s1ImgDashboard} alt="Dashboard Overview" className="w-full h-auto object-cover origin-top" />
                  </div>

                  {/* Scroll Indicator */}
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full z-30 pointer-events-none text-white animate-bounce shadow-lg opacity-90">
                    <ChevronDown className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wide uppercase">Scroll</span>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/30 rounded-full z-20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 2nd - Widget (No Background) */}
            <div className="w-full flex items-center justify-center aspect-[3/4] sm:aspect-[4/5]">
              <ImageWithFallback src={s1Img4} alt="Widget" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            {/* 3rd - Maxi (No Background) */}
            <div className="w-full flex items-center justify-center aspect-[3/4] sm:aspect-[4/5]">
              <ImageWithFallback src={s1Img5} alt="Maxi Chatbot" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>

            {/* 4th - Credit Detail (No Background) */}
            <div className="w-full flex items-center justify-center aspect-[3/4] sm:aspect-[4/5]">
              <ImageWithFallback src={s1Img3} alt="Credit Detail" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Section 1: Desktop Video Journey */}
        <div className="max-w-7xl mx-auto mt-32">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] text-blue-500 uppercase mb-4 block">Desktop Experience</span>
            <h2 className="text-4xl font-bold text-white mb-4">Credit Payment Journey</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">An end-to-end overview of the optimized debt payment workflow.</p>
          </div>
          
          <div className="flex justify-center">
            {/* iMac Hardware Mockup */}
            <div className="w-full max-w-5xl relative drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] pb-12">
              
              {/* iMac Screen Housing (White) */}
              <div className="relative aspect-video bg-gray-50 rounded-[2rem] p-3 sm:p-5 border border-gray-200 shadow-[inset_0_0_0_2px_#fff] z-10 flex flex-col">
                
                {/* Inner Bezel / Screen Display */}
                <div className="relative w-full h-full bg-white overflow-hidden flex flex-col rounded-lg ring-1 ring-gray-300">
                  {/* macOS Menu bar (Light) */}
                  <div className="flex items-center px-4 justify-between bg-gray-100/90 h-6 sm:h-8 shrink-0 relative z-10 border-b border-gray-200 backdrop-blur">
                    <div className="flex space-x-2">
                       <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                       <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                       <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                  </div>
                  {/* Video Content */}
                  <div className="relative flex-1 bg-black">
                    <video 
                      src={s1VideoDesktop}
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Inner Shadow Overlay */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_16px_rgba(0,0,0,0.4)] z-20" />
                  </div>
                </div>

                {/* iMac Bottom Silver Chin */}
                <div className="w-full h-12 sm:h-16 bg-gradient-to-b from-[#f8f9fa] to-[#e5e7eb] -mt-2 rounded-b-[1.5rem] flex items-center justify-center border-t border-gray-200 z-20">
                  {/* Apple Logo Placeholder */}
                   <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gray-300" />
                </div>
              </div>
              
              {/* iMac Desktop Stand */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 sm:w-48 h-20 sm:h-28 bg-gradient-to-b from-[#d1d5db] to-[#9ca3af] rounded-b-xl shadow-2xl z-0" />
              {/* iMac Foot */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-48 sm:w-64 h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-2xl z-0 border-b border-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-6 py-20 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column (Text + Slider) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                İşCep'le Hayatım UX Strategy & Redesign All Hubs
              </h2>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                {["My Car", "My Family", "My Travel", "My Shopping"].map((item, i) => (
                  <span key={i} className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-medium text-sm sm:text-lg">
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-xl text-gray-400 leading-relaxed">
                Designed features, tabs, and widgets for new miniapp partnerships. Created comprehensive partnership miniapp checklists and conducted UX audits before designing all processes end-to-end.
              </p>
            </div>

            <div className="w-full bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden flex flex-col h-[600px] md:h-[700px]">
              {/* Image Area */}
              <div className="relative flex-1 overflow-hidden p-6 md:p-8">
                <motion.div 
                  className="flex w-[400%] h-full"
                  animate={{ x: `-${s2CurrentSlide * 25}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {s2CarouselData.map((item, i) => (
                    <div key={i} className="w-1/4 h-full flex items-center justify-center">
                      <ImageWithFallback src={item.src} alt={item.title} className="w-full h-full object-contain drop-shadow-2xl" />
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Description & Controls Area */}
              <div className="bg-gray-900/80 border-t border-gray-800 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shrink-0">
                <div className="flex-1 text-left line-clamp-2">
                  <h3 className="text-white font-bold text-lg mb-1">{s2CarouselData[s2CurrentSlide].title}</h3>
                  <p className="text-gray-400 text-sm">{s2CarouselData[s2CurrentSlide].desc}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setS2CurrentSlide(prev => (prev === 0 ? 3 : prev - 1))}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2 mx-1">
                    {s2CarouselData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setS2CurrentSlide(i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-500 ${s2CurrentSlide === i ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setS2CurrentSlide(prev => (prev === 3 ? 0 : prev + 1))}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Image) */}
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-20 flex justify-center items-center shadow-sm">
                  <div className="w-16 h-1 rounded-full bg-gray-800 mt-2" />
                </div>

                {/* Inner Screen Area (Scrollable) */}
                <div className="absolute inset-0 overflow-y-auto overflow-x-hidden pb-6 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                  <ImageWithFallback src={s2ImgRight} alt="Hayatım Hubs Overview" className="w-full h-auto object-cover origin-top" />
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full z-30 pointer-events-none text-white animate-bounce shadow-lg opacity-90">
                  <ChevronDown className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Scroll</span>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/30 rounded-full z-20 pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

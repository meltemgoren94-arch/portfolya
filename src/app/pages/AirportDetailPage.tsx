import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";
import icon4Image from "../components/img/3dicon4.png";
import chatbotImg from "../../airport-case/chatbot.png";
import igapassImg from "../../airport-case/igapass.png";
import igapass2Img from "../../airport-case/igapass2.png";
import airportApp1 from "../../airport-case/airport-app1.png";
import airportApp2 from "../../airport-case/airport-app2.png";

export function AirportDetailPage() {
  const navigate = useNavigate();
  const slides = [airportApp1, airportApp2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: "airport-experience" } })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="pt-32 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex items-center justify-between gap-12"
        >
          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Service Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-6">
              Airport experience
            </h1>
          </div>
          {/* Right icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex shrink-0 w-52 h-52"
          >
            <ImageWithFallback
              src={icon4Image}
              alt="Airport 3D icon"
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            />
          </motion.div>
        </motion.div>

        {/* Overview text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto text-xl text-gray-400 leading-relaxed mt-4"
        >
          As one of the world's largest aviation hubs, Istanbul Airport requires more than just a flight tracker — it demands a comprehensive digital companion. I designed this mobile experience to cover the entire "Home-to-Gate" journey, transforming a potentially stressful environment into a seamless, high-end user experience.
        </motion.p>
      </div>

      {/* ── SECTION 1: Home-to-Gate + Indoor Nav ── */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            {/* Left — text (Home-to-Gate + Indoor Nav merged) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs tracking-[0.25em] text-orange-500 uppercase mb-4 block">01 — Core Feature</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tighter">
                The Home-to-Gate<br />Experience
              </h2>
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <div>
                  <p className="text-white font-semibold mb-1">Contextual Flight Tracking</p>
                  <p>Dynamic updates on gate assignments, boarding status, and baggage carousel information delivered via push notifications.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Smart Carpark Management</p>
                  <p>Integrated reservation system and a "Find My Car" feature, ensuring that the transition from vehicle to terminal is frictionless.</p>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-white font-semibold mb-3">Indoor Explore & Navigation</p>
                  <p className="text-gray-400 text-sm mb-4">Navigating 76 million square meters of terminal space was a primary UX challenge.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">🗺  Intuitive Mapping</p>
                  <p>High-fidelity indoor maps with "blue-dot" navigation to guide users to their gate or any point of interest.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">✦  Discovery Layer</p>
                  <p>Categorized directory for food, beverage, and retail — filtered by proximity to the passenger's current location.</p>
                </div>
              </div>

            </motion.div>

            {/* Right — image slider & CTA */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden"
              >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={slides[current]}
                    alt={`Istanbul Airport App — screen ${current + 1}`}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-white w-6" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <button
                onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrent(c => (c + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              </motion.div>

              {/* Discover More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-start"
              >
                <p className="text-gray-500 text-sm">Full case study on Behance</p>
                <motion.a
                  href="https://www.behance.net/gallery/82808269/stanbul-Airport-Mobile-App-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHATBOT full-width ── */}
      <section className="px-6 py-24 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.25em] text-orange-500 uppercase mb-4 block">02 — AI Concierge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tighter">
              Istanbul Airport Chatbot: AI-Powered Concierge
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              UI Design & Interaction Designed to act as a digital assistant for domestic and international travelers, the Chatbot UI focuses on rapid information retrieval in a mobile-first format.
            </p>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <div>
                <p className="text-white font-semibold mb-1">Targeted Assistance</p>
                <p>Provides instant guidance on flight gates, lounge locations, and fast-track zones for domestic and international travelers.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Conversational Flow</p>
                <p>Quick-reply buttons and rich media cards to display shop menus or service details — reducing manual typing in a busy airport setting.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <ImageWithFallback
              src={chatbotImg}
              alt="Airport Chatbot UI"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: İGA Pass ── */}
      <section className="px-6 py-24 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <span className="text-xs tracking-[0.25em] text-orange-500 uppercase mb-4 block">03 — Premium Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tighter">
              İGA Pass: Premium Loyalty & Subscription Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              E-commerce & Subscription UI The redesign of the İGA Pass platform focused on making luxury airport services accessible and easy to purchase.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={igapassImg}
                alt="İGA Pass premium services"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={igapass2Img}
                alt="İGA Pass subscription tiers"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Premium Service Showcase</h3>
              <p className="text-gray-400 leading-relaxed">A visually driven interface for high-value services including Lounge access, Buggy transfers, Fast Track, and Meet & Greet assistance.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Conversion-Optimized Monetization</h3>
              <p className="text-gray-400 leading-relaxed"><strong className="text-white">Instant Bundles:</strong> Designed for one-time travelers seeking immediate comfort.<br/><br/><strong className="text-white">Subscription Models:</strong> A clear, tiered UI for monthly and yearly memberships, targeting frequent flyers and corporate accounts.</p>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

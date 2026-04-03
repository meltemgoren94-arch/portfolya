import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { useLocation } from "react-router";

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isHomePage && (
            <div className="space-y-16 mb-20">
              <div>
                <span className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 block">Sectors</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
                  Fintech, Logistics, Aviation, Retail
                </h2>
              </div>
              
              <div>
                <span className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 block">Approach</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
                  Cross-sector & Human-centered DesignOps
                </h2>
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-6 mb-16">
            <motion.a
              href="https://www.linkedin.com/in/meltemgoren/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-blue-400 transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:meltemgoren94@gmail.com"
              className="inline-flex items-center gap-3 text-white hover:text-purple-400 transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">Email</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-8 mb-16 text-gray-500 font-medium">
             <a href="https://www.behance.net/meltemgoren?locale=tr_TR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
               Behance
             </a>
             <a href="https://dribbble.com/meltemgoren" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
               Dribbble
             </a>
          </div>

          <div className="pt-12 border-t border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>&copy; 2026 Meltem Gören. All rights reserved.</p>
              <p>Designed & Developed with passion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

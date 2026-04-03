import { motion } from "motion/react";

export function BiographySection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Meltem Gören
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Senior Product Designer
          </p>
        </div>

        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            With over 10 years of experience in product design, I have built
            expertise across a rich variety of sectors — from fintech and logistics
            to healthcare, e-commerce, and aviation.
          </p>
          
          <p>
            What sets my work apart is the ability to combine human-centered design
            thinking with deep domain knowledge from these different industries.
            Each sector has shaped how I approach problems, layering perspectives
            to create solutions that are both intuitive and strategically meaningful.
          </p>
          
          <p>
            I believe the most impactful design happens at the intersection of
            disciplines — where the logic of logistics meets the empathy of healthcare,
            or the urgency of fintech fuels the clarity needed in aviation interfaces.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <div>
              <div className="font-medium text-white mb-1">Experience</div>
              <div>10+ Years</div>
            </div>
            <div>
              <div className="font-medium text-white mb-1">Sectors</div>
              <div>Fintech, Logistics, Aviation, Retail</div>
            </div>
            <div>
              <div className="font-medium text-white mb-1">Approach</div>
              <div>Cross-sector & Human-centered</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

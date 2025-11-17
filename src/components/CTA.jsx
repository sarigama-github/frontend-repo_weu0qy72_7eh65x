import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#12171d] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl sm:text-4xl font-semibold"
        >
          Klaar om te starten?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/70 mt-3"
        >
          Vertel ons over je project. We reageren binnen 1 werkdag.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hallo@websitekompas.nl" className="inline-flex items-center justify-center rounded-full bg-[#00C9B1] px-6 py-3 text-[#0f141a] font-medium shadow-lg shadow-teal-500/20 hover:scale-[1.02] transition-transform">Neem contact op</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition-colors">Bekijk diensten</a>
        </div>
      </div>
    </section>
  )
}

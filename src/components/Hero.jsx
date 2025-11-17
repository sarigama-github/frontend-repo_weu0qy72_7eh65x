import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0f141a]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and grain overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f141a]/10 via-[#0f141a]/30 to-[#0f141a]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            We build your digital foundation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Websites, mobile apps & automation for SME growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00C9B1] px-6 py-3 text-[#0f141a] font-medium shadow-lg shadow-teal-500/20 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Vraag een offerte aan
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition-colors"
            >
              Bekijk onze diensten
            </a>
          </motion.div>
        </div>
      </div>

      {/* Reduced motion helper */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          canvas, model-viewer { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  )
}

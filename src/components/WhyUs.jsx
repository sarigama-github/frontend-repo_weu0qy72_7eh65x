import { motion } from 'framer-motion'

const stats = [
  { value: '+ 100', label: 'projecten' },
  { value: '5+', label: 'jaar ervaring' },
  { value: '100%', label: 'responsive' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-[#0f141a] py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Waarom WebsiteKompas</h2>
          <p className="text-white/70 mt-4 max-w-xl">Wij combineren design, techniek en automatisering om voor MKB-bedrijven duurzame digitale resultaten te realiseren.</p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-white">{s.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-wide mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative h-72 sm:h-96 rounded-3xl border border-white/10 bg-gradient-to-tr from-[#00C9B1]/20 to-transparent">
          <div className="absolute inset-0 m-6 rounded-2xl border border-white/10 bg-[#0f141a]/60 backdrop-blur" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#00C9B1]/20 blur-2xl" />
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#00C9B1]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

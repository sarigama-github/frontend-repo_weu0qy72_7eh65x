import { motion } from 'framer-motion'

const projects = [
  { title: 'Retail Platform', tag: 'E-commerce', img: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1400&auto=format&fit=crop' },
  { title: 'SaaS Dashboard', tag: 'Web App', img: 'https://images.unsplash.com/photo-1551281044-8d8e6a53dbbd?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Field Service App', tag: 'Mobile', img: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1400&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#12171d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold">Cases</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Een selectie van recent werk. Focus op impact en schaalbaarheid.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <img src={p.img} alt="" className="h-64 w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f141a] via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-white/70 text-sm">{p.tag}</div>
                <div className="text-white text-xl font-medium">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

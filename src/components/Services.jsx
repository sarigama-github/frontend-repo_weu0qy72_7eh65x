import { Code2, Smartphone, Workflow, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code2,
    title: 'Web Design & Development',
    desc: 'Snelle, conversiegerichte websites en webapps met moderne stacks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'iOS en Android apps met focus op performance en UX.',
  },
  {
    icon: Workflow,
    title: 'Automation & Tools',
    desc: 'Koppelingen, API’s, no-code/low-code en maatwerk automatisering.',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    desc: 'Beveiliging, monitoring, updates en continue optimalisatie.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#12171d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Diensten</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Alles wat je nodig hebt om digitaal te groeien — van strategie tot implementatie.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-white/20"
            >
              <s.icon className="h-8 w-8 text-[#00C9B1]" />
              <h3 className="mt-4 text-white text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00C9B1]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

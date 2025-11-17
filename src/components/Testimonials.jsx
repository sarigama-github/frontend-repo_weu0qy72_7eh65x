import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Snelle oplevering en strak design. Onze conversie steeg meteen.', author: 'Jan, Retail' },
  { quote: 'Een app die ons veldteam écht helpt. Top!', author: 'Sanne, Services' },
  { quote: 'Automatiseringen hebben ons uren per week bespaard.', author: 'Mehmet, Logistics' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0f141a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Wat klanten zeggen</h2>
          <p className="text-white/70 mt-3 max-w-2xl">Echte resultaten voor MKB — betrouwbaar, schaalbaar en mooi.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/80">“{t.quote}”</p>
              <div className="text-white/60 mt-4 text-sm">{t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

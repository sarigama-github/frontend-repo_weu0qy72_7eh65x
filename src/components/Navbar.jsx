import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Diensten' },
    { href: '#why', label: 'Waarom wij' },
    { href: '#work', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-wide">WebsiteKompas</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-[#00C9B1] text-[#0f141a] px-4 py-2 font-medium">Start</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0f141a]/90 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

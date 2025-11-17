import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const links = ['Diensten', 'Portfolio', 'Over ons', 'Blog', 'Contact']
  return (
    <footer className="relative bg-[#0b0f14] py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/80">© {new Date().getFullYear()} WebsiteKompas</div>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <a key={l} href="#" className="text-white/60 hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/60 hover:text-white"><Facebook size={18} /></a>
          <a href="#" className="text-white/60 hover:text-white"><Instagram size={18} /></a>
          <a href="#" className="text-white/60 hover:text-white"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

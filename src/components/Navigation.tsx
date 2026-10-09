import { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

// --- NAVIGATION ITEMS ---
const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="group flex items-center text-white font-display font-extrabold text-xl sm:text-2xl tracking-tight whitespace-nowrap"
        >
          KIRTICK M M
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono tracking-widest text-[#a3a5b6] hover:text-white transition-colors uppercase font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7b2cbf] to-[#f72585] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-pill text-xs py-2 px-4"
            title="Open Kirtick's Resume PDF"
          >
            <Download size={13} className="text-[#f72585]" />
            RESUME
          </a>

          <a href="#contact" className="btn-neon-pill text-xs py-2 px-5">
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="md:hidden bg-[#0c0d14]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono tracking-wider text-[#d0d2e0] hover:text-[#f72585] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={15} />
            </a>
          ))}

          <div className="flex gap-3 pt-3">
            <a
              href="/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-pill flex-1 text-xs py-2.5 text-center justify-center"
            >
              <Download size={13} />
              RESUME
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-neon-pill flex-1 text-xs py-2.5 justify-center"
            >
              CONTACT ME
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CP', href: '#competitiveprogramming' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes glowWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-glow-wave {
          background-size: 200% 200%;
          animation: glowWave 4s ease infinite;
        }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6 sm:pt-5 pointer-events-none">
        <div className="relative mx-auto w-full max-w-6xl min-w-0 transition-all duration-300 pointer-events-auto">
          {/* Animated Glowing Shadow Wrapper */}
          <div
            className={`absolute -inset-[2px] rounded-full transition-all duration-700 animate-glow-wave ${
              isScrolled
                ? 'opacity-75 blur-md'
                : 'opacity-40 blur-sm hover:opacity-60'
            } ${
              isDarkMode
                ? 'bg-gradient-to-r from-[#b5179e] via-[#3a0ca3] to-[#f72585]'
                : 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200'
            }`}
          />

          {/* Main Navigation Glass Pill */}
          <div
            className={`relative flex min-w-0 items-center justify-between gap-2 rounded-full border pl-5 pr-2 sm:pl-8 sm:pr-4 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 dark:bg-[#0a0410]/95 backdrop-blur-xl border-white/40 dark:border-white/10 py-2.5 sm:py-3'
                : 'bg-white dark:bg-[#0c0512] border-transparent py-3 sm:py-4'
            }`}
          >
            {/* Brand */}
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="z-10 min-w-0 shrink text-base font-semibold tracking-wide text-gray-900 dark:text-white whitespace-nowrap sm:pl-2 sm:text-lg"
            >
              Kirtick M M
            </a>

            {/* Desktop Navigation */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-8 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-[11px] font-mono font-medium uppercase tracking-widest text-gray-600 transition-colors hover:text-[#f72585] dark:text-gray-300 dark:hover:text-[#f72585] xl:text-xs"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="z-10 hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                aria-label="Toggle theme"
                type="button"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="flex items-center gap-3">
                <a
                  href="/pdf/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-300 bg-transparent px-4 py-2.5 text-xs font-bold text-gray-800 transition-colors hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5 xl:px-5"
                >
                  <Download size={14} className="text-[#f72585]" />
                  RESUME
                </a>

                <a
                  href="#contact"
                  className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#b5179e] to-[#f72585] px-5 py-2.5 text-xs font-bold text-white transition-shadow hover:shadow-[0_0_20px_rgba(247,37,133,0.5)] xl:px-6"
                >
                  LET'S TALK
                </a>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="z-10 flex shrink-0 items-center gap-1.5 lg:hidden sm:gap-3">
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                aria-label="Toggle theme"
                type="button"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`rounded-full p-2 transition-colors ${
                  mobileMenuOpen
                    ? 'border border-[#f29f05] text-gray-900 dark:text-white'
                    : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                type="button"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              // ADDED pointer-events-auto HERE:
              className="pointer-events-auto absolute left-3 right-3 top-[calc(100%+0.75rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#0c0512] sm:left-6 sm:right-6 sm:p-6 lg:hidden"
            >
              <nav className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-gray-100 py-4 text-[13px] font-mono font-semibold tracking-wider text-gray-800 transition-colors hover:text-[#f72585] dark:border-white/5 dark:text-gray-200 dark:hover:text-[#f72585]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={15} className="shrink-0 opacity-50" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="/pdf/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-transparent px-3 py-3.5 text-center text-sm font-bold text-gray-800 transition-colors hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
                >
                  <Download size={16} className="shrink-0 text-[#f72585]" />
                  DOWNLOAD RESUME
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#b5179e] to-[#f72585] px-3 py-3.5 text-center text-sm font-bold text-white transition-all"
                >
                  LET'S TALK
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

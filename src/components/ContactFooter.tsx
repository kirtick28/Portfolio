import { FileText, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 bg-[#08080c] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Contact Header & Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Left Column: Outlined Brand Mark */}
          <div className="lg:col-span-6">
            <h2 className="text-outline text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight uppercase leading-none">
              KIRTICK
              <br />
              <span className="text-white">TURNER? NO.</span>
            </h2>
            <div className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight mt-1">
              KIRTICK M M
            </div>
            <p className="mt-5 text-sm sm:text-base text-[#9fa2b4] max-w-md leading-relaxed font-normal">
              Available for full-time software engineering roles, high-impact
              web development projects, and technical collaborations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:kirtick.mm@gmail.com"
                className="btn-neon-pill text-xs py-3 px-6 gap-2"
              >
                <Mail size={15} />
                SAY HELLO
              </a>
              <a
                href="/pdf/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-pill text-xs py-3 px-5 gap-2"
              >
                <FileText size={15} />
                RESUME PDF
              </a>
            </div>
          </div>

          {/* Center Column: Social Links matching Reference Image 10 */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#888b9c] font-semibold block mb-2">
              SOCIAL
            </span>
            <ul className="space-y-3 font-mono text-sm text-[#c8cbdb]">
              <li>
                <a
                  href="https://github.com/kirtick28"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kirtick28/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:kirtick.mm@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> kirtick.mm@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Direct Contact Details matching Reference Image 10 */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#888b9c] font-semibold block mb-2">
              CONTACT
            </span>
            <div className="space-y-3 font-mono text-xs sm:text-sm text-[#c8cbdb] leading-relaxed">
              <div className="text-white font-medium flex items-center gap-2">
                <Mail size={13} className="text-[#f72585]" />
                kirtick.mm@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#b5ff39]" />
                +91 9600570881
              </div>
              <div className="flex items-start gap-2 text-[#9fa2b4]">
                <MapPin size={13} className="text-[#3a86ff] shrink-0 mt-1" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            THE ICONIC BAUHAUS / NEO-BRUTALIST GEOMETRIC GLYPH STRIP
            DIRECTLY RECREATING REFERENCE IMAGE 10!
            ============================================================ */}
        <div className="py-14 flex items-center justify-between gap-4 sm:gap-6 overflow-x-auto select-none">
          {/* Shape 1: Purple 4-Petal Organic Star / Clover */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Organic Clover"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 C62 38 62 38 90 50 C62 62 62 62 50 90 C38 62 38 62 10 50 C38 38 38 38 50 10 Z"
                fill="#8a2be2"
                rx="15"
              />
              <circle cx="50" cy="50" r="14" fill="#a855f7" />
            </svg>
          </div>

          {/* Shape 2: Lime Green 4-Circle Dot Matrix */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Dot Matrix"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="32" cy="32" r="18" fill="#b5ff39" />
              <circle cx="68" cy="32" r="18" fill="#b5ff39" />
              <circle cx="32" cy="68" r="18" fill="#b5ff39" />
              <circle cx="68" cy="68" r="18" fill="#b5ff39" />
            </svg>
          </div>

          {/* Shape 3: Pure White Smooth Curved Half-Arch */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Curved Arch"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20 80 A35 35 0 0 1 80 80 L60 80 A15 15 0 0 0 40 80 Z"
                fill="#ffffff"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Shape 4: Vibrant Purple Solid Sphere */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Solid Sphere"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="#9333ea" />
            </svg>
          </div>

          {/* Shape 5: Crisp White Rotated Chevron / Parallelogram */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Lightning Parallelogram"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="20,20 80,20 60,50 80,80 20,80 40,50"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Shape 6: Orange Twin Half-Circle Butterfly Wings */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Orange Wings"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M48 20 A30 30 0 0 0 48 80 Z" fill="#f97316" />
              <path d="M52 20 A30 30 0 0 1 52 80 Z" fill="#f97316" />
            </svg>
          </div>

          {/* Shape 7: White Arrow / Dual Triangle Chevron */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Chevron Stack"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,15 85,50 65,50 50,35 35,50 15,50"
                fill="#ffffff"
              />
              <polygon
                points="50,45 85,80 65,80 50,65 35,80 15,80"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Shape 8: Hot Pink Thick Ring / Donut */}
          <div
            className="glyph-item shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            title="Neon Donut"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="42" fill="#f72585" />
              <circle cx="50" cy="50" r="22" fill="#08080c" />
            </svg>
          </div>
        </div>

        {/* Copyright & Sign-off */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6c6f80] gap-4">
          <div>
            © {new Date().getFullYear()} KIRTICK M M. ALL RIGHTS RESERVED.
          </div>
          <div>ENGINEERED WITH REACT, TYPESCRIPT & MOTION</div>
        </div>
      </div>
    </footer>
  );
}

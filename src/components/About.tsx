import { useRef } from 'react';
import { FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Smooth scroll animations for floating elements
  const starY = useTransform(scrollYProgress, [0, 1], [-25, 40]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [30, -35]);
  const heartY = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const flowerY = useTransform(scrollYProgress, [0, 1], [25, -30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#08080c] overflow-hidden text-center"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Floating 3D Sticker 1: Chrome 3D Star (Top-Left) */}
        <motion.div
          style={{ y: starY }}
          className="absolute -top-12 sm:top-2 -left-4 sm:left-4 z-20 pointer-events-auto sticker-3d-star"
          title="3D Chrome Star"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center animate-float-slow">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-2xl"
            >
              <defs>
                <linearGradient
                  id="chromeGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#d1d5db" />
                  <stop offset="55%" stopColor="#9ca3af" />
                  <stop offset="75%" stopColor="#4b5563" />
                  <stop offset="100%" stopColor="#f3f4f6" />
                </linearGradient>
                <filter
                  id="metalGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path
                d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z"
                fill="url(#chromeGrad)"
                stroke="#ffffff"
                strokeWidth="1.5"
                filter="url(#metalGlow)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Floating 3D Sticker 2: Royal Blue Inflatable Cube (Top-Right) */}
        <motion.div
          style={{ y: cubeY }}
          className="absolute -top-10 sm:top-4 -right-4 sm:right-6 z-20 pointer-events-auto sticker-3d-cube"
          title="3D Blue Inflatable Block"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center animate-float-reverse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="blue3D" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#93c5fd" />
                  <stop offset="30%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
              </defs>
              <rect
                x="15"
                y="15"
                width="70"
                height="70"
                rx="24"
                transform="rotate(15 50 50)"
                fill="url(#blue3D)"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <path
                d="M32 30 Q50 35 68 40"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Floating 3D Sticker 3: Tactile Red Heart (Bottom-Left) */}
        <motion.div
          style={{ y: heartY }}
          className="absolute -bottom-10 sm:bottom-4 -left-3 sm:left-8 z-20 pointer-events-auto sticker-3d-heart"
          title="3D Velvet Heart"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center animate-pulse-subtle">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="heart3D" cx="40%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ff758f" />
                  <stop offset="30%" stopColor="#e63946" />
                  <stop offset="70%" stopColor="#9b2226" />
                  <stop offset="100%" stopColor="#540b0e" />
                </radialGradient>
              </defs>
              <path
                d="M50 85 C20 62 10 40 22 24 C32 10 48 18 50 28 C52 18 68 10 78 24 C90 40 80 62 50 85 Z"
                fill="url(#heart3D)"
                stroke="#ff4d6d"
                strokeWidth="2"
              />
              <ellipse
                cx="34"
                cy="28"
                rx="8"
                ry="4"
                fill="rgba(255,255,255,0.4)"
                transform="rotate(-30 34 28)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Floating 3D Sticker 4: Purple 3D Flower / Daisy (Bottom-Right) */}
        <motion.div
          style={{ y: flowerY }}
          className="absolute -bottom-8 sm:bottom-6 -right-3 sm:right-10 z-20 pointer-events-auto sticker-3d-flower"
          title="3D Purple Daisy"
        >
          <div className="w-22 h-22 sm:w-30 sm:h-30 flex items-center justify-center animate-float-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="60%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#581c87" />
                </radialGradient>
                <radialGradient id="centerYellow" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#854d0e" />
                </radialGradient>
              </defs>
              <g transform="rotate(18 50 50)">
                {/* Petals */}
                <circle cx="50" cy="22" r="14" fill="url(#petalGrad)" />
                <circle cx="78" cy="50" r="14" fill="url(#petalGrad)" />
                <circle cx="50" cy="78" r="14" fill="url(#petalGrad)" />
                <circle cx="22" cy="50" r="14" fill="url(#petalGrad)" />
                <circle cx="70" cy="30" r="14" fill="url(#petalGrad)" />
                <circle cx="70" cy="70" r="14" fill="url(#petalGrad)" />
                <circle cx="30" cy="70" r="14" fill="url(#petalGrad)" />
                <circle cx="30" cy="30" r="14" fill="url(#petalGrad)" />
                {/* Yellow center */}
                <circle
                  cx="50"
                  cy="50"
                  r="16"
                  fill="url(#centerYellow)"
                  stroke="#ca8a04"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Section Heading with Text-Outline-to-Solid Scroll Transition */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-[#f72585] uppercase mb-4 block font-semibold">
            ABOUT ME
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Bio Copy matching Reference Images 3 & 4 layout */}
        <div className="space-y-6 max-w-2xl mx-auto text-[#c5c8d8] text-base sm:text-xl font-normal leading-relaxed px-4">
          <p>
            With over four years of hands-on software development, I specialize
            in full-stack web engineering, distributed backends, and cloud
            observability.
          </p>
          <p>
            I love collaborating with forward-thinking teams to architect clean,
            reliable applications that look incredible and perform effortlessly
            under heavy traffic.
          </p>
          <p className="text-white font-medium">
            Let's create something amazing together!
          </p>
        </div>

        {/* Action Button: Download Resume */}
        <div className="mt-10">
          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-pill text-sm py-3.5 px-9 inline-flex gap-2.5"
          >
            <FileText size={16} />
            VIEW FULL RESUME (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

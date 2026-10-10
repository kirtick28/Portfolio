import { useRef } from 'react';
import { FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

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
        {/* 3D Object 1: Metallic Wireframe Sphere */}
        <motion.div
          style={{ y: starY }}
          className="absolute -top-8 sm:top-4 -left-4 sm:left-8 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotateY: 360, rotateZ: 360 }}
            transition={{
              rotateY: { duration: 12, repeat: Infinity, ease: 'linear' },
              rotateZ: { duration: 24, repeat: Infinity, ease: 'linear' }
            }}
            className="w-16 h-16 sm:w-24 sm:h-24"
            style={{ perspective: 600, transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="aboutMetalSphere">
                  <stop offset="0%" stopColor="#dce3ee" stopOpacity=".12" />
                  <stop offset="80%" stopColor="#64748b" stopOpacity=".04" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity=".12" />
                </radialGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="39"
                fill="url(#aboutMetalSphere)"
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="17"
                ry="39"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1.3"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="39"
                ry="17"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.3"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="39"
                ry="17"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1"
                transform="rotate(55 50 50)"
              />
              <path
                d="M20 24 Q50 8 80 24"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* 3D Object 2: Electric Blue Torus */}
        <motion.div
          style={{ y: cubeY }}
          className="absolute -top-6 sm:top-8 -right-3 sm:right-8 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotate: 360, rotateX: [0, 25, 0] }}
            transition={{
              rotate: { duration: 16, repeat: Infinity, ease: 'linear' },
              rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="w-16 h-16 sm:w-24 sm:h-24"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient
                  id="aboutTorusGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#bfdbfe" />
                  <stop offset="35%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>

              <ellipse
                cx="50"
                cy="50"
                rx="37"
                ry="20"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="15"
                opacity=".45"
                transform="rotate(-28 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="37"
                ry="20"
                fill="none"
                stroke="url(#aboutTorusGradient)"
                strokeWidth="11"
                transform="rotate(-28 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="37"
                ry="20"
                fill="none"
                stroke="#dbeafe"
                strokeWidth="1.5"
                opacity=".75"
                transform="rotate(-28 50 50)"
              />
            </svg>
          </motion.div>
        </motion.div>

        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            Small Things
          </span>
          <h2 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
        </div>

        {/* Bio */}
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

        {/* Resume Button */}
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

        {/* 3D Object 3: Faceted Violet Crystal */}
        <motion.div
          style={{ y: heartY }}
          className="absolute -bottom-6 sm:bottom-10 -left-3 sm:left-10 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotateY: [0, 180, 360], y: [0, -8, 0] }}
            transition={{
              rotateY: { duration: 14, repeat: Infinity, ease: 'linear' },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="w-16 h-16 sm:w-24 sm:h-24"
            style={{ perspective: 600 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient
                  id="aboutCrystalBase"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="35%" stopColor="#a855f7" />
                  <stop offset="70%" stopColor="#6b21a8" />
                  <stop offset="100%" stopColor="#2e1065" />
                </linearGradient>
              </defs>

              <path
                d="M50 8 L84 30 L91 62 L66 89 L34 89 L9 62 L16 30 Z"
                fill="url(#aboutCrystalBase)"
                stroke="#c084fc"
                strokeWidth="1.5"
              />
              <path d="M50 8 L50 48 L16 30 Z" fill="#e9d5ff" opacity=".55" />
              <path d="M50 8 L84 30 L50 48 Z" fill="#c084fc" opacity=".7" />
              <path
                d="M16 30 L50 48 L34 89 L9 62 Z"
                fill="#7e22ce"
                opacity=".65"
              />
              <path
                d="M84 30 L50 48 L66 89 L91 62 Z"
                fill="#581c87"
                opacity=".6"
              />
              <path d="M50 48 L34 89 L66 89 Z" fill="#a855f7" opacity=".65" />
              <path
                d="M50 8 L50 48 L66 89"
                fill="none"
                stroke="#f3e8ff"
                strokeWidth="1"
                opacity=".6"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* 3D Object 4: Silver Geometric Prism */}
        <motion.div
          style={{ y: flowerY }}
          className="absolute -bottom-8 sm:bottom-10 -right-4 sm:right-8 z-20 pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0], y: [0, -9, 0] }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="w-16 h-16 sm:w-24 sm:h-24"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient
                  id="aboutPrismFront"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="45%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>

              <path
                d="M50 8 L86 29 L86 70 L50 92 L14 70 L14 29 Z"
                fill="#1e293b"
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <path d="M50 8 L86 29 L50 49 Z" fill="#e2e8f0" />
              <path d="M50 8 L14 29 L50 49 Z" fill="#94a3b8" />
              <path d="M14 29 L50 49 L50 92 L14 70 Z" fill="#64748b" />
              <path
                d="M86 29 L50 49 L50 92 L86 70 Z"
                fill="url(#aboutPrismFront)"
              />
              <path
                d="M50 8 L50 49 M14 29 L50 49 L86 29 M50 49 L50 92"
                fill="none"
                stroke="#f8fafc"
                strokeWidth="1"
                opacity=".75"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef, type MouseEvent } from 'react';
import { Download, MapPin } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion, useSpring } from 'motion/react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 10);
    mouseY.set(y * -10);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-8 flex items-center overflow-hidden bg-[#08080c]"
    >
      {/* Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#8a2be2]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-[#f72585]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Introduction */}
          <div className="lg:col-span-7 min-w-0 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="title-3d text-[clamp(3.25rem,7.2vw,7rem)] mb-7"
            >
              <span className="block whitespace-nowrap">HI, I'M</span>
              <span className="block whitespace-nowrap text-white drop-shadow-[0_8px_24px_rgba(255,255,255,0.12)]">
                KIRTICK
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[#a4a7bc] text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8"
            >
              A software engineer passionate about crafting bold,
              high-performance web experiences, dependable backend
              architectures, and intelligent systems
              <span className="text-[#ff9b54]"> ⚡</span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5"
            >
              <a href="#contact" className="btn-neon-pill text-sm py-3.5 px-8">
                CONTACT ME
              </a>

              <a
                href="/pdf/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-pill text-sm py-3 px-6 gap-2.5"
              >
                <Download size={15} className="text-[#f72585]" />
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-9 text-xs font-mono text-[#8b8e9f]"
            >
              <a
                href="https://github.com/kirtick28"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={14} />
                GITHUB
              </a>

              <span aria-hidden="true">·</span>

              <a
                href="https://www.linkedin.com/in/kirtick28/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                LINKEDIN
              </a>

              <span aria-hidden="true">·</span>

              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-[#b5ff39]" />
                COIMBATORE, INDIA
              </span>
            </motion.div>
          </div>

          {/* Right: Character and Orbiting Tech Stack */}
          <div className="lg:col-span-5 relative min-w-0 flex items-center justify-center mt-8 lg:mt-0">
            {/* Ambient Glow */}
            <div className="avatar-halo-glow" />

            <motion.div
              style={{
                rotateY: mouseX,
                rotateX: mouseY,
                transformPerspective: 1000
              }}
              className="avatar-stage-wrap relative w-full max-w-[390px] lg:max-w-[440px] aspect-[4/5] flex items-end justify-center"
            >
              {/* Character Backdrop */}
              <div className="absolute left-1/2 top-[7%] -translate-x-1/2 w-[88%] h-[82%] rounded-[50%] bg-gradient-to-br from-[#1b1b24] to-[#101015] border border-white/[0.10] shadow-2xl" />

              {/* Inner Orbit: React, Node.js, MongoDB */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute left-1/2 top-[47%] w-[108%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09] pointer-events-none"
              >
                {/* React */}
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-11 h-11 rounded-full bg-[#101821] border border-[#61dafb]/30 flex items-center justify-center shadow-[0_0_20px_rgba(97,218,251,0.12)]">
                    <i className="devicon-react-original colored text-[24px]" />
                  </div>
                </motion.div>

                {/* Node.js */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-11 h-11 rounded-full bg-[#101810] border border-[#83cd29]/30 flex items-center justify-center shadow-[0_0_20px_rgba(131,205,41,0.12)]">
                    <i className="devicon-nodejs-plain colored text-[24px]" />
                  </div>
                </motion.div>

                {/* MongoDB */}
                <motion.div
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-11 h-11 rounded-full bg-[#101810] border border-[#47a248]/30 flex items-center justify-center shadow-[0_0_20px_rgba(71,162,72,0.12)]">
                    <i className="devicon-mongodb-plain colored text-[24px]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Outer Orbit: C++, Python, PostgreSQL */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute left-1/2 top-[47%] w-[122%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07] pointer-events-none"
              >
                {/* C++ */}
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#101624] border border-[#659ad2]/30 flex items-center justify-center shadow-[0_0_18px_rgba(101,154,210,0.12)]">
                    <i className="devicon-cplusplus-plain colored text-[22px]" />
                  </div>
                </motion.div>

                {/* Python */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#151820] border border-[#ffd343]/30 flex items-center justify-center shadow-[0_0_18px_rgba(255,211,67,0.10)]">
                    <i className="devicon-python-plain colored text-[22px]" />
                  </div>
                </motion.div>

                {/* PostgreSQL */}
                <motion.div
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#101624] border border-[#699eca]/30 flex items-center justify-center shadow-[0_0_18px_rgba(105,158,202,0.12)]">
                    <i className="devicon-postgresql-plain colored text-[22px]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Character Image */}
              <motion.img
                src="/images/character.svg"
                alt="Kirtick's 3D character illustration wearing glasses, a hoodie and headphones"
                draggable={false}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative z-20 w-full h-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

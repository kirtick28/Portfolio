import { useRef } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const sectionRef = useRef(null);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0c0512] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b5179e] opacity-[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#3a0ca3] opacity-[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] z-10">
        {/* Section heading */}
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            To Know More
          </span>
          <h2 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 xl:gap-28">
          {/* Left: Punchy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h2 className="max-w-[760px] text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em]">
              I build systems that thrive <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#b5179e] via-[#7209b7] to-[#4361ee] bg-clip-text text-transparent">
                beneath the surface.
              </span>
            </h2>
          </motion.div>

          {/* Right: Condensed Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:pt-8"
          >
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-[#c4c0cf] sm:text-xl font-light">
                I'm a software engineering student who prefers the command line
                to the canvas. While I appreciate a clean UI, my true interest
                lies in the unseen engines that power it.
              </p>

              <p className="text-lg leading-relaxed text-[#c4c0cf] sm:text-xl font-light">
                It’s not just about making code work—it’s about understanding{' '}
                <em className="text-white not-italic font-bold">why</em> it
                works. From crafting robust APIs to designing resilient backend
                architectures, I focus on the fundamentals that keep
                applications breathing.
              </p>
            </div>

            {/* Resume link */}
            <div className="mt-12">
              <a
                href="/pdf/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:pr-5 border border-white/10 hover:border-[#f72585]/50"
              >
                <FileText size={16} className="text-[#f72585]" />
                <span className="relative z-10">View Full Resume</span>
                <ArrowUpRight
                  size={16}
                  className="ml-1 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 text-[#f72585]"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

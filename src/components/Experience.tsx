import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

const experiences = [
  {
    period: 'JUN 2026 — AUG 2026',
    startDate: '2026-06-01',
    role: 'Software Engineering Intern',
    company: 'PayPal',
    location: 'Chennai, India',
    accent: '#a78bfa',
    description:
      'Engineered multi-level Datadog dashboards and drill-down views using existing service telemetry to monitor real-time operational metrics.',
    impact:
      'Applied custom business metrics across 7 microservices, streamlining live support and enabling instant detection of flow blockages.',
    tags: ['Datadog', 'Telemetry', 'Microservices', 'Metrics']
  },
  {
    period: 'FEB 2026 — APR 2026',
    startDate: '2026-02-01',
    role: 'Backend Developer Intern',
    company: 'Quantum Pulse Technologies',
    location: 'Coimbatore, India',
    accent: '#f472b6',
    description:
      'Programmed secure RESTful APIs and a scalable LMS backend utilizing Node.js and MongoDB with fine-grained role-based access control.',
    impact:
      'Standardized architecture using modular controllers, significantly accelerating subsequent feature delivery cycles.',
    tags: ['Node.js', 'Express', 'MongoDB', 'RBAC']
  }
].sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);

type ExperienceItem = (typeof experiences)[number];

function ExperienceFlowItem({
  exp,
  isLeft
}: {
  exp: ExperienceItem;
  index: number;
  isLeft: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full md:w-[42%] ${isLeft ? 'md:mr-auto md:pr-12 text-right' : 'md:ml-auto md:pl-12 md:mt-48 text-left'} mb-24 md:mb-0`}
    >
      {/* 
        No card, no borders, no dots. 
        Just a very subtle ambient glow behind the text to separate it from the deep background.
      */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 opacity-30 blur-3xl transition-opacity duration-700`}
        style={{
          background: `radial-gradient(circle at ${isLeft ? '100%' : '0%'} 50%, ${exp.accent}33, transparent 70%)`
        }}
      />

      <div className={`flex flex-col ${isLeft ? 'items-end' : 'items-start'}`}>
        {/* Minimal Meta Info */}
        <div
          className={`flex flex-wrap items-center gap-3 mb-4 text-[#8b8e9f] ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <span className="font-mono text-[10px] font-semibold tracking-[0.15em] uppercase text-[#a9aabb]">
            {exp.period}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="text-xs">{exp.location}</span>
        </div>

        {/* Role & Company seamlessly blended */}
        <div className="mb-6">
          <div
            className={`flex items-center gap-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <h3 className="experience-role font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {exp.role}
            </h3>
            <a
              href="#link"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:rotate-45 hover:bg-white/10 hover:text-white"
            >
              <ArrowUpRight size={14} className="text-[#888a9b]" />
            </a>
          </div>
          <p
            className="mt-2 font-mono text-sm tracking-widest uppercase"
            style={{ color: exp.accent }}
          >
            @ {exp.company}
          </p>
        </div>

        {/* Free-flowing Description */}
        <div className={`space-y-6 max-w-md ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
          <p className="text-base leading-relaxed text-[#a0a1b1]">
            {exp.description}
          </p>

          <div
            className={`flex flex-col gap-2 ${isLeft ? 'items-end text-right' : 'items-start text-left'}`}
          >
            <div
              className={`flex items-center gap-2 opacity-80 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <Sparkles size={14} style={{ color: exp.accent }} />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4d4e0]">
                Impact
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#8b8e9f]">
              {exp.impact}
            </p>
          </div>
        </div>

        {/* Floating Tags */}
        <div
          className={`mt-8 flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}
        >
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-0 py-1 font-mono text-[10px] tracking-[0.1em] text-[#6b6d7a] uppercase transition-colors duration-300 hover:text-[#d4d4e0] after:content-['/'] last:after:content-[''] after:ml-2 after:text-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%']
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 0.5,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      className="experience-section relative isolate overflow-hidden border-t py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            The Journey So Far
          </span>
          <h2 className="experience-heading font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
            EXPERIENCE
          </h2>
        </div>

        {/* Winding Timeline Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto py-10"
        >
          {/* Thick, organic river shape acting as the central spine */}
          <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
            <svg
              className="w-full h-[120%] -mt-[10%] opacity-80 mix-blend-screen"
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="silk-flow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0" />
                  <stop offset="20%" stopColor="#a78bfa" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
                  <stop offset="80%" stopColor="#f472b6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
                </linearGradient>
                <filter id="blur-glow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* The wide, translucent "silk" background path */}
              <path
                d="M 100,0 C 160,40 180,70 100,100 C 20,130 40,160 100,200"
                fill="none"
                stroke="url(#silk-flow)"
                strokeWidth="16"
                strokeLinecap="round"
                filter="url(#blur-glow)"
                vectorEffect="non-scaling-stroke"
                className="opacity-30"
              />

              {/* The bright, animated core of the river */}
              <motion.path
                d="M 100,0 C 160,40 180,70 100,100 C 20,130 40,160 100,200"
                fill="none"
                stroke="url(#silk-flow)"
                strokeWidth="4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: reduceMotion ? 1 : pathLength }}
              />
            </svg>
          </div>

          {/* Content wrapping around the river curves */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-0">
            {experiences.map((exp, index) => (
              <ExperienceFlowItem
                key={exp.company}
                exp={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

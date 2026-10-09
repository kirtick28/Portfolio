import { useRef } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  CalendarDays
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react';

const experiences = [
  {
    period: 'JUN 2026 — AUG 2026',
    startDate: '2026-06-01',
    role: 'Software Engineering Intern',
    company: 'PayPal',
    location: 'Chennai, India',
    index: '01',
    accent: '#a78bfa',
    highlights: [
      'Designed centralized Datadog dashboards to monitor service health and observe operational metrics in real time.',
      'Engineered a 4-level drill-down view from heatmaps to host/AZ levels utilizing existing service telemetry.',
      'Applied custom business metrics across 7 microservice repositories to enable instant detection of flow blockages.',
      'Streamlined live support troubleshooting by surfacing critical operational issues directly within Datadog.'
    ],
    tags: ['Datadog', 'Telemetry', 'Microservices', 'Metrics']
  },
  {
    period: 'FEB 2026 — APR 2026',
    startDate: '2026-02-01',
    role: 'Backend Developer Intern',
    company: 'Quantum Pulse Technologies',
    location: 'Coimbatore, India',
    index: '02',
    accent: '#f472b6',
    highlights: [
      'Engineered a scalable LMS backend utilizing Node.js, Express, and MongoDB with fine-grained RBAC.',
      'Programmed secure RESTful APIs for assignment workflows and status tracking across diverse user roles.',
      'Standardized backend architecture using modular controllers, accelerating feature delivery cycles.'
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'RBAC', 'REST APIs']
  }
].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
);

type ExperienceItem = (typeof experiences)[number];

function TimelineItem({ exp, index }: { exp: ExperienceItem; index: number }) {
  const reduceMotion = useReducedMotion();
  const isLeft = index % 2 === 1;

  return (
    <div
      className={`relative grid grid-cols-1 gap-6 md:grid-cols-[1fr_72px_1fr] md:gap-0 ${
        index === experiences.length - 1 ? '' : 'mb-16 sm:mb-24'
      }`}
    >
      {/* Desktop: opposite-side timeline marker */}
      <div
        className={`hidden md:flex ${
          isLeft
            ? 'col-start-1 row-start-1 justify-end pr-10'
            : 'col-start-3 row-start-1 justify-start pl-10'
        }`}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: isLeft ? 24 : -24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="flex items-start gap-3 pt-3"
        >
          <span
            className="font-mono text-xs tracking-[0.18em]"
            style={{ color: exp.accent }}
          >
            {exp.period}
          </span>
          <span
            className="mt-[5px] h-px w-8"
            style={{
              background: `linear-gradient(90deg, ${exp.accent}90, transparent)`
            }}
          />
        </motion.div>
      </div>

      {/* Timeline node */}
      <div className="absolute left-0 top-0 z-20 flex w-8 justify-center md:relative md:col-start-2 md:row-start-1 md:w-auto">
        <motion.div
          initial={reduceMotion ? false : { scale: 0.5, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 16
          }}
          className="relative mt-1 flex h-8 w-8 items-center justify-center rounded-full border bg-[#0a0910]"
          style={{ borderColor: `${exp.accent}70` }}
        >
          <motion.span
            className="absolute inset-[-5px] rounded-full border"
            style={{ borderColor: `${exp.accent}25` }}
            initial={false}
            whileInView={reduceMotion ? undefined : { scale: [0.8, 1.25, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: exp.accent,
              boxShadow: `0 0 15px ${exp.accent}90`
            }}
          />
        </motion.div>
      </div>

      {/* Experience content */}
      <motion.article
        initial={
          reduceMotion ? false : { opacity: 0, y: 34, x: isLeft ? 20 : -20 }
        }
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{
          duration: 0.8,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`group relative min-w-0 pl-12 md:pl-0 ${
          isLeft
            ? 'md:col-start-1 md:row-start-1 md:pr-10'
            : 'md:col-start-3 md:row-start-1 md:pl-10'
        }`}
      >
        {/* Subtle background illumination */}
        <div
          className="pointer-events-none absolute -inset-5 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${exp.accent}0b, transparent 70%)`
          }}
        />

        <div
          className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d13]/90 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.17] group-hover:bg-[#101017] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Fine grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage: 'linear-gradient(135deg, transparent 10%, black 100%)'
            }}
          />

          {/* Watermark index */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-[120px] font-bold leading-none tracking-[-0.1em] opacity-[0.035] transition-all duration-700 group-hover:-translate-y-1 group-hover:opacity-[0.07] sm:text-[150px]"
          >
            {exp.index}
          </span>

          <div className="relative z-10">
            {/* Mobile date */}
            <div className="mb-5 flex items-center gap-2 md:hidden">
              <CalendarDays size={13} style={{ color: exp.accent }} />
              <span
                className="font-mono text-[10px] tracking-[0.13em]"
                style={{ color: exp.accent }}
              >
                {exp.period}
              </span>
            </div>

            {/* Company and role */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <BriefcaseBusiness
                    size={15}
                    strokeWidth={1.6}
                    style={{ color: exp.accent }}
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#858698]">
                    {exp.company}
                  </span>
                </div>

                <h3 className="max-w-md font-display text-2xl font-bold leading-tight tracking-tight text-[#f1f1f5] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                  {exp.role}
                </h3>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] transition-all duration-500 group-hover:rotate-45 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                <ArrowUpRight
                  size={17}
                  className="text-[#888a9b] transition-colors duration-300 group-hover:text-white"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#858698]">
              <MapPin size={13} strokeWidth={1.5} />
              <span>{exp.location}</span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/[0.08]" />

            {/* Work highlights */}
            <ul className="space-y-3.5">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={highlight}
                  initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + i * 0.08,
                    ease: 'easeOut'
                  }}
                  className="flex items-start gap-3 text-sm leading-7 text-[#a0a1b1]"
                >
                  <span
                    className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: exp.accent,
                      boxShadow: `0 0 10px ${exp.accent}45`
                    }}
                  />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            {/* Technology tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.09] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] tracking-wide text-[#a9aabb] transition-all duration-300 group-hover:border-white/[0.14] group-hover:text-[#e1e1eb] sm:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Accent line */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 ease-out group-hover:w-full"
            style={{
              background: `linear-gradient(90deg, ${exp.accent}, transparent 90%)`
            }}
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 65%', 'end 45%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.25
  });

  const lineGlow = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 1],
    [0.2, 0.65, 1, 0.7]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative isolate overflow-hidden bg-[#08080c] py-24 text-white sm:py-32"
    >
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-[20%] h-[500px] w-[500px] rounded-full bg-[#8a2be2]/[0.07] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-[8%] h-[500px] w-[500px] rounded-full bg-[#f72585]/[0.045] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-20 border-b border-white/[0.10] pb-8 sm:mb-28 sm:pb-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#f472b6]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#f472b6]">
              THE JOURNEY SO FAR
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="title-3d text-5xl sm:text-7xl md:text-8xl">
              EXPERIENCE
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#9699ab]">
              A timeline of the teams I've worked with, systems I've helped
              build, and lessons learned along the way.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Base line: mobile left / desktop center */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[15px] top-0 w-px bg-white/[0.09] md:left-1/2 md:-translate-x-1/2"
          />

          {/* Scroll-reactive line */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[15px] top-0 w-px origin-top md:left-1/2 md:-translate-x-1/2"
            style={{
              height: '100%',
              scaleY: reduceMotion ? 1 : scaleY,
              opacity: lineGlow,
              background:
                'linear-gradient(180deg, #a78bfa 0%, #f472b6 55%, #67e8f9 100%)',
              boxShadow: '0 0 12px rgba(167,139,250,0.3)'
            }}
          />

          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* End marker */}
        <div className="mt-16 flex items-center justify-center gap-3 sm:mt-24">
          <span className="h-px w-10 bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#77798a]">
            MORE TO COME
          </span>
          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

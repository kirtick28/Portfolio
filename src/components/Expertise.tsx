import { useRef } from 'react';
import type { MouseEvent } from 'react';
import {
  Activity,
  Code2,
  Database,
  LockKeyhole,
  Server,
  ShieldCheck
} from 'lucide-react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'motion/react';

const capabilities = [
  {
    num: '01',
    eyebrow: 'INTERFACES & INTERACTION',
    title: 'Frontend Engineering',
    accent: '#a78bfa',
    icon: Code2,
    visual: 'frontend',
    desc: 'Building responsive, accessible interfaces with thoughtful interactions and a strong focus on performance.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    num: '02',
    eyebrow: 'SERVICES & DATA',
    title: 'Backend Engineering',
    accent: '#f472b6',
    icon: Server,
    visual: 'backend',
    desc: 'Designing dependable APIs, structured services, role-based access control, and maintainable data layers.',
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
  },
  {
    num: '03',
    eyebrow: 'VISIBILITY & RELIABILITY',
    title: 'Systems & Observability',
    accent: '#67e8f9',
    icon: Activity,
    visual: 'systems',
    desc: 'Building Datadog dashboards, drill-down views, and business metrics to make service health and operational issues easier to understand.',
    tags: ['Datadog', 'Telemetry', 'Metrics', 'Debugging']
  },
  {
    num: '04',
    eyebrow: 'IDENTITY & INFRASTRUCTURE',
    title: 'Security & Delivery',
    accent: '#bef264',
    icon: ShieldCheck,
    visual: 'security',
    desc: 'Implementing authentication flows, secure media handling, automated document generation, and containerized deployments.',
    tags: ['JWT', 'Puppeteer', 'Cloudinary', 'Docker']
  }
];

type Capability = (typeof capabilities)[number];

function CapabilityVisual({ item }: { item: Capability }) {
  const Icon = item.icon;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      aria-hidden="true"
    >
      {/* Accent glow */}
      <div
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-[0.10] blur-[75px] transition-opacity duration-700 group-hover:opacity-25"
        style={{ backgroundColor: item.accent }}
      />

      {/* Frontend visual */}
      {item.visual === 'frontend' && (
        <div className="absolute right-7 top-8 flex h-36 w-36 items-center justify-center sm:right-10 sm:top-7 sm:h-44 sm:w-44">
          <div
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: `${item.accent}35` }}
          />
          <div
            className="absolute inset-4 rounded-full border border-dashed"
            style={{ borderColor: `${item.accent}45` }}
          />
          <div
            className="absolute inset-8 rotate-45 rounded-[28px] border"
            style={{ borderColor: `${item.accent}60` }}
          />

          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-[#15131e]/90 shadow-2xl transition-transform duration-700 group-hover:rotate-[-8deg] group-hover:scale-110"
            style={{ borderColor: `${item.accent}60` }}
          >
            <Icon size={30} strokeWidth={1.4} style={{ color: item.accent }} />
          </div>
        </div>
      )}

      {/* Backend visual */}
      {item.visual === 'backend' && (
        <div className="absolute right-7 top-8 flex h-36 w-36 items-center justify-center sm:right-10 sm:top-7 sm:h-44 sm:w-44">
          <div
            className="absolute h-28 w-28 rotate-45 rounded-[26px] border"
            style={{ borderColor: `${item.accent}25` }}
          />
          <div
            className="absolute h-20 w-20 rotate-45 rounded-2xl border"
            style={{ borderColor: `${item.accent}50` }}
          />

          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-[#1b111b]/90 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-6"
            style={{ borderColor: `${item.accent}60` }}
          >
            <Database
              size={29}
              strokeWidth={1.4}
              style={{ color: item.accent }}
            />
          </div>
        </div>
      )}

      {/* Systems visual */}
      {item.visual === 'systems' && (
        <div className="absolute right-5 top-8 flex h-36 w-40 items-center justify-center sm:right-9 sm:top-7 sm:h-44 sm:w-48">
          <div
            className="absolute inset-x-0 top-1/2 border-t"
            style={{ borderColor: `${item.accent}25` }}
          />
          <div
            className="absolute inset-y-0 left-1/2 border-l"
            style={{ borderColor: `${item.accent}25` }}
          />

          <svg
            viewBox="0 0 180 120"
            className="relative w-full overflow-visible"
          >
            <defs>
              <linearGradient id="expertise-signal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={item.accent} stopOpacity="0.1" />
                <stop offset="50%" stopColor={item.accent} />
                <stop offset="100%" stopColor={item.accent} stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <path
              d="M5 65 H35 L49 65 L62 34 L78 88 L95 51 L109 65 H130 L143 44 L155 65 H175"
              fill="none"
              stroke="url(#expertise-signal)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 group-hover:[stroke-width:3.5]"
            />

            <circle cx="95" cy="51" r="4" fill={item.accent} />
            <circle cx="95" cy="51" r="9" fill={item.accent} opacity=".15" />
          </svg>
        </div>
      )}

      {/* Security visual */}
      {item.visual === 'security' && (
        <div className="absolute right-7 top-8 flex h-36 w-36 items-center justify-center sm:right-10 sm:top-7 sm:h-44 sm:w-44">
          <div
            className="absolute h-32 w-32 rounded-full border border-dashed"
            style={{ borderColor: `${item.accent}30` }}
          />
          <div
            className="absolute h-24 w-24 rounded-full border"
            style={{ borderColor: `${item.accent}45` }}
          />

          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-2xl border bg-[#14190f]/90 shadow-2xl transition-transform duration-700 group-hover:scale-110"
            style={{ borderColor: `${item.accent}60` }}
          >
            <LockKeyhole
              size={28}
              strokeWidth={1.4}
              style={{ color: item.accent }}
            />
          </div>
        </div>
      )}

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(${item.accent} 1px, transparent 1px), linear-gradient(90deg, ${item.accent} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(135deg, transparent 15%, black 100%)'
        }}
      />

      {/* Large background number */}
      <span className="absolute -bottom-12 right-3 select-none font-display text-[180px] font-bold leading-none tracking-[-0.1em] opacity-[0.035] transition-all duration-700 group-hover:translate-y-[-8px] group-hover:opacity-[0.07] sm:text-[220px]">
        {item.num}
      </span>
    </div>
  );
}

function ExpertiseCard({ item, index }: { item: Capability; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Spotlight position in pixels
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 180,
    damping: 24,
    mass: 0.35
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 180,
    damping: 24,
    mass: 0.35
  });

  // Normalized cursor position for the 3D tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothTiltX = useSpring(tiltX, {
    stiffness: 180,
    damping: 22,
    mass: 0.4
  });

  const smoothTiltY = useSpring(tiltY, {
    stiffness: 180,
    damping: 22,
    mass: 0.4
  });

  const rotateX = useTransform(smoothTiltY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothTiltX, [-0.5, 0.5], [-7, 7]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      360px circle at ${smoothX}px ${smoothY}px,
      ${item.accent}18,
      transparent 75%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    pointerX.set(x);
    pointerY.set(y);

    tiltX.set(x / rect.width - 0.5);
    tiltY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);

    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
      className="group relative min-w-0 cursor-default"
    >
      <div
        className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d13] p-6 transition-[border-color,box-shadow,background-color] duration-500 ease-out group-hover:border-white/[0.17] group-hover:bg-[#101017] group-hover:shadow-[0_24px_65px_rgba(0,0,0,0.35)] sm:min-h-[410px] sm:p-8"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <CapabilityVisual item={item} />

        {/* Cursor-following spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: spotlight }}
        />

        {/* Card content */}
        <div
          className="relative z-10 flex h-full flex-col"
          style={{ transform: 'translateZ(18px)' }}
        >
          {/* Top row: Eyebrow and Arrow combined */}
          <div className="flex items-start justify-between">
            <div className="mb-4 text-[10px] font-semibold tracking-[0.17em] text-[#8b8e9f] sm:text-[11px]">
              {item.eyebrow}
            </div>
          </div>

          {/* Reduced max-w to prevent overlapping the visual icon */}
          <h3 className="max-w-[220px] font-display text-2xl font-bold leading-tight tracking-tight text-[#f1f1f5] transition-colors duration-300 group-hover:text-white sm:max-w-[260px] sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-4 max-w-[220px] text-sm leading-7 text-[#9899aa] sm:max-w-[250px] md:max-w-[280px]">
            {item.desc}
          </p>

          {/* Removed mt-auto so the tags sit directly underneath the description */}
          <div className="mt-8 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[9px] tracking-wide text-[#a6a7b5] transition-colors duration-300 group-hover:border-white/[0.13] group-hover:text-[#dedee8] sm:text-[10px]"
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
            background: `linear-gradient(90deg, ${item.accent}, transparent 90%)`
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative isolate overflow-hidden bg-[#08080c] py-24 text-white sm:py-32"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-[18%] h-[480px] w-[480px] rounded-full bg-[#8a2be2]/[0.07] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-[8%] h-[480px] w-[480px] rounded-full bg-[#f72585]/[0.045] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/[0.10] pb-8 sm:mb-16 sm:pb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#f72585]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#f472b6]">
                WHAT I WORK ON
              </span>
            </div>

            <h2 className="title-3d text-5xl sm:text-7xl md:text-8xl">
              EXPERTISE
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#9699ab]">
            The areas where I combine engineering fundamentals, practical
            experience, and attention to detail.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:gap-6">
          {capabilities.map((item, index) => (
            <ExpertiseCard key={item.num} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

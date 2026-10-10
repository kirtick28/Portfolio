import { useRef, type MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion
} from 'motion/react';

const profiles = [
  {
    platform: 'LeetCode',
    username: 'kirtick_28',
    metric: 'Max Contest Rating',
    value: '1895',
    rank: 'Knight',
    accent: '#ffa116',
    iconPath: '/icons/leetcode.svg',
    link: 'https://leetcode.com/u/kirtick_28/',
    graphPath:
      'M 0,180 C 50,170 100,120 150,110 C 200,100 250,50 300,40 C 350,30 380,20 400,10'
  },
  {
    platform: 'Codeforces',
    username: 'kirtick_28',
    metric: 'Max Rating',
    value: '957',
    rank: 'Newbie',
    accent: '#9ca3af',
    iconPath: '/icons/codeforces.svg',
    link: 'https://codeforces.com/profile/kirtick_28',
    graphPath:
      'M 0,150 C 60,180 80,100 140,130 C 200,160 250,80 300,60 C 350,40 380,120 400,90'
  },
  {
    platform: 'CodeChef',
    username: 'kirtick_28',
    metric: 'Highest Rating',
    value: '1440',
    rank: '2★',
    accent: '#4ade80',
    iconPath: '/icons/codechef.svg',
    link: 'https://www.codechef.com/users/kirtick_28',
    graphPath: 'M 0,160 C 80,150 120,100 200,95 C 280,90 320,60 400,50'
  }
] as const;

type CodingProfile = (typeof profiles)[number];

function CodingProfileCard({
  profile,
  index
}: {
  profile: CodingProfile;
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

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
      ${profile.accent}18,
      transparent 75%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
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

  const gradientId = `cp-gradient-${index}`;
  const filterId = `cp-glow-${index}`;

  return (
    <motion.a
      ref={cardRef}
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.platform} profile for @${profile.username}. ${profile.metric}: ${profile.value}. Open in a new tab.`}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="group relative block h-[22rem] min-w-0"
    >
      <div
        className="cp-profile-card relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[var(--cp-card-border)] bg-[var(--cp-card-bg)] p-8 transition-[border-color,box-shadow,background-color] duration-500 ease-out group-hover:border-[var(--cp-card-hover-border)] group-hover:bg-[var(--cp-card-hover-bg)] group-hover:shadow-[var(--cp-card-shadow)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 rounded-[2.5rem]"
          style={{ background: spotlight }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-70"
          style={{ transform: 'translateZ(-10px)' }}
        >
          <svg
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-[70%] w-full translate-y-8 transition-transform duration-1000 ease-out group-hover:translate-y-4"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={profile.accent}
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor={profile.accent}
                  stopOpacity="0"
                />
              </linearGradient>

              <filter id={filterId}>
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={`${profile.graphPath} L 400,200 L 0,200 Z`}
              fill={`url(#${gradientId})`}
            />

            <motion.path
              d={profile.graphPath}
              fill="none"
              stroke={profile.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              filter={`url(#${filterId})`}
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 2,
                delay: reduceMotion ? 0 : index * 0.2 + 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          </svg>
        </div>

        <div
          className="relative z-10 flex flex-col items-start gap-5"
          style={{ transform: 'translateZ(12px)' }}
        >
          <div className="flex w-full items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--cp-icon-border)] bg-[var(--cp-icon-bg)] shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--cp-icon-hover-bg)]">
              <img
                src={profile.iconPath}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--cp-icon-border)] bg-[var(--cp-icon-bg)] text-[var(--cp-muted)] backdrop-blur-md transition-all duration-500 group-hover:border-[var(--cp-card-hover-border)] group-hover:bg-[var(--cp-icon-hover-bg)] group-hover:text-[var(--cp-text)]">
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--cp-text)]">
              {profile.platform}
            </h3>

            <p className="mt-1 font-mono text-xs tracking-widest text-[var(--cp-muted)]">
              @{profile.username}
            </p>
          </div>
        </div>

        <div
          className="relative z-10 mt-auto flex flex-col items-start"
          style={{ transform: 'translateZ(24px)' }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span
              className="font-mono text-xs font-bold uppercase tracking-[0.15em]"
              style={{
                color: profile.accent,
                textShadow: `0 0 15px ${profile.accent}90`
              }}
            >
              {profile.rank}
            </span>
          </div>

          <h4 className="origin-left font-display text-6xl font-black tracking-tighter text-[var(--cp-text)] drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02] md:text-7xl">
            {profile.value}
          </h4>

          <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--cp-muted)]">
            {profile.metric}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-20 h-[2px] w-0 transition-all duration-700 ease-out group-hover:w-full"
          style={{
            background: `linear-gradient(90deg, ${profile.accent}, transparent 90%)`
          }}
        />
      </div>
    </motion.a>
  );
}

export default function CompetitiveProgramming() {
  return (
    <section
      id="competitiveprogramming"
      className="competitive-programming-section relative isolate overflow-hidden border-t border-[var(--cp-section-border)] py-16 text-[var(--cp-text)] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--cp-grid-dot)_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="h-[600px] w-[800px] rounded-full bg-[var(--cp-ambient-glow)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            Algorithm &amp; Data Structures
          </span>

          <h2 className="bg-gradient-to-br from-[var(--cp-heading-start)] to-[var(--cp-heading-end)] bg-clip-text font-display text-5xl font-extrabold tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
            COMPETITIVE PROGRAMMING
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {profiles.map((profile, index) => (
            <CodingProfileCard
              key={profile.platform}
              profile={profile}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

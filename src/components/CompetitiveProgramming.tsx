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
    link: 'https://leetcode.com/u/kirtick_28',
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
];

// Extracted Profile Card to handle per-card 3D physics and cursor spotlight
function CodingProfileCard({
  profile,
  index
}: {
  profile: (typeof profiles)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  // Spotlight position
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

  // 3D Tilt calculation
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

  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
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
        className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-[#0a0a0f] p-8 transition-[border-color,box-shadow,background-color] duration-500 ease-out group-hover:border-white/[0.15] group-hover:bg-[#0d0d14] group-hover:shadow-[0_24px_65px_rgba(0,0,0,0.4)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cursor-following spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] z-0"
          style={{ background: spotlight }}
        />

        {/* 3D Background Graph */}
        <div
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-70"
          style={{ transform: 'translateZ(-10px)' }}
        >
          <svg
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-[70%] translate-y-8 group-hover:translate-y-4 transition-transform duration-1000 ease-out"
          >
            <defs>
              <linearGradient
                id={`bg-grad-${profile.platform}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={profile.accent}
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  stopColor={profile.accent}
                  stopOpacity="0.0"
                />
              </linearGradient>
              <filter id={`glow-${profile.platform}`}>
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={`${profile.graphPath} L 400,200 L 0,200 Z`}
              fill={`url(#bg-grad-${profile.platform})`}
            />
            <motion.path
              d={profile.graphPath}
              fill="none"
              stroke={profile.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              filter={`url(#glow-${profile.platform})`}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: index * 0.2 + 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
            />
          </svg>
        </div>

        {/* Top Section: Branding & Identity */}
        <div
          className="relative z-10 flex flex-col items-start gap-5"
          style={{ transform: 'translateZ(12px)' }}
        >
          <div className="flex w-full items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/[0.06] shadow-xl">
              <img
                src={profile.iconPath}
                alt={`${profile.platform} icon`}
                className="h-8 w-8 object-contain transition-transform duration-500"
              />
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.05] bg-[#050508]/50 backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 text-[#6b6d7a] group-hover:text-white">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#f1f1f5]">
              {profile.platform}
            </h3>
            <p className="mt-1 font-mono text-xs tracking-widest text-[#8b8e9f]">
              @{profile.username}
            </p>
          </div>
        </div>

        {/* Bottom Section: Hero Stats & Rank Badge */}
        <div
          className="relative z-10 flex flex-col items-start mt-auto"
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

          <h4 className="font-display text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02] origin-left">
            {profile.value}
          </h4>

          <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b8e9f]">
            {profile.metric}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 ease-out group-hover:w-full z-20"
          style={{
            background: `linear-gradient(90deg, ${profile.accent}, transparent 90%)`
          }}
        />
      </div>
    </motion.a>
  );
}

export default function CompetitiveProgramming() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="competitiveprogramming"
      className="relative isolate overflow-hidden border-t border-white/[0.09] bg-[#050508] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Deep space ambient grid & glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center opacity-30 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="h-[600px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,#a78bfa0A,transparent_50%)] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            Algorithm & Data Structures
          </span>
          <h2 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
            COMPETITIVE PROGRAMMING
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10"
        >
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

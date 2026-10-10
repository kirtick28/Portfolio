import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion } from 'motion/react';

const ROLES = ['Software Engineer', 'Full Stack Developer'];

const SOCIALS = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/kirtick28'
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/kirtick28/'
  }
];

const TECHNOLOGIES = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'C++'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === role) {
      delay = 1700;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === role) {
        setDeleting(true);
      } else if (deleting && displayText === '') {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          role.substring(0, displayText.length + (deleting ? -1 : 1))
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section
      id="top"
      className="hero-section relative isolate flex min-h-[100svh] flex-col overflow-hidden px-6 pb-0 pt-24 sm:px-10 sm:pb-0 sm:pt-28 lg:px-12 lg:pt-20"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#791c91]/20 blur-[130px] sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[60%] -z-10 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[#c21d69]/10 blur-[120px]"
      />

      {/* Name and introduction */}
      <header className="relative z-20 mx-auto w-full max-w-[1100px] pt-8 text-center sm:pt-10 lg:pt-4">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[clamp(2.5rem,7.2vw,6rem)] font-extrabold leading-[1.08] tracking-[-0.065em] text-theme-primary"
        >
          I'm{' '}
          <span className="bg-gradient-to-r from-[#a855f7] via-[#d946b9] to-[#f72585] bg-clip-text text-transparent">
            Kirtick M M
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 h-7 text-base font-normal tracking-wide text-theme-secondary sm:mt-6 sm:text-lg"
          aria-label={displayText}
        >
          {displayText}
          <span className="ml-0.5 inline-block h-[18px] w-px translate-y-[3px] bg-[#f72585]" />
        </motion.p>
      </header>

      {/* Main composition */}
      <div className="relative z-10 mx-auto mt-8 grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 sm:mt-10 lg:mt-auto lg:flex-1 lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-8 xl:gap-12">
        {/* Left: Socials and introduction */}
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-2 flex flex-col gap-8 sm:gap-10 lg:order-1 lg:gap-12"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-theme-muted">
              Elsewhere
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-theme-body transition-colors duration-300 hover:text-theme-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d946b9]"
                >
                  <Icon
                    size={17}
                    className="text-theme-icon transition-colors group-hover:text-[#e879f9]"
                  />
                  <span>{label}</span>
                  <ArrowUpRight
                    size={13}
                    className="-translate-y-0.5 text-theme-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-[290px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-theme-muted">
              A little about me
            </p>

            <p className="mt-4 text-[15px] leading-[1.9] text-theme-secondary">
              I build for the web, explore backend engineering, and enjoy
              understanding how things work beneath the surface.
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="text-xs tracking-wide text-theme-muted">
              Based in Coimbatore, India
            </p>
          </div>
        </motion.aside>

        {/* Center: Original character */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="relative order-1 mx-auto flex w-full max-w-[310px] items-end justify-center self-end sm:max-w-[390px] lg:order-2 lg:h-full lg:max-w-[480px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[5%] left-1/2 h-[65%] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#9d4edd]/35 via-[#b5179e]/10 to-transparent blur-3xl"
          />

          <img
            src="/images/character2.svg"
            alt="Kirtick's 3D character"
            draggable={false}
            className="relative z-10 block h-auto w-full select-none object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        {/* Right: Technology typography */}
        <motion.aside
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="order-3 flex flex-col gap-8 pb-8 lg:gap-12 lg:pb-10"
        >
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-theme-muted">
              My toolkit
            </p>

            <div className="flex flex-wrap gap-x-2 gap-y-2.5">
              {TECHNOLOGIES.map((tech, index) => (
                <span
                  key={tech}
                  className="text-[15px] font-medium tracking-[-0.02em] text-theme-body transition-colors duration-300 hover:text-[#f0abfc] sm:text-base"
                >
                  {tech}
                  {index !== TECHNOLOGIES.length - 1 && (
                    <span className="ml-2 text-theme-separator">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-[310px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-theme-muted">
              My approach
            </p>

            <p className="mt-4 text-[15px] leading-[1.9] text-theme-secondary">
              Good software is more than code. It's about making thoughtful
              decisions and building things that last.
            </p>
          </div>

          <div className="hidden lg:block">
            <p className="text-xs tracking-wide text-theme-muted">
              Engineering with intention.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

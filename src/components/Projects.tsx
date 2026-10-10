import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      num: '01',
      category: 'FULL-STACK ERP & AUTOMATION',
      client: 'SPARKSTOCK PRO',
      title: 'Inventory ERP & Automated Invoicing System',
      description:
        'A comprehensive MERN-based enterprise resource planning platform enforcing JWT authentication, interactive real-time stock analytics with Chart.js, automated PDF invoice generation via Puppeteer, and Cloudinary media pipelines.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'Chart.js'],
      liveUrl: 'https://spark-stock-pro-inventory-erp.vercel.app/',
      githubUrl: 'https://github.com/kirtick28/SparkStock-Pro-Inventory-ERP',
      image: '/projects/Inventory-Management-System.png',
      previewTheme: 'from-[#1a122e] to-[#0c0d16]',
      accentColor: '#f72585',
      bentoItems: [
        {
          label: 'Live Stock Engine',
          value: 'Real-Time Telemetry',
          sub: 'Dynamic inventory status tracking'
        },
        {
          label: 'Invoicing Engine',
          value: 'Automated Puppeteer',
          sub: 'Instant generated invoice PDFs'
        }
      ]
    },
    {
      num: '02',
      category: 'SECURITY & CREDENTIAL MANAGEMENT',
      client: 'VAULTPASS PLATFORM',
      title: 'High-Security Password & Credential Vault',
      description:
        'Zero-knowledge full-stack credential manager designed with Next.js and Tailwind CSS. Built with bcrypt password hashing, encrypted MongoDB schemas, and an interactive password generator with real-time entropy calculation.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Bcrypt', 'JWT'],
      liveUrl: 'https://password-manager-seven-nu.vercel.app/',
      githubUrl: 'https://github.com/kirtick28/Password-Manager',
      image: '/projects/Credential-Manager.png',
      previewTheme: 'from-[#0e1b2e] to-[#0a0f1b]',
      accentColor: '#3a86ff',
      bentoItems: [
        {
          label: 'Entropy Analysis',
          value: '256-Bit Strength',
          sub: 'Live cryptographic strength feedback'
        },
        {
          label: 'Session Guard',
          value: 'JWT + Bcrypt',
          sub: 'Stateless encrypted authentication'
        }
      ]
    }
  ];

  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.09] bg-[#08080c] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            Selected Work
          </span>
          <h2 className="font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
            PROJECTS
          </h2>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((proj, idx) => {
            const topOffset = 80 + idx * 45;

            return (
              <div
                key={proj.num}
                style={{ top: `${topOffset}px` }}
                className="project-card-sticky rounded-3xl bg-[#11121a] border border-white/15 p-6 sm:p-10 z-10"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-6">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white">
                      {proj.num}
                    </span>
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#8e91a2] uppercase">
                        CATEGORY / CLIENT
                      </div>
                      <div className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
                        {proj.client}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glass-pill text-xs py-2 px-4 gap-1.5"
                    >
                      <Github size={13} />
                      CODE
                    </a>
                    <a
                      href={proj.liveUrl}
                      className="btn-neon-pill text-xs py-2 px-5 gap-1.5"
                    >
                      <span>LIVE PROJECT</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Card Content & Bento Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
                  {/* Left Column: Description & Tags */}
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#f72585] font-semibold">
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#a4a7bc] leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[#d0d3e5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Bento Gallery */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Dominant Main Visual Panel (Handles both Image & Gradient Fallback) */}
                      <div
                        className={`sm:col-span-2 aspect-[16/8] rounded-2xl border border-white/10 relative overflow-hidden group ${
                          proj.image
                            ? 'bg-[#050508]'
                            : `bg-gradient-to-br ${proj.previewTheme} p-6 flex flex-col justify-between`
                        }`}
                      >
                        {proj.image ? (
                          /* IMAGE MODE */
                          <>
                            <img
                              src={proj.image}
                              alt={`${proj.client} interface preview`}
                              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Glassmorphic Window Controls */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 z-10 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                          </>
                        ) : (
                          /* FALLBACK GRADIENT MODE */
                          <>
                            <div
                              className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl opacity-30 pointer-events-none"
                              style={{ backgroundColor: proj.accentColor }}
                            />

                            <div className="flex justify-between items-start z-10 relative">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                              </div>
                              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-white">
                                v1.0 ACTIVE
                              </span>
                            </div>

                            <div className="z-10 mt-6 relative">
                              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1">
                                {proj.client}
                              </div>
                              <p className="text-xs font-mono text-[#a0a3b6]">
                                Architected for high throughput and zero
                                latency.
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Sub Panel 1 */}
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                        <span className="text-[11px] font-mono text-[#898c9f]">
                          {proj.bentoItems[0].label}
                        </span>
                        <div className="mt-4">
                          <div className="font-display font-bold text-lg text-white">
                            {proj.bentoItems[0].value}
                          </div>
                          <div className="text-xs text-[#898c9f] mt-0.5">
                            {proj.bentoItems[0].sub}
                          </div>
                        </div>
                      </div>

                      {/* Sub Panel 2 */}
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                        <span className="text-[11px] font-mono text-[#898c9f]">
                          {proj.bentoItems[1].label}
                        </span>
                        <div className="mt-4">
                          <div className="font-display font-bold text-lg text-white">
                            {proj.bentoItems[1].value}
                          </div>
                          <div className="text-xs text-[#898c9f] mt-0.5">
                            {proj.bentoItems[1].sub}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

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

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section relative border-t py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center justify-center text-center sm:mb-24">
          <span className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
            Selected Work
          </span>

          <h2 className="projects-heading font-display text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl">
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
                className="project-card-sticky project-card z-10 rounded-3xl border p-6 sm:p-10"
              >
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 project-divider">
                  <div className="flex items-center gap-6">
                    <span className="project-number font-display text-4xl font-black sm:text-5xl">
                      {proj.num}
                    </span>

                    <div>
                      <div className="project-muted font-mono text-[10px] uppercase tracking-widest">
                        CATEGORY / CLIENT
                      </div>

                      <div className="project-client font-display text-sm font-bold tracking-wide sm:text-base">
                        {proj.client}
                      </div>
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${proj.client} source code on GitHub`}
                      className="btn-glass-pill gap-1.5 px-4 py-2 text-xs"
                    >
                      <Github size={13} />
                      CODE
                    </a>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${proj.client} project`}
                      className="btn-neon-pill gap-1.5 px-5 py-2 text-xs"
                    >
                      <span>LIVE PROJECT</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="grid grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-12">
                  {/* Description and Tags */}
                  <div className="space-y-4 lg:col-span-5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#f72585]">
                      {proj.category}
                    </span>

                    <h3 className="project-title font-display text-2xl font-bold leading-tight sm:text-3xl">
                      {proj.title}
                    </h3>

                    <p className="project-description text-sm leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="project-tag rounded-full border px-3 py-1 font-mono text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Bento Gallery */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Main Project Preview */}
                      <div
                        className={`group relative aspect-[16/8] overflow-hidden rounded-2xl border border-white/10 sm:col-span-2 ${
                          proj.image
                            ? 'bg-[#050508]'
                            : `flex flex-col justify-between bg-gradient-to-br ${proj.previewTheme} p-6`
                        }`}
                      >
                        {proj.image ? (
                          <>
                            <img
                              src={proj.image}
                              alt={`${proj.client} interface preview`}
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Browser Window Controls */}
                            <div
                              aria-hidden="true"
                              className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md"
                            >
                              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full blur-3xl opacity-30"
                              style={{ backgroundColor: proj.accentColor }}
                            />

                            <div className="relative z-10 flex items-start justify-between">
                              <div
                                aria-hidden="true"
                                className="flex items-center gap-2"
                              >
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                              </div>

                              <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white">
                                v1.0 ACTIVE
                              </span>
                            </div>

                            <div className="relative z-10 mt-6">
                              <div className="mb-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
                                {proj.client}
                              </div>

                              <p className="font-mono text-xs text-[#a0a3b6]">
                                Architected for high throughput and zero
                                latency.
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bento Panel 1 */}
                      <div className="project-bento project-panel-border flex flex-col justify-between rounded-2xl border p-5">
                        <span className="project-muted font-mono text-[11px]">
                          {proj.bentoItems[0].label}
                        </span>

                        <div className="mt-4">
                          <div className="project-client font-display text-lg font-bold">
                            {proj.bentoItems[0].value}
                          </div>

                          <div className="project-muted mt-0.5 text-xs">
                            {proj.bentoItems[0].sub}
                          </div>
                        </div>
                      </div>

                      {/* Bento Panel 2 */}
                      <div className="project-bento project-panel-border flex flex-col justify-between rounded-2xl border p-5">
                        <span className="project-muted font-mono text-[11px]">
                          {proj.bentoItems[1].label}
                        </span>

                        <div className="mt-4">
                          <div className="project-client font-display text-lg font-bold">
                            {proj.bentoItems[1].value}
                          </div>

                          <div className="project-muted mt-0.5 text-xs">
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

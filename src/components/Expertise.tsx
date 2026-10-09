import { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function Expertise() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const capabilities = [
    {
      num: '01',
      title: 'FRONTEND ARCHITECTURE',
      desc: 'Creation of modern, responsive interfaces tailored to user needs. Utilizing React 19, Next.js, and TypeScript with fluid animations, micro-interactions, and accessible web standards.',
      tags: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
      icon: <Layers size={22} className="text-[#8a2be2]" />
    },
    {
      num: '02',
      title: 'BACKEND & RESTFUL APIS',
      desc: 'Engineering robust server-side microservices, fine-grained Role-Based Access Control (RBAC), and high-throughput REST APIs designed for enterprise dependability.',
      tags: ['NODE.JS', 'EXPRESS', 'MONGODB', 'POSTGRESQL'],
      icon: <Cpu size={22} className="text-[#8a2be2]" />
    },
    {
      num: '03',
      title: 'OBSERVABILITY & SYSTEMS',
      desc: 'Designing centralized Datadog dashboards and multi-level drill-down views (from heatmaps to host/AZ levels). Experience instrumenting business metrics across distributed repositories at PayPal.',
      tags: ['DATADOG', 'TELEMETRY', 'METRICS', 'DEBUGGING'],
      icon: <Activity size={22} className="text-[#8a2be2]" />
    },
    {
      num: '04',
      title: 'SECURE AUTH & PIPELINES',
      desc: 'End-to-end credential security, JWT token flows, automated PDF generation engines with Puppeteer, Cloudinary media pipelines, and Docker containerization.',
      tags: ['JWT', 'PUPPETEER', 'DOCKER', 'SECURITY'],
      icon: <ShieldCheck size={22} className="text-[#8a2be2]" />
    }
  ];

  return (
    <section
      id="expertise"
      className="py-28 sm:py-36 bg-[#ececf0] text-[#111218] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header matching Reference Image 5: Giant Embossed "SERVICES" style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#7b2cbf] font-bold block mb-3">
              WHAT I DO BEST
            </span>
            <h2 className="title-3d-light text-6xl sm:text-8xl md:text-9xl tracking-tight">
              EXPERTISE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-sm text-[#5e606e] font-medium leading-relaxed">
            Delivering clean code, resilient systems, and fluid interfaces from
            concept to production.
          </p>
        </div>

        {/* Numbered Row Items matching Reference Image 5 Layout */}
        <div className="divide-y divide-black/10">
          {capabilities.map((item, index) => (
            <div
              key={item.num}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className={`py-10 group cursor-pointer transition-all duration-300 rounded-xl ${
                activeItem === index ? 'px-4 bg-black/[0.02]' : 'hover:px-2'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Number & Icon */}
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#111218]">
                    {item.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-black/5 group-hover:bg-[#7b2cbf]/10 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111218] group-hover:text-[#7b2cbf] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#5e606e] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow & Tags */}
                <div className="lg:col-span-2 flex lg:flex-col items-end justify-between gap-3">
                  <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {item.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#444654]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

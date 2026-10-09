export default function Experience() {
  const experiences = [
    {
      period: 'JUN 2026 — AUG 2026',
      role: 'Software Engineering Intern',
      company: 'PayPal',
      location: 'Chennai, India',
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
      role: 'Backend Developer Intern',
      company: 'Quantum Pulse Technologies',
      location: 'Coimbatore, India',
      highlights: [
        'Engineered a scalable LMS backend utilizing Node.js, Express, and MongoDB with fine-grained RBAC.',
        'Programmed secure RESTful APIs for assignment workflows and status tracking across diverse user roles.',
        'Standardized backend architecture using modular controllers, accelerating feature delivery cycles.'
      ],
      tags: ['Node.js', 'Express', 'MongoDB', 'RBAC', 'REST APIs']
    },
    {
      period: '2023 — 2027',
      role: 'B.E. in Computer Science & Engineering (CGPA: 8.97 / 10)',
      company: 'Sri Eshwar College of Engineering',
      location: 'Coimbatore, India',
      highlights: [
        'Core coursework: Data Structures, Distributed Systems, Database Management, Cloud Computing, Object-Oriented Design.',
        'Actively leading full-stack product development and hackathon projects.'
      ],
      tags: ['Algorithms', 'Systems', 'CS Fundamentals']
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#e5e5ea] text-[#111218] border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7b2cbf] font-bold block mb-2">
            CAREER JOURNEY
          </span>
          <h2 className="title-3d-light text-5xl sm:text-7xl md:text-8xl tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 border-b border-black/5 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#7b2cbf] font-bold tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111218] mt-1">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-[#505260] flex items-center gap-2 mt-0.5">
                    <span>{exp.company}</span>
                    <span>·</span>
                    <span className="text-[#787a8b] font-normal">
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/5 text-[#30323e]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-[#4f5160] leading-relaxed">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7b2cbf] mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

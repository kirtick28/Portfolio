const TECHNOLOGIES = [
  {
    name: 'C',
    icon: 'devicon-c-plain colored',
    url: 'https://en.cppreference.com/w/c'
  },
  {
    name: 'C++',
    icon: 'devicon-cplusplus-plain colored',
    url: 'https://isocpp.org/'
  },
  {
    name: 'Python',
    icon: 'devicon-python-plain colored',
    url: 'https://www.python.org/'
  },
  {
    name: 'Java',
    icon: 'devicon-java-plain colored',
    url: 'https://www.java.com/'
  },
  {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'SQL',
    icon: 'devicon-postgresql-plain colored',
    url: 'https://www.postgresql.org/docs/'
  },
  {
    name: 'React',
    icon: 'devicon-react-original colored',
    url: 'https://react.dev/'
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain colored',
    url: 'https://nodejs.org/'
  },
  {
    name: 'Express.js',
    icon: 'devicon-express-original',
    url: 'https://expressjs.com/'
  },
  {
    name: 'Next.js',
    icon: 'devicon-nextjs-original-wordmark',
    url: 'https://nextjs.org/'
  },
  {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain colored',
    url: 'https://www.mongodb.com/'
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-original colored',
    url: 'https://www.mysql.com/'
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain colored',
    url: 'https://git-scm.com/'
  },
  {
    name: 'GitHub',
    icon: 'devicon-github-original',
    url: 'https://github.com/'
  },
  {
    name: 'Postman',
    icon: 'devicon-postman-plain colored',
    url: 'https://www.postman.com/'
  },
  {
    name: 'VS Code',
    icon: 'devicon-vscode-plain colored',
    url: 'https://code.visualstudio.com/'
  },
  {
    name: 'Vercel',
    icon: 'devicon-vercel-original',
    url: 'https://vercel.com/'
  },
  {
    name: 'Datadog',
    icon: 'devicon-datadog-plain colored',
    url: 'https://www.datadoghq.com/'
  },
  {
    name: 'Data Structures & Algorithms',
    icon: 'devicon-cplusplus-plain colored',
    url: 'https://www.geeksforgeeks.org/data-structures/'
  },
  {
    name: 'REST APIs',
    icon: 'devicon-fastapi-plain colored',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP'
  },
  {
    name: 'OOP',
    icon: 'devicon-java-plain colored',
    url: 'https://docs.oracle.com/javase/tutorial/java/concepts/'
  },
  {
    name: 'DBMS',
    icon: 'devicon-mysql-original colored',
    url: 'https://www.postgresql.org/docs/'
  },
  {
    name: 'Operating Systems',
    icon: 'devicon-linux-plain',
    url: 'https://www.kernel.org/doc/html/latest/'
  },
  {
    name: 'Computer Networks',
    icon: 'devicon-nginx-original',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP'
  }
];

export default function TechMarquee() {
  const marqueeItems = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="relative py-7 bg-[#0b0c13] border-y border-white/10 overflow-hidden select-none">
      {/* Left and Right Fade */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#0b0c13] to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#0b0c13] to-transparent z-10 pointer-events-none" />

      {/* Infinite Logo Marquee */}
      <div className="marquee-track flex w-max items-center gap-8 sm:gap-12">
        {marqueeItems.map((tech, index) => (
          <a
            key={`${tech.name}-${index}`}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn about ${tech.name}`}
            title={tech.name}
            className="group flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] text-[#777b8e] transition-all duration-300 hover:border-[#f72585]/40 hover:bg-white/[0.07] hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(247,37,133,0.10)]"
          >
            <i
              className={`${tech.icon} text-[26px] sm:text-[30px] transition-transform duration-300 group-hover:scale-110`}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

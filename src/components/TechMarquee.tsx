import { useState } from 'react';

type Technology = {
  name: string;
  icon: string;
  url: string;
};

interface TechnologyGroupProps {
  items: Technology[];
  duplicate?: boolean;
}

const TECHNOLOGIES: Technology[] = [
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
    icon: 'devicon-nextjs-original',
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
  }
];

function TechnologyGroup({ items, duplicate = false }: TechnologyGroupProps) {
  return (
    <div
      className="tech-marquee__group"
      aria-hidden={duplicate ? 'true' : undefined}
    >
      {items.map((tech) => (
        <a
          key={tech.name}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          aria-label={duplicate ? undefined : `Learn about ${tech.name}`}
          className="tech-marquee__item"
        >
          <i className={`tech-marquee__icon ${tech.icon}`} aria-hidden="true" />
          <span className="tech-marquee__name">{tech.name}</span>
        </a>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-label="Technologies and tools"
      className="tech-marquee"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="tech-marquee__viewport">
        <div
          className="tech-marquee__track"
          style={{
            animationPlayState: paused ? 'paused' : 'running'
          }}
        >
          <TechnologyGroup items={TECHNOLOGIES} />
          <TechnologyGroup items={TECHNOLOGIES} duplicate />
        </div>
      </div>
    </section>
  );
}

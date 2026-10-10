import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section border-t">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs footer-muted">
            © {new Date().getFullYear()} Kirtick M M
          </p>

          <p className="text-xs footer-muted">Designed & built with care.</p>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 text-xs footer-link transition-colors duration-300"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

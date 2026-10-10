import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.09] bg-[#08080c] text-white">
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#77798a]">
            © {new Date().getFullYear()} Kirtick M M
          </p>

          <p className="text-xs text-[#77798a]">Designed & built with care.</p>

          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-2 text-xs text-[#a9aabb] transition-colors duration-300 hover:text-white"
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

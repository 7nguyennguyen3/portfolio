import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { PROFILE } from "@/app/_global/variables";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <MaxWidthWrapper className="py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-semibold text-white">
                NN
              </span>
              <span className="font-heading font-semibold text-slate-900">
                Nguyen Nguyen
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Accounting student · CPA-track · {PROFILE.location}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/projects" className="hover:text-slate-900">
                Projects
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-1 md:justify-end">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Résumé"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Nguyen Nguyen. Built with Next.js &
          Tailwind CSS.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

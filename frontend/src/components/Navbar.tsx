"use client";
import { cn } from "@/lib/utils";
import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Homepage"
            className="flex items-center gap-2 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
              NN
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-900">
                Nguyen Nguyen
              </span>
              <span className="text-xs text-slate-500">
                Accounting · Business Analytics
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className:
                    "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                })}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <a
              href="/Nguyen_Nguyen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm" }),
                "gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white"
              )}
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <MaxWidthWrapper>
            <div className="flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Nguyen_Nguyen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white mt-2"
                )}
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import { cn } from "@/lib/utils";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ThemeToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("h-9 w-9", className)} aria-hidden />;
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
        className
      )}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-border bg-background/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Homepage"
            className="flex items-center gap-2 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
              NN
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-foreground">
                Nguyen Nguyen
              </span>
              <span className="text-xs text-muted-foreground">
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
                    "text-muted-foreground hover:text-foreground hover:bg-accent",
                })}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-border mx-2" />
            <ThemeToggle />
            <a
              href="/Nguyen_Nguyen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm" }),
                "gap-1.5 bg-brass hover:bg-brass-hover text-white ml-1"
              )}
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-lg text-foreground hover:bg-accent"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <MaxWidthWrapper>
            <div className="flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent rounded-md"
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
                  "gap-1.5 bg-brass hover:bg-brass-hover text-white mt-2"
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

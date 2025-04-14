"use client";
import { cn } from "@/lib/utils";
import { Coffee, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75
    backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            aria-label="Homepage"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-primary hover:bg-accent rounded-full p-3 text-black"
            )}
          >
            <Home className="scale-[180%]" />
          </Link>

          <div className="h-full flex items-center space-x-4 text-black">
            <Link
              href="/projects"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              About
            </Link>

            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
            <Link
              href="/contact"
              className={buttonVariants({
                size: "sm",
                className: "hidden sm:flex items-center gap-1",
              })}
            >
              Contact Me
              <Coffee className="ml-1.5 h-5 w-5" />
            </Link>

            <button onClick={toggleTheme} className="ml-4">
              {resolvedTheme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

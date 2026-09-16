import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Nguyen Nguyen — Accounting & Business Analytics",
  description = "Nguyen Nguyen is an accounting student at California State University, Fullerton (CPA-track, May 2028) with a focus on financial operations, internal controls, and business data analytics.",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons,
  };
}

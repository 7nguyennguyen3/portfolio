"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface ProjectProps {
  title: string;
  technologies: string[];
  description: string;
  href: string;
  link: string;
  images: string[]; // Array of image URLs
}

const Project = ({
  title,
  technologies,
  description,
  href,
  link,
  images,
}: ProjectProps) => {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Scroll to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Scroll to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto mb-20">
      {/* Project Details Section */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-700 dark:bg-slate-500 text-white px-3 py-1 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={href}
            className={cn(buttonVariants(), "w-fit text-center")} // Removed flex-1
          >
            View Project
          </Link>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "w-fit text-center bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-500 hover:to-red-400 text-white"
            )}
          >
            Visit Site
          </a>
        </div>
      </div>

      {/* Embla Carousel Section */}
      <div className="relative lg:w-1/2 min-w-[300px] max-w-[600px] w-[90vw] min-h-[400px] max-h-[500px] h-3/4">
        <div
          className="embla overflow-hidden rounded-lg shadow-lg"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-full max-h-[500px] object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <button
            onClick={scrollPrev}
            className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

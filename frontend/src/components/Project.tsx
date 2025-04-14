"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

interface ProjectProps {
  title: string;
  subtitle?: string;
  technologies: string[];
  description: string;
  href: string;
  link?: string;
  images: string[];
  liveSite: boolean;
}

const Project = ({
  title,
  subtitle,
  technologies,
  description,
  href,
  link,
  images = [],
  liveSite, // Destructure the new prop
}: ProjectProps) => {
  const [topCardIndex, setTopCardIndex] = useState(0);
  const numImages = images.length;

  const showNextImage = useCallback(() => {
    setTopCardIndex((prevIndex) => (prevIndex + 1) % (numImages || 1));
  }, [numImages]);

  const canCycle = numImages > 1;
  const cardsInStack = Math.min(numImages, 3);

  // Calculate indices and image sources (same as before)
  const bottomImageIndex =
    images.length > 0 ? topCardIndex % images.length : -1;
  const topImageIndex =
    images.length > 0 ? (topCardIndex + 1) % images.length : -1;
  const bottomImageSrc =
    bottomImageIndex !== -1 ? images[bottomImageIndex] : "/placeholder.png";
  const topImageSrc =
    topImageIndex !== -1 ? images[topImageIndex] : "/placeholder.png";

  return (
    <Card className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch max-w-6xl mx-auto mb-16 md:mb-24 overflow-hidden shadow-xl border">
      <div className="flex flex-col p-6 md:p-8 lg:p-10 order-2 lg:order-1">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1.5">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="flex-grow flex flex-col gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto pt-6 border-t">
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto gap-2"
            )}
          >
            View Details <Eye size={16} />
          </Link>

          {liveSite &&
            link && ( // Check BOTH conditions now
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto gap-2"
                )}
              >
                Visit Live Site <ExternalLink size={16} />
              </a>
            )}
        </div>
      </div>

      {/* --- Right Column (Image Area - UNCHANGED) --- */}
      <div className="relative overflow-hidden min-h-[350px] sm:min-h-[450px] lg:min-h-full bg-muted/50 order-1 lg:order-2 p-6 sm:p-8 flex items-center justify-center">
        <div className="relative w-full h-full max-w-md aspect-[4/3]">
          <AnimatePresence initial={false}>
            {[...Array(cardsInStack)].map((_, i) => {
              const imageIndex =
                (topCardIndex + cardsInStack - 1 - i + numImages) % numImages;
              const depth = (imageIndex - topCardIndex + numImages) % numImages;
              const offsetValue = 16;
              const scale = 1 - depth * 0.04;
              const translateX = -depth * offsetValue;
              const translateY = depth * offsetValue;
              const zIndex = 30 - depth;
              const imageSrc = images[imageIndex] || "/placeholder.png";

              return (
                <motion.div
                  key={imageIndex}
                  className={cn(
                    "absolute inset-0 w-full h-full cursor-pointer",
                    "p-1.5 sm:p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700"
                  )}
                  onClick={showNextImage}
                  style={{ zIndex }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: scale,
                    x: translateX,
                    y: translateY,
                    transition: { type: "spring", stiffness: 260, damping: 20 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: -150,
                    y: 30,
                    transition: { duration: 0.35, ease: "easeOut" },
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <Image
                      src={imageSrc}
                      alt={`${title} screenshot ${imageIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      priority={imageIndex === topCardIndex}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {canCycle && (
            <Button
              variant="default"
              size="icon"
              className={cn(
                "absolute bottom-4 right-4 rounded-full z-40 shadow-xl w-10 h-10",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Project;

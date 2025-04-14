"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles, // Introduction
  User, // Fallback/Generic About
  GraduationCap, // Learning Journey
  Lightbulb, // Coding Philosophy
  Heart, // Beyond Technology
  Briefcase, // Current Endeavors
  Target, // Professional Goals
  CookingPot, // Cooking
  TreePine, // Nature
  Wrench, // Skills Icon
  LucideProps,
} from "lucide-react";

// Framer Motion variants for subtle animation
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutMePage = () => {
  return (
    // Add scroll-margin-top matching navbar height if using fragment links
    <div className="scroll-mt-20">
      <MaxWidthWrapper className="py-20 md:py-24 space-y-12 md:space-y-16">
        {" "}
        {/* Increased spacing */}
        {/* --- Header Section --- */}
        <motion.div
          initial="hidden"
          animate="visible" // Animate header on load
          variants={sectionVariants}
          className="text-center md:text-left" // Center on mobile
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            About Me
          </h1>
          {/* Revised Subtitle */}
          <p className="text-xl text-muted-foreground">
            Full-Stack Developer | Lifelong Learner | Animal Enthusiast 🐾
          </p>
        </motion.div>
        {/* --- Introduction & Image Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          aria-labelledby="intro-heading"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
        >
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full shadow-lg border-2 border-primary/10">
              <Image
                src="/profile-pic-resized.png"
                alt="Nguyen - Profile Picture"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h2
              id="intro-heading"
              className="text-2xl font-semibold text-foreground flex items-center justify-center md:justify-start gap-2"
            >
              <Sparkles className="w-6 h-6 text-primary" />
              Hello There!
            </h2>
            {/* Revised Introduction Text */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Nguyen Nguyen, a Full-Stack Developer drawn to creating
              intuitive and effective web applications. My interest in
              technology started early, sparked by video games and leading to
              explorations in computing 💻. Through practice and building
              various projects, I&apos;ve developed my skills in modern web
              development. Here’s a bit more about my journey and focus 🚀.
            </p>
          </div>
        </motion.section>
        {/* --- Combined Journey & Philosophy Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            aria-labelledby="journey-heading"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span id="journey-heading">Learning Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Revised Journey Text */}
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy the process of learning and am always seeking
                  opportunities to grow. Starting with front-end development,
                  I&apos;ve progressively broadened my expertise into full-stack
                  capabilities. My primary goal is to build applications that
                  are genuinely useful and solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            aria-labelledby="philosophy-heading"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <span id="philosophy-heading">Coding Philosophy</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Revised Philosophy Text */}
                <p className="text-muted-foreground leading-relaxed">
                  I approach challenges with persistence, focusing on
                  understanding concepts deeply rather than just finding
                  surface-level solutions. I find that thoroughly working
                  through a problem solidifies my knowledge and improves my
                  ability to tackle similar challenges later 💡.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
        {/* --- Simplified Skills Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          aria-labelledby="skills-heading"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Wrench className="w-6 h-6 text-primary" />
                <span id="skills-heading">Core Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Summary Text (Unchanged) */}
              <p className="text-muted-foreground leading-relaxed">
                I have experience across the full stack, including modern
                languages like TypeScript and Python, frontend frameworks like
                React/Next.js, backend technologies such as Node.js/FastAPI,
                various SQL/NoSQL databases, and essential DevOps tools like
                Docker & Git. I'm always expanding my toolkit!
              </p>
              <Button
                variant="link"
                asChild
                className="p-0 h-auto text-primary hover:text-primary/90"
              >
                <Link href="/#skills">
                  {" "}
                  {/* Make sure this links correctly to homepage skills */}
                  View Detailed Skills Breakdown →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
        {/* --- Beyond Technology Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          aria-labelledby="beyond-heading"
        >
          <h2
            id="beyond-heading"
            className="text-2xl md:text-3xl font-semibold text-foreground mb-6 flex items-center gap-2 justify-center md:justify-start"
          >
            <Heart className="w-7 h-7 text-primary" />
            Beyond Technology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CookingPot className="w-5 h-5 text-amber-600" />
                Learning to Cook 🍳
              </h3>
              {/* Fixed typo, slight rephrase */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                I enjoy experimenting in the kitchen, often following cooking
                videos or guides. It feels great when a dish comes out
                delicious.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-green-600" />
                Walking in Nature 🌳
              </h3>
              {/* Slight rephrase */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Taking walks, often in local parks, helps me recharge. Being
                surrounded by greenery and fresh air is both refreshing and
                inspiring.
              </p>
            </div>
          </div>
        </motion.section>
        {/* --- Looking Ahead Section (Endeavors/Goals Combined) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          aria-labelledby="future-heading"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                <span id="future-heading">Looking Ahead</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Revised Future Text */}
              <p className="text-muted-foreground leading-relaxed">
                Currently, I’m focused on developing robust platforms using
                modern web technologies, emphasizing responsive, accessible, and
                performant user experiences 🌐.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Looking ahead, I aim to contribute effectively to collaborative
                team environments 👨‍💻👩‍💻, engage with the open-source community
                🌍, and continue learning to build impactful web solutions.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutMePage;

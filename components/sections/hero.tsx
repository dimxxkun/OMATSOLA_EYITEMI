"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

export function Hero() {
  const downloadCV = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=113_POijTQjOWuOOI3cmw0AMcwuZziP5S",
      "_blank"
    );
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden"
    >
      {/* Apple Ambient Mesh Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-blue-500/15 to-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">

            {/* Apple Hero Headline */}
            <FadeIn direction="up" delay={150}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                <span className="text-foreground block">Omatsola</span>
                <span className="apple-gradient-text block">Eyitemi</span>
              </h1>
            </FadeIn>

            {/* Description Subtitles */}
            <FadeIn direction="up" delay={250}>
              <p className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-xl">
                Broadcast Production • Social Media Strategy • Content Development & Audience Engagement
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={350}>
              <p className="text-sm sm:text-base text-muted-foreground/90 font-normal max-w-lg">
                Transforming complex ideas into compelling narratives and cultivating high-impact digital communities.
              </p>
            </FadeIn>

            {/* Apple Action Buttons */}
            <FadeIn direction="up" delay={450}>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={downloadCV}
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-7 py-6 text-sm font-semibold shadow-lg shadow-primary/20 gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={scrollToAbout}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-7 py-6 text-sm font-semibold glass-pill gap-2 border-border/60"
                  >
                    Learn More
                    <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Profile Image Halo */}
          <FadeIn direction="left" delay={200}>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
                {/* Multi-layer Halo Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-blue-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse -z-10" />
                <div className="relative w-full h-full rounded-full p-2 glass-pill shadow-2xl border border-white/30 dark:border-white/10 group">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/profile/temi2.png"
                      alt="Omatsola Eyitemi - Media & Communications Specialist"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: "50% 15%" }}
                      priority
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 380px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


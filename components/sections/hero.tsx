"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { ImageSkeleton } from "@/components/ui/image-skeleton";

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
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 80;
      const offset = navHeight + 16;
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <FadeIn direction="right" delay={100}>
              <div className="inline-block">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-foreground inline-block">
                    Omatsola
                  </span>
                  <br />
                  <span className="text-primary inline-block">
                    Eyitemi
                  </span>
                </h1>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Media & Communications Specialist | Broadcast Production | Social
                Media Strategist | Content Development & Audience Engagement
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="text-base text-muted-foreground">
                Transforming ideas into compelling narratives and building engaged
                communities through strategic media and communications.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Button onClick={downloadCV} size="lg" className="gap-2 hover:scale-105 transition-transform duration-300">
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  onClick={scrollToAbout}
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                  <ArrowDown className="h-5 w-5 animate-bounce" />
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={200}>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 hover:scale-105 group bg-muted">
                  <Image
                    src="/images/profile/TEMI-PICTURE.jpg"
                    alt="Omatsola Eyitemi - Media & Communications Specialist"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: "40% 20%" }}
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


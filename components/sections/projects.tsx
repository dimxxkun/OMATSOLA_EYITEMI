"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { ImageSkeleton } from "@/components/ui/image-skeleton";

const projects = [
  {
    image: "Analytics.jpg",
    title: "Social Media Analytics Dashboard",
    description: "Comprehensive analytics overview showing key performance metrics and insights.",
  },
  {
    image: "Analytics 2.jpg",
    title: "Performance Analytics",
    description: "Detailed performance metrics and engagement analysis across social platforms.",
  },
  {
    image: "Analytics 3.jpg",
    title: "Analytics Overview",
    description: "In-depth analytics dashboard displaying audience insights and content performance.",
  },
  {
    image: "Analytics 4.jpg",
    title: "Metrics Analysis",
    description: "Advanced analytics view showcasing growth trends and engagement patterns.",
  },
  {
    image: "Analytics 5.jpg",
    title: "Data Analytics",
    description: "Comprehensive data visualization and performance tracking dashboard.",
  },
  {
    image: "dashboard.jpg",
    title: "Social Media Dashboard",
    description: "Centralized dashboard for managing and monitoring social media campaigns.",
  },
  {
    image: "IG account growth start.jpg",
    title: "Instagram Account Growth",
    description: "Tracking Instagram account growth metrics and follower engagement.",
  },
  {
    image: "IG account growth start 2.jpg",
    title: "Growth Analytics",
    description: "Detailed analysis of Instagram account growth and audience development.",
  },
  {
    image: "IG account growth start 3.jpg",
    title: "Account Performance",
    description: "Comprehensive view of Instagram account performance and growth trends.",
  },
  {
    image: "IG account growth start 4.jpg",
    title: "Growth Metrics",
    description: "In-depth metrics showcasing Instagram account growth and engagement rates.",
  },
  {
    image: "Reach.jpg",
    title: "Reach Analytics",
    description: "Analysis of content reach and audience engagement across platforms.",
  },
  {
    image: "Reach 2.jpg",
    title: "Reach Performance",
    description: "Detailed reach metrics and audience expansion tracking.",
  },
  {
    image: "Reel Insight 1.jpg",
    title: "Instagram Reel Insights",
    description: "Performance insights and analytics for Instagram Reel content.",
  },
  {
    image: "Reel Insight 2.jpg",
    title: "Reel Analytics",
    description: "Comprehensive analytics for Instagram Reel performance and engagement.",
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title="Projects"
          description="Explore my recent work and creative projects"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 50}>
              <Card
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={`/images/projects/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <a
                  href="https://www.instagram.com/themovienerdtv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                  aria-label="View on Instagram"
                >
                  <Instagram className="h-4 w-4 text-pink-600" />
                </a>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
            </Card>
            </FadeIn>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(null);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Project image viewer"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={`/images/projects/${selectedImage}`}
                alt="Selected project"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded pointer-events-none">
              Press ESC or click outside to close
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


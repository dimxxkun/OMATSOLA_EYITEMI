"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    image: "Snapchat 1.jpeg",
    title: "Snapchat Growth & Engagement",
    description: "Audience analytics and engagement metrics for Snapchat story campaigns.",
  },
  {
    image: "Snapchat 2.jpeg",
    title: "Snapchat Story Insights",
    description: "Detailed performance tracking and reach metrics for Snapchat content.",
  },
  {
    image: "Snapchat 3.jpeg",
    title: "Snapchat Content Analytics",
    description: "Comprehensive analytics showing view completion rates and audience retention.",
  },
  {
    image: "Snapchat 4.jpeg",
    title: "Snapchat Campaign Performance",
    description: "In-depth breakdown of Snapchat campaign impressions and follower growth.",
  },
  {
    image: "Snapchat 5.jpeg",
    title: "Snapchat Audience Reach",
    description: "Demographics and engagement trends across Snapchat broadcast channels.",
  },
  {
    image: "Snapchat 6.jpeg",
    title: "Snapchat Metrics & Insights",
    description: "Advanced analytics overview showcasing Snapchat engagement patterns.",
  },
  {
    image: "meta ads 1.jpeg",
    title: "Meta Ads Campaign Strategy",
    description: "Paid social advertising strategy and audience targeting performance.",
  },
  {
    image: "meta ads 2.jpeg",
    title: "Meta Ads ROAS & Conversions",
    description: "Return on ad spend analytics and conversion tracking dashboard.",
  },
  {
    image: "meta ads 3.jpeg",
    title: "Meta Ads Impression Growth",
    description: "Ad reach, impression metrics, and cost-per-click optimization.",
  },
  {
    image: "meta ads 4.jpeg",
    title: "Meta Audience Targeting",
    description: "Detailed breakdown of demographic targeting and custom audience performance.",
  },
  {
    image: "meta ads 5.jpeg",
    title: "Meta Ad Creative Performance",
    description: "A/B testing creative variations and click-through rate analysis.",
  },
  {
    image: "meta ads 6.jpeg",
    title: "Meta Ad Spend & Efficiency",
    description: "Budget allocation analysis and cost-per-acquisition performance.",
  },
  {
    image: "meta ads 7.jpeg",
    title: "Meta Funnel Optimization",
    description: "Full-funnel campaign performance from brand awareness to conversion.",
  },
  {
    image: "meta ads 8.jpeg",
    title: "Meta Lead Generation Ads",
    description: "Lead ads campaign metrics and form completion conversion rates.",
  },
  {
    image: "meta ads 9.jpeg",
    title: "Meta Retargeting Campaign",
    description: "Retargeting audience engagement and website traffic conversion analysis.",
  },
  {
    image: "meta ads 10.jpeg",
    title: "Meta Ads Scale & Growth",
    description: "Scalable campaign performance and high-impact digital reach metrics.",
  },
  {
    image: "meta ads 11.jpeg",
    title: "Meta Ads Executive Dashboard",
    description: "Comprehensive executive overview of Meta advertising ROI and metrics.",
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "instagram" | "snapchat" | "meta">("all");

  const filterCategories = [
    { id: "all", label: "All Work", icon: null, count: projects.length },
    { 
      id: "instagram", 
      label: "Instagram", 
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      count: projects.filter(p => !p.image.toLowerCase().includes("snapchat") && !p.image.toLowerCase().includes("meta")).length
    },
    { 
      id: "snapchat", 
      label: "Snapchat", 
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.003 2.001c-3.667 0-6.19 2.723-6.19 6.275 0 1.547.464 2.87 1.272 3.864-.176.452-.614 1.218-1.57 1.57-.468.172-.888.192-1.25.06a.54.54 0 0 0-.672.336.56.56 0 0 0 .19.67c.725.565 1.597.778 2.502.618.156.494.614 1.31 1.956 1.48 1.054.133 2.106-.118 3.123-.393.262.593 1.037 1.525 2.639 1.525 1.602 0 2.377-.932 2.639-1.525 1.017.275 2.069.526 3.123.393 1.342-.17 1.8-1.002 1.956-1.48.905.16 1.777-.053 2.502-.618a.56.56 0 0 0 .19-.67.54.54 0 0 0-.672-.336c-.362.132-.782.112-1.25-.06-.956-.352-1.394-1.118-1.57-1.57.808-.994 1.272-2.317 1.272-3.864 0-3.552-2.523-6.275-6.19-6.275z"/>
        </svg>
      ),
      count: projects.filter(p => p.image.toLowerCase().includes("snapchat")).length
    },
    { 
      id: "meta", 
      label: "Meta Ads", 
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 7.8c-2.32 0-4.33 1.15-5.55 2.92C5.23 9.3 3.65 8.4 2 8.4A6.6 6.6 0 0 0 0 15c0 3.65 2.95 6.6 6.6 6.6 2.32 0 4.33-1.15 5.55-2.92 1.22 1.77 3.23 2.92 5.55 2.92A6.6 6.6 0 0 0 24 15c0-3.65-2.95-6.6-6.6-6.6-2.32 0-4.33 1.15-5.55 2.92C10.63 9.3 9.05 8.4 7.4 8.4zM6.6 19.8C3.95 19.8 1.8 17.65 1.8 15s2.15-4.8 4.8-4.8c1.43 0 2.7.63 3.56 1.63L8.5 13.5c-.45-.52-1.11-.85-1.9-.85-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.98 0 1.84-.57 2.25-1.4h-2.25v-1.8h4.25c.03.24.05.49.05.75 0 2.65-2.15 4.8-4.8 4.8zm10.8 0c-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8 4.8 2.15 4.8 4.8-2.15 4.8-4.8 4.8z"/>
        </svg>
      ),
      count: projects.filter(p => p.image.toLowerCase().includes("meta")).length
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const isMeta = project.image.toLowerCase().includes("meta");
    const isSnapchat = project.image.toLowerCase().includes("snapchat");
    if (activeFilter === "instagram") return !isMeta && !isSnapchat;
    if (activeFilter === "snapchat") return isSnapchat;
    if (activeFilter === "meta") return isMeta;
    return true;
  });

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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title="Projects"
          description="Explore my recent work and creative analytics campaigns"
        />

        {/* Apple Segment Control Filter Bar */}
        <div className="flex justify-center mb-12 overflow-x-auto py-2 px-4 no-scrollbar">
          <div className="inline-flex items-center shrink-0 gap-1 sm:gap-1.5 p-1.5 glass-card rounded-full border border-border/60 shadow-lg">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as "all" | "instagram" | "snapchat" | "meta")}
                className={`relative inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === cat.id
                    ? "text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.icon && (
                  <span className={activeFilter === cat.id ? "text-primary-foreground" : cat.id === "instagram" ? "text-pink-500" : cat.id === "snapchat" ? "text-yellow-400" : "text-blue-500"}>
                    {cat.icon}
                  </span>
                )}
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeFilter === cat.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.image} delay={index * 30}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card rounded-3xl overflow-hidden cursor-pointer group flex flex-col h-full border border-border/50 shadow-md hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {project.image.toLowerCase().includes("meta") ? (
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 glass-pill hover:bg-blue-500/20 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                      aria-label="View on Meta Ads"
                    >
                      <svg className="h-4 w-4 text-blue-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 7.8c-2.32 0-4.33 1.15-5.55 2.92C5.23 9.3 3.65 8.4 2 8.4A6.6 6.6 0 0 0 0 15c0 3.65 2.95 6.6 6.6 6.6 2.32 0 4.33-1.15 5.55-2.92 1.22 1.77 3.23 2.92 5.55 2.92A6.6 6.6 0 0 0 24 15c0-3.65-2.95-6.6-6.6-6.6-2.32 0-4.33 1.15-5.55 2.92C10.63 9.3 9.05 8.4 7.4 8.4zM6.6 19.8C3.95 19.8 1.8 17.65 1.8 15s2.15-4.8 4.8-4.8c1.43 0 2.7.63 3.56 1.63L8.5 13.5c-.45-.52-1.11-.85-1.9-.85-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.98 0 1.84-.57 2.25-1.4h-2.25v-1.8h4.25c.03.24.05.49.05.75 0 2.65-2.15 4.8-4.8 4.8zm10.8 0c-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8 4.8 2.15 4.8 4.8-2.15 4.8-4.8 4.8z"/>
                      </svg>
                    </a>
                  ) : project.image.toLowerCase().includes("snapchat") ? (
                    <a
                      href="https://www.snapchat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 glass-pill hover:bg-yellow-400/20 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                      aria-label="View on Snapchat"
                    >
                      <svg className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12.003 2.001c-3.667 0-6.19 2.723-6.19 6.275 0 1.547.464 2.87 1.272 3.864-.176.452-.614 1.218-1.57 1.57-.468.172-.888.192-1.25.06a.54.54 0 0 0-.672.336.56.56 0 0 0 .19.67c.725.565 1.597.778 2.502.618.156.494.614 1.31 1.956 1.48 1.054.133 2.106-.118 3.123-.393.262.593 1.037 1.525 2.639 1.525 1.602 0 2.377-.932 2.639-1.525 1.017.275 2.069.526 3.123.393 1.342-.17 1.8-1.002 1.956-1.48.905.16 1.777-.053 2.502-.618a.56.56 0 0 0 .19-.67.54.54 0 0 0-.672-.336c-.362.132-.782.112-1.25-.06-.956-.352-1.394-1.118-1.57-1.57.808-.994 1.272-2.317 1.272-3.864 0-3.552-2.523-6.275-6.19-6.275z"/>
                      </svg>
                    </a>
                  ) : (
                    <a
                      href="https://www.instagram.com/themovienerdtv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 glass-pill hover:bg-pink-500/20 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                      aria-label="View on Instagram"
                    >
                      <svg className="h-4 w-4 text-pink-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                </div>

                <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Apple Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedImage(null);
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Project image viewer"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-5xl max-h-[85vh] w-full h-full bg-neutral-950/80 backdrop-blur-xl rounded-3xl overflow-hidden p-2 border border-white/15 shadow-2xl flex items-center justify-center"
              >
                <Image
                  src={`/images/projects/${selectedImage}`}
                  alt="Selected project"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </motion.div>

              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-xl z-10 hover:scale-110"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white/90 bg-neutral-900/80 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full pointer-events-none shadow-lg">
                Press ESC or click outside to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


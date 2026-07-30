"use client";

import { Badge } from "@/components/ui/badge";
import { Trophy, Star } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion } from "framer-motion";

export function Achievement() {
  const achievements = [
    {
      title: "Instagram Growth Achievement",
      description: "Grew 'TheMovieNerdTV' Instagram page to 51,000+ followers, increasing community engagement through consistent posting, audience insight analysis, and trend-based content strategy.",
      year: "2023 - Present",
    },
    {
      title: "Community Management Excellence",
      description: "Managed social media communities exceeding 5,000+ active participants across Telegram and WhatsApp, promoting healthy engagement, real-time discussions, and brand loyalty.",
      year: "2023 - Present",
    },
    {
      title: "Engagement Rate Growth",
      description: "Increased social media engagement rates by up to 60% through structured weekly content calendars, interactive discussions, and platform-specific storytelling techniques.",
      year: "2023 - Present",
    },
    {
      title: "Live Series Success",
      description: "Developed and hosted Instagram Live series with over 1,000+ recurring viewers, successfully boosting brand visibility, audience retention, and topical authority.",
      year: "2023 - Present",
    },
    {
      title: "Course Enrollment Growth",
      description: "Enhanced course and program sign-ups by 30% through targeted promotional campaigns and collaborative content with educational/training teams.",
      year: "2023 - Present",
    },
    {
      title: "Multi-Format Content Creation",
      description: "Created content across multiple formats including video scripts, short-form reviews, infographics, promos, and live session concepts, strengthening brand voice and audience relatability.",
      year: "2022 - Present",
    },
    {
      title: "Cross-Industry Brand Communication",
      description: "Led brand communication strategies for organizations across broadcasting, entertainment, lifestyle, and fintech/trading communities in both remote and in-studio environments.",
      year: "2021 - Present",
    },
    {
      title: "Production Workflow Support",
      description: "Supported on-air TV and radio production workflows, participating in scripting, live studio assistance, production scheduling, guest coordination, and promo material development.",
      year: "2021-2025",
    },
    {
      title: "High Response Rate Excellence",
      description: "Maintained a high response rate (95%+) across digital platforms, improving audience satisfaction and brand trust.",
      year: "2022 - Present",
    },
  ];

  return (
    <section
      id="achievement"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Achievements"
          description="Key accomplishments and impact in my career"
          icon={<Trophy className="h-4 w-4 text-primary" />}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <FadeIn key={index} delay={index * 60}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between space-y-4 relative overflow-hidden group border border-border/50"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Star className="w-5 h-5" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs font-semibold bg-secondary/80 border border-border/40"
                    >
                      {achievement.year}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


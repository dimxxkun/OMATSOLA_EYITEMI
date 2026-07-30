"use client";

import { useEffect, useState, useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { TrendingUp, Users, Calendar, Eye } from "lucide-react";
import { motion } from "framer-motion";

function CountUp({ end, duration = 2000, suffix = "+" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            const startValue = 0;

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
              
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, hasAnimated]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <span ref={countRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { label: "Projects Completed", value: 17, suffix: "+", icon: TrendingUp },
    { label: "Years of Experience", value: 5, suffix: "+", icon: Calendar },
    { label: "Happy Clients", value: 150, suffix: "+", icon: Users },
    { label: "Audience Reach", value: 15000000, suffix: "+", icon: Eye },
  ];

  return (
    <section
      id="stats"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Statistics"
          description="Key metrics and accomplishments at a glance"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isLargeNumber = stat.value >= 1000000;
            const fontSizeClass = isLargeNumber 
              ? "text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight break-all"
              : "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight";
            
            return (
              <FadeIn key={index} delay={index * 80}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="glass-card rounded-3xl p-6 sm:p-8 text-center space-y-4 relative overflow-hidden border border-border/50 shadow-md hover:shadow-xl"
                >
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={fontSizeClass}>
                    <CountUp end={stat.value} duration={2000} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}


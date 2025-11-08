"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";

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
              
              // Easing function for smooth animation
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

  // Format large numbers with commas
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
    { label: "Projects Completed", value: 17, suffix: "+" },
    { label: "Years of Experience", value: 5, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Audience Reach", value: 15000000, suffix: "+" },
  ];

  return (
    <section
      id="stats"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Statistics"
          description="Key metrics and achievements at a glance"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            // Determine font size based on value
            const isLargeNumber = stat.value >= 1000;
            const fontSizeClass = isLargeNumber 
              ? "text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 break-words"
              : "text-4xl sm:text-5xl font-bold text-primary mb-2";
            
            return (
              <FadeIn key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6 px-4">
                    <div className={fontSizeClass}>
                      <CountUp end={stat.value} duration={2000} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}


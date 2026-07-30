"use client";

import { FadeIn } from "@/components/animations/fade-in";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <FadeIn delay={0}>
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight apple-gradient-text pb-2 leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}


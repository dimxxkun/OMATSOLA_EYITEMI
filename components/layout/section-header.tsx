"use client";

import { FadeIn } from "@/components/animations/fade-in";

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, description, icon }: SectionHeaderProps) {
  return (
    <FadeIn delay={0}>
      <div className="text-center mb-12">
        {icon && (
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon}
            <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          </div>
        )}
        {!icon && <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>}
        <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        {description && (
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </FadeIn>
  );
}


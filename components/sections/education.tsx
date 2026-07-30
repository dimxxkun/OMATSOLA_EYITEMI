"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion } from "framer-motion";

export function Education() {
  const education = [
    {
      degree: "B.Sc. Mass Communication",
      institution: "Delta State University",
      location: "Abraka, Delta State",
      period: "2019 – 2024",
      description: "Bachelor of Science in Mass Communication, focusing on media production, broadcast journalism, and strategic communications theory.",
    },
    {
      degree: "Senior Secondary School Certificate (SSCE)",
      institution: "Fortune High School",
      location: "Benin City, Edo State",
      period: "2013 – 2019",
      description: "Completed secondary education with honors, specializing in media studies, arts, and foundational communication skills.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeader 
          title="Education"
          description="Academic background and higher education qualifications"
        />
        <div className="space-y-6">
          {education.map((edu, index) => (
            <FadeIn key={index} delay={index * 120}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-border/50 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-base">
                      <GraduationCap className="w-5 h-5 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <span className="glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-primary self-start shadow-sm flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                  {edu.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


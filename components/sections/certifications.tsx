"use client";

import { Award, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion } from "framer-motion";

export function Certifications() {
  const certifications = [
    {
      name: "B.Sc Copywriting",
      issuer: "COC",
      year: "2024",
      description: "Certificate of Completion in Professional Copywriting, demonstrating expertise in creating high-converting written content across multi-channel media.",
    },
    {
      name: "Social Media Management",
      issuer: "KSA",
      year: "2022",
      description: "Certificate in Strategic Social Media Management, covering audience growth, analytics optimization, and content calendar development.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeader 
          title="Certifications"
          description="Professional certifications and accredited credentials"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 120}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-border/50 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="glass-pill px-3.5 py-1 rounded-full text-xs font-bold text-primary shadow-xs">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      Issued by {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                    {cert.description}
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


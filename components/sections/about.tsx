"use client";

import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { User, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const skillCategories = {
    "Media & Communications": [
      "Media Strategy",
      "Broadcast Production",
      "Broadcasting",
      "Social Media Management",
      "Content Development",
      "Content Creation",
      "Audience Engagement",
      "Digital Marketing",
      "Video Production",
      "Brand Communication",
      "Copywriting",
    ],
    "Technical & Software": [
      "Microsoft Office Suite",
      "CRM Systems",
      "Zoom / Teams / Slack",
      "Documentation & Records",
    ],
    "Professional Skills": [
      "Client Relations",
      "Event Management",
      "Administrative Support",
      "Office Administration",
      "Customer Service",
    ],
    "Soft Skills": [
      "Task Prioritization",
      "Teamwork",
      "Adaptability",
      "Attention to Detail",
      "Organizational Skills",
    ],
  };

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="About Me"
          description="Learn more about my professional background and core skills"
        />
        
        {/* Apple Bento Grid Container */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Professional Overview */}
          <FadeIn delay={100} className="md:col-span-6">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Professional Overview
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Career Objective & Passion
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  To succeed as a dedicated professional by exhibiting passion, skills, and commitment to producing top-notch outcomes. I work collaboratively with teams, follow established procedures, and effectively manage tasks to meet organizational goals.
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  I am a passionate Media & Communications Specialist with expertise in broadcast production, social media strategy, and content development focused on creating engaging narratives that connect deeply with audiences.
                </p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 2: Core Skills Bento */}
          <FadeIn delay={200} className="md:col-span-6">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card rounded-3xl p-8 sm:p-10 h-full space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    Core Skills
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Areas of Expertise
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="rounded-full text-xs font-medium px-3 py-1 bg-secondary/80 hover:bg-primary/20 hover:text-primary transition-colors border border-border/40 cursor-default shadow-xs"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


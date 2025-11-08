"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";

export function Education() {
  const education = [
    {
      degree: "B.Sc. Mass Communication",
      institution: "Delta State University",
      location: "Abraka, Delta State",
      period: "2019 – 2024",
      description: "Bachelor of Science in Mass Communication, focusing on media production, journalism, and communications theory.",
    },
    {
      degree: "Senior Secondary School Certificate Examination",
      institution: "Fortune High School",
      location: "Benin City, Edo State",
      period: "2013 – 2019",
      description: "Completed secondary education with a focus on preparing for higher education in communications and media studies.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Education"
          description="My academic background and qualifications"
          icon={<GraduationCap className="h-8 w-8 text-primary" />}
        />
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card
                className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
              >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {edu.institution}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit h-fit text-sm px-3 py-1"
                  >
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


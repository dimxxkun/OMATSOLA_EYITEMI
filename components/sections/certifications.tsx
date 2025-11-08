"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";

export function Certifications() {
  const certifications = [
    {
      name: "B.Sc Copywriting",
      issuer: "COC",
      year: "2024",
      description: "Certificate of Completion in Copywriting, demonstrating expertise in creating compelling written content for various media platforms.",
    },
    {
      name: "Social Media Management",
      issuer: "KSA",
      year: "2022",
      description: "Certificate in Social Media Management, covering strategy development, content creation, analytics, and platform optimization.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Certifications"
          description="Professional certifications and credentials"
          icon={<Award className="h-8 w-8 text-primary" />}
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 150}>
              <Card
                className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"
              >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{cert.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit h-fit text-sm px-3 py-1"
                  >
                    {cert.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {cert.description}
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


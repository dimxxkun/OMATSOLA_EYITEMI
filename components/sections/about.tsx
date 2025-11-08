"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";

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
      "Customer Relationship Management (CRM)",
      "Communication Tools (Zoom, Teams, Slack)",
      "Documentation and Record Keeping",
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeader 
          title="About Me"
          description="Learn more about my professional background and core skills"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={100}>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Professional Overview</CardTitle>
                <CardDescription>
                  A dedicated media and communications professional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To succeed as a dedicated professional by exhibiting passion, skills, and commitment to producing top-notch outcomes. I work collaboratively with teams, follow established procedures, and effectively manage tasks to meet organizational goals. With outstanding problem-solving, communication, and analytical abilities, I am eager to apply these skills to help organizations reach their objectives.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground leading-relaxed">
                    I am a passionate Media & Communications Specialist with
                    expertise in broadcast production, social media strategy, and
                    content development. My work focuses on creating engaging
                    narratives that connect with audiences and drive meaningful
                    engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={200}>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
                <CardDescription>
                  Areas of expertise and specialization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-sm px-3 py-1 transition-transform hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


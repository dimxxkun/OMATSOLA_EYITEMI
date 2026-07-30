"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.achievements.length > 3;
  const displayedAchievements = expanded ? exp.achievements : exp.achievements.slice(0, 3);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass-card rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 relative overflow-hidden border-l-4 border-l-primary"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5">
        <div>
          <h4 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{exp.title}</h4>
          <p className="text-sm sm:text-base font-semibold text-primary">{exp.company}</p>
          <p className="text-xs font-medium text-muted-foreground mt-0.5">{exp.location}</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs font-semibold bg-secondary/80 border border-border/40">
          {exp.period}
        </Badge>
      </div>

      <ul className="space-y-2.5 sm:space-y-3">
        {displayedAchievements.map((achievement, idx) => (
          <li key={idx} className="text-muted-foreground text-xs sm:text-base leading-relaxed flex items-start gap-2.5 sm:gap-3">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-1 focus:outline-none"
        >
          {expanded ? (
            <>
              Show Less <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Show {exp.achievements.length - 3} More Responsibilities <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </motion.div>
  );
}

export function Experience() {
  const workExperience: ExperienceItem[] = [
    {
      title: "Social Media Manager",
      company: "Stay Collection",
      location: "Lagos, Nigeria (Remote)",
      period: "2026 – Present",
      achievements: [
        "Leads digital communications and social media strategy for Stay Collection, elevating brand presence and hospitality storytelling across core channels",
        "Curates and executes high-converting promotional content calendars, guest engagement campaigns, and luxury brand aesthetics",
        "Leverages social media analytics to optimize posting frequencies, audience interaction, and direct booking conversions",
      ],
    },
    {
      title: "Social Media Growth Manager",
      company: "About Partners",
      location: "Lagos, Nigeria (Remote)",
      period: "2026",
      achievements: [
        "Spearheaded multi-channel social media growth initiatives and targeted audience acquisition campaigns for About Partners",
        "Designed and implemented strategic digital calendars and content workflows to maximize brand reach and organic follower growth",
        "Tracked and analyzed key performance indicators (KPIs) to continuously optimize campaign messaging, engagement, and conversion ROI",
      ],
    },
    {
      title: "Founder & Creative Director / Social Media Lead",
      company: "The Movie Nerd TV",
      location: "Remote (Lagos)",
      period: "2022 – Present",
      achievements: [
        "Founded and built The Movie Nerd TV, a digital entertainment brand focused on movie reviews, film culture commentary, and cinematic storytelling, growing to 51,000+ Instagram followers",
        "Developed the brand identity, content voice, visual style, and long-term growth strategy to position the platform as a leading source for film lovers and pop-culture enthusiasts",
        "Leads end-to-end content production including scripting movie reviews, designing graphics, editing short-form video content, and managing publishing schedules across Instagram and TikTok",
        "Built and nurtured a highly engaged movie fan community, fostering discussions, feedback loops, reels interactions, and recurring viewer engagement",
        "Conducts trend and audience behavior analysis using Meta Business Suite and Instagram Insights to optimize timing, format, and messaging for higher performance",
        "Collaborates with creatives including designers, film enthusiasts, presenters, and influencers to expand brand reach and enhance storytelling style",
        "Hosted and moderated live discussions around newly released movies, award shows, and trending film moments, increasing retention and viewership session lengths",
        "Oversees brand partnerships, sponsored content discussions, influencer collaborations, and opportunities for platform monetization",
      ],
    },
    {
      title: "Intern",
      company: "Nigerian Television Authority (NYSC)",
      location: "Ibadan Zonal Center, Oyo State",
      period: "2024 – 2025",
      achievements: [
        "Contributed to the creation and development of TV content by assisting in research, scriptwriting, and guest coordination for various programs",
        "Gained practical experience in television production process, including camera operation, lighting, and post-production editing",
        "Assisted in the development and execution of on-air promotional materials, ensuring proper scheduling and adherence to broadcasting regulations",
        "Actively participated in team meetings to brainstorm creative ideas for new shows and segments, enhancing team collaboration",
        "Supported the team during live studio recordings and outside broadcasts, ensuring technical and logistical issues were handled smoothly",
      ],
    },
    {
      title: "Social Media Strategist",
      company: "AcedxTrades",
      location: "Lagos, Nigeria (Remote)",
      period: "2023 – 2024",
      achievements: [
        "Spearheaded the brand's social media strategy across Instagram, Twitter, Telegram, and TikTok, growing the combined follower base significantly",
        "Designed and executed weekly content calendars featuring market insights, trading tips, and motivational content, resulting in a 60% increase in engagement",
        "Managed Telegram and WhatsApp trading communities with over 5,000 active members, fostering real-time discussions and support",
        "Launched the 'Trader's Mindset Mondays' series on Instagram Live, attracting 1,000+ viewers per session and boosting brand credibility",
        "Used Meta Business Suite and Google Analytics to track campaign performance, optimize posting times, and report monthly KPIs to the executive team",
        "Handled DMs and comments across platforms, maintaining a 95% response rate and improving customer satisfaction",
        "Worked closely with the training department to promote webinars, masterclasses, and mentorship programs, contributing to a 30% increase in course sign-ups",
      ],
    },
    {
      title: "Social Media Specialist",
      company: "Grubhub",
      location: "Chicago, USA (Remote)",
      period: "2022 – 2023",
      achievements: [
        "Led Instagram and Facebook campaigns promoting local restaurant partners",
        "Increased engagement by 35% through interactive polls and user-generated content",
        "Collaborated with design and copy teams to produce platform-specific assets",
        "Used Sprout Social and Meta Business Suite to track KPIs and optimize strategy",
      ],
    },
    {
      title: "Intern",
      company: "Vibes FM 97.3",
      location: "Benin City, Edo State",
      period: "2021 – 2022",
      achievements: [
        "Assisted in the production of various radio shows by preparing audio clips, managing sound equipment, and ensuring smooth transitions during live broadcasts",
        "Gained hands-on experience with sound mixing software and hardware, learning to operate studio equipment to support radio programming and broadcasts",
        "Collaborated with the production team to plan, script, and organize content for upcoming shows, ensuring material was timely, accurate, and engaging",
        "Supported administrative duties by maintaining and updating contact databases, scheduling meetings, and organizing files related to show content",
        "Engaged in behind-the-scenes activities, including assisting with setup and breakdown of live events and broadcasts, ensuring all technical aspects ran smoothly",
      ],
    },
  ];

  const leadershipExperience: ExperienceItem[] = [
    {
      title: "Director of Information",
      company: "Association of Mass Communication Students",
      location: "Delta State University, Delta State",
      period: "2021 – 2022",
      achievements: [
        "Managed the dissemination of essential information to association members, including newsletters, meeting schedules, and important updates",
        "Fostered a sense of community by encouraging active participation in association activities, surveys, and feedback loops from members",
        "Utilized various communication platforms (email, social media, messaging apps) to effectively reach and engage with a diverse student audience",
        "Monitored and evaluated communication efforts, providing feedback and adjustments to improve overall outreach and member engagement",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Experience"
          description="My professional journey and leadership roles"
        />

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Professional Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <FadeIn key={index} delay={index * 80}>
                <ExperienceCard exp={exp} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Leadership Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Leadership Experience</h3>
          </div>
          <div className="space-y-6">
            {leadershipExperience.map((exp, index) => (
              <FadeIn key={index} delay={index * 80}>
                <ExperienceCard exp={exp} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  feedback: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adebayo Ogunleye",
    role: "Production Manager",
    company: "Nigerian Television Authority (NTA)",
    feedback: "During Omatsola's NYSC service at NTA Ibadan, he demonstrated exceptional dedication and professionalism. His contributions to our TV production team, from scriptwriting to post-production, were invaluable. He's a talented media professional with a bright future ahead.",
    initials: "AO",
  },
  {
    id: 2,
    name: "Ebuka Onyeuba",
    role: "CEO",
    company: "AcedxTrades",
    feedback: "Omatsola transformed our brand's online presence. His content strategy and community management skills are exceptional. The growth we've seen in our social media channels has been remarkable.",
    initials: "EO",
  },
  {
    id: 3,
    name: "Chinwe Okonkwo",
    role: "Station Manager",
    company: "Vibes FM 97.3",
    feedback: "Omatsola was an outstanding intern at Vibes FM. His passion for broadcast production and his ability to work seamlessly with our team made him a valuable asset. His technical skills in sound mixing and content planning were impressive.",
    initials: "CO",
  },
  {
    id: 4,
    name: "Funmi Adebayo",
    role: "Content Creator",
    company: "Lagos, Nigeria",
    feedback: "The Movie Nerd TV has become one of my go-to sources for film content. Omatsola's ability to create engaging narratives and build a community of 51,000+ followers speaks volumes about his skills. He's truly inspiring the Nigerian film community.",
    initials: "FA",
  },
  {
    id: 5,
    name: "Ibrahim Musa",
    role: "Digital Marketing Lead",
    company: "Lagos, Nigeria",
    feedback: "Working with Omatsola on social media campaigns has been a game-changer. His understanding of the Nigerian market and his strategic approach to content creation helped us achieve outstanding results. He's a true professional.",
    initials: "IM",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "Content Manager",
    company: "Grubhub",
    feedback: "Omatsola's expertise in broadcast production and media communications is outstanding. He consistently delivers high-quality content that resonates with our audience. Highly recommended!",
    initials: "ER",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 300);
    // Pause auto-play briefly, then resume
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-24 md:scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Testimonials"
          description="What clients and colleagues say about working with me"
        />

        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <Card className="overflow-hidden border-2">
              <CardContent className="p-8 md:p-12">
                <div 
                  className={`flex flex-col items-center text-center space-y-6 transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="text-primary/20">
                    <Quote className="w-12 h-12 md:w-16 md:h-16" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl">
                    "{testimonials[currentIndex].feedback}"
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center space-y-3 pt-4">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                        {testimonials[currentIndex].company && (
                          <span> • {testimonials[currentIndex].company}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background border-2 rounded-full p-2 md:p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background border-2 rounded-full p-2 md:p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


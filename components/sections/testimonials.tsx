"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="Testimonials"
          description="What clients and colleagues say about working with me"
        />

        <FadeIn>
          <div className="relative">
            {/* Apple Glass Card */}
            <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-border/50 shadow-2xl min-h-[320px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center space-y-6 max-w-3xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Quote className="w-6 h-6" />
                  </div>

                  <p className="text-base sm:text-xl font-medium text-foreground/90 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].feedback}&rdquo;
                  </p>

                  <div className="flex flex-col items-center space-y-2 pt-2">
                    <Avatar className="w-14 h-14 border-2 border-primary/20 shadow-md">
                      <AvatarFallback className="text-base font-bold bg-primary/10 text-primary">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-base text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium">
                        {testimonials[currentIndex].role}
                        {testimonials[currentIndex].company && (
                          <span> • {testimonials[currentIndex].company}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Apple Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-pill flex items-center justify-center text-foreground hover:text-primary transition-all shadow-xl z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-pill flex items-center justify-center text-foreground hover:text-primary transition-all shadow-xl z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Apple Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2.5 bg-primary shadow-sm"
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
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


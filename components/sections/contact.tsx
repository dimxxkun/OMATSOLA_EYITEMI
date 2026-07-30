"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Get In Touch"
          description="Let's connect and discuss how we can work together"
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Bento */}
          <FadeIn delay={100}>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card rounded-3xl p-8 sm:p-10 space-y-6 h-full flex flex-col justify-between border border-border/50 shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Contact Information</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                  Reach out through any channel
                </p>

                <div className="space-y-3 mt-8">
                  <a
                    href="mailto:omatsolaeyitemi315@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-pill hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        omatsolaeyitemi315@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/eyitemi-omatsola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-pill hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        eyitemi-omatsola
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://x.com/temi_tmn?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-pill hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">X (Twitter)</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        @temi_tmn
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/themovienerdtv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl glass-pill hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Instagram</p>
                      <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors truncate">
                        @themovienerdtv
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Form Bento */}
          <FadeIn delay={200}>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card rounded-3xl p-8 sm:p-10 space-y-6 border border-border/50 shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Send a Message</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                  Fill out the form below and I&apos;ll respond promptly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-2xl border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all ${
                      errors.name ? "border-destructive focus:ring-destructive" : "border-border/60"
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-2xl border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all ${
                      errors.email ? "border-destructive focus:ring-destructive" : "border-border/60"
                    }`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-2xl border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm transition-all ${
                      errors.message ? "border-destructive focus:ring-destructive" : "border-border/60"
                    }`}
                    placeholder="Your message..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <p className="text-xs font-semibold">Message sent successfully! I&apos;ll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-xs font-semibold">Something went wrong. Please try again or email directly.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full py-6 text-sm font-bold shadow-lg shadow-primary/20 gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


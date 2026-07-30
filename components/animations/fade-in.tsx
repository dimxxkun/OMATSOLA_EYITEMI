"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const getVariants = () => {
    const offset = 30;
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: offset }, visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } };
      default:
        return { hidden: { opacity: 0, y: offset }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}


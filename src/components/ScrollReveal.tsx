"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  variant = "fade-up",
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      case "fade-in":
        return isVisible ? "opacity-100" : "opacity-0";
      case "scale-up":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "slide-left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "slide-right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight"

interface ScrollAnimationProps {
  children: React.ReactNode
  type?: AnimationType
  className?: string
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function ScrollAnimation({
  children,
  type = "fadeIn",
  className,
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin })

  const animationClasses = {
    fadeIn: "opacity-0 translate-y-8",
    scaleIn: "opacity-0 scale-95",
    slideInLeft: "opacity-0 -translate-x-8",
    slideInRight: "opacity-0 translate-x-8",
  }

  const animationStyles = isVisible
    ? {
        opacity: 1,
        transform: "none",
        transition: `opacity 0.6s ease, transform 0.6s ease ${delay}s`,
      }
    : {}

  return (
    <div ref={ref} className={cn(animationClasses[type], className)} style={animationStyles}>
      {children}
    </div>
  )
}

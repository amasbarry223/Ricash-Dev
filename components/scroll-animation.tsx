"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        } else {
          // Optionnel : réinitialiser l'animation si l'élément sort de la vue
          // setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const directionClasses = {
    up: "translate-y-8 opacity-0",
    down: "-translate-y-8 opacity-0",
    left: "-translate-x-8 opacity-0",
    right: "translate-x-8 opacity-0",
    fade: "opacity-0",
  }

  return (
    <div
      ref={ref}
      data-scroll-animation
      className={cn(
        "transition-all duration-500 ease-out",
        !isVisible && directionClasses[direction],
        isVisible && "translate-y-0 translate-x-0 opacity-100 is-visible",
        className
      )}
      style={!isVisible ? { willChange: 'transform, opacity' } : { willChange: 'auto' }}
    >
      {children}
    </div>
  )
}


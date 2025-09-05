'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  delay?: number
  duration?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const { threshold = 0.1, delay = 0, duration = 600 } = options

  useEffect(() => {
    const currentElement = elementRef.current
    
    if (!currentElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold }
    )

    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay])

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  }

  return { elementRef, style, isVisible }
}

// Componente wrapper para facilitar o uso
interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 600, 
  threshold = 0.1,
  className = '',
  direction = 'up'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentElement = elementRef.current
    
    if (!currentElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold }
    )

    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, delay])

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)'
    
    switch (direction) {
      case 'up': return 'translateY(50px)'
      case 'down': return 'translateY(-50px)'
      case 'left': return 'translateX(50px)'
      case 'right': return 'translateX(-50px)'
      case 'fade': return 'translate(0, 0)'
      default: return 'translateY(50px)'
    }
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  }

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  )
}

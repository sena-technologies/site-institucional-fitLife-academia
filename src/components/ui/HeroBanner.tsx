import { ReactNode } from 'react'

interface HeroBannerProps {
  title: ReactNode
  subtitle?: string
  backgroundImage: string
  className?: string
}

export default function HeroBanner({ title, subtitle, backgroundImage, className = "" }: HeroBannerProps) {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-ken-burns"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

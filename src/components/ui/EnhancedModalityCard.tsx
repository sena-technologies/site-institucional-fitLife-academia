'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface EnhancedModalityCardProps {
  name: string
  icon: string
  description: string
  benefits: string[]
  purpose: string
  targetAudience: string
  schedule: {
    days: string[]
    times: string[]
  }
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado'
  duration: string
  image?: string
}

export default function EnhancedModalityCard({ 
  name, 
  icon, 
  description, 
  benefits,
  purpose,
  targetAudience,
  schedule, 
  difficulty, 
  duration,
  image
}: EnhancedModalityCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Detecta cliques em qualquer lugar da página para fechar o modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showDetails && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowDetails(false)
      }
    }

    if (showDetails) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [showDetails])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400 bg-green-400/20 border-green-400/50'
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/50'
      case 'Avançado': return 'text-red-400 bg-red-400/20 border-red-400/50'
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/50'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return '🌱'
      case 'Intermediário': return '⚡'
      case 'Avançado': return '🔥'
      default: return '❓'
    }
  }

  return (
    <Card className="bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700 overflow-hidden hover:border-red-500/50 transition-all duration-300 card-glow h-full flex flex-col">
      {/* Header com imagem de fundo - altura fixa */}
      <div 
        className="relative h-40 flex items-center justify-center bg-gradient-to-br from-red-600/20 to-yellow-600/20"
        style={{
          backgroundImage: image ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs rounded-full border ${getDifficultyColor(difficulty)}`}>
            {getDifficultyIcon(difficulty)} {difficulty}
          </span>
        </div>
      </div>

      {/* Conteúdo Principal - flex-1 para ocupar espaço restante */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            {name}
          </h3>
          <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
            ⏱️ {duration}
          </div>
        </div>
        
        {/* Descrição com altura mínima fixa */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[2.5rem]">{description}</p>
        
        {/* Benefícios rápidos */}
        <div className="flex flex-wrap gap-1 mb-4 min-h-[2rem]">
          {benefits.slice(0, 2).map((benefit, index) => (
            <span key={index} className="text-xs bg-red-600/20 text-red-300 px-2 py-1 rounded-full">
              ✨ {benefit}
            </span>
          ))}
          {benefits.length > 2 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              +{benefits.length - 2} mais
            </span>
          )}
        </div>

        {/* Horários resumidos com altura fixa */}
        <div className="text-xs text-gray-400 mb-4 min-h-[2.5rem]">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>{schedule.days.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span>🕐</span>
            <span>{schedule.times.slice(0, 3).join(", ")}</span>
            {schedule.times.length > 3 && <span>+{schedule.times.length - 3}</span>}
          </div>
        </div>

        {/* Botão Saiba Mais - sempre no final */}
        <div className="mt-auto">
          <Button 
            onClick={() => setShowDetails(true)}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-semibold py-2"
          >
            📖 Saiba Mais
          </Button>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] modal-overlay">
          <div 
            ref={modalRef}
            className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
          >
            {/* Header do Modal */}
            <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{name}</h3>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full border mt-2 ${getDifficultyColor(difficulty)}`}>
                      {getDifficultyIcon(difficulty)} {difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-white text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 space-y-8">
              {/* Para que serve */}
              <div className="p-4 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 rounded-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  🎯 Para que serve
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">{purpose}</p>
              </div>

              {/* Benefícios */}
              <div className="p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-lg">
                <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  💪 Principais Benefícios
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-300 p-2 bg-green-600/5 rounded">
                      <span className="text-green-400 text-lg">✓</span>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Público Alvo */}
              <div className="p-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/20 rounded-lg">
                <h4 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                  👥 Ideal para
                </h4>
                <p className="text-gray-300 text-lg leading-relaxed">{targetAudience}</p>
              </div>

              {/* Horários Completos */}
              <div className="p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20 rounded-lg">
                <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  📅 Horários Disponíveis
                </h4>
                <div className="space-y-3">
                  {schedule.days.map((day, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 bg-purple-600/5 rounded">
                      <span className="text-gray-300 font-semibold text-lg">{day}:</span>
                      <div className="flex flex-wrap gap-2">
                        {schedule.times.map((time, timeIndex) => (
                          <span key={timeIndex} className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm font-medium">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-400 bg-gray-800 px-4 py-2 rounded-full">
                    ⏱️ Duração: <span className="text-white font-semibold">{duration}</span> • 📍 <span className="text-red-400">Vagas limitadas</span>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-gray-700 text-center">
                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button 
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 text-lg neon-glow"
                    >
                      🚀 Quero Começar Agora!
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Entre em contato conosco e agende sua <span className="text-yellow-400 font-semibold">aula experimental gratuita</span>. 
                    Venha conhecer nossa estrutura e professores especializados!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

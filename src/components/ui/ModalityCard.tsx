'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

interface ModalityCardProps {
  name: string
  icon: string
  description: string
  benefits?: string[]
  purpose?: string
  targetAudience?: string
  schedule: {
    days: string[]
    times: string[]
  }
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado'
  duration: string
}

export default function ModalityCard({ 
  name, 
  icon, 
  description, 
  benefits = [],
  purpose = "",
  targetAudience = "",
  schedule, 
  difficulty, 
  duration
}: ModalityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400 bg-green-400/20'
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/20'
      case 'Avançado': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getImagePath = () => {
    const imageName = name.toLowerCase()
      .replace('ç', 'c')
      .replace('ã', 'a')
      .replace(' ', '-')
    
    const imageMap: { [key: string]: string } = {
      'musculacao': '/musculacao.avif',
      'crossfit': '/crossfit.avif',
      'pilates': '/pilates.avif',
      'spinning': '/spinning.avif',
      'yoga': '/yoga.webp',
      'natacao': '/natacao.avif',
      'danca': '/danca.jpg',
      'boxing': '/boxing.avif',
      'funcional': '/funcional.avif',
      'muay-thai': '/muay-thai.avif',
      'alongamento': '/alonamento.avif',
      'zumba': '/zumba.jpg'
    }

    return imageMap[imageName] || '/musculacao.avif'
  }

  return (
    <>
      <Card className="bg-gray-900 border-gray-700 overflow-hidden hover-card cursor-pointer transition-all duration-300 h-full flex flex-col">
        {/* Imagem da modalidade */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={getImagePath()}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Badge de dificuldade */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
          
          {/* Ícone da modalidade */}
          <div className="absolute bottom-3 left-3">
            <div className="text-3xl">{icon}</div>
          </div>
        </div>

        {/* Conteúdo do card */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-1">{description}</p>
          
          <div className="flex justify-between items-center mb-4 text-xs">
            <span className="text-gray-500">📅 {duration}</span>
            <span className="text-gray-500">⏰ {schedule.times.length} horários</span>
          </div>

          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            Saiba Mais
          </Button>
        </div>
      </Card>

      {/* Modal com informações detalhadas */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            {/* Header do modal */}
            <div className="relative h-64 w-full">
              <Image
                src={getImagePath()}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Botão fechar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              
              {/* Título e ícone */}
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(difficulty)}`}>
                      {difficulty}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-6 space-y-6">
              {/* O que é */}
              {purpose && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">O que é?</h3>
                  <p className="text-gray-300 leading-relaxed">{purpose}</p>
                </div>
              )}

              {/* Benefícios principais */}
              {benefits.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Principais Benefícios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Para quem serve */}
              {targetAudience && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Para quem serve?</h3>
                  <p className="text-gray-300 leading-relaxed">{targetAudience}</p>
                </div>
              )}

              {/* Horários disponíveis */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Horários Disponíveis</h3>
                <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                  {schedule.days.map((day, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">{day}</span>
                      <div className="flex flex-wrap gap-1">
                        {schedule.times.map((time, timeIndex) => (
                          <span key={timeIndex} className="text-red-400 bg-red-400/20 px-2 py-1 rounded text-xs font-medium">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-gray-700 text-center">
                    <span className="text-xs text-gray-500">
                      � Duração: {duration} • 👥 Vagas limitadas
                    </span>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button 
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Voltar
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold">
                  🚀 Quero Começar Agora!
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'

interface ModalityCardProps {
  name: string
  icon: string
  description: string
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
  schedule, 
  difficulty, 
  duration 
}: ModalityCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400 bg-green-400/20'
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/20'
      case 'Avançado': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  return (
    <div className="relative h-full">
      <Card 
        className="bg-gray-900 border-gray-700 p-6 text-center hover-card cursor-pointer transition-all duration-300 h-full flex flex-col justify-between min-h-[280px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-4xl mb-4 animate-float">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-1">{description}</p>
        </div>
        
        <div className="flex justify-between items-center text-xs mt-auto">
          <span className={`px-2 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
          <span className="text-gray-500">{duration}</span>
        </div>
      </Card>

      {/* Tooltip com horários - movido para fora do Card */}
      <div className={`absolute left-0 right-0 top-full mt-2 z-[9999] transition-all duration-300 pointer-events-none ${
        isHovered ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2'
      }`}>
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-2xl relative">
          {/* Seta apontando para cima */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-l border-t border-gray-600 rotate-45"></div>
          
          <h4 className="text-white font-semibold mb-3 text-center">Horários de {name}</h4>
          <div className="space-y-2">
            {schedule.days.map((day, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-gray-400">{day}:</span>
                <div className="flex flex-wrap gap-1">
                  {schedule.times.map((time, timeIndex) => (
                    <span key={timeIndex} className="text-red-400 bg-red-400/20 px-2 py-1 rounded text-xs">
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-600 text-center">
            <span className="text-xs text-gray-500">
              📍 Duração: {duration} • 👥 Vagas limitadas
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

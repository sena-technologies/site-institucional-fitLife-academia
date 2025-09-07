'use client'

import { useState } from 'react'
import { Clock, Calendar, Users, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/hooks/useScrollReveal'

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('segunda')

  const horarios = {
    segunda: [
      { hora: '06:00', atividade: 'Musculação', instrutor: 'João Silva', vagas: 20, ocupadas: 15 },
      { hora: '07:00', atividade: 'CrossFit', instrutor: 'Maria Santos', vagas: 15, ocupadas: 12 },
      { hora: '08:30', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 8 },
      { hora: '09:00', atividade: 'Pilates', instrutor: 'Carlos Pereira', vagas: 12, ocupadas: 10 },
      { hora: '14:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 25, ocupadas: 18 },
      { hora: '17:00', atividade: 'Pilates', instrutor: 'Ana Costa', vagas: 12, ocupadas: 7 },
      { hora: '18:00', atividade: 'CrossFit', instrutor: 'João Silva', vagas: 15, ocupadas: 15 },
      { hora: '18:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 16 },
      { hora: '19:00', atividade: 'Dança', instrutor: 'Sofia Lima', vagas: 18, ocupadas: 12 },
      { hora: '19:30', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 14 },
      { hora: '20:00', atividade: 'Musculação', instrutor: 'Carlos Pereira', vagas: 25, ocupadas: 20 }
    ],
    terca: [
      { hora: '06:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 20, ocupadas: 12 },
      { hora: '07:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 18 },
      { hora: '09:00', atividade: 'Pilates', instrutor: 'Ana Costa', vagas: 12, ocupadas: 9 },
      { hora: '14:00', atividade: 'Musculação', instrutor: 'João Silva', vagas: 25, ocupadas: 15 },
      { hora: '17:30', atividade: 'Yoga', instrutor: 'Maria Santos', vagas: 20, ocupadas: 11 },
      { hora: '18:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 17 },
      { hora: '19:00', atividade: 'Dança', instrutor: 'Sofia Lima', vagas: 18, ocupadas: 14 },
      { hora: '20:00', atividade: 'Spinning', instrutor: 'Pedro Oliveira', vagas: 20, ocupadas: 19 }
    ],
    quarta: [
      { hora: '06:00', atividade: 'Musculação', instrutor: 'Carlos Pereira', vagas: 20, ocupadas: 16 },
      { hora: '07:00', atividade: 'CrossFit', instrutor: 'Maria Santos', vagas: 15, ocupadas: 13 },
      { hora: '08:30', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 10 },
      { hora: '09:00', atividade: 'Pilates', instrutor: 'João Silva', vagas: 12, ocupadas: 8 },
      { hora: '14:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 25, ocupadas: 22 },
      { hora: '17:00', atividade: 'Pilates', instrutor: 'Ana Costa', vagas: 12, ocupadas: 11 },
      { hora: '18:00', atividade: 'CrossFit', instrutor: 'João Silva', vagas: 15, ocupadas: 12 },
      { hora: '18:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 15 },
      { hora: '19:30', atividade: 'Yoga', instrutor: 'Maria Santos', vagas: 20, ocupadas: 13 },
      { hora: '20:00', atividade: 'Musculação', instrutor: 'Carlos Pereira', vagas: 25, ocupadas: 18 }
    ],
    quinta: [
      { hora: '06:00', atividade: 'Musculação', instrutor: 'João Silva', vagas: 20, ocupadas: 14 },
      { hora: '07:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 16 },
      { hora: '09:00', atividade: 'Pilates', instrutor: 'Ana Costa', vagas: 12, ocupadas: 7 },
      { hora: '14:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 25, ocupadas: 19 },
      { hora: '17:30', atividade: 'Yoga', instrutor: 'Carlos Pereira', vagas: 20, ocupadas: 9 },
      { hora: '18:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 20 },
      { hora: '19:00', atividade: 'Dança', instrutor: 'Sofia Lima', vagas: 18, ocupadas: 16 },
      { hora: '20:00', atividade: 'Spinning', instrutor: 'Maria Santos', vagas: 20, ocupadas: 17 }
    ],
    sexta: [
      { hora: '06:00', atividade: 'Musculação', instrutor: 'Carlos Pereira', vagas: 20, ocupadas: 17 },
      { hora: '07:00', atividade: 'CrossFit', instrutor: 'João Silva', vagas: 15, ocupadas: 14 },
      { hora: '08:30', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 12 },
      { hora: '09:00', atividade: 'Pilates', instrutor: 'Maria Santos', vagas: 12, ocupadas: 9 },
      { hora: '14:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 25, ocupadas: 20 },
      { hora: '17:00', atividade: 'Pilates', instrutor: 'Ana Costa', vagas: 12, ocupadas: 8 },
      { hora: '18:00', atividade: 'CrossFit', instrutor: 'João Silva', vagas: 15, ocupadas: 13 },
      { hora: '18:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 18 },
      { hora: '19:30', atividade: 'Yoga', instrutor: 'Carlos Pereira', vagas: 20, ocupadas: 15 },
      { hora: '20:00', atividade: 'Musculação', instrutor: 'Maria Santos', vagas: 25, ocupadas: 22 }
    ],
    sabado: [
      { hora: '08:00', atividade: 'Musculação', instrutor: 'João Silva', vagas: 20, ocupadas: 13 },
      { hora: '09:00', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 16 },
      { hora: '09:30', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 14 },
      { hora: '10:00', atividade: 'Pilates', instrutor: 'Maria Santos', vagas: 12, ocupadas: 10 },
      { hora: '11:00', atividade: 'CrossFit', instrutor: 'Carlos Pereira', vagas: 15, ocupadas: 11 },
      { hora: '15:00', atividade: 'Musculação', instrutor: 'Pedro Oliveira', vagas: 20, ocupadas: 8 },
      { hora: '16:00', atividade: 'Dança', instrutor: 'Sofia Lima', vagas: 18, ocupadas: 12 }
    ],
    domingo: [
      { hora: '09:00', atividade: 'Yoga', instrutor: 'Ana Costa', vagas: 20, ocupadas: 14 },
      { hora: '10:00', atividade: 'Pilates', instrutor: 'Maria Santos', vagas: 12, ocupadas: 8 },
      { hora: '15:00', atividade: 'Musculação', instrutor: 'João Silva', vagas: 20, ocupadas: 6 },
      { hora: '16:00', atividade: 'Spinning', instrutor: 'Laura Silva', vagas: 20, ocupadas: 9 }
    ]
  }

  const diasSemana = [
    { key: 'segunda', nome: 'Segunda-feira', abrev: 'SEG' },
    { key: 'terca', nome: 'Terça-feira', abrev: 'TER' },
    { key: 'quarta', nome: 'Quarta-feira', abrev: 'QUA' },
    { key: 'quinta', nome: 'Quinta-feira', abrev: 'QUI' },
    { key: 'sexta', nome: 'Sexta-feira', abrev: 'SEX' },
    { key: 'sabado', nome: 'Sábado', abrev: 'SAB' },
    { key: 'domingo', nome: 'Domingo', abrev: 'DOM' }
  ]

  const getStatusVaga = (ocupadas: number, vagas: number) => {
    const percentual = (ocupadas / vagas) * 100
    if (percentual >= 90) return { status: 'lotado', cor: 'bg-red-500', texto: 'Lotado' }
    if (percentual >= 70) return { status: 'cheio', cor: 'bg-yellow-500', texto: 'Quase Cheio' }
    return { status: 'disponivel', cor: 'bg-green-500', texto: 'Disponível' }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 animate-ken-burns opacity-30" 
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="block text-white animate-fade-in-up">NOSSOS</span>
              <span className="block gradient-text animate-fade-in-up animation-delay-200 neon-glow">HORÁRIOS</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-400 leading-relaxed">
              Confira todos os horários das nossas modalidades e planeje seu treino. 
              <br /><span className="text-red-400 font-semibold">Reserve sua vaga</span> e garante sua presença!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <a href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-red-500/25 neon-glow">
                  📞 FALE CONOSCO
                </Button>
              </a>
              <a href="/plans">
                <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-yellow-400/25">
                  💪 VER PLANOS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seletor de Dias */}
      <section className="py-8 bg-black/30">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {diasSemana.map((dia) => (
                <button
                  key={dia.key}
                  onClick={() => setSelectedDay(dia.key)}
                  className={`px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
                    selectedDay === dia.key
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white scale-105 shadow-lg shadow-red-600/30'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="hidden sm:block">{dia.nome}</span>
                  <span className="sm:hidden">{dia.abrev}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grade de Horários */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-red-400" />
                  {diasSemana.find(d => d.key === selectedDay)?.nome}
                </h2>
              </div>

              <div className="p-6">
                <div className="grid gap-4">
                  {horarios[selectedDay as keyof typeof horarios].map((aula, index) => {
                    const status = getStatusVaga(aula.ocupadas, aula.vagas)
                    
                    return (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-2xl font-black text-red-400">{aula.hora}</div>
                              <Clock className="w-4 h-4 text-gray-400 mx-auto mt-1" />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">{aula.atividade}</h3>
                              <p className="text-gray-300 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Instrutor: {aula.instrutor}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-sm text-gray-400">Vagas</div>
                              <div className="text-lg font-bold text-white">
                                {aula.vagas - aula.ocupadas}/{aula.vagas}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${status.cor}`}></div>
                              <span className={`text-sm font-medium ${
                                status.status === 'lotado' ? 'text-red-400' :
                                status.status === 'cheio' ? 'text-yellow-400' : 'text-green-400'
                              }`}>
                                {status.texto}
                              </span>
                            </div>

                            <button
                              disabled={status.status === 'lotado'}
                              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                status.status === 'lotado'
                                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                  : 'bg-red-600 hover:bg-red-700 text-white hover:scale-105 shadow-lg hover:shadow-red-600/30'
                              }`}
                            >
                              {status.status === 'lotado' ? 'Lotado' : 'Reservar'}
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Informações <span className="text-red-400">Importantes</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold">06:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-semibold">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-semibold">09:00 - 17:00</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-400" />
                    Reservas e Cancelamentos
                  </h3>
                  <div className="space-y-2 text-gray-300 text-sm">
                    <p>• Reservas podem ser feitas até 2h antes da aula</p>
                    <p>• Cancelamentos até 1h antes sem penalidade</p>
                    <p>• Máximo 3 faltas consecutivas sem justificativa</p>
                    <p>• Reposições disponíveis dentro do mês</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">
                    🔥 Primeira Semana Grátis!
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Experimente todas as modalidades sem compromisso
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-4 h-4" />
                      Fale Conosco
                    </a>
                    <a
                      href="/plans"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-lg font-medium transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver Planos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

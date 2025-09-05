import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import HeroBanner from "@/components/ui/HeroBanner";
import ModalityCard from "@/components/ui/ModalityCard";
import Link from "next/link";
import { Check, X, Star, Clock, Users } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function Plans() {
  const plans = [
    {
      name: "Básico",
      price: 89,
      description: "Ideal para iniciantes",
      popular: false,
      features: [
        { name: "Acesso à musculação", included: true },
        { name: "Horário comercial (6h-22h)", included: true },
        { name: "Avaliação física inicial", included: true },
        { name: "Vestiários e chuveiros", included: true },
        { name: "Acesso 24 horas", included: false },
        { name: "Aulas em grupo", included: false },
        { name: "Personal trainer", included: false },
        { name: "Nutricionista", included: false },
        { name: "Área VIP", included: false },
        { name: "Estacionamento", included: true },
      ]
    },
    {
      name: "Premium",
      price: 139,
      description: "Para quem quer resultados",
      popular: true,
      features: [
        { name: "Acesso à musculação", included: true },
        { name: "Acesso 24 horas", included: true },
        { name: "Avaliação física completa", included: true },
        { name: "Todas as aulas em grupo", included: true },
        { name: "Personal trainer (2x/mês)", included: true },
        { name: "Consulta com nutricionista", included: true },
        { name: "App exclusivo de treinos", included: true },
        { name: "Vestiários premium", included: true },
        { name: "Área VIP", included: false },
        { name: "Estacionamento", included: true },
      ]
    },
    {
      name: "VIP",
      price: 199,
      description: "Experiência completa",
      popular: false,
      features: [
        { name: "Tudo do plano Premium", included: true },
        { name: "Personal trainer ilimitado", included: true },
        { name: "Área VIP exclusiva", included: true },
        { name: "Massagem terapêutica (1x/mês)", included: true },
        { name: "Toalhas inclusas", included: true },
        { name: "Bebidas isotônicas gratuitas", included: true },
        { name: "Acesso a workshops exclusivos", included: true },
        { name: "Acompanhamento nutricional", included: true },
        { name: "Estacionamento valet", included: true },
        { name: "Suporte 24h via WhatsApp", included: true },
      ]
    }
  ];

  const schedules = [
    {
      day: "Segunda a Sexta",
      hours: "06:00 - 23:00",
      icon: <Clock className="w-5 h-5" />
    },
    {
      day: "Sábados",
      hours: "07:00 - 20:00", 
      icon: <Clock className="w-5 h-5" />
    },
    {
      day: "Domingos e Feriados",
      hours: "08:00 - 18:00",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const modalidades = [
    {
      name: "Musculação",
      icon: "💪",
      description: "Equipamentos de última geração para todos os níveis",
      schedule: {
        days: ["Segunda a Sexta", "Sábados", "Domingos"],
        times: ["06:00", "08:00", "14:00", "18:00", "20:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "Livre"
    },
    {
      name: "Crossfit",
      icon: "🏋️‍♂️",
      description: "Treino funcional de alta intensidade",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Terça, Quinta"],
        times: ["07:00", "18:00", "19:30"]
      },
      difficulty: "Avançado" as const,
      duration: "60 min"
    },
    {
      name: "Pilates",
      icon: "🧘‍♀️",
      description: "Fortalecimento do core e flexibilidade",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Terça, Quinta"],
        times: ["09:00", "17:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "50 min"
    },
    {
      name: "Spinning",
      icon: "🚴‍♂️",
      description: "Cardio intenso com música motivacional",
      schedule: {
        days: ["Todos os dias"],
        times: ["07:30", "18:30", "20:00"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    },
    {
      name: "Yoga",
      icon: "🕉️",
      description: "Relaxamento, equilíbrio e bem-estar",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Sábados"],
        times: ["08:30", "17:30", "19:30"]
      },
      difficulty: "Iniciante" as const,
      duration: "60 min"
    },
    {
      name: "Natação",
      icon: "🏊‍♂️",
      description: "Piscina aquecida com raias profissionais",
      schedule: {
        days: ["Todos os dias"],
        times: ["06:30", "12:00", "17:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "Livre"
    },
    {
      name: "Dança",
      icon: "💃",
      description: "Ritmo, diversão e exercício cardiovascular",
      schedule: {
        days: ["Terça, Quinta", "Sábados"],
        times: ["19:00", "20:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "50 min"
    },
    {
      name: "Boxing",
      icon: "🥊",
      description: "Defesa pessoal e condicionamento físico",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Sábados"],
        times: ["18:00", "19:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "55 min"
    },
    {
      name: "Funcional",
      icon: "🤸‍♂️",
      description: "Exercícios que simulam movimentos do dia a dia",
      schedule: {
        days: ["Todos os dias"],
        times: ["07:00", "17:00", "18:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    },
    {
      name: "HIIT",
      icon: "⚡",
      description: "Treino intervalado de alta intensidade",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["07:30", "18:00"]
      },
      difficulty: "Avançado" as const,
      duration: "30 min"
    },
    {
      name: "Stretching",
      icon: "🤸‍♀️",
      description: "Alongamento e mobilidade corporal",
      schedule: {
        days: ["Todos os dias"],
        times: ["08:00", "12:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "40 min"
    },
    {
      name: "TRX",
      icon: "🕷️",
      description: "Treinamento suspenso com peso corporal",
      schedule: {
        days: ["Terça, Quinta", "Sábados"],
        times: ["07:00", "18:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroBanner 
        title={<>Planos e <span className="text-red-500">Preços</span></>}
        subtitle="Escolha o plano ideal para seus objetivos e comece sua transformação hoje mesmo"
        backgroundImage="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80"
      />

      {/* Planos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nossos Planos
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Planos flexíveis e transparentes, sem taxas escondidas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative hover-card animate-fade-in-up ${
                plan.popular ? 'border-red-500 lg:scale-105 animate-pulse-red' : ''
              } ${index === 0 ? '' : index === 1 ? 'animation-delay-200' : 'animation-delay-400'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-float">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl animate-fade-in">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-white mt-4 animate-scale-in animation-delay-200">
                    R$ {plan.price}
                    <span className="text-lg text-gray-400 font-normal">/mês</span>
                  </div>
                  <p className="text-gray-400 mt-2 animate-fade-in animation-delay-400">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-red-500 hover:bg-red-600' : ''}`}
                  >
                    Escolher {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gray-900/50 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              🎁 Promoção de Lançamento
            </h3>
            <p className="text-gray-400 mb-4">
              Matricule-se agora e ganhe <strong className="text-red-400">1 mês grátis</strong> + avaliação física completa
            </p>
            <p className="text-sm text-gray-500">
              *Válido para novos alunos até o final do mês
            </p>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Horários de Funcionamento
            </h2>
            <p className="text-lg text-gray-400">
              Flexibilidade para treinar no seu tempo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedules.map((schedule, index) => (
              <Card key={index}>
                <CardContent className="text-center pt-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {schedule.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {schedule.day}
                  </h3>
                  <p className="text-2xl font-bold text-red-400">
                    {schedule.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 rounded-lg">
              <Users className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-medium">
                Planos Premium e VIP têm acesso 24 horas nos dias úteis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Modalidades Disponíveis
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Mais de 15 atividades diferentes para você variar seus treinos e manter a motivação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modalidades.map((modalidade, index) => (
              <div key={index} className={`animate-fade-in-up animation-delay-${(index % 4) * 200}`}>
                <ModalityCard
                  name={modalidade.name}
                  icon={modalidade.icon}
                  description={modalidade.description}
                  schedule={modalidade.schedule}
                  difficulty={modalidade.difficulty}
                  duration={modalidade.duration}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Todas as modalidades estão incluídas nos planos Premium e VIP
            </p>
            <Link href="/contact">
              <Button size="lg">
                Conhecer as Modalidades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Escolha seu plano e dê o primeiro passo rumo à sua melhor versão
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100">
                Falar com Consultor
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600">
              WhatsApp: (11) 98765-4321
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

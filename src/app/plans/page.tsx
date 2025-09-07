import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import ModalityCard from "@/components/ui/ModalityCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function PlansPage() {
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
        days: ["Segunda, Quarta, Sexta"],
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
        days: ["Terça, Quinta", "Sábados"],
        times: ["08:00", "17:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "50 min"
    },
    {
      name: "Spinning",
      icon: "🚴‍♂️",
      description: "Cardio intenso com música motivacional",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Sábados"],
        times: ["07:30", "18:30", "19:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    },
    {
      name: "Yoga",
      icon: "🧘",
      description: "Relaxamento, equilíbrio e bem-estar",
      schedule: {
        days: ["Terça, Quinta", "Domingos"],
        times: ["08:00", "19:00"]
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
        times: ["06:00", "12:00", "18:00"]
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80')`
        }}
      >
        <div className="absolute inset-0 animate-ken-burns opacity-30" 
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
        </div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            PLANOS E 
            <span className="block text-red-600 animate-pulse-red">PREÇOS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Escolha o plano ideal para seus objetivos e comece sua transformação hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 hover-scale">
                Começar Agora
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black hover-scale">
                Agendar Visita
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Planos em Destaque */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nossos <span className="text-red-600">Planos</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Escolha o plano que melhor se adapta ao seu estilo de vida e objetivos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <ScrollReveal delay={200} direction="left">
              <Card className="bg-gray-800 border-gray-700 p-8 text-center hover-card">
                <h3 className="text-2xl font-bold text-white mb-4">Básico</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-red-600">R$ 89</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Acesso à musculação</li>
                  <li>✓ Vestiário com armários</li>
                  <li>✓ Avaliação física inicial</li>
                  <li>✓ App FitLife</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 hover-scale">
                    Escolher Plano
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>

            {/* Plano Premium */}
            <ScrollReveal delay={300}>
              <Card className="bg-red-600 border-red-500 p-8 text-center transform scale-105 hover-card animate-pulse-red">
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm mb-4 inline-block animate-float">
                  MAIS POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">R$ 139</span>
                  <span className="text-red-200">/mês</span>
                </div>
                <ul className="text-white space-y-3 mb-8">
                  <li>✓ Todos os benefícios do Básico</li>
                  <li>✓ Aulas coletivas ilimitadas</li>
                  <li>✓ Área de funcional</li>
                  <li>✓ 2 avaliações mensais</li>
                  <li>✓ Zona VIP</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white hover-scale">
                    Escolher Plano
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>

            {/* Plano VIP */}
            <ScrollReveal delay={400} direction="right">
              <Card className="bg-gray-800 border-gray-700 p-8 text-center hover-card">
                <h3 className="text-2xl font-bold text-white mb-4">VIP</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-red-600">R$ 199</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>✓ Todos os benefícios do Premium</li>
                  <li>✓ Personal trainer 2x/semana</li>
                  <li>✓ Nutricionista incluso</li>
                  <li>✓ Acesso 24h</li>
                  <li>✓ Estacionamento gratuito</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-red-600 hover:bg-red-700 hover-scale">
                    Escolher Plano
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link href="/contact">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Falar com consultor
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modalidades Disponíveis */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Modalidades <span className="text-red-600">Disponíveis</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Descubra todas as atividades que você pode praticar em nossos planos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-32">
            {modalidades.map((modalidade, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)} direction="up">
                <ModalityCard
                  name={modalidade.name}
                  icon={modalidade.icon}
                  description={modalidade.description}
                  schedule={modalidade.schedule}
                  difficulty={modalidade.difficulty}
                  duration={modalidade.duration}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={100}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para começar sua transformação?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Escolha seu plano ideal e comece hoje mesmo. Primeira semana grátis!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white hover-scale">
                  Começar Agora
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600 hover-scale">
                  Agendar Visita
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

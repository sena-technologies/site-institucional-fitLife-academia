import Link from "next/link";
import { Button } from "@/components/ui/Button";
import ModalityCard from "@/components/ui/ModalityCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function ModalitiesPage() {
  const todasModalidades = [
    {
      name: "Musculação",
      icon: "💪",
      description: "Equipamentos de última geração para fortalecer e definir músculos",
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
      description: "Treino funcional de alta intensidade para atletas de alto rendimento",
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
      description: "Fortalecimento do core, flexibilidade e postura corporal",
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
      description: "Aulas de ciclismo indoor com música motivacional",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Sábados"],
        times: ["07:30", "18:30", "19:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    },
    {
      name: "Yoga",
      icon: "🕉️",
      description: "Prática milenar para equilíbrio mental e flexibilidade",
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
      description: "Piscina aquecida com raias profissionais e instrutor",
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
      description: "Ritmo, diversão e exercício cardiovascular em grupo",
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
      description: "Defesa pessoal, condicionamento físico e autoestima",
      schedule: {
        days: ["Segunda, Quarta, Sexta", "Sábados"],
        times: ["18:00", "19:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "55 min"
    },
    {
      name: "Funcional",
      icon: "⚡",
      description: "Exercícios para o dia a dia com equipamentos variados",
      schedule: {
        days: ["Todos os dias"],
        times: ["07:00", "12:00", "17:00", "19:00"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min"
    },
    {
      name: "Muay Thai",
      icon: "🦵",
      description: "Arte marcial tailandesa para condicionamento total",
      schedule: {
        days: ["Terça, Quinta, Sábado"],
        times: ["18:30", "20:00"]
      },
      difficulty: "Avançado" as const,
      duration: "60 min"
    },
    {
      name: "Alongamento",
      icon: "🤸‍♀️",
      description: "Sessões de relaxamento e prevenção de lesões",
      schedule: {
        days: ["Todos os dias"],
        times: ["08:00", "12:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "30 min"
    },
    {
      name: "Zumba",
      icon: "🎵",
      description: "Dança fitness latina com música contagiante",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["19:30", "20:30"]
      },
      difficulty: "Iniciante" as const,
      duration: "45 min"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">
              <span className="gradient-text neon-glow">MODALIDADES</span>
              <br />
              <span className="text-3xl md:text-4xl font-light text-gray-300">Encontre sua paixão</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Descubra entre <span className="text-yellow-400 font-bold">12+ modalidades</span> diferentes 
              qual vai ser a sua <span className="text-red-400">transformação favorita</span>. 
              Do iniciante ao atleta de alta performance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/plans">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-10 py-4 text-lg neon-glow">
                  🔥 VER PLANOS
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 text-lg">
                  📅 AGENDAR AULA EXPERIMENTAL
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filtros de Dificuldade */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Filtre por <span className="text-red-400">Nível</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold">
                  🟢 Iniciante
                </span>
                <span className="px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold">
                  🟡 Intermediário
                </span>
                <span className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold">
                  🔴 Avançado
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid de Modalidades */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">
                Todas as <span className="gradient-text">Modalidades</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Mais de 100 aulas por semana esperando por você
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {todasModalidades.map((modalidade, index) => (
              <ScrollReveal key={index} delay={200 + (index * 50)} direction="up">
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

      {/* CTA de Experimentação */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={100}>
            <h2 className="text-5xl font-black text-white mb-8">
              Experimente <span className="text-yellow-400">GRATUITAMENTE</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
              Não pague nada na sua primeira semana! Teste todas as modalidades, 
              conheça nossos professores e descubra qual vai ser seu novo vício saudável.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-glow p-6 rounded-lg bg-black/20">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold text-white mb-2">Sem Compromisso</h3>
                <p className="text-gray-200">7 dias completos para testar tudo</p>
              </div>
              <div className="card-glow p-6 rounded-lg bg-black/20">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-bold text-white mb-2">Professores Expert</h3>
                <p className="text-gray-200">Acompanhamento profissional em cada aula</p>
              </div>
              <div className="card-glow p-6 rounded-lg bg-black/20">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2">Resultados Garantidos</h3>
                <p className="text-gray-200">Metodologia comprovada e eficiente</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Link href="/contact">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-4 text-xl neon-glow">
                🚀 COMEÇAR MINHA SEMANA GRÁTIS
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

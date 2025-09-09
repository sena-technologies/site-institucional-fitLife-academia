'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import EnhancedModalityCard from "@/components/ui/EnhancedModalityCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function ModalitiesPage() {
  const [filtroAtivo, setFiltroAtivo] = useState<'Todos' | 'Iniciante' | 'Intermediário' | 'Avançado'>('Todos');

  const todasModalidades = [
    {
      name: "Musculação",
      icon: "💪",
      description: "Equipamentos de última geração para fortalecer e definir músculos",
      benefits: [
        "Aumento da massa muscular",
        "Fortalecimento dos ossos",
        "Melhora do metabolismo",
        "Redução da gordura corporal",
        "Aumento da autoestima",
        "Prevenção de lesões"
      ],
      purpose: "A musculação é ideal para quem busca desenvolver força, resistência muscular e definição corporal. Utilizamos equipamentos de última geração em um ambiente seguro e supervisionado por profissionais qualificados.",
      targetAudience: "Pessoas de todas as idades que desejam melhorar sua composição corporal, aumentar a força e ter mais qualidade de vida.",
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
      benefits: [
        "Condicionamento físico completo",
        "Queima calórica intensa",
        "Desenvolvimento da agilidade",
        "Fortalecimento do core",
        "Melhora da coordenação",
        "Espírito de equipe"
      ],
      purpose: "O CrossFit combina exercícios de alta intensidade com movimentos funcionais, proporcionando um condicionamento físico completo. É perfeito para quem busca desafios e resultados rápidos.",
      targetAudience: "Atletas e pessoas com boa condição física que buscam superar limites e melhorar performance esportiva.",
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
      benefits: [
        "Melhora da postura corporal",
        "Fortalecimento do core",
        "Aumento da flexibilidade",
        "Redução de dores nas costas",
        "Equilíbrio e coordenação",
        "Relaxamento e bem-estar"
      ],
      purpose: "O Pilates é um método de exercícios que enfoca o fortalecimento dos músculos profundos, melhora da postura e flexibilidade. Ideal para reabilitação e prevenção de lesões.",
      targetAudience: "Pessoas que buscam melhorar a postura, reduzir dores nas costas, idosos, gestantes e pessoas em reabilitação.",
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
      benefits: [
        "Queima até 600 calorias/aula",
        "Fortalecimento das pernas",
        "Melhora cardiovascular",
        "Baixo impacto nas articulações",
        "Redução do estresse",
        "Trabalho em grupo motivador"
      ],
      purpose: "O Spinning é uma modalidade de ciclismo indoor com música energizante e instrutor motivador. Proporciona exercício cardiovascular intenso em um ambiente divertido.",
      targetAudience: "Pessoas que gostam de música, buscam queimar muitas calorias e preferem exercícios de baixo impacto nas articulações.",
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
      benefits: [
        "Redução do estresse e ansiedade",
        "Aumento da flexibilidade",
        "Melhora do equilíbrio",
        "Fortalecimento muscular",
        "Melhora da qualidade do sono",
        "Maior consciência corporal"
      ],
      purpose: "O Yoga é uma prática milenar que combina posturas físicas, respiração e meditação. Promove o bem-estar físico, mental e espiritual através de movimentos suaves e conscientes.",
      targetAudience: "Pessoas de todas as idades que buscam relaxamento, redução do estresse, melhora da flexibilidade e equilíbrio mente-corpo.",
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
      benefits: [
        "Exercício completo para todo o corpo",
        "Baixo impacto nas articulações",
        "Melhora da capacidade pulmonar",
        "Fortalecimento muscular",
        "Queima calórica elevada",
        "Relaxamento e bem-estar"
      ],
      purpose: "A natação é considerada o esporte mais completo, trabalhando todos os grupos musculares. Nossa piscina aquecida oferece conforto e segurança para todos os níveis.",
      targetAudience: "Pessoas com problemas articulares, idosos, crianças, atletas em recuperação e quem busca um exercício completo e de baixo impacto.",
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
      benefits: [
        "Queima calórica divertida",
        "Melhora da coordenação",
        "Expressão corporal",
        "Socialização e diversão",
        "Melhora do ritmo musical",
        "Autoestima elevada"
      ],
      purpose: "As aulas de dança combinam exercício cardiovascular com diversão. Aprenda diferentes ritmos enquanto queima calorias e se diverte em grupo.",
      targetAudience: "Pessoas que gostam de música e dança, buscam uma forma divertida de se exercitar e melhorar a coordenação motora.",
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
      benefits: [
        "Queima calórica elevada",
        "Melhora dos reflexos",
        "Fortalecimento de braços e core",
        "Aumento da autoestima",
        "Redução do estresse",
        "Aprendizado de defesa pessoal"
      ],
      purpose: "O Boxing é uma modalidade que combina condicionamento físico, defesa pessoal e alívio do estresse. Desenvolve força, agilidade e confiança através de técnicas de boxe.",
      targetAudience: "Pessoas que buscam um treino intenso, querem aprender defesa pessoal, reduzir estresse e melhorar a coordenação.",
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
      benefits: [
        "Melhora dos movimentos cotidianos",
        "Fortalecimento integral",
        "Queima calórica eficiente",
        "Melhora da coordenação",
        "Prevenção de lesões",
        "Versatilidade de exercícios"
      ],
      purpose: "O treinamento funcional utiliza movimentos naturais do corpo humano para melhorar a qualidade de vida no dia a dia. Combina força, resistência e coordenação.",
      targetAudience: "Pessoas que buscam melhorar os movimentos do cotidiano, atletas que querem performance funcional e quem gosta de variedade nos treinos.",
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
      benefits: [
        "Condicionamento físico extremo",
        "Técnicas de defesa pessoal",
        "Disciplina mental",
        "Queima calórica intensa",
        "Flexibilidade e agilidade",
        "Fortalecimento muscular completo"
      ],
      purpose: "O Muay Thai é uma arte marcial tailandesa conhecida como 'A Arte dos Oito Membros'. Desenvolve técnicas de luta, condicionamento físico e disciplina mental.",
      targetAudience: "Pessoas que buscam um treino desafiador, querem aprender uma arte marcial tradicional e desenvolver disciplina e resistência.",
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
      benefits: [
        "Melhora da flexibilidade",
        "Prevenção de lesões",
        "Relaxamento muscular",
        "Redução de tensões",
        "Melhora da circulação",
        "Bem-estar e relaxamento"
      ],
      purpose: "As sessões de alongamento focam na melhora da flexibilidade, prevenção de lesões e relaxamento. Ideal para complementar outros treinos ou como atividade independente.",
      targetAudience: "Pessoas que praticam outras modalidades, idosos, pessoas com tensão muscular e quem busca relaxamento e flexibilidade.",
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
      benefits: [
        "Queima até 500 calorias/aula",
        "Diversão e motivação",
        "Melhora do condicionamento",
        "Coordenação motora",
        "Ritmo e expressão corporal",
        "Socialização em grupo"
      ],
      purpose: "O Zumba combina dança latina com fitness, criando um treino divertido e energizante. A música contagiante torna o exercício prazeroso e motivador.",
      targetAudience: "Pessoas que gostam de dança latina, buscam diversão no exercício, querem queimar calorias de forma prazerosa e melhorar o ritmo.",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["19:30", "20:30"]
      },
      difficulty: "Iniciante" as const,
      duration: "45 min"
    }
  ];

  // Filtrar modalidades baseado no filtro ativo
  const modalidadesFiltradas = useMemo(() => {
    if (filtroAtivo === 'Todos') {
      return todasModalidades;
    }
    return todasModalidades.filter(modalidade => modalidade.difficulty === filtroAtivo);
  }, [filtroAtivo, todasModalidades]);

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
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Todas as <span className="gradient-text neon-glow">Modalidades</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Mais de 100 aulas por semana esperando por você
              </p>
              
              {/* Filtro por Nível */}
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-xl font-semibold text-white">
                  Filtre por <span className="text-red-500">Nível</span>
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => setFiltroAtivo('Todos')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      filtroAtivo === 'Todos' 
                        ? 'bg-white text-black shadow-lg scale-105' 
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    Todos ({todasModalidades.length})
                  </button>
                  <button
                    onClick={() => setFiltroAtivo('Iniciante')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      filtroAtivo === 'Iniciante' 
                        ? 'bg-green-500 text-white shadow-lg scale-105' 
                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50'
                    }`}
                  >
                    🌱 Iniciante ({todasModalidades.filter(m => m.difficulty === 'Iniciante').length})
                  </button>
                  <button
                    onClick={() => setFiltroAtivo('Intermediário')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      filtroAtivo === 'Intermediário' 
                        ? 'bg-yellow-500 text-black shadow-lg scale-105' 
                        : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border border-yellow-500/50'
                    }`}
                  >
                    ⚡ Intermediário ({todasModalidades.filter(m => m.difficulty === 'Intermediário').length})
                  </button>
                  <button
                    onClick={() => setFiltroAtivo('Avançado')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      filtroAtivo === 'Avançado' 
                        ? 'bg-red-500 text-white shadow-lg scale-105' 
                        : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50'
                    }`}
                  >
                    🔥 Avançado ({todasModalidades.filter(m => m.difficulty === 'Avançado').length})
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modalidadesFiltradas.map((modalidade, index) => (
              <ScrollReveal key={`${modalidade.name}-${filtroAtivo}`} delay={200 + (index * 50)} direction="up">
                <EnhancedModalityCard
                  name={modalidade.name}
                  icon={modalidade.icon}
                  description={modalidade.description}
                  benefits={modalidade.benefits}
                  purpose={modalidade.purpose}
                  targetAudience={modalidade.targetAudience}
                  schedule={modalidade.schedule}
                  difficulty={modalidade.difficulty}
                  duration={modalidade.duration}
                  image={`/${modalidade.name.toLowerCase()
                    .replace('ç', 'c')
                    .replace('ã', 'a')
                    .replace(' ', '-')}.${modalidade.name === 'Yoga' ? 'webp' : modalidade.name === 'Dança' || modalidade.name === 'Zumba' ? 'jpg' : 'avif'}`}
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

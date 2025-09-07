import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import EnhancedModalityCard from "@/components/ui/EnhancedModalityCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function HomePage() {
  const modalidadesDestaque = [
    {
      name: "Musculação",
      icon: "💪",
      description: "Equipamentos de última geração para seu desenvolvimento muscular",
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
        days: ["Todos os dias"],
        times: ["06:00", "08:00", "14:00", "18:00", "20:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "Livre",
      image: "/musculacao.avif"
    },
    {
      name: "Crossfit",
      icon: "🏋️‍♂️",
      description: "Treino funcional intenso para máxima performance",
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
      duration: "60 min",
      image: "/crossfit.avif"
    },
    {
      name: "Pilates",
      icon: "🧘‍♀️",
      description: "Fortalecimento, flexibilidade e equilíbrio mental",
      benefits: [
        "Melhora da postura corporal",
        "Alívio de dores nas costas",
        "Aumento da flexibilidade",
        "Fortalecimento do core",
        "Redução do estresse",
        "Melhora da concentração"
      ],
      purpose: "O Pilates trabalha corpo e mente através de movimentos controlados e respiração consciente. É fundamental para correção postural e prevenção de lesões.",
      targetAudience: "Pessoas que buscam alívio de dores, melhora da postura, idosos, gestantes e pessoas em reabilitação.",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["09:00", "17:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "50 min",
      image: "/pilates.avif"
    },
    {
      name: "Spinning",
      icon: "🚴‍♂️",
      description: "Cardio de alta intensidade com música motivante",
      benefits: [
        "Queima até 600 calorias/aula",
        "Fortalecimento das pernas",
        "Melhora cardiovascular",
        "Redução do colesterol",
        "Alívio do estresse",
        "Baixo impacto articular"
      ],
      purpose: "O Spinning é uma modalidade cardiovascular que simula um passeio de bicicleta com variações de intensidade. Combina música motivante com exercícios que queimam muitas calorias.",
      targetAudience: "Pessoas que querem emagrecer, melhorar o condicionamento cardiovascular e se divertir enquanto se exercitam.",
      schedule: {
        days: ["Todos os dias"],
        times: ["07:30", "18:30", "20:00"]
      },
      difficulty: "Intermediário" as const,
      duration: "45 min",
      image: "/spinning.avif"
    },
    {
      name: "Yoga",
      icon: "🕉️",
      description: "Relaxamento, flexibilidade e bem-estar integral",
      benefits: [
        "Redução do estresse e ansiedade",
        "Melhora da flexibilidade",
        "Fortalecimento muscular",
        "Melhora do sono",
        "Aumento da concentração",
        "Equilíbrio emocional"
      ],
      purpose: "O Yoga une posturas físicas, respiração e meditação para promover bem-estar integral. É uma prática milenar que trabalha corpo, mente e espírito.",
      targetAudience: "Pessoas que buscam relaxamento, redução do estresse, melhora da flexibilidade e autoconhecimento.",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["08:30", "17:30", "19:30"]
      },
      difficulty: "Iniciante" as const,
      duration: "60 min",
      image: "/yoga.webp"
    },
    {
      name: "Natação",
      icon: "🏊‍♂️",
      description: "Exercício completo em piscina aquecida",
      benefits: [
        "Exercício completo",
        "Baixo impacto articular",
        "Melhora respiratória",
        "Fortalecimento geral",
        "Queima calórica eficiente",
        "Relaxamento muscular"
      ],
      purpose: "A natação é considerada o exercício mais completo, trabalhando todos os grupos musculares sem impacto nas articulações. Nossa piscina aquecida oferece conforto em qualquer época do ano.",
      targetAudience: "Pessoas com problemas articulares, idosos, gestantes, crianças e quem busca um exercício completo e seguro.",
      schedule: {
        days: ["Todos os dias"],
        times: ["06:30", "12:00", "17:00", "19:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "Livre",
      image: "/natacao.avif"
    },
    {
      name: "Dança",
      icon: "💃",
      description: "Ritmo, diversão e expressão corporal",
      benefits: [
        "Melhora da coordenação",
        "Queima calórica divertida",
        "Aumento da autoestima",
        "Expressão corporal",
        "Socialização",
        "Redução do estresse"
      ],
      purpose: "A dança combina exercício físico com diversão e expressão artística. Trabalha coordenação, ritmo e oferece uma forma alegre de se exercitar.",
      targetAudience: "Pessoas que querem se exercitar de forma divertida, melhorar a coordenação e fazer novos amigos.",
      schedule: {
        days: ["Terça, Quinta"],
        times: ["19:00", "20:00"]
      },
      difficulty: "Iniciante" as const,
      duration: "50 min",
      image: "/danca.jpg"
    },
    {
      name: "Boxing",
      icon: "🥊",
      description: "Defesa pessoal, força e condicionamento",
      benefits: [
        "Autodefesa eficiente",
        "Alívio do estresse",
        "Queima calórica intensa",
        "Fortalecimento geral",
        "Melhora da agilidade",
        "Aumento da confiança"
      ],
      purpose: "O boxing desenvolve técnicas de defesa pessoal enquanto proporciona um treino cardiovascular intenso. É excelente para alívio do estresse e desenvolvimento da coordenação.",
      targetAudience: "Pessoas que buscam aprender autodefesa, aliviar estresse e ter um treino intenso e desafiador.",
      schedule: {
        days: ["Segunda, Quarta, Sexta"],
        times: ["18:00", "19:30"]
      },
      difficulty: "Intermediário" as const,
      duration: "55 min",
      image: "/boxing.avif"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative hero-container bg-cover bg-center bg-no-repeat overflow-hidden"
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
        
        <div className="container mx-auto px-4 text-center text-white relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 tracking-tight leading-tight">
              <span className="block gradient-text animate-fade-in-up">TRANSFORME</span>
              <span className="block text-red-500 animate-fade-in-up animation-delay-200 neon-glow">SUA VIDA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light animate-fade-in-up animation-delay-400 leading-relaxed">
              Na <span className="text-yellow-400 font-bold">FitLife</span>, você encontra equipamentos de última geração, 
              profissionais qualificados e o ambiente perfeito para <span className="text-red-400">alcançar seus objetivos</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Link href="/plans">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-red-500/25 card-glow">
                  🔥 CONHEÇA NOSSOS PLANOS
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-yellow-400/25">
                  ⚡ SOBRE NÓS
                </Button>
              </Link>
            </div>
            
            {/* Stats dinâmicas */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
              <div className="text-center card-glow p-4 rounded-lg">
                <div className="text-4xl font-black gradient-text mb-2">500+</div>
                <div className="text-gray-300 uppercase tracking-wide text-sm">Alunos Transformados</div>
              </div>
              <div className="text-center card-glow p-4 rounded-lg">
                <div className="text-4xl font-black gradient-text mb-2">24/7</div>
                <div className="text-gray-300 uppercase tracking-wide text-sm">Acesso Livre</div>
              </div>
              <div className="text-center card-glow p-4 rounded-lg">
                <div className="text-4xl font-black gradient-text mb-2">15+</div>
                <div className="text-gray-300 uppercase tracking-wide text-sm">Modalidades</div>
              </div>
            </div>
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
              <h2 className="text-5xl font-black text-white mb-6">
                Nossos <span className="gradient-text neon-glow">Planos</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Escolha o plano que vai <span className="text-yellow-400 font-semibold">revolucionar</span> seu estilo de vida. 
                Cada plano foi pensado para <span className="text-red-400">maximizar seus resultados</span>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <ScrollReveal delay={200} direction="left">
              <Card className="bg-gradient-to-b from-gray-900 to-gray-800 border-gray-600 p-8 text-center card-glow hover:border-yellow-400 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold text-sm rounded-full">
                    💪 ESSENCIAL
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Básico</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-yellow-400">R$ 89</span>
                  <span className="text-gray-400 text-lg">/mês</span>
                </div>
                <ul className="text-gray-300 space-y-4 mb-10 text-left">
                  <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Acesso à musculação</li>
                  <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Vestiário com armários</li>
                  <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Avaliação física inicial</li>
                  <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> App FitLife</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 card-glow">
                    COMEÇAR AGORA
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>

            {/* Plano Premium */}
            <ScrollReveal delay={300}>
              <Card className="bg-gradient-to-b from-red-600 to-red-800 border-red-400 p-8 text-center transform scale-110 neon-glow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-red-400"></div>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-black mb-6 inline-block animate-float">
                  🔥 MAIS POPULAR
                </div>
                <h3 className="text-4xl font-black text-white mb-6">Premium</h3>
                <div className="mb-8">
                  <span className="text-6xl font-black text-white">R$ 139</span>
                  <span className="text-red-200 text-xl">/mês</span>
                </div>
                <ul className="text-white space-y-4 mb-10 text-left">
                  <li className="flex items-center"><span className="text-yellow-400 mr-3">✓</span> Todos os benefícios do Básico</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-3">✓</span> Aulas coletivas ilimitadas</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-3">✓</span> Área de funcional</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-3">✓</span> 2 avaliações mensais</li>
                  <li className="flex items-center"><span className="text-yellow-400 mr-3">✓</span> Zona VIP</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-black py-4 text-lg neon-glow">
                    🚀 ESCOLHER PREMIUM
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>

            {/* Plano VIP */}
            <ScrollReveal delay={400} direction="right">
              <Card className="bg-gradient-to-b from-black via-gray-900 to-black border-purple-500 p-8 text-center card-glow hover:border-purple-400 transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm rounded-full">
                    👑 ELITE
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-6">VIP</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black gradient-text">R$ 199</span>
                  <span className="text-gray-400 text-lg">/mês</span>
                </div>
                <ul className="text-gray-300 space-y-4 mb-10 text-left">
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✓</span> Todos os benefícios do Premium</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✓</span> Personal trainer 2x/semana</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✓</span> Nutricionista incluso</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✓</span> Acesso 24h</li>
                  <li className="flex items-center"><span className="text-purple-400 mr-3">✓</span> Estacionamento gratuito</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 card-glow">
                    QUERO SER VIP
                  </Button>
                </Link>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link href="/plans">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Ver todos os planos
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Seção de Resultados/Depoimentos */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-6">
                🏆 <span className="gradient-text neon-glow">RESULTADOS</span> que Impressionam
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Mais de <span className="text-yellow-400 font-bold">500 transformações</span> comprovadas. 
                Veja o que nossos alunos estão conquistando todos os dias.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Impactantes */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <ScrollReveal delay={200}>
              <div className="text-center p-8 card-glow rounded-xl bg-gradient-to-b from-red-600/20 to-transparent border border-red-600/30">
                <div className="text-6xl font-black gradient-text mb-4">92%</div>
                <div className="text-white font-semibold mb-2">Taxa de Sucesso</div>
                <div className="text-gray-400 text-sm">Alunos que alcançaram seus objetivos</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center p-8 card-glow rounded-xl bg-gradient-to-b from-yellow-600/20 to-transparent border border-yellow-600/30">
                <div className="text-6xl font-black gradient-text mb-4">-12kg</div>
                <div className="text-white font-semibold mb-2">Perda Média</div>
                <div className="text-gray-400 text-sm">Em apenas 3 meses de treino</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center p-8 card-glow rounded-xl bg-gradient-to-b from-green-600/20 to-transparent border border-green-600/30">
                <div className="text-6xl font-black gradient-text mb-4">+25%</div>
                <div className="text-white font-semibold mb-2">Ganho de Força</div>
                <div className="text-gray-400 text-sm">Aumento médio em 6 meses</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="text-center p-8 card-glow rounded-xl bg-gradient-to-b from-purple-600/20 to-transparent border border-purple-600/30">
                <div className="text-6xl font-black gradient-text mb-4">100%</div>
                <div className="text-white font-semibold mb-2">Satisfação</div>
                <div className="text-gray-400 text-sm">Recomendariam para amigos</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={300}>
              <div className="p-8 bg-gray-900/50 rounded-xl border border-gray-700 card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold">Marina Silva</div>
                    <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐ Premium</div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  &ldquo;Perdi 15kg em 4 meses e nunca me senti tão bem! Os professores são incríveis e o ambiente é super motivador.&rdquo;
                </p>
                <div className="text-red-400 font-semibold">📉 -15kg | 💪 +200% energia</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="p-8 bg-gray-900/50 rounded-xl border border-gray-700 card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    R
                  </div>
                  <div>
                    <div className="text-white font-semibold">Roberto Santos</div>
                    <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐ VIP</div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  &ldquo;Consegui superar meus limites no crossfit. Equipamentos top e acompanhamento personalizado fazem toda diferença!&rdquo;
                </p>
                <div className="text-green-400 font-semibold">🏋️ +30kg força | 🏃 Resistência 300%</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="p-8 bg-gray-900/50 rounded-xl border border-gray-700 card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ana Costa</div>
                    <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐ Premium</div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  &ldquo;O pilates me ajudou com as dores nas costas e me deu uma flexibilidade que eu não tinha há anos!&rdquo;
                </p>
                <div className="text-purple-400 font-semibold">🧘‍♀️ Zero dores | ✨ Flexibilidade total</div>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA de Transformação */}
          <ScrollReveal delay={600}>
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold text-white mb-6">
                Sua transformação começa <span className="gradient-text">AGORA!</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-12 py-4 text-lg neon-glow">
                    🚀 QUERO MINHA TRANSFORMAÇÃO
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4">
                    📱 VER MAIS RESULTADOS
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Nossas <span className="gradient-text neon-glow">Modalidades</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Descubra o <span className="text-yellow-400 font-semibold">treino perfeito</span> para você. 
                Cada modalidade foi pensada para <span className="text-red-400">maximizar seus resultados</span> e transformar sua vida.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16 items-stretch">
            {modalidadesDestaque.map((modalidade, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)} direction="up" className="h-full">
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
                  image={modalidade.image}
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
              Venha conhecer nossa academia e faça uma aula experimental gratuita. 
              Seu novo estilo de vida começa aqui!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white hover-scale">
                <Link href="/contact">Agendar visita</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600 hover-scale">
                <Link href="/plans">Ver planos</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

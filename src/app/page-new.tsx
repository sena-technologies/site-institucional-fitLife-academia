import Link from "next/link";
import { Button } from "@/components/ui/Button";
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
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
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3"
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
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3"
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
            {modalidadesDestaque.map((modalidade, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)} direction="up">
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

'use client'

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import EnhancedModalityCard from "@/components/ui/EnhancedModalityCard";
import { ScrollReveal } from "@/hooks/useScrollReveal";

type Modalidade = {
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  purpose: string;
  targetAudience: string;
  schedule: {
    days: string[];
    times: string[];
  };
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
};

const todasModalidades: Modalidade[] = [
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
    difficulty: "Iniciante",
    duration: "Livre"
  }
] as const;

export default function ModalitiesPage() {
  const [filtroAtivo, setFiltroAtivo] = useState<'Todos' | 'Iniciante' | 'Intermediário' | 'Avançado'>('Todos');

  const modalidadesFiltradas = useMemo(() => {
    if (filtroAtivo === 'Todos') return todasModalidades;
    return todasModalidades.filter(m => m.difficulty === filtroAtivo);
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

      <div className="grid grid-cols-3 gap-4 p-4">
        {modalidadesFiltradas.map((modalidade, index) => (
          <EnhancedModalityCard
            key={modalidade.name}
            {...modalidade}
            image={`/${modalidade.name.toLowerCase()}.jpg`}
          />
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function MusculacaoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <ScrollReveal delay={100}>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="gradient-text neon-glow">MUSCULAÇÃO</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              💪 Equipamentos de <span className="text-yellow-400 font-bold">última geração</span> para 
              transformar seu corpo e <span className="text-red-400">superar seus limites</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-10 py-4 text-lg neon-glow">
                  🔥 COMEÇAR AGORA
                </Button>
              </Link>
              <Link href="/plans">
                <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 text-lg">
                  📋 VER PLANOS
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">
                Por que escolher nossa <span className="gradient-text">Musculação?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Mais do que equipamentos, oferecemos um sistema completo de transformação
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={200}>
              <Card className="bg-black border-red-500 p-8 text-center card-glow">
                <div className="text-5xl mb-6">🏋️‍♂️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Equipamentos Premium</h3>
                <p className="text-gray-300">
                  Máquinas Technogym e Life Fitness importadas, com tecnologia de ponta para máximos resultados
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-black border-yellow-500 p-8 text-center card-glow">
                <div className="text-5xl mb-6">👨‍🏫</div>
                <h3 className="text-2xl font-bold text-white mb-4">Personal Trainers</h3>
                <p className="text-gray-300">
                  Profissionais certificados CREF para orientação técnica e acompanhamento personalizado
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="bg-black border-green-500 p-8 text-center card-glow">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">App Integrado</h3>
                <p className="text-gray-300">
                  Controle seus treinos, progressão e resultados através do aplicativo FitLife
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Horários e Informações */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  📅 <span className="gradient-text">Horários de Funcionamento</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                    <span className="text-white font-semibold">Segunda a Sexta</span>
                    <span className="text-red-400">06:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                    <span className="text-white font-semibold">Sábados</span>
                    <span className="text-red-400">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
                    <span className="text-white font-semibold">Domingos</span>
                    <span className="text-red-400">10:00 - 16:00</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Ideal para:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span> Iniciantes e experientes
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span> Hipertrofia muscular
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span> Definição corporal
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span> Aumento de força
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-3">✓</span> Condicionamento físico
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  🏆 <span className="gradient-text">Resultados Comprovados</span>
                </h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-900 rounded-lg card-glow">
                    <div className="text-3xl font-black gradient-text mb-2">85%</div>
                    <div className="text-gray-300 text-sm">Ganho de massa em 3 meses</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-lg card-glow">
                    <div className="text-3xl font-black gradient-text mb-2">92%</div>
                    <div className="text-gray-300 text-sm">Satisfação dos alunos</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-lg card-glow">
                    <div className="text-3xl font-black gradient-text mb-2">15kg</div>
                    <div className="text-gray-300 text-sm">Média de ganho de força</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900 rounded-lg card-glow">
                    <div className="text-3xl font-black gradient-text mb-2">6 meses</div>
                    <div className="text-gray-300 text-sm">Para transformação completa</div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-white mb-2">🔥 Oferta Especial</h3>
                  <p className="text-red-100 mb-4">
                    Avaliação física + plano de treino personalizado GRÁTIS na primeira semana!
                  </p>
                  <Link href="/contact">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2">
                      APROVEITAR OFERTA
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={100}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para <span className="text-yellow-400">construir o corpo dos seus sonhos?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Junte-se aos milhares de pessoas que já transformaram suas vidas na FitLife!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-10 py-4">
                  🚀 COMEÇAR MINHA TRANSFORMAÇÃO
                </Button>
              </Link>
              <Link href="/modalities">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black font-bold px-10 py-4">
                  ← VOLTAR PARA MODALIDADES
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

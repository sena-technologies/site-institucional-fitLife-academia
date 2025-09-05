import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { Users, Award, Clock, MapPin, Heart, Target } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Sobre a <span className="text-red-500">FitLife</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Há mais de 10 anos transformando vidas através do fitness e bem-estar
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100} direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A FitLife nasceu em 2014 com um sonho: criar um espaço onde pessoas de todas as idades e níveis de condicionamento físico pudessem se sentir acolhidas e motivadas a alcançar seus objetivos.
                  </p>
                  <p>
                    Começamos com uma pequena academia no centro da cidade, mas nossa paixão pelo fitness e pelo bem-estar das pessoas nos levou a crescer e nos tornar referência na região.
                  </p>
                  <p>
                    Hoje, contamos com mais de 500 alunos ativos, equipamentos de última geração e uma equipe de profissionais altamente qualificados, todos unidos pelo mesmo propósito: transformar vidas através do movimento.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} direction="right">
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80')"
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nossos Pilares
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Os valores que nos guiam em nossa missão de transformar vidas
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={200}>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Proporcionar um ambiente acolhedor e motivador onde cada pessoa possa descobrir seu potencial máximo através do fitness e alcançar uma vida mais saudável e feliz.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">
                    Ser reconhecida como a melhor academia da região, referência em qualidade, inovação e resultados, impactando positivamente a vida de milhares de pessoas.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Excelência no atendimento</li>
                    <li>• Respeito e inclusão</li>
                    <li>• Inovação constante</li>
                    <li>• Compromisso com resultados</li>
                    <li>• Trabalho em equipe</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Por que escolher a FitLife?
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Conheça os diferenciais que fazem da FitLife a melhor escolha para sua jornada fitness
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={200} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Equipe Especializada</h3>
                <p className="text-gray-400">
                  Profissionais formados e com especializações nas mais diversas modalidades
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Funcionamento 24h</h3>
                <p className="text-gray-400">
                  Treinar no seu horário, seja de madrugada ou durante o dia
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Equipamentos Premium</h3>
                <p className="text-gray-400">
                  Máquinas e equipamentos das melhores marcas do mercado mundial
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Localização Privilegiada</h3>
                <p className="text-gray-400">
                  No coração da cidade, com fácil acesso e estacionamento gratuito
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ambiente Acolhedor</h3>
                <p className="text-gray-400">
                  Espaço pensado para seu conforto e bem-estar durante os treinos
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Foco em Resultados</h3>
                <p className="text-gray-400">
                  Acompanhamento personalizado para garantir que você alcance seus objetivos
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Venha Conhecer Nossa Academia
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-red-100 mb-8">
              Agende uma visita gratuita e descubra como podemos ajudar você a alcançar seus objetivos
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100">
                  Agendar Visita
                </Button>
              </Link>
              <Link href="/plans">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600">
                  Ver Planos
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

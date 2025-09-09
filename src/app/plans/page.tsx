import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function PlansPage() {

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

      {/* Tabela de Comparação Interativa */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Compare <span className="gradient-text neon-glow">Nossos Planos</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Veja exatamente o que está <span className="text-yellow-400 font-semibold">incluído</span> em cada plano e escolha o ideal para você.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-red-700">
                  <th className="py-6 px-6 text-left text-white font-bold text-lg">Benefícios</th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black">BÁSICO</span>
                      <span className="text-yellow-300 text-lg">R$ 89/mês</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg bg-red-800">
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        MAIS POPULAR
                      </div>
                      <span className="text-2xl font-black">PREMIUM</span>
                      <span className="text-yellow-300 text-lg">R$ 139/mês</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black">VIP</span>
                      <span className="text-yellow-300 text-lg">R$ 199/mês</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-white">
                {[
                  { feature: "Acesso à Musculação", basic: true, premium: true, vip: true },
                  { feature: "Vestiário com Armários", basic: true, premium: true, vip: true },
                  { feature: "Avaliação Física Inicial", basic: true, premium: true, vip: true },
                  { feature: "App FitLife", basic: true, premium: true, vip: true },
                  { feature: "Aulas Coletivas", basic: false, premium: "Ilimitadas", vip: "Ilimitadas" },
                  { feature: "Área Funcional", basic: false, premium: true, vip: true },
                  { feature: "Avaliações Mensais", basic: false, premium: "2x/mês", vip: "Ilimitadas" },
                  { feature: "Zona VIP", basic: false, premium: true, vip: true },
                  { feature: "Personal Trainer", basic: false, premium: false, vip: "2x/semana" },
                  { feature: "Nutricionista", basic: false, premium: false, vip: "Incluso" },
                  { feature: "Acesso 24h", basic: false, premium: false, vip: true },
                  { feature: "Estacionamento", basic: false, premium: false, vip: "Gratuito" }
                ].map((item, index) => (
                  <tr key={index} className={`border-t border-gray-700 hover:bg-gray-800/50 transition-colors ${index % 2 === 0 ? 'bg-gray-900/30' : ''}`}>
                    <td className="py-4 px-6 font-medium text-gray-200">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {item.basic === true ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : item.basic === false ? (
                        <span className="text-red-400 text-xl">✗</span>
                      ) : (
                        <span className="text-green-400 font-semibold">{item.basic}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-red-900/20">
                      {item.premium === true ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : item.premium === false ? (
                        <span className="text-red-400 text-xl">✗</span>
                      ) : (
                        <span className="text-green-400 font-semibold">{item.premium}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.vip === true ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : item.vip === false ? (
                        <span className="text-red-400 text-xl">✗</span>
                      ) : (
                        <span className="text-green-400 font-semibold">{item.vip}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-800 border-t-2 border-red-500">
                  <td className="py-6 px-6 font-bold text-white text-lg">Escolha seu plano:</td>
                  <td className="py-6 px-6 text-center">
                    <Link href="/contact">
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg">
                        BÁSICO
                      </Button>
                    </Link>
                  </td>
                  <td className="py-6 px-6 text-center bg-red-900/20">
                    <Link href="/contact">
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg">
                        ⭐ PREMIUM
                      </Button>
                    </Link>
                  </td>
                  <td className="py-6 px-6 text-center">
                    <Link href="/contact">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg">
                        VIP ELITE
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Planos em Destaque */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Nossos <span className="gradient-text neon-glow">Planos</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Escolha o plano que vai <span className="text-yellow-400 font-semibold">revolucionar</span> seu estilo de vida. Cada plano foi pensado para <span className="text-red-400 font-semibold">maximizar seus resultados</span>.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <ScrollReveal delay={200} direction="left">
              <Card className="bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 rounded-2xl overflow-hidden hover-card transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 card-glow">
                {/* Badge Superior */}
                <div className="pt-6 pb-2 text-center">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    ESSENCIAL
                  </span>
                </div>
                
                {/* Conteúdo Principal */}
                <div className="px-8 pb-8 text-center">
                  <h3 className="text-4xl font-bold text-white mb-6">Básico</h3>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-black text-yellow-400">R$ 89</span>
                    <span className="text-gray-400 text-lg">/mês</span>
                  </div>
                  
                  <ul className="text-left text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Acesso à musculação</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Vestiário com armários</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Avaliação física inicial</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> App FitLife</li>
                  </ul>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/25 uppercase tracking-wide">
                      COMEÇAR AGORA
                    </Button>
                  </Link>
                </div>
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
              <Card className="bg-gradient-to-br from-purple-800 via-purple-900 to-black border border-purple-500 rounded-2xl overflow-hidden hover-card transition-all duration-300 hover:scale-105 hover:border-purple-400/50 card-glow">
                {/* Badge Superior */}
                <div className="pt-6 pb-2 text-center">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    ELITE
                  </span>
                </div>
                
                {/* Conteúdo Principal */}
                <div className="px-8 pb-8 text-center">
                  <h3 className="text-4xl font-bold text-white mb-6">VIP</h3>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-black text-yellow-400">R$ 199</span>
                    <span className="text-gray-400 text-lg">/mês</span>
                  </div>
                  
                  <ul className="text-left text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Todos os benefícios do Premium</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Personal trainer 2x/semana</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Nutricionista incluso</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Acesso 24h</li>
                    <li className="flex items-center"><span className="text-green-400 mr-3">✓</span> Estacionamento gratuito</li>
                  </ul>
                  
                  <Link href="/contact">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 uppercase tracking-wide">
                      QUERO SER VIP
                    </Button>
                  </Link>
                </div>
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

      {/* Depoimentos por Plano */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Histórias de <span className="gradient-text neon-glow">Sucesso</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Veja como nossos alunos alcançaram seus objetivos em cada plano.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Depoimento Plano Básico */}
            <ScrollReveal delay={200} direction="left">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/50 rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">MB</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Maria Beatriz</h3>
                  <p className="text-yellow-400 font-semibold">Plano Básico</p>
                </div>
                <div className="text-gray-300 text-center italic mb-4">
                  "Comecei com o Básico há 8 meses. Perdi 12kg só com musculação! A avaliação física me ajudou muito a entender meu corpo. Agora estou pensando no Premium para variar com aulas."
                </div>
                <div className="flex justify-center text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card>
            </ScrollReveal>

            {/* Depoimento Plano Premium */}
            <ScrollReveal delay={300}>
              <Card className="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-400 rounded-2xl p-8 hover:scale-105 transition-transform shadow-lg shadow-red-500/20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">RC</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Roberto Carlos</h3>
                  <p className="text-red-400 font-semibold">Plano Premium</p>
                </div>
                <div className="text-gray-300 text-center italic mb-4">
                  "O Premium foi a melhor escolha! Crossfit, musculação, spinning... nunca fico entediado. Em 6 meses ganhei 8kg de massa magra e melhorei muito meu condicionamento. Vale cada centavo!"
                </div>
                <div className="flex justify-center text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card>
            </ScrollReveal>

            {/* Depoimento Plano VIP */}
            <ScrollReveal delay={400} direction="right">
              <Card className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 border border-purple-400/50 rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Ana Silva</h3>
                  <p className="text-purple-400 font-semibold">Plano VIP</p>
                </div>
                <div className="text-gray-300 text-center italic mb-4">
                  "VIP mudou minha vida! Personal trainer + nutricionista = resultados incríveis. Perdi 20kg em 10 meses. O acesso 24h é perfeito para minha rotina. Investimento que vale a pena!"
                </div>
                <div className="flex justify-center text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Estatísticas de Satisfação */}
          <ScrollReveal delay={500}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-400 mb-2">94%</div>
                <div className="text-gray-300">Satisfação Básico</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-400 mb-2">97%</div>
                <div className="text-gray-300">Satisfação Premium</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">99%</div>
                <div className="text-gray-300">Satisfação VIP</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">92%</div>
                <div className="text-gray-300">Renovação</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modalidades Disponíveis */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Modalidades <span className="gradient-text neon-glow">Disponíveis</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Descubra todas as atividades que você pode praticar em nossos planos.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Musculação", image: "/musculacao.avif" },
              { name: "Crossfit", image: "/crossfit.avif" },
              { name: "Pilates", image: "/pilates.avif" },
              { name: "Spinning", image: "/spinning.avif" },
              { name: "Yoga", image: "/yoga.webp" },
              { name: "Natação", image: "/natacao.avif" },
              { name: "Dança", image: "/danca.jpg" },
              { name: "Boxing", image: "/boxing.avif" },
              { name: "Funcional", image: "/funcional.avif" },
              { name: "Alongamento", image: "/alongamento.avif" },
              { name: "Hidroginástica", image: "/hidroginastica.webp" },
              { name: "Zumba", image: "/zumba.jpg" }
            ].map((modalidade, index) => (
              <ScrollReveal key={index} delay={200 + (index * 50)} direction="up">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-square bg-gray-900 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Imagem de fundo */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${modalidade.image}')`,
                      }}
                    ></div>
                    
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>
                    
                    {/* Conteúdo */}
                    <div className="absolute inset-0 flex items-end p-4">
                      <h3 className="text-white font-bold text-lg text-center w-full group-hover:text-red-400 transition-colors duration-300">
                        {modalidade.name}
                      </h3>
                    </div>

                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-red-400 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Texto informativo */}
          <ScrollReveal delay={800}>
            <div className="text-center mt-16">
              <p className="text-gray-400 text-lg max-w-4xl mx-auto">
                Todas as modalidades estão incluídas nos nossos planos Premium e VIP. 
                <span className="text-red-400 font-semibold"> O plano Básico inclui Musculação e acesso livre às áreas comuns.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Específica dos Planos */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Dúvidas <span className="gradient-text neon-glow">Frequentes</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Esclarecemos as principais dúvidas sobre nossos planos para você fazer a melhor escolha.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Posso trocar de plano depois de assinar?",
                answer: "Sim! Você pode fazer upgrade do seu plano a qualquer momento. Para downgrade, a mudança ocorre na próxima mensalidade. Nossa equipe te ajuda com todo o processo."
              },
              {
                question: "Como funciona o cancelamento?",
                answer: "Não há multa de cancelamento! Você pode cancelar seu plano com 30 dias de antecedência. Oferecemos também a opção de pausa temporária por até 3 meses."
              },
              {
                question: "A primeira semana é realmente grátis?",
                answer: "Sim! Oferecemos 7 dias gratuitos para você conhecer nossa estrutura e modalidades. Durante esse período, você tem acesso completo ao plano escolhido."
              },
              {
                question: "Qual plano é melhor para iniciantes?",
                answer: "O plano Básico é perfeito para iniciantes! Inclui musculação, avaliação física e nosso app. O Premium é ideal se você quer variedade com aulas coletivas."
              },
              {
                question: "O que está incluso no Personal Trainer do plano VIP?",
                answer: "No plano VIP, você tem 2 sessões semanais (8 por mês) de personal trainer, com treino personalizado, acompanhamento de evolução e ajustes constantes na rotina."
              },
              {
                question: "Como funciona o acesso 24h do plano VIP?",
                answer: "Membros VIP têm acesso à academia todos os dias, 24 horas. Após 22h e antes das 6h, o acesso é pela entrada lateral com biometria."
              },
              {
                question: "Posso levar acompanhantes?",
                answer: "Plano Premium: 2 convidados por mês. Plano VIP: convidados ilimitados. Plano Básico: consulte nossas promoções mensais para convidados."
              },
              {
                question: "Como funciona o estacionamento gratuito?",
                answer: "Membros VIP têm vaga garantida em nosso estacionamento coberto. Para outros planos, oferecemos desconto de 50% na mensalidade do estacionamento."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={200 + (index * 100)}>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-colors">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {faq.question}
                      </h3>
                      <span className="text-red-500 text-2xl group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Especial com Urgência */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={100}>
            <div className="bg-yellow-400 text-black inline-block px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide mb-6 animate-bounce">
              🔥 OFERTA LIMITADA
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="text-yellow-300">50% OFF</span> no Primeiro Mês
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Assine qualquer plano hoje e pague apenas <span className="text-yellow-300 font-bold">metade</span> no primeiro mês!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8 border border-yellow-400/30">
              <h3 className="text-white text-xl font-bold mb-4">⏰ Oferta expira em:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-yellow-400 text-black rounded-lg p-3">
                  <div className="text-2xl font-black">02</div>
                  <div className="text-xs font-bold">DIAS</div>
                </div>
                <div className="bg-yellow-400 text-black rounded-lg p-3">
                  <div className="text-2xl font-black">14</div>
                  <div className="text-xs font-bold">HRS</div>
                </div>
                <div className="bg-yellow-400 text-black rounded-lg p-3">
                  <div className="text-2xl font-black">23</div>
                  <div className="text-xs font-bold">MIN</div>
                </div>
                <div className="bg-yellow-400 text-black rounded-lg p-3">
                  <div className="text-2xl font-black">45</div>
                  <div className="text-xs font-bold">SEG</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
                <div className="text-3xl font-black text-white mb-2">Básico</div>
                <div className="text-gray-300 line-through">R$ 89</div>
                <div className="text-2xl font-black text-yellow-300">R$ 44,50</div>
                <div className="text-sm text-gray-300">primeiro mês</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                  MAIS ESCOLHIDO
                </div>
                <div className="text-3xl font-black text-white mb-2">Premium</div>
                <div className="text-gray-300 line-through">R$ 139</div>
                <div className="text-2xl font-black text-yellow-300">R$ 69,50</div>
                <div className="text-sm text-gray-300">primeiro mês</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
                <div className="text-3xl font-black text-white mb-2">VIP</div>
                <div className="text-gray-300 line-through">R$ 199</div>
                <div className="text-2xl font-black text-yellow-300">R$ 99,50</div>
                <div className="text-sm text-gray-300">primeiro mês</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="space-y-4">
              <Link href="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-12 py-4 text-xl rounded-xl shadow-2xl hover:shadow-yellow-400/50 transition-all transform hover:scale-105">
                  🚀 APROVEITAR OFERTA AGORA
                </Button>
              </Link>
              <p className="text-sm text-gray-200">
                * Válido apenas para novos alunos. Após o primeiro mês, valor normal.
              </p>
            </div>
          </ScrollReveal>
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

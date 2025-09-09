import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Termos de <span className="gradient-text neon-glow">Uso</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Conheça os termos e condições para utilização dos serviços da FitLife Academia.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <Card className="bg-gray-900 border-gray-700 p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    📅 Última atualização: 08 de Setembro de 2025
                  </div>
                  <p className="text-gray-300 text-lg">
                    Ao utilizar os serviços da FitLife Academia, você concorda com estes Termos de Uso. 
                    Leia atentamente antes de realizar sua matrícula.
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <div className="space-y-8">
              {[
                {
                  title: "1. Definições",
                  content: [
                    "**Academia:** FitLife Academia, pessoa jurídica de direito privado",
                    "**Cliente/Usuário:** Pessoa física que contrata nossos serviços",
                    "**Serviços:** Modalidades esportivas, uso de equipamentos, consultoria fitness",
                    "**Instalações:** Dependências físicas da academia e seus equipamentos",
                    "**Planos:** Modalidades de contratação (Básico, Premium, VIP)"
                  ]
                },
                {
                  title: "2. Da Matrícula e Contratação",
                  content: [
                    "**Capacidade Legal:** Maior de 18 anos ou representado por responsável legal",
                    "**Documentação:** Apresentação de RG, CPF e comprovante de residência atualizados",
                    "**Avaliação Médica:** Atestado médico obrigatório para atividades físicas",
                    "**Veracidade das Informações:** Cliente responsável pela veracidade dos dados fornecidos",
                    "**Aceite dos Termos:** Matrícula implica em aceite integral destes termos"
                  ]
                },
                {
                  title: "3. Planos e Modalidades",
                  content: [
                    "**Plano Básico:** Musculação, vestiário, avaliação física, app FitLife",
                    "**Plano Premium:** Todos os benefícios do Básico + aulas coletivas + área funcional + zona VIP",
                    "**Plano VIP:** Todos os benefícios do Premium + personal trainer + nutricionista + acesso 24h",
                    "**Alteração de Planos:** Upgrade imediato, downgrade na próxima mensalidade",
                    "**Modalidades Sujeitas à Disponibilidade:** Horários e vagas limitadas para algumas atividades"
                  ]
                },
                {
                  title: "4. Pagamento e Cobrança",
                  content: [
                    "**Vencimento:** Todo dia 10 de cada mês (ou primeiro dia útil seguinte)",
                    "**Formas de Pagamento:** Cartão de crédito, débito automático, PIX, boleto",
                    "**Atraso no Pagamento:** Multa de 2% + juros de 1% ao mês + correção monetária",
                    "**Inadimplência:** Suspensão do acesso após 15 dias de atraso",
                    "**Taxa de Matrícula:** Cobrada apenas no primeiro mês (não reembolsável)"
                  ]
                },
                {
                  title: "5. Normas de Conduta",
                  content: [
                    "**Identificação Obrigatória:** Apresentar documento com foto ou pulseira de acesso",
                    "**Vestuário Adequado:** Roupas esportivas e tênis obrigatórios nas áreas de exercício",
                    "**Higiene Pessoal:** Uso de toalha obrigatório nos equipamentos",
                    "**Comportamento Respeitoso:** Proibido linguagem ofensiva, assédio ou comportamento inadequado",
                    "**Uso dos Equipamentos:** Seguir orientações dos instrutores e respeitar tempo de uso",
                    "**Ordem e Limpeza:** Manter equipamentos organizados e limpar após o uso"
                  ]
                },
                {
                  title: "6. Direitos e Deveres do Cliente",
                  content: [
                    "**Direitos:** Uso das instalações conforme plano contratado, orientação profissional, ambiente seguro",
                    "**Deveres:** Pagamento em dia, cumprimento das normas, respeito aos demais usuários",
                    "**Proibições:** Entrada de menores desacompanhados, uso de substâncias ilícitas, gravações não autorizadas",
                    "**Responsabilidade:** Cliente responsável por seus pertences pessoais",
                    "**Comunicação de Problemas:** Informar imediatamente sobre acidentes ou equipamentos com defeito"
                  ]
                },
                {
                  title: "7. Cancelamento e Suspensão",
                  content: [
                    "**Prazo de Cancelamento:** 30 dias de antecedência por escrito",
                    "**Sem Multa Rescisória:** Cancelamento livre a qualquer tempo",
                    "**Suspensão Temporária:** Até 3 meses mediante solicitação (sujeito a taxa)",
                    "**Cancelamento por Justa Causa:** Academia pode cancelar por descumprimento das normas",
                    "**Reembolso:** Não há reembolso de valores já pagos, exceto por determinação legal"
                  ]
                },
                {
                  title: "8. Responsabilidade e Limitações",
                  content: [
                    "**Limite de Responsabilidade:** Academia não se responsabiliza por objetos perdidos ou furtados",
                    "**Acidentes:** Cliente pratica exercícios por sua conta e risco",
                    "**Seguro:** Recomendado seguro pessoal para atividades físicas",
                    "**Estado de Saúde:** Cliente declara estar apto para atividades físicas",
                    "**Força Maior:** Academia não se responsabiliza por eventos de força maior"
                  ]
                },
                {
                  title: "9. Propriedade Intelectual",
                  content: [
                    "**Marca e Logo:** FitLife Academia é marca registrada",
                    "**Conteúdo:** Materiais didáticos e metodologias são de propriedade da academia",
                    "**Uso de Imagem:** Cliente autoriza uso de imagem para fins promocionais",
                    "**Direitos Autorais:** Proibida reprodução de conteúdo sem autorização",
                    "**App FitLife:** Software licenciado, não vendido, ao cliente"
                  ]
                },
                {
                  title: "10. Disposições Gerais",
                  content: [
                    "**Alterações:** Termos podem ser alterados mediante comunicação prévia de 30 dias",
                    "**Foro:** Comarca de São Paulo/SP para resolução de conflitos",
                    "**Lei Aplicável:** Legislação brasileira, especialmente CDC e LGPD",
                    "**Comunicações:** Preferencialmente por email ou WhatsApp oficial",
                    "**Validade:** Se alguma cláusula for inválida, demais permanecem válidas"
                  ]
                }
              ].map((section, index) => (
                <ScrollReveal key={index} delay={300 + (index * 100)}>
                  <Card className="bg-gray-900 border-gray-700 p-8 hover:border-red-500/30 transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-6 text-red-400">
                      {section.title}
                    </h2>
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 leading-relaxed">
                          <span className="text-red-400 mr-2">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Informações de Contato */}
            <ScrollReveal delay={800}>
              <Card className="bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/50 p-8 mt-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Dúvidas sobre os Termos?
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Nossa equipe está pronta para esclarecer qualquer questão
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">📧 Email</h3>
                    <p className="text-red-400">contato@fitlife-academia.com.br</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">📱 WhatsApp</h3>
                    <p className="text-red-400">(11) 99999-0000</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">📍 Endereço</h3>
                    <p className="text-red-400">Rua Fitness, 123 - SP</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700">
                      Entrar em Contato
                    </Button>
                  </Link>
                  <Link href="/privacy">
                    <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-600 hover:text-white">
                      Ver Política de Privacidade
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollReveal>

            {/* Botão Voltar */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-gray-700 hover:bg-gray-600">
                  ← Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

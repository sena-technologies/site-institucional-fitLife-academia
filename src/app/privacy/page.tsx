import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
                Política de <span className="gradient-text neon-glow">Privacidade</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Sua privacidade é nossa prioridade. Conheça como coletamos, usamos e protegemos seus dados.
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
                    Esta Política de Privacidade descreve como a FitLife Academia coleta, usa e compartilha 
                    informações sobre você quando utiliza nossos serviços.
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <div className="space-y-8">
              {[
                {
                  title: "1. Informações que Coletamos",
                  content: [
                    "**Informações Pessoais:** Nome completo, CPF, RG, data de nascimento, endereço, telefone, email",
                    "**Informações de Saúde:** Histórico médico, restrições físicas, objetivos fitness (com seu consentimento)",
                    "**Informações de Pagamento:** Dados de cartão de crédito/débito, informações bancárias (processados de forma segura)",
                    "**Informações de Uso:** Frequência de visitas, modalidades utilizadas, horários preferenciais",
                    "**Informações Técnicas:** Endereço IP, tipo de navegador, dados de cookies (quando aplicável)"
                  ]
                },
                {
                  title: "2. Como Usamos suas Informações",
                  content: [
                    "**Prestação de Serviços:** Gestão de matrículas, controle de acesso, agendamento de aulas",
                    "**Comunicação:** Envio de informações sobre planos, promoções e novidades (com opt-out disponível)",
                    "**Segurança:** Monitoramento de acesso às instalações e prevenção de fraudes",
                    "**Melhoria dos Serviços:** Análise de uso para otimização de horários e modalidades",
                    "**Obrigações Legais:** Cumprimento de exigências fiscais e regulatórias"
                  ]
                },
                {
                  title: "3. Compartilhamento de Informações",
                  content: [
                    "**Não vendemos seus dados pessoais para terceiros**",
                    "**Profissionais de Saúde:** Compartilhamos informações relevantes com personal trainers e nutricionistas (mediante autorização)",
                    "**Prestadores de Serviço:** Empresas de processamento de pagamento e sistemas de gestão (sob rigorosos acordos de confidencialidade)",
                    "**Autoridades Legais:** Apenas quando exigido por lei ou ordem judicial",
                    "**Parceiros Comerciais:** Somente dados agregados e anônimos para análises estatísticas"
                  ]
                },
                {
                  title: "4. Proteção dos seus Dados",
                  content: [
                    "**Criptografia:** Todos os dados sensíveis são criptografados em trânsito e em repouso",
                    "**Controle de Acesso:** Acesso restrito apenas a funcionários autorizados com necessidade de saber",
                    "**Backup Seguro:** Backups regulares em servidores seguros com redundância geográfica",
                    "**Monitoramento:** Sistemas de detecção de intrusão e auditoria contínua",
                    "**Certificações:** Cumprimos padrões internacionais de segurança de dados"
                  ]
                },
                {
                  title: "5. Seus Direitos (LGPD)",
                  content: [
                    "**Acesso:** Solicitar cópia dos seus dados pessoais que possuímos",
                    "**Retificação:** Corrigir dados incompletos, inexatos ou desatualizados",
                    "**Exclusão:** Solicitar a exclusão dos seus dados pessoais (sujeito a obrigações legais)",
                    "**Portabilidade:** Transferir seus dados para outro prestador de serviços",
                    "**Oposição:** Opor-se ao tratamento dos seus dados para determinadas finalidades",
                    "**Revogação do Consentimento:** Retirar seu consentimento a qualquer momento"
                  ]
                },
                {
                  title: "6. Retenção de Dados",
                  content: [
                    "**Dados Ativos:** Mantidos enquanto você for nosso cliente",
                    "**Dados Inativos:** Mantidos por até 5 anos após o cancelamento (para fins fiscais)",
                    "**Dados de Saúde:** Mantidos conforme exigências do Conselho Federal de Medicina",
                    "**Exclusão Automática:** Sistemas automatizados removem dados expirados",
                    "**Exceções Legais:** Alguns dados podem ser mantidos por períodos maiores conforme exigência legal"
                  ]
                },
                {
                  title: "7. Cookies e Tecnologias Similares",
                  content: [
                    "**Cookies Essenciais:** Necessários para funcionamento do site (login, carrinho de compras)",
                    "**Cookies Analíticos:** Google Analytics para entender como você usa nosso site (anônimos)",
                    "**Cookies de Marketing:** Para exibir anúncios relevantes (com seu consentimento)",
                    "**Controle:** Você pode gerenciar cookies nas configurações do seu navegador",
                    "**Transparência:** Banner de cookies informa sobre nosso uso"
                  ]
                },
                {
                  title: "8. Menores de Idade",
                  content: [
                    "**Idade Mínima:** Serviços destinados a maiores de 16 anos",
                    "**Responsáveis:** Menores de 18 anos precisam de autorização dos pais/responsáveis",
                    "**Proteção Especial:** Dados de menores recebem proteção adicional conforme LGPD",
                    "**Verificação:** Verificamos idade durante o processo de matrícula",
                    "**Consentimento Parental:** Obtemos consentimento explícito dos responsáveis"
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

            {/* Contato para Dúvidas */}
            <ScrollReveal delay={800}>
              <Card className="bg-gradient-to-r from-red-600/20 to-red-800/20 border-red-500/50 p-8 mt-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Dúvidas sobre Privacidade?
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Entre em contato com nosso Encarregado de Proteção de Dados (DPO)
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">📧 Email</h3>
                    <p className="text-red-400">privacidade@fitlife-academia.com.br</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-white font-bold mb-2">📱 WhatsApp</h3>
                    <p className="text-red-400">(11) 99999-0000</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-red-600 hover:bg-red-700">
                      Falar com DPO
                    </Button>
                  </Link>
                  <Link href="/terms">
                    <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-600 hover:text-white">
                      Ver Termos de Uso
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

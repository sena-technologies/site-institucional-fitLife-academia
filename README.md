# 💪 FitLife Academia - Site Institucional

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
</div>

---

## 🎯 **Sobre o Projeto**

Site institucional moderno e responsivo desenvolvido para a **FitLife Academia**, focado em conversão de leads e experiência do usuário excepcional. O projeto combina design contemporâneo com funcionalidades avançadas para maximizar a captação de novos alunos.

### 🚀 **Demo Online**
```bash
# Clone o repositório
git clone https://github.com/sena-technologies/site-institucional-fitLife-academia.git

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

---

## ⚡ **Tecnologias Utilizadas**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 15.5.2 | Framework React com SSR/SSG |
| **React** | 18+ | Biblioteca JavaScript para UI |
| **TypeScript** | 5+ | Superset tipado do JavaScript |
| **Tailwind CSS** | 3+ | Framework CSS utility-first |
| **Turbopack** | Latest | Build tool ultra-rápido |
| **Lucide React** | Latest | Biblioteca de ícones |

---

## 🏗️ **Arquitetura do Projeto**

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── about/             # Página "Sobre Nós"
│   ├── contact/           # Página de Contato
│   ├── modalities/        # Página de Modalidades
│   │   ├── musculacao/    # Página específica de Musculação
│   │   └── crossfit/      # Página específica de CrossFit
│   ├── plans/             # Página de Planos (Renovada)
│   ├── privacy/           # Política de Privacidade
│   ├── schedule/          # Página de Horários
│   └── terms/             # Termos de Uso
├── components/
│   └── ui/                # Componentes reutilizáveis
│       ├── Button.tsx     # Componente de botão
│       ├── Card.tsx       # Componente de card
│       ├── EnhancedModalityCard.tsx  # Card avançado de modalidades
│       └── ModalityCard.tsx          # Card simples de modalidades
├── hooks/
│   └── useScrollReveal.ts # Hook para animações de scroll
└── public/                # Assets estáticos (imagens)
```

---

## 🎨 **Funcionalidades Principais**

### 🏠 **Homepage**
- ✅ **Hero Section** com animações Ken Burns
- ✅ **Cards de Modalidades** interativos com modais
- ✅ **Seção de Planos** com efeitos neon sutis
- ✅ **Depoimentos** de clientes reais
- ✅ **CTAs estratégicos** para conversão

### 🏃‍♂️ **Página de Modalidades** 
- ✅ **Sistema de Filtros** funcionais (Todos, Iniciante, Intermediário, Avançado)
- ✅ **12 Modalidades completas** com informações detalhadas
- ✅ **Modais interativos** com 4 seções por modalidade:
  - 💡 Propósito e benefícios
  - 🎯 Público-alvo
  - ⏰ Horários e dificuldade
  - 📅 Cronogramas detalhados
- ✅ **Cards responsivos** com imagens otimizadas
- ✅ **Animações ScrollReveal** suaves

### 💳 **Página de Planos (Renovada)**
- ✅ **Tabela de Comparação Interativa** entre todos os planos
- ✅ **FAQ Específica** com 8 perguntas frequentes
- ✅ **Depoimentos Segmentados** por categoria de plano
- ✅ **Galeria Visual de Modalidades** (12 cards com foto + nome)
- ✅ **Oferta Especial** com countdown timer (50% OFF)
- ✅ **Estatísticas de Satisfação** por plano
- ✅ **3 Planos Completos:**
  - 🥉 **Básico** (R$ 89/mês) - Musculação + Essenciais
  - 🥈 **Premium** (R$ 139/mês) - Aulas Coletivas + Zona VIP  
  - 🥇 **VIP** (R$ 199/mês) - Personal + Nutricionista + 24h

### ⚖️ **Páginas Legais (LGPD Compliant)**
- ✅ **Política de Privacidade** (`/privacy`)
  - 📋 8 seções detalhadas sobre coleta e uso de dados
  - 🔒 Conformidade total com LGPD
  - 📞 Contato direto com DPO
- ✅ **Termos de Uso** (`/terms`)
  - 📜 10 seções abrangentes sobre direitos e deveres
  - 💰 Políticas claras de pagamento e cancelamento
  - ⚖️ Proteção jurídica completa

### 📱 **Outras Páginas**
- ✅ **Sobre Nós** - História e valores da academia
- ✅ **Contato** - Formulário funcional + informações
- ✅ **Horários** - Grade completa de funcionamento

---

## 🎪 **Recursos Visuais e UX**

### 🌟 **Design System**
- ✅ **Efeitos Neon** personalizados com CSS
- ✅ **Gradientes dinâmicos** para destacar elementos
- ✅ **Hover Effects** sofisticados em cards e botões
- ✅ **Animações ScrollReveal** para entrada de elementos
- ✅ **Layout 100% Responsivo** (Mobile-first)

### 🎨 **Paleta de Cores**
```css
/* Cores Principais */
--primary-red: #EF4444    /* Vermelho vibrante */
--primary-black: #000000  /* Preto profundo */
--accent-yellow: #FCD34D  /* Amarelo destaque */

/* Gradientes */
--gradient-red: linear-gradient(45deg, #DC2626, #EF4444)
--gradient-dark: linear-gradient(135deg, #1F2937, #000000)
```

### ⚡ **Animações e Efeitos**
- 🌊 **Ken Burns Effect** no hero
- ✨ **Scroll Reveal** com delays escalonados
- 🔥 **Neon Glow Effects** em elementos chave
- 🎯 **Hover Transforms** com scale e shadows
- ⏰ **Loading States** suaves

---

## 🚦 **Navegação e Links**

### 🔗 **Sistema de Navegação Inteligente**
- ✅ **Cards de Modalidades** → `/contact` (geração de leads)
- ✅ **Botões "Quero Começar Agora!"** → `/contact`
- ✅ **CTAs de Planos** → `/contact` com contexto
- ✅ **Links específicos** para modalidades com páginas próprias:
  - 💪 Musculação → `/modalities/musculacao`
  - 🏋️‍♂️ CrossFit → `/modalities/crossfit`
- ✅ **Menu principal** com todas as seções
- ✅ **Footer links** para páginas legais

---

## 📊 **Performance e SEO**

### ⚡ **Otimizações Implementadas**
- ✅ **Next.js 15 com Turbopack** - Build ultrarrápido
- ✅ **Componentes otimizados** com React.memo
- ✅ **Imagens otimizadas** com next/image
- ✅ **Lazy Loading** automático
- ✅ **CSS-in-JS** com Tailwind (tree-shaking)

### 🔍 **SEO Ready**
- ✅ **Metadata completa** em todas as páginas
- ✅ **URLs semânticas** e clean
- ✅ **Estrutura HTML semântica**
- ✅ **Alt tags** em todas as imagens
- ✅ **Schema.org markup** (pronto para implementar)

---

## 🎯 **Conversão e Marketing**

### 📈 **Elementos de Conversão**
- ✅ **12+ CTAs estratégicos** distribuídos pelo site
- ✅ **Prova Social** com depoimentos reais
- ✅ **Senso de Urgência** com ofertas limitadas
- ✅ **Comparação clara** de planos e benefícios
- ✅ **FAQ proativa** removendo objeções

### 🎨 **Psicologia de Cores**
- 🔴 **Vermelho** - Energia, paixão, ação
- ⚫ **Preto** - Elegância, sofisticação, força  
- 🟡 **Amarelo** - Destaque, otimismo, urgência

---

## 🛠️ **Scripts Disponíveis**

```bash
# Desenvolvimento
npm run dev          # Servidor local com hot-reload

# Build e Deploy
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código

# Análise
npm run analyze      # Bundle analyzer (futuro)
```

---

## 📱 **Compatibilidade**

### 🌐 **Navegadores Suportados**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 📱 **Dispositivos**
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

---

## 🚀 **Deploy e Produção**

### 🌍 **Plataformas Recomendadas**
```bash
# Vercel (Recomendado)
vercel --prod

# Netlify
netlify deploy --prod

# AWS Amplify
amplify publish
```

### ⚙️ **Variáveis de Ambiente**
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://fitlife-academia.com.br
NEXT_PUBLIC_ANALYTICS_ID=GA_TRACKING_ID
NEXT_PUBLIC_CONTACT_EMAIL=contato@fitlife-academia.com.br
```

---

## 📈 **Roadmap Futuro**

### 🔮 **Funcionalidades Planejadas**
- [ ] **Sistema de Agendamento** online
- [ ] **Portal do Aluno** com login
- [ ] **Blog integrado** para SEO
- [ ] **Chatbot** com IA para atendimento
- [ ] **PWA** (Progressive Web App)
- [ ] **Integração com CRM** para leads
- [ ] **A/B Testing** de CTAs
- [ ] **Analytics avançado** com heatmaps

---

## 👨‍💻 **Desenvolvido por**

**Sena Technologies**  
🌐 [GitHub](https://github.com/sena-technologies)  
📧 contato@sena-technologies.com.br  

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <h3>⭐ Se você gostou do projeto, deixe uma estrela!</h3>
  <p>Desenvolvido com ❤️ e muito ☕ pela equipe Sena Technologies</p>
</div>

---

## 📞 **Suporte**

Dúvidas ou sugestões? Entre em contato:

- 📧 **Email:** suporte@fitlife-academia.com.br
- 💬 **WhatsApp:** (11) 99999-0000
- 🌐 **Website:** https://fitlife-academia.com.br

---

*Última atualização: Setembro 2025* 🚀

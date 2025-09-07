import Link from 'next/link'
import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Início', href: '/' },
      { name: 'Sobre', href: '/about' },
      { name: 'Modalidades', href: '/modalities' },
      { name: 'Planos', href: '/plans' },
      { name: 'Contato', href: '/contact' },
    ],
    modalidades: [
      { name: 'Musculação', href: '/modalities/musculacao' },
      { name: 'Crossfit', href: '/modalities/crossfit' },
      { name: 'Pilates', href: '/modalities/pilates' },
      { name: 'Spinning', href: '/modalities/spinning' },
      { name: 'Yoga', href: '/modalities/yoga' },
      { name: 'Natação', href: '/modalities/natacao' },
    ],
    social: [
      { name: 'Instagram', href: 'https://instagram.com/fitlife', icon: Instagram },
      { name: 'Facebook', href: 'https://facebook.com/fitlife', icon: Facebook },
      { name: 'WhatsApp', href: 'https://wa.me/5511987654321', icon: MessageCircle },
    ],
  }

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              🔥 Fique por dentro das <span className="gradient-text">novidades!</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Receba dicas exclusivas, treinos personalizados e promoções especiais direto no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="flex-1 px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none"
              />
              <Button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold px-6 py-3 neon-glow">
                ⚡ INSCREVER
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center neon-glow">
                <Dumbbell className="w-10 h-10 text-white" />
              </div>
              <div>
                <span className="text-white font-black text-3xl">FitLife</span>
                <div className="text-red-400 text-sm font-medium tracking-wide">ACADEMIA</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              <span className="text-white font-semibold">Transforme seu corpo e sua vida</span> na FitLife Academia. 
              Equipamentos de última geração, profissionais qualificados e um ambiente 
              <span className="text-yellow-400"> motivador</span> para você alcançar seus objetivos.
            </p>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-bold">🌟 Siga-nos nas redes</h4>
              <div className="flex space-x-4">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 card-glow"
                      aria-label={item.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">
              🔗 <span className="gradient-text">Links Rápidos</span>
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalidades */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">
              💪 <span className="gradient-text">Modalidades</span>
            </h3>
            <ul className="space-y-3">
              {navigation.modalidades.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">
              📞 <span className="gradient-text">Contato</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Endereço</div>
                  <div className="text-sm">Rua da Academia, 123</div>
                  <div className="text-sm">Centro - São Paulo/SP</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Telefone</div>
                  <a href="tel:+5511987654321" className="text-sm hover:text-green-400 transition-colors">
                    (11) 98765-4321
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">E-mail</div>
                  <a href="mailto:contato@fitlife.com" className="text-sm hover:text-blue-400 transition-colors">
                    contato@fitlife.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Horários</div>
                  <div className="text-sm">Seg-Sex: 06:00 - 22:00</div>
                  <div className="text-sm">Sáb: 08:00 - 18:00</div>
                  <div className="text-sm">Dom: 10:00 - 16:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-white font-semibold">FitLife Academia</span>. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-gray-300">Política de Privacidade</Link>
                <Link href="/terms" className="hover:text-gray-300">Termos de Uso</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                Desenvolvido por{' '}
              </p>
              <span className="text-red-400 hover:text-red-300 transition-colors font-semibold">
                Sena Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

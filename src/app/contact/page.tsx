'use client'

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'visita',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio - aqui você integraria com sua API
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: 'visita', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Entre em <span className="text-red-500">Contato</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a começar sua jornada fitness
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                      <p className="text-green-400">
                        ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                      <p className="text-red-400">
                        ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Assunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="visita">Agendar visita</option>
                        <option value="planos">Informações sobre planos</option>
                        <option value="modalidades">Modalidades disponíveis</option>
                        <option value="personal">Personal trainer</option>
                        <option value="nutricao">Nutrição</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                        placeholder="Conte-nos um pouco sobre seus objetivos ou dúvidas..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Endereço</h3>
                      <p className="text-gray-400">
                        Rua do Fitness, 123<br />
                        Centro - São Paulo, SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Telefone</h3>
                      <p className="text-gray-400">
                        (11) 3456-7890<br />
                        (11) 98765-4321 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">E-mail</h3>
                      <p className="text-gray-400">
                        contato@fitlife.com<br />
                        comercial@fitlife.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-400">
                        Segunda a Sexta: 6h às 23h<br />
                        Sábados: 7h às 20h<br />
                        Domingos: 8h às 18h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-green-500/10 border-green-500/30">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">
                      Atendimento via WhatsApp
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Fale conosco agora e tire suas dúvidas em tempo real
                    </p>
                    <Button 
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => window.open('https://wa.me/5511987654321', '_blank')}
                    >
                      Chamar no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-red-400 mx-auto mb-2" />
                      <p className="text-gray-400">
                        Mapa da localização<br />
                        <span className="text-sm">Integração com Google Maps</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Venha Conhecer Nossa Academia
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Agende uma visita gratuita e sem compromisso
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-red-600 hover:bg-gray-100"
            onClick={() => window.open('https://wa.me/5511987654321?text=Olá! Gostaria de agendar uma visita gratuita na FitLife Academia.', '_blank')}
          >
            Agendar Visita via WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}

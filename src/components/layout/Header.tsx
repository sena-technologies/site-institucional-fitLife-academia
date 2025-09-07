'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Dumbbell, Users, Clock, MapPin, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const navigation = [
    { name: 'Início', href: '/' },
    { 
      name: 'Academia', 
      href: '/about',
      dropdown: [
        { name: 'Sobre Nós', href: '/about', icon: Users },
        { name: 'Tour 360°', href: '/tour', icon: MapPin },
        { name: 'Horários', href: '/schedule', icon: Clock },
      ]
    },
    { 
      name: 'Modalidades', 
      href: '/modalities'
    },
    { name: 'Planos', href: '/plans' },
    { name: 'Contato', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  // Funções para controlar o dropdown com delay
  const handleMouseEnter = (itemName: string, hasDropdown: boolean) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    if (hasDropdown) {
      setActiveDropdown(itemName)
    }
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 800) // Aumentando delay para 800ms
    setDropdownTimeout(timeout)
  }

  const handleDropdownMouseEnter = (itemName: string) => {
    // Cancela o timer quando entra no dropdown
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl border-b border-red-600/20">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Rua da Academia, 123 - São Paulo</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">🔥 PRIMEIRA SEMANA GRÁTIS!</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Enhanced */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl tracking-tight">FitLife</span>
              <span className="text-red-400 text-xs font-medium tracking-wide">ACADEMIA</span>
            </div>
          </Link>

          {/* Desktop Navigation Enhanced */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name, !!item.dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive(item.href)
                      ? 'text-red-400 bg-red-600/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    {/* Bridge invisível para facilitar navegação */}
                    <div className="w-64 h-2 bg-transparent"></div>
                    <div 
                      className="w-64 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up"
                      onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-red-600/10 rounded-lg transition-all duration-200"
                          >
                            {'icon' in subItem && subItem.icon && <subItem.icon className="w-5 h-5 text-red-400" />}
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link
                href="/plans"
                className="px-6 py-2 text-red-600 border border-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Ver Planos
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-600/25"
              >
                Matricular-se
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-700 animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-red-400 bg-red-600/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-3 py-2 px-4 text-gray-400 hover:text-white rounded-lg transition-colors"
                        >
                          {'icon' in subItem && subItem.icon && <subItem.icon className="w-4 h-4 text-red-400" />}
                          <span className="text-sm">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-6 border-t border-gray-700 space-y-3">
                <Link
                  href="/plans"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 px-6 text-red-600 border border-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Ver Planos
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300"
                >
                  Matricular-se
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

import React, { useState, useEffect } from 'react';
import { Heart, Star, MapPin, Phone, Mail, Instagram, Facebook, Gift, Cake, Coffee } from 'lucide-react';
import emailjs from '@emailjs/browser';

const NamNamLanding = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init('nz5gy0a5TyXOlGui-');
  }, []);  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      setError(null);
      
      try {
        // Verificar que EmailJS esté inicializado
        console.log('EmailJS inicializado:', emailjs);
          const templateParams = {
          name: email,
          to_email: email,
          from_name: 'Ñam Ñam',
          reply_to: 'postresnam@gmail.com',
          message: `¡Hola! Gracias por tu interés en Ñam Ñam. Nos encantaría atenderte personalmente. Por favor, escríbenos por WhatsApp al número +593978742139 para ayudarte con tu pedido. ¡Esperamos crear algo delicioso para ti!`,
          email: email
        };

        console.log('Enviando correo con parámetros:', templateParams);

        const result = await emailjs.send(
          'service_0flguwa',
          'template_8cuj2ww',
          templateParams,
          'nz5gy0a5TyXOlGui-'
        );        console.log('Correo enviado exitosamente:', result);
        
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Error detallado:', error);
        console.error('Error status:', error.status);
        console.error('Error text:', error.text);
        
        let errorMessage = 'Error al enviar correo: ';
        
        if (error.status === 400) {
          errorMessage += 'Datos inválidos. Verifique el email.';
        } else if (error.status === 401) {
          errorMessage += 'Error de autenticación. Verifique las credenciales de EmailJS.';
        } else if (error.status === 403) {
          errorMessage += 'Acceso denegado. Verifique la configuración del servicio.';
        } else if (error.status === 404) {
          errorMessage += 'Servicio o plantilla no encontrada.';
        } else if (error.text) {
          errorMessage += error.text;        } else {
          errorMessage += 'Error desconocido. Revise la consola para más detalles.';
        }
        
        setError(errorMessage);
        setTimeout(() => setError(null), 7000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Floating elements animation
  const [floatingElements, setFloatingElements] = useState([]);
  
  useEffect(() => {
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      emoji: ['🧁', '🍰', '🥐', '🍪', '🎂', '🥧'][i],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setFloatingElements(elements);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-x-hidden relative">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-800 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        Ir al contenido principal
      </a>
      
      {/* Floating Background Elements */}
      {floatingElements.map(element => (
        <div
          key={element.id}
          className="absolute text-lg sm:text-2xl opacity-10 sm:opacity-20 animate-bounce pointer-events-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: '3s'
          }}
          aria-hidden="true"
        >
          {element.emoji}
        </div>
      ))}{/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm shadow-lg sticky top-0" role="banner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                <img src="/logo.png" alt="Ñam Ñam - Postres Artesanales Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-amber-800">Ñam Ñam</h1>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm sm:text-lg text-amber-600 italic">"Tan ricos que no se comparten"</p>
            </div>
          </div>
        </div>
      </header>      {/* Hero Section */}
      <section id="main-content" className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6" role="main">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-pink-500 mb-3 sm:mb-4 leading-tight">
              Delicias que
              <br />
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">ENAMORAN</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-700 max-w-3xl mx-auto leading-relaxed px-2">
              Postres artesanales, salados irresistibles y arreglos únicos para hacer de cada ocasión un momento especial
            </p>
          </div>

          {/* CTA Principal */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl max-w-2xl mx-auto mb-8 sm:mb-12 border border-orange-100">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">
              🎉 ¡Prueba nuestras delicias AHORA!
            </h3>
            <p className="text-base sm:text-lg text-amber-700 mb-4 sm:mb-6 px-2">
              Escríbenos y recibe <span className="font-bold text-orange-500">un mensaje</span> para tu primera orden
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-orange-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 text-amber-800 placeholder-amber-400 text-sm sm:text-base"
                required
                disabled={isLoading}
                aria-label="Ingresa tu correo electrónico"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
                disabled={isLoading}
                aria-label={isLoading ? "Enviando correo..." : "Solicitar información"}
              >
                {isLoading ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Enviando...</span>
                  </span>
                ) : (
                  <>
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span>¡Quiero probar!</span>
                  </>
                )}
              </button>
            </form>            {showSuccess && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-100 border border-green-400 rounded-lg text-green-700 text-sm sm:text-base" role="alert" aria-live="polite">
                ¡Perfecto! Te hemos enviado un correo con toda la información. ¡Revisa tu email! 🎉
              </div>
            )}
            
            {error && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-red-100 border border-red-400 rounded-lg text-red-700 text-sm sm:text-base" role="alert" aria-live="assertive">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>      {/* Servicios */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6" aria-labelledby="servicios-title">
        <div className="max-w-6xl mx-auto">
          <h3 id="servicios-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-amber-800 mb-8 sm:mb-12">
            Nuestras Especialidades
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Cake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" aria-hidden="true" />,
                title: "Postres Artesanales",
                description: "Tortas, cupcakes, cheesecakes y más. Cada bocado es una experiencia única.",
                color: "from-pink-400 to-rose-400"
              },
              {
                icon: <Coffee className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" aria-hidden="true" />,
                title: "Salados Gourmet",
                description: "Empanadas, pan de almidón, bocadillos perfectos para cualquier momento del día.",
                color: "from-amber-400 to-orange-400"
              },
              {
                icon: <Gift className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" aria-hidden="true" />,
                title: "Arreglos Especiales",
                description: "Diseños únicos para bodas, cumpleaños, graduaciones y celebraciones.",
                color: "from-purple-400 to-pink-400"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-orange-100"
              >
                <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-amber-800 mb-3 sm:mb-4 text-center">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-amber-700 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Testimonios */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-orange-100/50 to-pink-100/50" aria-labelledby="testimonios-title">
        <div className="max-w-4xl mx-auto text-center">
          <h3 id="testimonios-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 mb-8 sm:mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                text: "¡Increíbles! Pedí un Pay de Limón para el cumpleaños de mi hija y quedó fascinada. Definitivamente volveré a pedir.",
                author: "María González",
                rating: 5
              },
              {
                text: "Los postres de maracuyá están espectaculares. Perfecto para las reuniones de oficina. Calidad y sabor en cada bocado.",
                author: "Carlos Mendoza",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-orange-100"
              >
                <div className="flex justify-center mb-3 sm:mb-4" role="img" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-amber-700 italic mb-3 sm:mb-4">
                  "{testimonial.text}"
                </blockquote>
                <cite className="font-semibold text-amber-800 text-sm sm:text-base not-italic">
                  - {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* CTA Final */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6" aria-labelledby="contacto-title">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-amber-100/50">
            <h3 id="contacto-title" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-amber-800">
              ¿Listo para endulzar tu día?
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 lg:mb-10 text-amber-700 opacity-90">
              Contáctanos ahora y recibe atención personalizada para tu próximo evento
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              {/* Sección de Llamadas */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-amber-800 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  Llamar directamente
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="tel:+593978742139"
                    className="group block w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    aria-label="Llamar al número masculino +593 978 742 139"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <span className="text-xs sm:text-sm" aria-hidden="true">👨</span>
                      </div>
                      <div className="text-slate-700 font-medium text-sm sm:text-base">+593 978 742 139</div>
                    </div>
                  </a>
                  <a
                    href="tel:+593962675161"
                    className="group block w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    aria-label="Llamar al número femenino +593 96 267 5161"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <span className="text-xs sm:text-sm" aria-hidden="true">👩</span>
                      </div>
                      <div className="text-slate-700 font-medium text-sm sm:text-base">+593 962 675 161</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Sección de WhatsApp */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-amber-800 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                  <span className="text-lg sm:text-xl" aria-hidden="true">💬</span>
                  WhatsApp
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="https://wa.me/593978742139"
                    className="group block w-full bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar mensaje de WhatsApp al número masculino +593 978 742 139"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <span className="text-xs sm:text-sm" aria-hidden="true">👨</span>
                      </div>
                      <div className="text-green-700 font-medium text-sm sm:text-base">+593 978 742 139</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/593962675161"
                    className="group block w-full bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar mensaje de WhatsApp al número femenino +593 962 675 161"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <span className="text-xs sm:text-sm" aria-hidden="true">👩</span>
                      </div>
                      <div className="text-green-700 font-medium text-sm sm:text-base">+593 962 675 161</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-amber-100">
              <p className="text-xs sm:text-sm text-amber-600 opacity-75">
                📝 Trabajamos bajo pedidos personalizados | Contáctanos para tu próximo evento especial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-amber-900 text-amber-100 py-8 sm:py-12 px-4 sm:px-6" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start space-y-3 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-xl p-2 backdrop-blur-sm">
                  <img src="/logo.png" alt="Ñam Ñam - Postres Artesanales" className="w-full h-full object-contain filter brightness-0 invert" />
                </div>
                <div className="text-center lg:text-left">
                  <span className="text-xl sm:text-2xl font-bold block">Ñam Ñam</span>
                  <p className="italic text-amber-200 text-xs sm:text-sm mt-1">"Tan ricos que no se comparten"</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-center lg:text-left text-sm sm:text-base">Contacto</h4>
              <div className="space-y-2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Montecristi, Ecuador</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-xs sm:text-sm">+593 978 742 139</span>
                    <span className="hidden sm:inline text-xs sm:text-sm">•</span>
                    <span className="text-xs sm:text-sm">+593 962 675 161</span>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm break-all">postresnam@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-center lg:text-left text-sm sm:text-base">¿Cómo pedir?</h4>
              <div className="space-y-2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Pedidos personalizados</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Diseños únicos</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Cake className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">Para toda ocasión</span>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-4 mt-4 sm:mt-6">                <a 
                  href="https://www.instagram.com/nam.namecu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 cursor-pointer transition-colors transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded"
                  aria-label="Visitar nuestro perfil de Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className="hover:text-blue-300 cursor-pointer transition-colors transform hover:scale-110 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded bg-transparent border-none p-0"
                  aria-label="Facebook (próximamente disponible)"
                  title="Facebook - Próximamente disponible"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm">&copy; 2025 Ñam Ñam. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NamNamLanding;

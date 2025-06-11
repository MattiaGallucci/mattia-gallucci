import React from 'react';
import { MapPin, GraduationCap, Code2, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ParallaxBackground from './ParallaxBackground';

const Hero = () => {
  return (
    <section id="about" className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxBackground speed={0.2}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </ParallaxBackground>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <AnimatedSection id="hero-intro" animation="fadeUp">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                  <Code2 size={20} className="animate-pulse" />
                  <span className="text-sm font-medium tracking-wider">PRESENTAZIONE</span>
                  <Sparkles size={16} className="animate-bounce" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Ciao, sono{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                    Mattia Gallucci
                  </span>
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                    <span>Studente Informatica</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <MapPin size={18} className="text-teal-600 dark:text-teal-400" />
                    <span>Università di Salerno</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection id="hero-description" animation="fadeUp" delay={200}>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Studente al terzo anno del corso di laurea triennale in Informatica presso l'Università degli Studi di Salerno.
                </p>
                <p>
                  Il mio percorso accademico è stato guidato fin dall'inizio da un'incessante curiosità e da una passione autentica per tutto ciò che riguarda il mondo della tecnologia. Negli ultimi anni ho sviluppato un forte interesse per aree complesse e stimolanti come la <strong className="text-blue-600 dark:text-blue-400">sicurezza informatica</strong>, l'<strong className="text-teal-600 dark:text-teal-400">ingegneria del software</strong> e l'<strong className="text-purple-600 dark:text-purple-400">intelligenza artificiale</strong> — tre pilastri dell'informatica moderna che ritengo fondamentali per costruire soluzioni innovative, etiche e sostenibili.
                </p>
                <p>
                  Tuttavia, la mia visione dell'informatica va oltre: trovo affascinante anche l'intersezione tra tecnologia e creatività, soprattutto nei contesti in cui è necessario costruire esperienze utente intuitive, affidabili e inclusive.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection id="hero-tags" animation="fadeUp" delay={400}>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Sicurezza Informatica
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-teal-200 dark:from-teal-900/50 dark:to-teal-800/50 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Intelligenza Artificiale
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default">
                  Ingegneria del Software
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection id="hero-image" animation="fadeLeft" delay={300}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mattia Gallucci - Sviluppatore"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all duration-700"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;

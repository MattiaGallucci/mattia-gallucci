import React from 'react';
import { Mail, ExternalLink, Sparkles, Github, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Contatto dal Portfolio - Mattia Gallucci');
    const body = encodeURIComponent(`Ciao Mattia,

Ho visitato il tuo portfolio e sono interessato a discutere di:
[ ] Opportunità di collaborazione
[ ] Stage o tirocinio
[ ] Progetto di ricerca
[ ] Consulenza tecnica
[ ] Altro

Messaggio:


Cordiali saluti,
[Il tuo nome]`);
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=mattiagal2003@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection id="contact-header" animation="fadeUp">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
              <Mail size={20} className="animate-bounce" />
              <span className="text-sm font-medium tracking-wider">CONTATTAMI</span>
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Iniziamo una Conversazione
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Se ciò che ha letto fin qui ha suscitato il Suo interesse, mi farebbe molto piacere ricevere un Suo messaggio.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact-content" animation="scale" delay={200}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center space-y-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  Che si tratti di collaborazioni, opportunità di stage, progetti di ricerca o semplicemente per uno scambio di idee, 
                  sarò felice di confrontarmi. Clicca il pulsante qui sotto per inviarmi una email - sarà mia premura rispondere il prima possibile.
                </p>
              </div>

              {/* Email Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleEmailClick}
                  className="group relative bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:from-blue-700 hover:to-teal-700 flex items-center space-x-3"
                >
                  <Mail size={20} className="group-hover:animate-bounce" />
                  <span>Invia Email</span>
                  <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </button>
              </div>

              {/* Alternative Contact Methods */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Oppure contattami tramite:</p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/MattiaGallucci" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mattiagallucci/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

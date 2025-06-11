import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {

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
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 group">
            <Code2 size={24} className="text-blue-400 group-hover:animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Mattia Gallucci
            </span>
          </div>
          
          <p className="text-gray-400 text-lg">
            Studente in Informatica • Università degli Studi di Salerno
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
          <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleEmailClick();
                    }}
                    className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                    aria-label="Email"
                  >
                    <Mail size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
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

          <div className="flex items-center justify-center space-x-1 text-sm text-gray-400">
            <span>Realizzato con</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>e passione per la tecnologia</span>
          </div>
          
          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2025 Mattia Gallucci. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
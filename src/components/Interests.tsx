import React from 'react';
import { Dumbbell, Gamepad2, Film, Target, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const interests = [
  {
    icon: Dumbbell,
    title: "Palestra",
    description: "La palestra mi insegna disciplina e costanza, mantenendo l'equilibrio tra mente e corpo.",
    image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-600 hover:to-red-600"
  },
  {
    icon: Film,
    title: "Cinema",
    description: "Grande fan di thriller psicologici, fantascienza e horror che stimolano la riflessione.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-purple-500 to-pink-500",
    hoverColor: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    icon: Gamepad2,
    title: "Videogiochi",
    description: "Mi immergo nel mondo dei videogiochi single-player, fonte d'ispirazione per la creatività tecnologica.",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:from-blue-600 hover:to-cyan-600"
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-400/5 dark:to-purple-400/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 dark:from-teal-400/5 dark:to-cyan-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection id="interests-header" animation="fadeUp">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
              <Target size={20} className="animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-medium tracking-wider">INTERESSI</span>
              <Heart size={16} className="animate-pulse text-red-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tempo Libero
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Al di là dell'università, cerco costantemente di alimentare il mio equilibrio tra mente e corpo attraverso diverse passioni.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <AnimatedSection 
                key={index}
                id={`interest-${index}`}
                animation="stagger"
                delay={index * 200}
              >
                <div className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1`}>
                  {/* Background Image */}
                  <div className="relative h-64">
                    <img 
                      src={interest.image}
                      alt={interest.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} ${interest.hoverColor} opacity-80 transition-all duration-500`}></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="text-white space-y-3 transform transition-all duration-500 group-hover:translate-y-0">
                      <div className="flex items-center space-x-2">
                        <IconComponent size={24} className="animate-bounce" style={{ animationDelay: `${index * 0.5}s` }} />
                        <h3 className="text-xl font-bold">{interest.title}</h3>
                      </div>
                      <p className="text-sm opacity-90 leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {interest.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-t ${interest.color} opacity-20 blur-xl`}></div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Quote Section */}
        <AnimatedSection id="interests-quote" animation="scale" delay={600}>
          <div className="text-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-600/50">
            <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium italic mb-4 leading-relaxed">
              "Queste passioni contribuiscono a definire chi sono: una persona con una mente logica e analitica, ma anche con un'anima creativa e riflessiva."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-pulse"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Interests;
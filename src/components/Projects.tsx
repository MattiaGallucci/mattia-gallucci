import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, ChevronUp, Zap, ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 1,
    title: "LLM & Smart Contracts",
    subtitle: "Tirocinio accademico",
    period: "2025 - in corso",
    description: "Studio e sperimentazione di soluzioni basate su modelli linguistici di grandi dimensioni (LLM) per l'identificazione automatica di vulnerabilità nei contratti intelligenti.",
    fullDescription: "Questo progetto di tirocinio rappresenta un'esplorazione all'avanguardia nell'intersezione tra intelligenza artificiale e sicurezza blockchain. L'obiettivo è sviluppare un sistema automatizzato che utilizzi modelli linguistici avanzati per analizzare il codice dei smart contracts e identificare potenziali vulnerabilità di sicurezza. Il progetto combina tecniche di natural language processing, analisi statica del codice e machine learning per creare uno strumento che possa assistere gli sviluppatori nella creazione di contratti più sicuri e affidabili.",
    tags: ["AI", "Blockchain", "Cybersecurity", "NLP", "Machine Learning"],
    status: "in-corso",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-purple-500 to-pink-500",
    technologies: ["Python", "Solidity", "TensorFlow", "Transformers", "Web3"],
    githubUrl: "https://github.com/MattiaGallucci/tirocinio"
  },
  {
    id: 2,
    title: "GoalGuru",
    subtitle: "Fondamenti di intelligenza artificiale",
    period: "2024 - 2025",
    description: "Sviluppo di un sistema predittivo basato su reti neurali per prevedere risultati calcistici utilizzando dati storici e trend attuali.",
    fullDescription: "GoalGuru è un sistema di predizione sportiva che utilizza algoritmi di machine learning avanzati per analizzare dati calcistici e prevedere i risultati delle partite. Il progetto integra diverse fonti di dati, inclusi statistiche delle squadre, performance dei giocatori, condizioni meteorologiche e fattori psicologici. Attraverso l'uso di reti neurali profonde e tecniche di ensemble learning, il sistema è in grado di fornire predizioni accurate con un'interfaccia utente intuitiva per visualizzare le analisi e le previsioni.",
    tags: ["Machine Learning", "Neural Networks", "Sports Analytics", "Data Science"],
    collaborators: ["Choaib Goumri"],
    image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-green-500 to-blue-500",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/MattiaGallucci/GoalGuru"
  },
  {
    id: 3,
    title: "SwaGGed",
    subtitle: "Ingegneria del software",
    period: "2024 - 2025",
    description: "Social network dedicato agli appassionati di musica, con articoli, recensioni, notizie e interviste.",
    fullDescription: "SwaGGed è una piattaforma social innovativa progettata specificamente per la comunità musicale. Il progetto presenta un'architettura complessa che include sistemi di raccomandazione personalizzati, gestione di contenuti multimediali, sistemi di rating e recensioni, e funzionalità social avanzate. L'applicazione è stata sviluppata seguendo principi di ingegneria del software moderni, con particolare attenzione alla scalabilità, sicurezza e user experience. Include funzionalità come streaming musicale, creazione di playlist collaborative, sistema di follow/follower e algoritmi di discovery musicale.",
    tags: ["Social Network", "UX/UI", "Backend", "Music Tech", "Streaming"],
    collaborators: ["Choaib Goumri"],
    image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-orange-500 to-red-500",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/MattiaGallucci/SwaGGed"
  },
  {
    id: 4,
    title: "G&G Jewelry",
    subtitle: "Tecnologie software per il web",
    period: "2023 - 2024",
    description: "E-commerce nato per valorizzare il made in Italy: vendita online di gioielli artigianali di alta qualità.",
    fullDescription: "G&G Jewelry è una piattaforma e-commerce completa sviluppata per promuovere l'eccellenza artigianale italiana nel settore della gioielleria. Il progetto include un sistema di gestione prodotti avanzato con gallerie fotografiche ad alta risoluzione, sistema di pagamenti sicuri, gestione inventario, dashboard amministrativa, e funzionalità di personalizzazione prodotti. L'interfaccia è stata progettata con particolare attenzione all'estetica e all'usabilità, riflettendo l'eleganza dei prodotti venduti. Include anche funzionalità di tracking ordini, sistema di recensioni e programma fedeltà clienti.",
    tags: ["E-commerce", "Frontend", "Made in Italy", "Payment Systems", "Luxury"],
    collaborators: ["Choaib Goumri"],
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-yellow-500 to-orange-500",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/MattiaGallucci/GGJewelry"
  },
  {
    id: 5,
    title: "Analisi Criminalità e Disoccupazione",
    subtitle: "Calcolo delle probabilità e statistica matematica",
    period: "2023 - 2024",
    description: "Studio statistico su una possibile correlazione tra tasso di disoccupazione e criminalità.",
    fullDescription: "Questo progetto di ricerca interdisciplinare esplora la complessa relazione tra indicatori socioeconomici e fenomeni criminali attraverso l'applicazione rigorosa di metodologie statistiche avanzate. L'analisi include la raccolta e pulizia di dataset governativi, l'applicazione di test di correlazione, regressione lineare e multipla, analisi delle serie temporali e modellazione predittiva. Il progetto ha prodotto insights significativi sulle dinamiche sociali, contribuendo alla comprensione di come fattori economici possano influenzare la sicurezza pubblica, con implicazioni per le politiche sociali.",
    tags: ["Data Analysis", "Statistics", "Research", "Social Science", "Econometrics"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-500 to-purple-500",
    technologies: ["R", "Python", "SPSS", "Excel", "Tableau"],
    githubUrl: "https://github.com/MattiaGallucci/Progetto-CPSM"
  },
  {
    id: 6,
    title: "Sistema di Gestione Aeroportuale",
    subtitle: "Base di dati",
    period: "2023 - 2024",
    description: "Progettazione e realizzazione di un sistema per la gestione operativa di un aeroporto.",
    fullDescription: "Questo progetto comprende la progettazione e implementazione completa di un sistema informativo per la gestione delle operazioni aeroportuali. Il sistema gestisce prenotazioni voli, check-in passeggeri, assegnazione gate, gestione bagagli, scheduling equipaggi e manutenzione aeromobili. La progettazione include un'analisi approfondita dei requisiti, modellazione ER, normalizzazione del database, implementazione di stored procedures e trigger, e sviluppo di un'interfaccia utente per diverse tipologie di operatori. Il progetto dimostra competenze avanzate in progettazione di database, ottimizzazione query e gestione di sistemi complessi.",
    tags: ["Database", "SQL", "System Design", "Aviation", "Enterprise Systems"],
    image: "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-teal-500 to-cyan-500",
    technologies: ["PostgreSQL", "Java", "Spring Boot", "Hibernate", "Angular"],
    githubUrl: "https://github.com/MattiaGallucci/Progetto-BD"
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection id="projects-header" animation="fadeUp">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
              <ExternalLink size={20} className="animate-pulse" />
              <span className="text-sm font-medium tracking-wider">PROGETTI</span>
              <Zap size={16} className="animate-bounce" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              I Miei Lavori
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Nel mio percorso universitario ho lavorato a diversi progetti, sia individuali che in team, 
              mettendo in pratica le competenze acquisite in aula.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id}
              id={`project-${project.id}`}
              animation="stagger"
              delay={index * 100}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 ${
                expandedProject === project.id ? 'ring-2 ring-blue-500/50 dark:ring-blue-400/50' : ''
              }`}>
                {/* Project Header */}
                <div 
                  onClick={() => toggleProject(project.id)}
                  className="cursor-pointer p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden group">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    </div>
                    
                    <div className="flex-grow min-w-0 overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            {project.status && (
                              <span className="inline-flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs rounded-full animate-pulse">
                                <Zap size={10} />
                                <span>In corso</span>
                              </span>
                            )}
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                            {project.subtitle}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{project.period}</span>
                            </div>
                            {project.collaborators && (
                              <div className="flex items-center space-x-1">
                                <Users size={14} />
                                <span>Con {project.collaborators.join(', ')}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base break-words">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center sm:ml-4 space-x-2 mt-3 sm:mt-0">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                            title="Visualizza repository GitHub"
                          >
                            <Github size={20} />
                          </a>
                          <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                            {expandedProject === project.id ? (
                              <ChevronUp size={20} className="animate-bounce" />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedProject === project.id 
                    ? 'max-h-[2000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-4 sm:px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="pt-6 space-y-4 sm:space-y-6">
                      {/* Large Project Image */}
                      <div className="relative overflow-hidden rounded-xl shadow-lg group max-w-full">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white text-2xl font-bold">{project.title}</h4>
                        </div>
                      </div>

                      {/* Detailed Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Descrizione Dettagliata
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base break-words">
                          {project.fullDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      {project.technologies && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Tecnologie Utilizzate
                          </h4>
                          <div className="flex flex-wrap gap-2 max-w-full">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 mb-1"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Competenze Sviluppate
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 mb-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

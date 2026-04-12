/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import { 
  BarChart3, 
  Database, 
  Settings, 
  Ticket, 
  Calendar, 
  Building2, 
  CheckCircle2,
  Linkedin,
  Mail,
  X,
  Info,
  Cpu,
  Zap,
  Network,
  FileSpreadsheet,
  Users,
  LineChart,
  Code2,
  Github,
  Phone
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from "recharts";

type Language = 'es' | 'en';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  toolUsage: { name: string; value: number }[];
  progress: number;
  date: string;
  company: string;
  icon: ReactNode;
}

const translations = {
  es: {
    role: "Desarrollo de Software / Data & Automation Specialist",
    featuredProjects: "Proyectos Destacados",
    completed: "Completado",
    progreso: "Progreso",
    detailedDesc: "Descripción Detallada",
    techStack: "Stack Tecnológico",
    date: "Fecha",
    status: "Estado",
    finished: "Finalizado",
    toolUsage: "Uso de Herramientas (%)",
    toolUsageNote: "* Estimación del tiempo y esfuerzo dedicado a cada herramienta durante el desarrollo.",
    footer: "Desarrollado con pasión por la automatización.",
    switchLang: "Translator",
    aboutTitle: "Sobre Mí",
    learnMore: "Conoce más sobre mí",
    skillsBtn: "Habilidades",
    contactBtn: "Contacto",
    aboutContent: [
      "Soy un profesional en tecnología con experiencia en análisis de datos, desarrollo de software y automatización de procesos, enfocado en generar impacto real en entornos empresariales. He trabajado en compañías como Renault Sofasa y Simex, donde he liderado y participado en el desarrollo de soluciones tecnológicas que optimizan procesos críticos del negocio.",
      "En Renault, desarrollé aplicaciones que transformaron procesos manuales de alto esfuerzo en soluciones automatizadas, logrando reducciones significativas de tiempo (de horas a minutos) y mejorando la toma de decisiones mediante generación de reportes. En Simex, he implementado automatizaciones con herramientas como n8n y trabajado con ERP como Epicor, integrando datos, optimizando flujos operativos y eliminando tareas manuales repetitivas.",
      "Cuento con conocimientos sólidos en SQL avanzado, Python, Power BI, desarrollo con React y .NET, así como en integración de APIs y uso de herramientas de inteligencia artificial aplicadas al negocio. Me caracterizo por una mentalidad analítica, enfoque en resultados y la capacidad de conectar la tecnología con las necesidades reales de la organización, convirtiendo datos y procesos en soluciones eficientes y escalables."
    ],
    interestsTitle: "Intereses",
    interests: ["Análisis de datos", "Inteligencia artificial", "Software", "Programación orientada a objetos", "Bases de datos", "Transformación digital", "Business Intelligence", "Cloud Computing"],
    skillsTitle: "Habilidades",
    skills: ["Python", "Html", "Css", "JavaScript", "Node.js", "TypeScript", "React", ".Net", "SQL", "C#", "C++", "Java", "Php", "Bash", "MongoDB", "LookerDB", "Docker", "N8N", "Power Automate", "Power Apps", "Excel", "Sharepoint", "Copilot studio", "Figma", "Visual Studio Code", "Visual Studio Community", "Ubuntu", "CentOS", "Linux Mint"]
  },
  en: {
    role: "Software Development / Data & Automation Specialist",
    featuredProjects: "Featured Projects",
    completed: "Completed",
    progreso: "Progress",
    detailedDesc: "Detailed Description",
    techStack: "Tech Stack",
    date: "Date",
    status: "Status",
    finished: "Completed",
    toolUsage: "Tool Usage (%)",
    toolUsageNote: "* Estimated time and effort dedicated to each tool during development.",
    footer: "Developed with passion for automation.",
    switchLang: "Translator",
    aboutTitle: "About Me",
    learnMore: "Learn more about me",
    skillsBtn: "Skills",
    contactBtn: "Contact",
    aboutContent: [
      "I am a technology professional with experience in data analysis, software development, and process automation, focused on generating real impact in business environments. I have worked in companies such as Renault Sofasa and Simex, where I have led and participated in the development of technological solutions that optimize critical business processes.",
      "At Renault, I developed applications that transformed high-effort manual processes into automated solutions, achieving significant time reductions (from hours to minutes) and improving decision-making through report generation. At Simex, I have implemented automations with tools like n8n and worked with ERPs like Epicor, integrating data, optimizing operational flows, and eliminating repetitive manual tasks.",
      "I have solid knowledge in advanced SQL, Python, Power BI, development with React and .NET, as well as API integration and the use of artificial intelligence tools applied to business. I am characterized by an analytical mindset, focus on results, and the ability to connect technology with the real needs of the organization, converting data and processes into efficient and scalable solutions."
    ],
    interestsTitle: "Interests",
    interests: ["Data Analysis", "Artificial Intelligence", "Software", "Object-Oriented Programming", "Databases", "Digital Transformation", "Business Intelligence", "Cloud Computing"],
    skillsTitle: "Skills",
    skills: ["Python", "Html", "Css", "JavaScript", "Node.js", "TypeScript", "React", ".Net", "SQL", "C#", "C++", "Java", "Php", "Bash", "MongoDB", "LookerDB", "Docker", "N8N", "Power Automate", "Power Apps", "Excel", "Sharepoint", "Copilot studio", "Figma", "Visual Studio Code", "Visual Studio Community", "Ubuntu", "CentOS", "Linux Mint"]
  }
};

const getProjects = (lang: Language): Project[] => [
  {
    id: 1,
    title: lang === 'es' ? "Aplicación de Cambios de Estructura" : "Structure Change Application",
    description: lang === 'es' ? "Aplicativo móvil para gestionar cambios organizacionales críticos en planta." : "Mobile app to manage critical organizational changes in the plant.",
    fullDescription: lang === 'es' 
      ? "Desarrollé una solución en React Native para automatizar la gestión de la estructura organizacional. El impacto fue masivo, reduciendo un proceso manual de 14 horas a solo 6 minutos, eliminando errores y mejorando la agilidad en la toma de decisiones para jefes de área."
      : "I developed a React Native solution to automate organizational structure management. The impact was massive, reducing a 14-hour manual process to just 6 minutes, eliminating errors and improving decision-making agility for area managers.",
    technologies: ["React Native", "TypeScript", "Node.js", "SQL Server"],
    toolUsage: [
      { name: "React Native", value: 95 },
      { name: "TypeScript", value: 85 },
      { name: "SQL Server", value: 60 }
    ],
    progress: 100,
    date: lang === 'es' ? "Octubre 2025" : "October 2025",
    company: "Renault Sofasa",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 2,
    title: lang === 'es' ? "Automatización de Tasas de Cambio" : "Exchange Rate Automation",
    description: lang === 'es' ? "Sistema RPA para la actualización automática de divisas y reportes financieros." : "RPA system for automatic currency updates and financial reporting.",
    fullDescription: lang === 'es'
      ? "Implementé un flujo de automatización con n8n que actualiza diariamente más de 10 tasas de cambio mediante APIs. Este sistema ahorró aproximadamente 130 horas de trabajo manual y eliminó por completo el riesgo de error humano en reportes críticos."
      : "I implemented an automation flow with n8n that daily updates more than 10 exchange rates via APIs. This system saved approximately 130 hours of manual work and completely eliminated the risk of human error in critical reports.",
    technologies: ["n8n", "APIs", "JSON", "Automation"],
    toolUsage: [
      { name: "n8n", value: 90 },
      { name: "APIs", value: 80 },
      { name: "Logic", value: 70 }
    ],
    progress: 100,
    date: "2024",
    company: "Simex",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    title: lang === 'es' ? "Aplicación de Cambios de Nómina" : "Payroll Change Application",
    description: lang === 'es' ? "Sistema de gestión de novedades de nómina con impacto en 12+ áreas organizacionales." : "Payroll news management system with impact on 12+ organizational areas.",
    fullDescription: lang === 'es'
      ? "Creé un sistema centralizado para gestionar cambios de nómina con una interfaz intuitiva. Logré optimizar un proceso que tomaba 2 horas a tan solo 1 minuto, beneficiando a más de 12 áreas críticas incluyendo RRHH y Producción."
      : "I created a centralized system to manage payroll changes with an intuitive interface. I managed to optimize a process that took 2 hours to just 1 minute, benefiting more than 12 critical areas including HR and Production.",
    technologies: ["Software Dev", "UI/UX", "Database", "Automation"],
    toolUsage: [
      { name: "Development", value: 85 },
      { name: "Database", value: 70 },
      { name: "UI Design", value: 60 }
    ],
    progress: 100,
    date: "2024",
    company: "Renault",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: 4,
    title: lang === 'es' ? "Análisis de Datos y Métricas" : "Data Analysis and Metrics",
    description: lang === 'es' ? "Construcción de indicadores operativos y modelos de consumo de datos." : "Construction of operational indicators and data consumption models.",
    fullDescription: lang === 'es'
      ? "Como Data Analyst, trabajé con grandes volúmenes de datos de consumo y operación. Construí tableros de métricas e indicadores clave que sirvieron de base para decisiones estratégicas de la gerencia de planta."
      : "As a Data Analyst, I worked with large volumes of consumption and operation data. I built metric dashboards and key indicators that served as a basis for strategic decisions by the plant management.",
    technologies: ["SQL", "Data Analysis", "Statistics", "Visualization"],
    toolUsage: [
      { name: "SQL", value: 90 },
      { name: "Analysis", value: 85 },
      { name: "Reporting", value: 75 }
    ],
    progress: 100,
    date: "2023-2024",
    company: "Renault Sofasa",
    icon: <LineChart className="w-6 h-6" />
  },
  {
    id: 5,
    title: lang === 'es' ? "Soluciones TI y ERP Epicor" : "IT Solutions and Epicor ERP",
    description: lang === 'es' ? "Automatización de procesos internos y soporte avanzado de sistemas ERP." : "Automation of internal processes and advanced support for ERP systems.",
    fullDescription: lang === 'es'
      ? "Especialista en la mejora de sistemas ERP (Epicor), realizando consultas avanzadas en SQL Server y desarrollando scripts en Python para automatizar procesos internos de la compañía, posicionándome como el puente entre TI y Operaciones."
      : "Specialist in the improvement of ERP systems (Epicor), performing advanced queries in SQL Server and developing Python scripts to automate internal company processes, positioning myself as the bridge between IT and Operations.",
    technologies: ["SQL Server", "Python", "Epicor ERP", "n8n"],
    toolUsage: [
      { name: "SQL Server", value: 95 },
      { name: "Python", value: 70 },
      { name: "ERP Logic", value: 80 }
    ],
    progress: 100,
    date: "2024",
    company: "Simex",
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 6,
    title: lang === 'es' ? "Integración y Consumo de APIs" : "API Integration and Consumption",
    description: lang === 'es' ? "Desarrollo de integraciones robustas entre sistemas heterogéneos." : "Development of robust integrations between heterogeneous systems.",
    fullDescription: lang === 'es'
      ? "Experto en el consumo de servicios externos y la integración de sistemas mediante APIs REST. Utilizo Postman y Swagger para el testeo y documentación de flujos de datos automatizados que conectan diferentes plataformas empresariales."
      : "Expert in the consumption of external services and the integration of systems through REST APIs. I use Postman and Swagger for testing and documenting automated data flows that connect different business platforms.",
    technologies: ["Postman", "Swagger", "REST APIs", "Integration"],
    toolUsage: [
      { name: "Postman", value: 90 },
      { name: "API Design", value: 85 },
      { name: "Testing", value: 70 }
    ],
    progress: 100,
    date: "2024",
    company: "Simex / Renault",
    icon: <Network className="w-6 h-6" />
  },
  {
    id: 7,
    title: lang === 'es' ? "Reportes Empresariales Avanzados" : "Advanced Business Reporting",
    description: lang === 'es' ? "Creación de dashboards ejecutivos y seguimiento de KPIs gerenciales." : "Creation of executive dashboards and monitoring of management KPIs.",
    fullDescription: lang === 'es'
      ? "Desarrollo de reportes complejos utilizando SSRS y Power BI. Mi enfoque está en la claridad visual y la precisión de los datos para permitir un seguimiento efectivo de los indicadores clave de rendimiento (KPIs) a nivel gerencial."
      : "Development of complex reports using SSRS and Power BI. My focus is on visual clarity and data precision to allow effective monitoring of key performance indicators (KPIs) at the management level.",
    technologies: ["SSRS", "Power BI", "DAX", "Reporting Services"],
    toolUsage: [
      { name: "Power BI", value: 95 },
      { name: "SSRS", value: 80 },
      { name: "DAX", value: 75 }
    ],
    progress: 100,
    date: "2023-2024",
    company: lang === 'es' ? "Empresarial" : "Corporate",
    icon: <FileSpreadsheet className="w-6 h-6" />
  },
  {
    id: 8,
    title: lang === 'es' ? "IA Empresarial y Copilot" : "Enterprise AI and Copilot",
    description: lang === 'es' ? "Optimización de procesos mediante asistentes inteligentes y Copilot Studio." : "Process optimization through intelligent assistants and Copilot Studio.",
    fullDescription: lang === 'es'
      ? "Lidero la adopción de IA en el entorno corporativo, utilizando Copilot Studio para crear asistentes que optimizan el desarrollo, el análisis de datos y la automatización de tareas repetitivas, elevando la productividad del equipo."
      : "I lead the adoption of AI in the corporate environment, using Copilot Studio to create assistants that optimize development, data analysis, and automation of repetitive tasks, raising team productivity.",
    technologies: ["Copilot Studio", "Generative AI", "Prompt Engineering", "Automation"],
    toolUsage: [
      { name: "Copilot", value: 90 },
      { name: "AI Logic", value: 85 },
      { name: "Optimization", value: 80 }
    ],
    progress: 100,
    date: "2025",
    company: lang === 'es' ? "Innovación TI" : "IT Innovation",
    icon: <Cpu className="w-6 h-6" />
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState<Language>('es');

  const t = (translations[lang] as any);
  const projects = getProjects(lang);

  return (
    <div className="h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-slate-800/50 bg-slate-900/40 backdrop-blur-xl flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQF1bhRXulHxNA/profile-displayphoto-scale_200_200/B4EZsWSPPGIUAY-/0/1765605440434?e=2147483647&v=beta&t=6ZX5tjiWuqgAODt3WzDZYo-w6B9PqqP46_9QoI2oai0" 
              alt="Juan Fernando Agudelo" 
              referrerPolicy="no-referrer"
              className="relative w-8 h-8 rounded-full object-cover border border-slate-700"
            />
          </div>
          <h1 className="text-sm font-bold text-white hidden sm:block">Juan Fernando Agudelo</h1>
        </div>

        <nav className="flex items-center gap-2">
          <button 
            onClick={() => setShowAbout(true)}
            className="p-2 md:px-4 md:py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all text-[10px] md:text-xs text-blue-400 font-bold flex items-center gap-2"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.learnMore}</span>
          </button>

          <button 
            onClick={() => setShowSkills(true)}
            className="p-2 md:px-4 md:py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all text-[10px] md:text-xs text-slate-300 font-bold flex items-center gap-2"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.skillsBtn}</span>
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowContact(!showContact)}
              className="p-2 md:px-4 md:py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all text-[10px] md:text-xs text-slate-300 font-bold flex items-center gap-2"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{t.contactBtn}</span>
            </button>

            <AnimatePresence>
              {showContact && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowContact(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-20"
                  >
                    <a href="https://github.com/Juan-Fer-Agudelo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all text-xs">
                      <Github className="w-4 h-4 text-slate-400" />
                      <span className="truncate">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-fernando-agudelo-475/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all text-xs">
                      <Linkedin className="w-4 h-4 text-slate-400" />
                      <span className="truncate">LinkedIn</span>
                    </a>
                    <a href="mailto:juanferagudelo475@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all text-xs">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="truncate">juanferagudelo475@gmail.com</span>
                    </a>
                    <a href="tel:+57306718793" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-all text-xs">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span className="truncate">306718793</span>
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="h-6 w-px bg-slate-800 mx-2" />

          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold hover:bg-blue-500/20 transition-all uppercase tracking-widest"
          >
            {t.switchLang}
          </button>
        </nav>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0a0a0c]">
        {/* Bento Grid Layout - Projects Only */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  className="aspect-square bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6 hover:bg-slate-900/60 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      {project.company}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h4>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="p-3 border-t border-slate-800/50 bg-slate-900/20 text-center">
          <p className="text-[9px] text-slate-600">
            © {new Date().getFullYear()} Juan Fernando Agudelo • {t.footer}
          </p>
        </footer>
      </main>

      {/* Modals Section */}
      <AnimatePresence>
        {/* Skills Modal */}
        {showSkills && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSkills(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 flex flex-col max-h-[80vh]"
            >
              <button 
                onClick={() => setShowSkills(false)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.skillsTitle}</h3>
              </div>

              <div className="flex flex-wrap gap-2 overflow-y-auto custom-scrollbar pr-2">
                {t.skills.map((skill: string) => (
                  <span key={skill} className="px-3 py-2 bg-slate-800/50 text-slate-300 rounded-xl text-xs border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {showAbout && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAbout(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full shadow-2xl p-8 md:p-12 flex flex-col"
            >
              <button 
                onClick={() => setShowAbout(false)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                  <Info className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.aboutTitle}</h3>
              </div>

              <div className="space-y-6 overflow-y-auto custom-scrollbar pr-4 flex-1">
                {t.aboutContent.map((paragraph: string, idx: number) => (
                  <p key={idx} className="text-slate-300 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
                
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{t.interestsTitle}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t.interests.map((interest: string) => (
                      <span key={interest} className="px-3 py-1.5 bg-blue-500/5 text-blue-300 rounded-lg text-[10px] border border-blue-500/20">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto custom-scrollbar">
                {/* Info Side */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                      <p className="text-blue-400 text-sm font-medium">{selectedProject.company}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">{t.detailedDesc}</h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">{t.techStack}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-slate-800 text-slate-200 rounded-lg text-[10px] font-semibold border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-8 pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{t.date}</p>
                        <p className="text-xs text-white font-medium">{selectedProject.date}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{t.status}</p>
                        <p className="text-xs text-emerald-400 font-medium">{t.finished}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Side */}
                <div className="bg-slate-950/50 p-8 md:p-12 border-l border-slate-800/50">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">{t.toolUsage}</h4>
                  <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={selectedProject.toolUsage} layout="vertical" margin={{ left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 500 }}
                          width={80}
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '10px' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={16}>
                          {selectedProject.toolUsage.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#1e293b'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-8 text-center italic">
                    {t.toolUsageNote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

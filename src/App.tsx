/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, type ReactNode } from "react";
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
  technologies: { name: string; icon: string }[];
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
      "Cuento con conocimientos sólidos en SQL avanzado, Python, Power BI, desarrollo con frameworks como React, Vue.js y Nuxt.js, así como en .NET, integración de APIs y uso de herramientas de inteligencia artificial aplicadas al negocio. Me caracterizo por una mentalidad analítica, enfoque en resultados y la capacidad de conectar la tecnología con las necesidades reales de la organización, convirtiendo datos y procesos en soluciones eficientes y escalables."
    ],
    interestsTitle: "Intereses",
    interests: ["Análisis de datos", "Inteligencia artificial", "Software", "Programación orientada a objetos", "Bases de datos", "Transformación digital", "Business Intelligence", "Cloud Computing"],
    skillsTitle: "Habilidades",
    skills: ["Python", "Html", "Css", "JavaScript", "Node.js", "TypeScript", "React", "Vue.js", "Nuxt.js", "Vite", "Power BI", ".Net", "SQL", "C#", "C++", "Java", "Php", "Bash", "MongoDB", "LookerDB", "Docker", "N8N", "Power Automate", "Power Apps", "Excel", "Sharepoint", "Copilot studio", "Figma", "Visual Studio Code", "Visual Studio Community", "Ubuntu", "CentOS", "Linux Mint", "Scrum", "Jira", "Looker", "Looker Studio", "SAP", "SAP Business One", "Dash"]
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
      "I have solid knowledge in advanced SQL, Python, Power BI, development with frameworks like React, Vue.js, and Nuxt.js, as well as .NET, API integration, and the use of artificial intelligence tools applied to business. I am characterized by an analytical mindset, focus on results, and the ability to connect technology with the real needs of the organization, converting data and processes into efficient and scalable solutions."
    ],
    interestsTitle: "Interests",
    interests: ["Data Analysis", "Artificial Intelligence", "Software", "Object-Oriented Programming", "Databases", "Digital Transformation", "Business Intelligence", "Cloud Computing"],
    skillsTitle: "Skills",
    skills: ["Python", "Html", "Css", "JavaScript", "Node.js", "TypeScript", "React", "Vue.js", "Nuxt.js", "Vite", "Power BI", ".Net", "SQL", "C#", "C++", "Java", "Php", "Bash", "MongoDB", "LookerDB", "Docker", "N8N", "Power Automate", "Power Apps", "Excel", "Sharepoint", "Copilot studio", "Figma", "Visual Studio Code", "Visual Studio Community", "Ubuntu", "CentOS", "Linux Mint", "Scrum", "Jira", "Looker", "Looker Studio", "SAP", "SAP Business One", "Dash"]
  }
};

const skillLogos: Record<string, string> = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Html": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Nuxt.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg",
  ".Net": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Php": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Bash": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "LookerDB": "https://upload.wikimedia.org/wikipedia/commons/0/03/Looker_logo.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "N8N": "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png",
  "Power Automate": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Microsoft_Power_Automate.svg/1200px-Microsoft_Power_Automate.svg.png",
  "Power Apps": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Power_Apps.svg/1200px-Microsoft_Power_Apps.svg.png",
  "Excel": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
  "Sharepoint": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_SharePoint.svg/1200px-Microsoft_SharePoint.svg.png",
  "Copilot studio": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Microsoft_Copilot_logo.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Visual Studio Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Visual Studio Community": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
  "Ubuntu": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  "CentOS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg",
  "Linux Mint": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linuxmint/linuxmint-original.svg",
  "Scrum": "https://cdn-icons-png.flaticon.com/512/5360/5360800.png",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Looker": "https://upload.wikimedia.org/wikipedia/commons/0/03/Looker_logo.svg",
  "Looker Studio": "https://upload.wikimedia.org/wikipedia/commons/9/91/Looker_Studio_logo.svg",
  "SAP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "SAP Business One": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "Dash": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Plotly-logo.png/1200px-Plotly-logo.png"
};

const getProjects = (lang: Language): Project[] => [
  {
    id: 1,
    title: lang === 'es' ? "Aplicación de Cambios de Estructura y Nómina" : "Structure and Payroll Change Application",
    description: lang === 'es' ? "Aplicativo móvil para gestionar cambios organizacionales y novedades de nómina críticos en planta." : "Mobile app to manage critical organizational changes and payroll news in the plant.",
    fullDescription: lang === 'es' 
      ? "Desarrollé una solución en React Native para automatizar la gestión de la estructura organizacional y novedades de nómina. El impacto fue masivo, reduciendo procesos manuales de hasta 14 horas a solo minutos (reducción del 99%), eliminando errores y beneficiando a más de 12 áreas críticas incluyendo RRHH y Producción."
      : "I developed a React Native solution to automate organizational structure management and payroll news. The impact was massive, reducing manual processes of up to 14 hours to just minutes (99% reduction), eliminating errors and benefiting more than 12 critical areas including HR and Production.",
    technologies: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
    ],
    toolUsage: [
      { name: "React Native", value: 95 },
      { name: "TypeScript", value: 85 },
      { name: "SQL Server", value: 60 }
    ],
    progress: 100,
    date: lang === 'es' ? "Mayo 2025 - Octubre 2025" : "May 2025 - October 2025",
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
    technologies: [
      { name: "n8n", icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" },
      { name: "APIs", icon: "https://cdn-icons-png.flaticon.com/512/603/603197.png" },
      { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
      { name: "Automation", icon: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png" }
    ],
    toolUsage: [
      { name: "n8n", value: 90 },
      { name: "APIs", value: 80 },
      { name: "Logic", value: 70 }
    ],
    progress: 100,
    date: lang === 'es' ? "Febrero 2026 - Marzo 2026" : "February 2026 - March 2026",
    company: "Simex",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 4,
    title: lang === 'es' ? "Análisis de Datos Simétricos y Estadísticos" : "Symmetrical and Statistical Data Analysis",
    description: lang === 'es' ? "Estructuración de tableros analíticos comprensibles para la toma de decisiones estratégicas." : "Structuring understandable analytical dashboards for strategic decision-making.",
    fullDescription: lang === 'es'
      ? "Lideré la reorganización de tableros estadísticos y de análisis de datos para transformarlos en herramientas intuitivas y comprensibles, diseñadas específicamente para perfiles no técnicos como psicólogos de selección. Utilicé herramientas como Power BI, Looker Studio y Dash para presentar métricas complejas de forma clara, facilitando la evaluación de candidatos y el seguimiento de KPIs operativos."
      : "I led the reorganization of statistical and data analysis dashboards to transform them into intuitive and understandable tools, specifically designed for non-technical profiles such as selection psychologists. I used tools like Power BI, Looker Studio, and Dash to present complex metrics clearly, facilitating candidate evaluation and operational KPI monitoring.",
    technologies: [
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg" },
      { name: "Looker Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Looker_Studio_logo.svg" },
      { name: "Dash", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Plotly-logo.png/1200px-Plotly-logo.png" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    toolUsage: [
      { name: "Power BI", value: 90 },
      { name: "Looker Studio", value: 85 },
      { name: "Dash", value: 70 }
    ],
    progress: 100,
    date: lang === 'es' ? "Octubre 2025 - Diciembre 2025" : "October 2025 - December 2025",
    company: "Renault Sofasa",
    icon: <LineChart className="w-6 h-6" />
  },
  {
    id: 7,
    title: lang === 'es' ? "Inteligencia de Negocios y ERP (SAP/Epicor)" : "Business Intelligence and ERP (SAP/Epicor)",
    description: lang === 'es' ? "Integración de datos financieros y operativos desde sistemas SAP y Epicor." : "Integration of financial and operational data from SAP and Epicor systems.",
    fullDescription: lang === 'es'
      ? "Desarrollo de ecosistemas de reportes avanzados integrando datos de ERPs líderes como SAP, SAP Business One y Epicor (en Simex). Mi trabajo se centró en la creación de dashboards ejecutivos en Power BI y Looker que permiten una visibilidad total de la cadena de valor, optimizando los tiempos de respuesta de la gerencia mediante datos precisos y visualizaciones de alto impacto."
      : "Development of advanced reporting ecosystems integrating data from leading ERPs such as SAP, SAP Business One, and Epicor (at Simex). My work focused on creating executive dashboards in Power BI and Looker that allow full visibility of the value chain, optimizing management response times through precise data and high-impact visualizations.",
    technologies: [
      { name: "SAP", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
      { name: "Epicor", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Epicor_logo.svg/1200px-Epicor_logo.svg.png" },
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg" },
      { name: "Looker", icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/Looker_logo.svg" }
    ],
    toolUsage: [
      { name: "ERP Integration", value: 95 },
      { name: "Power BI", value: 90 },
      { name: "Looker", value: 80 }
    ],
    progress: 100,
    date: lang === 'es' ? "Noviembre 2025 - Marzo 2026" : "November 2025 - March 2026",
    company: lang === 'es' ? "Simex / Renault" : "Simex / Renault",
    icon: <FileSpreadsheet className="w-6 h-6" />
  },
  {
    id: 8,
    title: lang === 'es' ? "IA Empresarial y Copilot" : "Enterprise AI and Copilot",
    description: lang === 'es' ? "Optimización de procesos mediante asistentes inteligentes y Copilot Studio." : "Process optimization through intelligent assistants and Copilot Studio.",
    fullDescription: lang === 'es'
      ? "Lidero la adopción de IA en el entorno corporativo, utilizando Copilot Studio para crear asistentes que optimizan el desarrollo, el análisis de datos y la automatización de tareas repetitivas, elevando la productividad del equipo."
      : "I lead the adoption of AI in the corporate environment, using Copilot Studio to create assistants that optimize development, data analysis, and automation of repetitive tasks, raising team productivity.",
    technologies: [
      { name: "Copilot Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Microsoft_Copilot_logo.svg" },
      { name: "Generative AI", icon: "https://cdn-icons-png.flaticon.com/512/10617/10617066.png" },
      { name: "Automation", icon: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png" }
    ],
    toolUsage: [
      { name: "Copilot", value: 90 },
      { name: "AI Logic", value: 85 },
      { name: "Optimization", value: 80 }
    ],
    progress: 100,
    date: "2025",
    company: lang === 'es' ? "Innovación TI" : "IT Innovation",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 9,
    title: lang === 'es' ? "Asistente Bambini: Inclusión Visual con IA (Van Gogh)" : "Bambini Assistant: Visual Inclusion with AI (Van Gogh)",
    description: lang === 'es' ? "Asistente de voz inteligente para mejorar la experiencia de personas con discapacidad visual en museos." : "Intelligent voice assistant to improve the experience of visually impaired people in museums.",
    fullDescription: lang === 'es'
      ? "Proyecto de investigación desarrollado en la Universidad Salazar y Herrera. Bambini es un asistente de IA diseñado para actuar como intérprete visual en museos y sitios turísticos de Colombia. Utilicé Python para el desarrollo de redes neuronales y visión artificial que describen detalladamente obras de arte, cuadros y lienzos, permitiendo que personas con discapacidad visual o baja visión tengan una experiencia inmersiva y educativa."
      : "Research project developed at Universidad Salazar y Herrera. Bambini is an AI assistant designed to act as a visual interpreter in museums and tourist sites in Colombia. I used Python for developing neural networks and computer vision to describe artworks, paintings, and canvases in detail, allowing visually impaired or low-vision people to have an immersive and educational experience.",
    technologies: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Generative AI", icon: "https://cdn-icons-png.flaticon.com/512/10617/10617066.png" },
      { name: "Computer Vision", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
      { name: "Voice Synthesis", icon: "https://cdn-icons-png.flaticon.com/512/2950/2950137.png" }
    ],
    toolUsage: [
      { name: "Python", value: 95 },
      { name: "AI Vision", value: 90 },
      { name: "Research", value: 85 }
    ],
    progress: 100,
    date: lang === 'es' ? "Mayo 2025 - Julio 2025" : "May 2025 - July 2025",
    company: lang === 'es' ? "U. Salazar y Herrera" : "Salazar y Herrera University",
    icon: <Users className="w-6 h-6" />
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80", // Software Dev
    "https://images.unsplash.com/photo-1518433278981-2ad502fbb1b9?auto=format&fit=crop&w=1920&q=80", // Automation
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80", // AI
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"  // Technology
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = (translations[lang] as any);
  const projects = getProjects(lang);

  return (
    <div className="h-screen bg-[#f0f4f8]/50 text-slate-800 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img 
              src={bgImages[bgIndex]} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/60 via-transparent to-[#f0f4f8]/60" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-indigo-400/30 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-white/20 bg-white/40 backdrop-blur-2xl flex items-center justify-between px-6 z-50 shadow-sm relative">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQF1bhRXulHxNA/profile-displayphoto-scale_200_200/B4EZsWSPPGIUAY-/0/1765605440434?e=2147483647&v=beta&t=6ZX5tjiWuqgAODt3WzDZYo-w6B9PqqP46_9QoI2oai0" 
              alt="Juan Fernando Agudelo" 
              referrerPolicy="no-referrer"
              className="relative w-9 h-9 rounded-full object-cover border-2 border-white shadow-lg"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-black text-slate-900 leading-tight">Juan Fernando Agudelo</h1>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Software Specialist</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button 
            onClick={() => setShowAbout(true)}
            className="p-2 md:px-4 md:py-2 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all text-[10px] md:text-xs font-bold flex items-center gap-2"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.learnMore}</span>
          </button>

          <button 
            onClick={() => setShowSkills(true)}
            className="p-2 md:px-4 md:py-2 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all text-[10px] md:text-xs text-slate-700 font-bold flex items-center gap-2 shadow-sm"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.skillsBtn}</span>
          </button>

          <div className="relative">
            <button 
              onClick={() => setShowContact(!showContact)}
              className="p-2 md:px-4 md:py-2 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all text-[10px] md:text-xs text-slate-700 font-bold flex items-center gap-2 shadow-sm"
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
                    className="absolute right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-white rounded-2xl shadow-2xl p-2 z-20 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <a href="https://github.com/Juan-Fer-Agudelo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all text-xs text-slate-700 group">
                      <div className="p-1.5 bg-slate-100 rounded-lg group-hover:bg-white transition-colors">
                        <Github className="w-4 h-4 text-slate-600" />
                      </div>
                      <span className="truncate font-medium">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-fernando-agudelo-475/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all text-xs text-slate-700 group">
                      <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-white transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="truncate font-medium">LinkedIn</span>
                    </a>
                    <a href="mailto:juanferagudelo475@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all text-xs text-slate-700 group">
                      <div className="p-1.5 bg-red-100 rounded-lg group-hover:bg-white transition-colors">
                        <Mail className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="truncate font-medium">juanferagudelo475@gmail.com</span>
                    </a>
                    <a href="tel:+573016718793" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all text-xs text-slate-700 group">
                      <div className="p-1.5 bg-emerald-100 rounded-lg group-hover:bg-white transition-colors">
                        <Phone className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="truncate font-medium">3016718793</span>
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-2" />

          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[10px] font-black hover:from-blue-600 hover:to-blue-500 transition-all uppercase tracking-widest shadow-lg"
          >
            {t.switchLang}
          </button>
        </nav>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Bento Grid Layout - Projects Only */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {projects.map((project, index) => {
                const colors = [
                  { bg: 'bg-blue-50', icon: 'text-blue-600', bar: 'bg-blue-600', hover: 'hover:border-blue-400' },
                  { bg: 'bg-purple-50', icon: 'text-purple-600', bar: 'bg-purple-600', hover: 'hover:border-purple-400' },
                  { bg: 'bg-indigo-50', icon: 'text-indigo-600', bar: 'bg-indigo-600', hover: 'hover:border-indigo-400' },
                  { bg: 'bg-emerald-50', icon: 'text-emerald-600', bar: 'bg-emerald-600', hover: 'hover:border-emerald-400' },
                ];
                const color = colors[index % colors.length];

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      y: -12, 
                      scale: 1.05,
                      rotateX: 4,
                      rotateY: 4,
                      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className={`aspect-square bg-white/60 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-5 md:p-7 ${color.hover} transition-all cursor-pointer group flex flex-col justify-between shadow-xl shadow-slate-200/30 perspective-1000`}
                  >
                    <div className="flex justify-between items-start">
                      <div className={`p-3 ${color.bg} rounded-2xl ${color.icon} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                        {project.icon}
                      </div>
                      <div className="px-2 py-1 bg-slate-100 rounded-full text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">
                        {project.company}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs md:text-base font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {project.title}
                      </h4>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mt-2 p-0.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          className={`h-full ${color.bar} rounded-full shadow-sm`} 
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="p-4 border-t border-white/20 bg-white/20 backdrop-blur-md text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Juan Fernando Agudelo • <span className="text-blue-500">{t.footer}</span>
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
              className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl p-10 flex flex-col max-h-[85vh]"
            >
              <button 
                onClick={() => setShowSkills(false)}
                className="absolute top-8 right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{t.skillsTitle}</h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Technical Expertise</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 overflow-y-auto custom-scrollbar pr-3">
                {t.skills.map((skill: string, idx: number) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 rounded-2xl text-xs font-bold border border-slate-100 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md group/skill"
                  >
                    {skillLogos[skill] && (
                      <img 
                        src={skillLogos[skill]} 
                        alt={skill} 
                        className="w-4 h-4 object-contain group-hover/skill:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {skill}
                  </motion.span>
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
              className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl border-l border-white h-full shadow-2xl p-8 md:p-12 flex flex-col"
            >
              <button 
                onClick={() => setShowAbout(false)}
                className="absolute top-8 right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Info className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{t.aboutTitle}</h3>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Personal Profile</p>
                </div>
              </div>

              <div className="space-y-8 overflow-y-auto custom-scrollbar pr-4 flex-1">
                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-4 border-4 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-10" />
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQF1bhRXulHxNA/profile-displayphoto-scale_200_200/B4EZsWSPPGIUAY-/0/1765605440434?e=2147483647&v=beta&t=6ZX5tjiWuqgAODt3WzDZYo-w6B9PqqP46_9QoI2oai0" 
                    alt="Juan Fernando Agudelo" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-6">
                  {t.aboutContent.map((paragraph: string, idx: number) => (
                    <p key={idx} className="text-slate-600 leading-relaxed text-sm font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.interestsTitle}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {t.interests.map((interest: string) => (
                      <span key={interest} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-bold border border-blue-100 shadow-sm">
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
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-white border border-white rounded-[3.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh] overflow-y-auto custom-scrollbar">
                {/* Info Side */}
                <div className="p-10 md:p-14">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[1.5rem] text-white shadow-xl shadow-blue-200">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 leading-tight tracking-tight">{selectedProject.title}</h3>
                      <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-1">{selectedProject.company}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{t.detailedDesc}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm font-medium">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{t.techStack}</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map(tech => (
                          <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all group/tech">
                            <img 
                              src={tech.icon} 
                              alt={tech.name} 
                              className="w-4 h-4 object-contain group-hover/tech:scale-110 transition-transform"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/603/603197.png';
                              }}
                            />
                            <span className="text-[10px] font-black text-slate-700">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-12 pt-6 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.date}</p>
                        <p className="text-sm text-slate-900 font-black">{selectedProject.date}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.status}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <p className="text-sm text-emerald-600 font-black">{t.finished}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Side */}
                <div className="bg-slate-50/50 p-10 md:p-14 border-l border-white">
                  <div className="flex items-center justify-between mb-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.toolUsage}</h4>
                    <BarChart3 className="w-5 h-5 text-blue-500 opacity-50" />
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={selectedProject.toolUsage} layout="vertical" margin={{ left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#64748b', fontSize: 11, fontWeight: 800 }}
                          width={90}
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                          contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '16px', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                          {selectedProject.toolUsage.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : '#cbd5e1'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-10 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <p className="text-[10px] text-blue-600 font-bold text-center italic leading-relaxed">
                      {t.toolUsageNote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React from 'react';
import { 
  Users, 
  Zap, 
  LineChart, 
  FileSpreadsheet, 
  Cpu 
} from "lucide-react";
import { Project, Language } from "./types";

export const translations = {
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

export const skillLogos: Record<string, string> = {
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

export const getProjects = (lang: Language): Project[] => [
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
    icon: React.createElement(Users, { className: "w-6 h-6" })
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
    icon: React.createElement(Zap, { className: "w-6 h-6" })
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
    icon: React.createElement(LineChart, { className: "w-6 h-6" })
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
    icon: React.createElement(FileSpreadsheet, { className: "w-6 h-6" })
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
    icon: React.createElement(Cpu, { className: "w-6 h-6" })
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
    icon: React.createElement(Users, { className: "w-6 h-6" })
  }
];

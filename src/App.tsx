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

const projects: Project[] = [
  {
    id: 1,
    title: "Aplicación de Cambios de Estructura",
    description: "Aplicativo móvil para gestionar cambios organizacionales críticos en planta.",
    fullDescription: "Desarrollé una solución en React Native para automatizar la gestión de la estructura organizacional. El impacto fue masivo, reduciendo un proceso manual de 14 horas a solo 6 minutos, eliminando errores y mejorando la agilidad en la toma de decisiones para jefes de área.",
    technologies: ["React Native", "TypeScript", "Node.js", "SQL Server"],
    toolUsage: [
      { name: "React Native", value: 95 },
      { name: "TypeScript", value: 85 },
      { name: "SQL Server", value: 60 }
    ],
    progress: 100,
    date: "Octubre 2025",
    company: "Renault Sofasa",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Automatización de Tasas de Cambio",
    description: "Sistema RPA para la actualización automática de divisas y reportes financieros.",
    fullDescription: "Implementé un flujo de automatización con n8n que actualiza diariamente más de 10 tasas de cambio mediante APIs. Este sistema ahorró aproximadamente 130 horas de trabajo manual y eliminó por completo el riesgo de error humano en reportes críticos.",
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
    title: "Aplicación de Cambios de Nómina",
    description: "Sistema de gestión de novedades de nómina con impacto en 12+ áreas organizacionales.",
    fullDescription: "Creé un sistema centralizado para gestionar cambios de nómina con una interfaz intuitiva. Logré optimizar un proceso que tomaba 2 horas a tan solo 1 minuto, beneficiando a más de 12 áreas críticas incluyendo RRHH y Producción.",
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
    title: "Análisis de Datos y Métricas",
    description: "Construcción de indicadores operativos y modelos de consumo de datos.",
    fullDescription: "Como Data Analyst, trabajé con grandes volúmenes de datos de consumo y operación. Construí tableros de métricas e indicadores clave que sirvieron de base para decisiones estratégicas de la gerencia de planta.",
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
    title: "Soluciones TI y ERP Epicor",
    description: "Automatización de procesos internos y soporte avanzado de sistemas ERP.",
    fullDescription: "Especialista en la mejora de sistemas ERP (Epicor), realizando consultas avanzadas en SQL Server y desarrollando scripts en Python para automatizar procesos internos de la compañía, posicionándome como el puente entre TI y Operaciones.",
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
    title: "Integración y Consumo de APIs",
    description: "Desarrollo de integraciones robustas entre sistemas heterogéneos.",
    fullDescription: "Experto en el consumo de servicios externos y la integración de sistemas mediante APIs REST. Utilizo Postman y Swagger para el testeo y documentación de flujos de datos automatizados que conectan diferentes plataformas empresariales.",
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
    title: "Reportes Empresariales Avanzados",
    description: "Creación de dashboards ejecutivos y seguimiento de KPIs gerenciales.",
    fullDescription: "Desarrollo de reportes complejos utilizando SSRS y Power BI. Mi enfoque está en la claridad visual y la precisión de los datos para permitir un seguimiento efectivo de los indicadores clave de rendimiento (KPIs) a nivel gerencial.",
    technologies: ["SSRS", "Power BI", "DAX", "Reporting Services"],
    toolUsage: [
      { name: "Power BI", value: 95 },
      { name: "SSRS", value: 80 },
      { name: "DAX", value: 75 }
    ],
    progress: 100,
    date: "2023-2024",
    company: "Empresarial",
    icon: <FileSpreadsheet className="w-6 h-6" />
  },
  {
    id: 8,
    title: "IA Empresarial y Copilot",
    description: "Optimización de procesos mediante asistentes inteligentes y Copilot Studio.",
    fullDescription: "Lidero la adopción de IA en el entorno corporativo, utilizando Copilot Studio para crear asistentes que optimizan el desarrollo, el análisis de datos y la automatización de tareas repetitivas, elevando la productividad del equipo.",
    technologies: ["Copilot Studio", "Generative AI", "Prompt Engineering", "Automation"],
    toolUsage: [
      { name: "Copilot", value: 90 },
      { name: "AI Logic", value: 85 },
      { name: "Optimization", value: 80 }
    ],
    progress: 100,
    date: "2025",
    company: "Innovación TI",
    icon: <Cpu className="w-6 h-6" />
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Header Section */}
      <header className="relative overflow-hidden border-b border-slate-800/50 bg-slate-900/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          >
            {/* Profile Image */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQF1bhRXulHxNA/profile-displayphoto-scale_200_200/B4EZsWSPPGIUAY-/0/1765605440434?e=2147483647&v=beta&t=6ZX5tjiWuqgAODt3WzDZYo-w6B9PqqP46_9QoI2oai0" 
                alt="Juan Fernando Agudelo" 
                referrerPolicy="no-referrer"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-800 shadow-2xl"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                Juan Fernando Agudelo
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 font-medium max-w-3xl leading-relaxed mb-6">
                Analista de Soluciones / Data & Automation Specialist / Desarrollo de Software
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <a 
                  href="https://github.com/Juan-Fer-Agudelo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/juan-fernando-agudelo-475/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:juanferagudelo475@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>juanferagudelo475@gmail.com</span>
                </a>
                <a 
                  href="tel:+57306718793" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>306718793</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Proyectos Destacados</h2>
            <div className="h-1 w-20 bg-blue-500 rounded-full" />
          </div>
          <Settings className="w-6 h-6 text-slate-500 animate-spin-slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/60 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon & Status */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Completado
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-700/50">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2.5 py-1 bg-slate-800/50 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-wider border border-slate-700/50">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-500 font-medium">Progreso</span>
                  <span className="text-blue-400 font-bold">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400" 
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-slate-800/50 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{project.company}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info className="w-4 h-4 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal Section */}
      <AnimatePresence>
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

              <div className="grid grid-cols-1 lg:grid-cols-2">
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
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Descripción Detallada</h4>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Stack Tecnológico</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-8 pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Fecha</p>
                        <p className="text-sm text-white font-medium">{selectedProject.date}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Estado</p>
                        <p className="text-sm text-emerald-400 font-medium">Finalizado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Side */}
                <div className="bg-slate-950/50 p-8 md:p-12 border-l border-slate-800/50">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Uso de Herramientas (%)</h4>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={selectedProject.toolUsage} layout="vertical" margin={{ left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                          width={100}
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                          {selectedProject.toolUsage.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#1e293b'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-8 text-center italic">
                    * Estimación del tiempo y esfuerzo dedicado a cada herramienta durante el desarrollo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Juan Fernando Agudelo. Desarrollado con pasión por la automatización.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";
import { Language, Project } from "./types";
import { translations, getProjects } from "./constants";
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";
import { AboutModal } from "./components/modals/AboutModal";
import { SkillsModal } from "./components/modals/SkillsModal";
import { ProjectModal } from "./components/modals/ProjectModal";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  
  const { t, projects } = useMemo(() => ({
    t: translations[lang] as any,
    projects: getProjects(lang)
  }), [lang]);

  return (
    <div className="h-screen bg-[#f0f4f8]/50 text-slate-800 font-sans selection:bg-blue-500/30 overflow-hidden flex flex-col relative">
      <Background />

      <Header 
        t={t} 
        lang={lang} 
        setLang={setLang} 
        setShowAbout={setShowAbout} 
        setShowSkills={setShowSkills} 
        showContact={showContact}
        setShowContact={setShowContact}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 px-4 py-8 md:p-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-[1.1]">
              {t.role}
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                Data Analyst
              </span>
              <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-200">
                Automation Expert
              </span>
              <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-purple-200">
                Software Developer
              </span>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-slate-600">
                {t.featuredProjects}
              </h3>
              <div className="h-px flex-1 bg-slate-200 mx-6 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  onClick={() => setSelectedProject(project)} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer t={t} />

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            t={t} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {showAbout && (
          <AboutModal 
            t={t} 
            onClose={() => setShowAbout(false)} 
          />
        )}

        {showSkills && (
          <SkillsModal 
            t={t} 
            onClose={() => setShowSkills(false)} 
          />
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.4);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

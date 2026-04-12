import { motion, AnimatePresence } from "motion/react";
import { Info, Cpu, Users, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Language } from "../types";

interface HeaderProps {
  t: any;
  lang: Language;
  setLang: (lang: Language) => void;
  setShowAbout: (show: boolean) => void;
  setShowSkills: (show: boolean) => void;
  showContact: boolean;
  setShowContact: (show: boolean) => void;
}

export const Header = ({ t, lang, setLang, setShowAbout, setShowSkills, showContact, setShowContact }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-white/20 bg-white/40 backdrop-blur-2xl flex items-center justify-between px-4 md:px-6 z-50 shadow-sm relative">
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
          aria-label={t.learnMore}
        >
          <Info className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{t.learnMore}</span>
        </button>

        <button 
          onClick={() => setShowSkills(true)}
          className="p-2 md:px-4 md:py-2 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all text-[10px] md:text-xs text-slate-700 font-bold flex items-center gap-2 shadow-sm"
          aria-label={t.skillsBtn}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span className="hidden md:inline">{t.skillsBtn}</span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowContact(!showContact)}
            className="p-2 md:px-4 md:py-2 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all text-[10px] md:text-xs text-slate-700 font-bold flex items-center gap-2 shadow-sm"
            aria-label={t.contactBtn}
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
                  <a href="https://www.linkedin.com/in/juan-fernando-agudelo-861b13264/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all text-xs text-slate-700 group">
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

        <div className="h-6 w-px bg-slate-200 mx-1 md:mx-2" />

        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="px-3 md:px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white text-[10px] font-black hover:from-blue-600 hover:to-blue-500 transition-all uppercase tracking-widest shadow-lg"
        >
          {t.switchLang}
        </button>
      </nav>
    </header>
  );
};

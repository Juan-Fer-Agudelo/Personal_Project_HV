import { motion } from "motion/react";
import { X, Cpu } from "lucide-react";
import { skillLogos } from "../../constants";

interface SkillsModalProps {
  t: any;
  onClose: () => void;
}

export const SkillsModal = ({ t, onClose }: SkillsModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl border border-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-10 flex flex-col max-h-[85vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-5 mb-8 md:mb-10">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg shadow-blue-200">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{t.skillsTitle}</h3>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">Technical Expertise</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 overflow-y-auto custom-scrollbar pr-2">
          {t.skills.map((skill: string, idx: number) => (
            <motion.span 
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-white text-slate-700 rounded-2xl text-[10px] md:text-xs font-bold border border-slate-100 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:shadow-md group/skill"
            >
              {skillLogos[skill] && (
                <img 
                  src={skillLogos[skill]} 
                  alt={skill} 
                  className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain group-hover/skill:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
              )}
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

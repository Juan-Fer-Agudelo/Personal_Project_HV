import { motion } from "motion/react";
import { X, Info } from "lucide-react";

interface AboutModalProps {
  t: any;
  onClose: () => void;
}

export const AboutModal = ({ t, onClose }: AboutModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/10 backdrop-blur-md"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl border-l border-white h-full shadow-2xl p-6 md:p-12 flex flex-col overflow-y-auto custom-scrollbar"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-5 mb-8 md:mb-10">
          <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white shadow-lg shadow-blue-200">
            <Info className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{t.aboutTitle}</h3>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest">Personal Profile</p>
          </div>
        </div>

        <div className="space-y-8 pr-2">
          <div className="relative w-full aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 border-4 border-white shadow-2xl">
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t.interestsTitle}</h4>
            <div className="flex flex-wrap gap-2.5">
              {t.interests.map((interest: string) => (
                <span key={interest} className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-bold border border-blue-100 shadow-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

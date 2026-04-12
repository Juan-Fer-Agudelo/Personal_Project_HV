import { motion } from "motion/react";
import { X, BarChart3 } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from "recharts";
import { Project } from "../../types";

interface ProjectModalProps {
  project: Project;
  t: any;
  onClose: () => void;
}

export const ProjectModal = ({ project, t, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        className="relative w-full max-w-5xl bg-white border border-white rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 p-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full text-slate-400 transition-all shadow-sm z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto custom-scrollbar">
          {/* Info Side */}
          <div className="flex flex-col">
            <div className="relative h-48 md:h-64 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>
            
            <div className="p-8 md:p-14 -mt-12 relative z-10">
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[1.2rem] md:rounded-[1.5rem] text-white shadow-xl shadow-blue-200">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">{project.title}</h3>
                  <p className="text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">{project.company}</p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 md:mb-4">{t.detailedDesc}</h4>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-sm font-medium">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 md:mb-4">{t.techStack}</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.technologies.map(tech => (
                      <div key={tech.name} className="flex items-center gap-2 px-2.5 py-1 md:px-3 md:py-1.5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all group/tech">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-3.5 h-3.5 md:w-4 md:h-4 object-contain group-hover/tech:scale-110 transition-transform"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/603/603197.png';
                          }}
                        />
                        <span className="text-[9px] md:text-[10px] font-black text-slate-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-8 md:gap-12 pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 md:mb-2">{t.date}</p>
                    <p className="text-xs md:text-sm text-slate-900 font-black">{project.date}</p>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 md:mb-2">{t.status}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <p className="text-xs md:text-sm text-emerald-600 font-black">{t.finished}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Side */}
          <div className="bg-slate-50/50 p-8 md:p-14 border-l border-white">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{t.toolUsage}</h4>
              <BarChart3 className="w-5 h-5 text-blue-500 opacity-50" />
            </div>
            <div className="h-[250px] md:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={project.toolUsage} layout="vertical" margin={{ left: 10 }}>
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }}
                    width={80}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                    contentStyle={{ backgroundColor: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '10px', fontWeight: 'bold', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={16}>
                    {project.toolUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : '#cbd5e1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 md:mt-10 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-[9px] md:text-[10px] text-blue-600 font-bold text-center italic leading-relaxed">
                {t.toolUsageNote}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

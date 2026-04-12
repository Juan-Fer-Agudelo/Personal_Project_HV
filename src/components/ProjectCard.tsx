import React from 'react';
import { motion } from "motion/react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const colors = [
    { bg: 'bg-blue-50', icon: 'text-blue-600', bar: 'bg-blue-600', hover: 'hover:border-blue-400' },
    { bg: 'bg-purple-50', icon: 'text-purple-600', bar: 'bg-purple-600', hover: 'hover:border-purple-400' },
    { bg: 'bg-indigo-50', icon: 'text-indigo-600', bar: 'bg-indigo-600', hover: 'hover:border-indigo-400' },
    { bg: 'bg-emerald-50', icon: 'text-emerald-600', bar: 'bg-emerald-600', hover: 'hover:border-emerald-400' },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
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
      onClick={onClick}
      className={`aspect-square bg-white/60 backdrop-blur-md border border-white/40 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-7 ${color.hover} transition-all cursor-pointer group flex flex-col justify-between shadow-xl shadow-slate-200/30 perspective-1000`}
    >
      <div className="flex justify-between items-start">
        <div className={`p-2.5 md:p-3 ${color.bg} rounded-xl md:rounded-2xl ${color.icon} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
          {project.icon}
        </div>
        <div className="px-2 py-1 bg-slate-100/80 rounded-full text-[8px] md:text-[9px] font-black text-slate-500 uppercase tracking-widest">
          {project.company}
        </div>
      </div>
      
      <div>
        <h4 className="text-[11px] sm:text-xs md:text-base font-black text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
          {project.title}
        </h4>
        <div className="h-1.5 md:h-2 w-full bg-slate-100/50 rounded-full overflow-hidden mt-1 md:mt-2 p-0.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${project.progress}%` }}
            className={`h-full ${color.bar} rounded-full shadow-sm`} 
          />
        </div>
      </div>
    </motion.div>
  );
};

import React, { memo } from 'react';
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = memo(({ project, index, onClick }: ProjectCardProps) => {
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
        y: -8, 
        scale: 1.02,
        boxShadow: "0 20px 40px -12px rgb(0 0 0 / 0.12)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`aspect-square bg-white/70 backdrop-blur-sm border border-white/40 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden ${color.hover} transition-all cursor-pointer group flex flex-col shadow-xl shadow-slate-200/30`}
    >
      <div className="relative h-1/2 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className={`p-2.5 md:p-3 ${color.bg} rounded-xl md:rounded-2xl ${color.icon} shadow-lg backdrop-blur-md`}>
            {project.icon}
          </div>
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1 md:mb-2">
            <h4 className="text-[11px] sm:text-xs md:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight flex-1">
              {project.title}
            </h4>
            {project.link && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank');
                }}
                className="ml-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-1 group/btn"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="text-[8px] font-black uppercase hidden sm:inline">Ver</span>
              </button>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[9px] md:text-[10px] font-black text-blue-600 uppercase tracking-widest">
              {project.company}
            </p>
            <p className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              {project.date}
            </p>
          </div>
        </div>
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
});

ProjectCard.displayName = 'ProjectCard';

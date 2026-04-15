import { ReactNode } from "react";

export type Language = 'es' | 'en';

export interface Technology {
  name: string;
  icon: string;
}

export interface ToolUsage {
  name: string;
  value: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: Technology[];
  toolUsage: ToolUsage[];
  progress: number;
  date: string;
  company: string;
  icon: ReactNode;
  image: string;
  link?: string;
}

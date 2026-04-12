interface FooterProps {
  t: any;
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="p-4 border-t border-white/20 bg-white/20 backdrop-blur-md text-center">
      <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © {new Date().getFullYear()} Juan Fernando Agudelo • <span className="text-blue-500">{t.footer}</span>
      </p>
    </footer>
  );
};

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const bgImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80", // Software Dev
  "https://images.unsplash.com/photo-1518433278981-2ad502fbb1b9?auto=format&fit=crop&w=1920&q=80", // Automation
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80", // AI
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"  // Technology
];

export const Background = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <AnimatePresence mode="wait">
        <motion.div 
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={bgImages[bgIndex]} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8]/60 via-transparent to-[#f0f4f8]/60" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-400/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-indigo-400/30 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
  );
};

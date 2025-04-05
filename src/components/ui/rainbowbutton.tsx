"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const RainbowButton = ({children}:{children:ReactNode}) => {
  return (
    <>
      <style jsx global>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rainbow-gradient {
          background: linear-gradient(
            90deg,
            #ff0000,
            #ff8000,
            #ffff00,
            #00ff00,
            #00ffff,
            #0000ff,
            #8000ff,
            #ff0080,
            #ff0000
          );
          background-size: 400% 400%;
          animation: rainbow 8s ease infinite;
        }
      `}</style>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden rounded-lg p-[2px] transition-all"
      >
        <div className="rainbow-gradient rounded-lg p-px">
          <div className="group relative flex items-center justify-center rounded-lg bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-300">
            <span className="relative z-10">Hover Me</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </motion.button>
    </>
  );
};
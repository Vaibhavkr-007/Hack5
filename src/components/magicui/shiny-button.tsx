"use client";

import { motion } from "framer-motion";
import React from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial={false}
        whileHover={{ 
          y: -2,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 }
        }}
        whileTap={{ scale: 0.96 }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px', 
          padding: '12px 24px',
          border: '1px solid rgba(100, 200, 255)',
          background: 'linear-gradient(45deg, rgba(20, 20, 20, 0.9), rgba(30, 30, 30, 0.9))',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 12px -3px rgba(var(--primary-rgb), 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {/* Shine layer */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          }}
        />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '14px',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          {children}
        </div>

        {/* Border glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '12px',
          padding: '1px',
          background: 'linear-gradient(45deg, rgba(var(--primary-rgb), 0.3), transparent 60%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          pointerEvents: 'none',
        }} />
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
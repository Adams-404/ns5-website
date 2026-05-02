"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-navy-primary flex flex-col items-center justify-center p-6"
        >
          {/* Pulsing Star Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              times: [0, 0.7, 1]
            }}
            className="mb-12"
          >
            <img 
              src="/logo.svg" 
              alt="NS5 Logo" 
              className="w-32 h-32 brightness-125 filter drop-shadow-[0_0_20px_rgba(184,151,58,0.5)]"
            />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center space-y-4"
          >
            <p className="font-display text-2xl md:text-3xl text-white italic max-w-md">
              "A North Star isn't a map. It's a direction."
            </p>
            <div className="h-px w-12 bg-gold-primary mx-auto opacity-50" />
            <p className="font-mono text-gold-primary tracking-[0.4em] text-[10px] uppercase">
              NORTHSTAR FIVE
            </p>
          </motion.div>

          {/* Progress bar line */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-px bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gold-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

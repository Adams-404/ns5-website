"use client";

import { motion } from "framer-motion";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.8, duration: 1 }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}

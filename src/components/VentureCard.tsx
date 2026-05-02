"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface VentureCardProps {
  name: string;
  oneLiner: string;
  sector: string;
  stage: string;
  index: number;
}

export default function VentureCard({ name, oneLiner, sector, stage, index }: VentureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      card.style.transform = `
        perspective(1000px)
        rotateY(${x * 12}deg)
        rotateX(${-y * 12}deg)
        translateZ(10px)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
      `;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="group relative"
    >
      <div
        ref={cardRef}
        className="glass-panel p-8 h-full flex flex-col justify-between transition-all duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-gold-primary/10 border border-gold-primary/30 text-gold-primary rounded-full">
              {sector}
            </span>
            <span className="text-[10px] font-mono text-dim-white/50 uppercase tracking-widest">
              {stage}
            </span>
          </div>
          
          <h3 className="text-3xl font-display font-bold text-white group-hover:text-gold-primary transition-colors">
            {name}
          </h3>
          
          <p className="text-dim-white leading-relaxed">
            {oneLiner}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-gold-pale font-mono text-xs font-bold tracking-widest group-hover:gap-3 transition-all">
          EXPLORE VENTURE <ArrowUpRight size={14} />
        </div>

        {/* Sweep effect on hover */}
        <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
        </div>
      </div>
    </motion.div>
  );
}

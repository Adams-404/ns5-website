"use client";

import VentureCard from "@/components/VentureCard";
import { motion } from "framer-motion";

export default function VenturesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Active <span className="text-gold-primary">Portfolio</span>
          </motion.h1>
          <p className="text-dim-white text-xl max-w-2xl">
            The institutions we are building to anchor the Northern Nigerian ecosystem.
          </p>
        </header>

        {/* Section 1: Active Portfolio */}
        <div className="space-y-12 mb-32">
          <div className="glass-panel p-8 md:p-12 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-gold-primary/10 border border-gold-primary/30 text-gold-primary text-[10px] font-mono rounded-full uppercase tracking-widest">
                    PropTech / Satellite AI
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-mono rounded-full uppercase tracking-widest">
                    MVP
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">ZIPPATEK DIGITAL LTD</h2>
                <div className="space-y-4 text-dim-white text-lg">
                  <p>Products: <span className="text-white font-mono text-sm">PropaBridge · PropaAI · FastFind360</span></p>
                  <p>"Nigeria's first physically and legally verified AI real estate platform."</p>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="px-4 py-2 glass-panel-gold text-xs font-bold text-gold-pale">YC TOP 10% GLOBAL</div>
                    <div className="px-4 py-2 glass-panel-gold text-xs font-bold text-gold-pale">AFRICAN IMPACT CHALLENGE 2026</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl bg-navy-primary/50 overflow-hidden border border-white/10 flex items-center justify-center">
                <span className="text-dim-white/20 font-display italic text-2xl">[ VENTURE ASSET PREVIEW ]</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VentureCard 
              name="PLOKITCH"
              oneLiner="Revolutionizing how Northern Nigeria connects with local discovery."
              sector="Local Discovery"
              stage="Building"
              index={0}
            />
            <div className="glass-panel p-8 flex flex-col justify-center items-center text-center border-dashed border-white/10 opacity-60">
              <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Building Next...</h3>
              <p className="text-dim-white text-sm">Targeting Food-Tech & Agri-Tech sectors</p>
            </div>
          </div>
        </div>

        {/* Section 2: Pipeline */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold text-white mb-12">The Pipeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Discovery", "Food-Tech", "Fintech", "Agritech", "Healthtech"].map((sector, i) => (
              <div key={i} className="glass-panel p-6 space-y-4">
                <p className="text-xs font-mono text-gold-primary uppercase tracking-widest">{sector}</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${20 + i * 15}%` }}
                    className="h-full bg-gold-primary" 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Apply */}
        <section className="text-center">
          <div className="liquid-glass p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Building something in Northern Nigeria?
            </h2>
            <p className="text-dim-white mb-8 max-w-xl mx-auto">
              We are looking for founders who are willing to stay in the room long enough to build the inevitable.
            </p>
            <button className="glass-button text-base px-10">
              Apply to NS5
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

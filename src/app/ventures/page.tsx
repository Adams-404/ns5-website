"use client";

import { motion } from "framer-motion";
import VentureCard from "@/components/VentureCard";
import { ArrowRight, Info, Users, Briefcase } from "lucide-react";

const VENTURES = [
  {
    name: "Zippatek Digital",
    oneLiner: "Nigeria's first physically and legally verified AI real estate platform.",
    sector: "PropTech",
    stage: "MVP",
    description: "Zippatek uses satellite imagery and machine learning to verify property boundaries and ownership history in regions with legacy paper-based systems.",
    team: ["Muh'd Muh'd Tukur (CTO)", "Umar Faruq (Backend)", "Aisha Kabir (Frontend)"],
    metrics: "2,000+ Properties Verified",
    url: "https://zippatek.com"
  },
  {
    name: "Plokitch",
    oneLiner: "Revolutionizing how Northern Nigeria connects with local discovery.",
    sector: "Discovery",
    stage: "Building",
    description: "A hyper-local discovery engine focused on the unique social and commercial nodes of Northern Nigerian cities.",
    team: ["Nasir Imam (Design)", "Bello Kassim (Growth)", "Sani Ahmad (Product)"],
    metrics: "Alpha Testing in Kano & Kaduna",
    url: "https://plokitch.com"
  },
  {
    name: "AgriNode",
    oneLiner: "Decentralized supply chain for the Sahel's breadbasket.",
    sector: "AgriTech",
    stage: "Concept",
    description: "Connecting smallholder farmers directly to industrial buyers through a blockchain-enabled logistics and payment rail.",
    team: ["Fatima Bello (Ops)", "Ibrahim Sani (Market)"],
    metrics: "10+ Pilot Hubs Identified",
    url: "#"
  }
];

export default function VenturesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
            Active <span className="text-gold-primary">Portfolio</span>
          </h1>
          <p className="text-dim-white text-xl max-w-2xl leading-relaxed">
            We don't just invest; we architect. Each institution in our portfolio is 
            designed to be an anchor for the Northern Nigerian economy.
          </p>
        </header>

        <div className="space-y-32">
          {VENTURES.map((v, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Visual/Card Side */}
                <div className="lg:col-span-5">
                  <VentureCard 
                    name={v.name}
                    oneLiner={v.oneLiner}
                    sector={v.sector}
                    stage={v.stage}
                    index={i}
                  />
                  <div className="mt-8 glass-panel p-6 border-gold-primary/20 bg-gold-primary/5">
                    <div className="flex items-center gap-3 text-gold-primary mb-2">
                      <Info size={16} />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Key Metric</span>
                    </div>
                    <p className="text-white font-display text-xl">{v.metrics}</p>
                  </div>
                </div>

                {/* Detail Side */}
                <div className="lg:col-span-7 space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white">{v.name}</h2>
                    <div className="flex flex-wrap gap-4">
                      <span className="bg-white/5 border border-white/10 px-4 py-1 rounded-full text-dim-white text-xs font-mono uppercase tracking-widest">{v.sector}</span>
                      <span className="bg-gold-primary/10 border border-gold-primary/20 px-4 py-1 rounded-full text-gold-primary text-xs font-mono uppercase tracking-widest">{v.stage}</span>
                    </div>
                  </div>

                  <p className="text-dim-white text-xl leading-relaxed">
                    {v.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gold-primary">
                        <Users size={18} />
                        <h3 className="font-mono text-[10px] uppercase tracking-widest font-bold text-white">Core Team</h3>
                      </div>
                      <ul className="space-y-2">
                        {v.team.map((t, idx) => (
                          <li key={idx} className="text-dim-white text-sm flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold-primary" /> {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gold-primary">
                        <Briefcase size={18} />
                        <h3 className="font-mono text-[10px] uppercase tracking-widest font-bold text-white">Action</h3>
                      </div>
                      <a href={v.url} className="glass-button w-full text-sm py-4 flex items-center justify-center gap-2">
                        Visit {v.name} <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Pipeline Section */}
        <section className="mt-40 py-32 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">The <span className="text-gold-primary">Pipeline</span></h2>
            <p className="text-dim-white max-w-xl mx-auto">Upcoming sectors we are currently architecting for the next 18 months.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["EduTech", "HealthTech", "Logistics"].map((sector, i) => (
              <div key={i} className="glass-panel p-10 text-center group hover:bg-gold-primary/5 transition-all">
                <p className="text-gold-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">Research Phase</p>
                <h3 className="text-3xl font-display font-bold text-white">{sector}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

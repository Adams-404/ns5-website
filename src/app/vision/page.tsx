"use client";

import { motion } from "framer-motion";
import { Check, X, Shield, Rocket, Target, Users, Landmark, Zap, BarChart } from "lucide-react";

export default function VisionPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Northern Nigeria's turn to <br />
            <span className="text-gold-primary italic">prove what's inevitable.</span>
          </motion.h1>
          <p className="text-dim-white text-lg">
            A North Star isn't a map. It's a direction. We are building the infrastructure for the next generation of African giants.
          </p>
        </header>

        {/* Section 1: The 5-5-5 Framework */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-gold-primary">01</span> The 5-5-5 Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "5 Unicorns", 
                desc: "Inevitable paths to $1B+ valuations by solving massive local problems with global scale.",
                icon: Rocket 
              },
              { 
                title: "5 Sectors", 
                desc: "Discovery, Food-Tech, Fintech, Agritech, Healthtech/Edtech — the bedrock of our economy.",
                icon: Target 
              },
              { 
                title: "5 Years", 
                desc: "Foundation (Y1-2) → Scale (Y3-4) → Unicorn Trajectory (Y5). A patient, systematic approach.",
                icon: BarChart 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass-panel p-10 space-y-6 group hover:border-gold-primary transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{item.title}</h3>
                <p className="text-dim-white leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Founding Principles */}
        <section className="mb-32">
          <h2 className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-gold-primary">02</span> Founding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Global Ambition", icon: Zap },
              { title: "Enterprise Roots", icon: Landmark },
              { title: "Commercialisation First", icon: BarChart },
              { title: "Patient Capital", icon: Shield },
              { title: "Collaboration Culture", icon: Users },
              { title: "The Survival Math", icon: Rocket },
              { title: "Raise the BAR Higher", icon: Target },
            ].map((p, i) => (
              <div key={i} className="glass-panel p-6 flex items-center gap-4">
                <div className="text-gold-primary"><p.icon size={20} /></div>
                <span className="text-white font-medium">{p.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: What We Are Not */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 border-red-500/20 bg-red-500/5">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <X className="text-red-500" /> What we are NOT doing
              </h3>
              <ul className="space-y-4 text-dim-white">
                <li>• Chasing vanity metrics or "startup tourism"</li>
                <li>• Relying on temporary grants or NGO funding</li>
                <li>• Building for pitch competitions instead of revenue</li>
                <li>• Accepting mediocrity as "good enough for the region"</li>
              </ul>
            </div>
            <div className="glass-panel p-10 border-gold-primary/20 bg-gold-primary/5">
              <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Check className="text-gold-primary" /> What we ARE doing
              </h3>
              <ul className="space-y-4 text-dim-white">
                <li>• Building for revenue from day one</li>
                <li>• Creating physically and legally verified institutions</li>
                <li>• Competing on global quality standards</li>
                <li>• Engineering the "inevitable" through persistence</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

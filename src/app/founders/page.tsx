"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Users, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const TEAM = [
  {
    id: "ns5",
    name: "NASIR IBRAHIM IMAM",
    role: "Co-Founder, NS5",
    company: "NS5",
    url: "https://ns5.org",
    focus: "Ecosystem architecture, content, strategy, product design",
    bio: "Founding member of NEXA Technologies and Jibex Banks. Focused on building the anchors that allow African talent to scale globally while staying local.",
    quote: "The 'how' already exists. The question is who's willing to stay in the room long enough.",
    team: [
      { name: "Sani Ahmad", role: "Venture Architect" },
      { name: "Zara Mohammed", role: "Ecosystem Manager" }
    ]
  },
  {
    id: "zippatek",
    name: "MUH'D MUH'D TUKUR",
    role: "Co-Founder & CTO, Zippatek Digital Ltd",
    company: "Zippatek Digital",
    url: "https://zippatek.com",
    focus: "Satellite AI, Real Estate Verification, Infrastructure",
    bio: "Lead developer behind PropaBridge and PropaAI. YC Top 10%, African Impact Challenge 2026. Architecting the future of verified real estate in the Sahel.",
    quote: "Some days I genuinely lose sense of what I'm doing. That feeling isn't a sign to stop.",
    team: [
      { name: "Umar Faruq", role: "Backend Architect" },
      { name: "Aisha Kabir", role: "Frontend Lead" }
    ]
  }
];

const ECOSYSTEM_TEAM = [
  { name: "Amina Yusuf", role: "Legal & Compliance", focus: "FinTech Regulation" },
  { name: "Ibrahim Sani", role: "Growth Lead", focus: "Northern Distribution" },
  { name: "Fatima Bello", role: "Venture Architect", focus: "AgriTech Operations" },
  { name: "Bello Kassim", role: "Community Lead", focus: "Talent Sourcing" },
];

export default function FoundersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
              The <span className="text-gold-primary">Founders</span>
            </h1>
            <p className="text-dim-white text-xl md:text-2xl max-w-2xl leading-relaxed">
              Operators with enterprise roots and global ambition, 
              committed to building anchors in the Sahel.
            </p>
          </motion.div>
        </header>

        {/* Primary Founders */}
        <div className="space-y-12 mb-40">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="liquid-glass p-8 md:p-12 group relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Main Profile */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold-primary p-1 shrink-0">
                      <div className="w-full h-full rounded-full bg-navy-secondary overflow-hidden flex items-center justify-center text-gold-primary/30 font-display italic">
                        PHOTO
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{member.name}</h2>
                      <p className="text-gold-primary font-mono text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-dim-white leading-relaxed text-lg italic">
                    "{member.quote}"
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a href={member.url} target="_blank" rel="noopener noreferrer" className="glass-button text-xs py-2 px-6 flex items-center gap-2 border-gold-primary/30">
                      Visit {member.company} <ArrowUpRight size={14} />
                    </a>
                    <button 
                      onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                      className="text-white/60 hover:text-gold-primary font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      {expandedId === member.id ? "Hide Profile" : "View Company Profile"}
                      {expandedId === member.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Bio (Hidden by default) */}
                <div className="lg:w-1/2">
                   <p className="text-dim-white leading-relaxed">
                      {member.bio}
                    </p>
                </div>
              </div>

              {/* Expandable Company Team Section */}
              <AnimatePresence>
                {expandedId === member.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-12 pt-12 border-t border-white/5 overflow-hidden"
                  >
                    <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                      <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-gold-primary" size={20} />
                        <h3 className="text-xl font-display font-bold text-white uppercase tracking-widest">
                          {member.company} <span className="text-gold-primary opacity-50">Team</span>
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {member.team.map((tm, idx) => (
                          <div key={idx} className="glass-panel p-6 bg-white/5">
                            <p className="text-white font-semibold mb-1">{tm.name}</p>
                            <p className="text-gold-pale font-mono text-[10px] uppercase tracking-widest">{tm.role}</p>
                          </div>
                        ))}
                        <div className="glass-panel p-6 border-dashed border-white/20 flex items-center justify-center">
                          <p className="text-dim-white/50 font-mono text-[10px] uppercase tracking-widest">Growing...</p>
                        </div>
                      </div>

                      <div className="mt-10 pt-10 border-t border-white/5">
                        <p className="text-xs font-mono text-dim-white/50 uppercase tracking-[0.3em] mb-4">Focus Area</p>
                        <p className="text-white text-sm font-medium">{member.focus}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Team */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-gold-primary" size={24} />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Ecosystem <span className="text-gold-primary">Collective</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM_TEAM.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 hover:border-gold-primary/40 transition-colors"
              >
                <p className="text-gold-pale font-mono text-[10px] uppercase tracking-widest mb-2">{item.role}</p>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{item.name}</h3>
                <div className="h-px w-8 bg-gold-primary/30 mb-4" />
                <p className="text-dim-white text-[10px] font-mono uppercase tracking-widest opacity-60 leading-relaxed">{item.focus}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advisory CTA */}
        <section className="text-center py-24 bg-navy-secondary/30 rounded-[40px] border border-white/5 relative overflow-hidden">
          <div className="orb orb-gold -right-20 -top-20 opacity-10" />
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-8">Expanding the <span className="text-gold-primary">Advisory</span></h2>
          <p className="text-dim-white max-w-xl mx-auto mb-12 text-lg md:text-xl">
            Building the Sahel's future requires more than capital. 
            Join the collective of operators anchoring the next decade.
          </p>
          <button className="glass-button text-base px-12 py-4">Become an Advisor</button>
        </section>
      </div>
    </div>
  );
}

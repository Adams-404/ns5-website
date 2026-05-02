"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Users } from "lucide-react";

const TEAM = [
  {
    name: "NASIR IBRAHIM IMAM",
    role: "Co-Founder, NS5",
    company: "NS5",
    url: "https://ns5.org",
    focus: "Ecosystem architecture, content, strategy, product design",
    bio: "Founding member of NEXA Technologies and Jibex Banks. Focused on building the anchors that allow African talent to scale globally while staying local.",
    quote: "The 'how' already exists. The question is who's willing to stay in the room long enough.",
  },
  {
    name: "MUH'D MUH'D TUKUR",
    role: "Co-Founder & CTO, Zippatek Digital Ltd",
    company: "Zippatek Digital",
    url: "https://zippatek.com",
    focus: "Satellite AI, Real Estate Verification, Infrastructure",
    bio: "Lead developer behind PropaBridge and PropaAI. YC Top 10%, African Impact Challenge 2026. Architecting the future of verified real estate in the Sahel.",
    quote: "Some days I genuinely lose sense of what I'm doing. That feeling isn't a sign to stop.",
  }
];

const ECOSYSTEM_TEAM = [
  { name: "Amina Yusuf", role: "Legal & Compliance", focus: "FinTech Regulation" },
  { name: "Ibrahim Sani", role: "Growth Lead", focus: "Northern Distribution" },
  { name: "Fatima Bello", role: "Venture Architect", focus: "AgriTech Operations" },
];

export default function FoundersPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="liquid-glass p-8 md:p-12 group"
            >
              <div className="flex flex-col sm:flex-row gap-10 items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gold-primary p-1 shrink-0 relative">
                  <div className="w-full h-full rounded-full bg-navy-secondary overflow-hidden flex items-center justify-center text-gold-primary/30 font-display italic">
                    PHOTO
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gold-primary text-navy-primary p-2 rounded-full shadow-lg">
                    <Globe size={16} />
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div className="space-y-1">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-gold-primary transition-colors">
                      {member.name}
                    </h2>
                    <p className="text-gold-pale font-mono text-xs uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono text-dim-white/50 uppercase tracking-[0.3em]">Focus: {member.focus}</p>
                    <p className="text-dim-white leading-relaxed text-sm md:text-base">{member.bio}</p>
                  </div>

                  <p className="italic font-display text-xl text-white/90 border-l-2 border-gold-primary pl-6 py-2">
                    "{member.quote}"
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href={member.url} target="_blank" rel="noopener noreferrer" className="glass-button text-xs py-2 px-6 flex items-center gap-2 border-gold-primary/30">
                      Visit {member.company} <ArrowUpRight size={14} />
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-dim-white hover:text-white transition-colors text-xs font-mono tracking-widest">
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Team */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-gold-primary" size={24} />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Ecosystem <span className="text-gold-primary">Team</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-dim-white text-xs font-mono uppercase tracking-widest opacity-60">Focus: {item.focus}</p>
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

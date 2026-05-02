"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TEAM = [
  {
    name: "NASIR IBRAHIM IMAM",
    role: "Co-Founder, NS5 Ventures",
    focus: "Ecosystem architecture, content, strategy, product design",
    bio: "Founding member of NEXA Technologies and Jibex Banks. Focused on building the anchors that allow African talent to scale globally while staying local.",
    quote: "The 'how' already exists. The question is who's willing to stay in the room long enough.",
  },
  {
    name: "MUH'D MUH'D TUKUR",
    role: "Co-Founder & CTO, Zippatek Digital Ltd",
    focus: "Satellite AI, Real Estate Verification, Infrastructure",
    bio: "Lead developer behind PropaBridge and PropaAI. YC Top 10%, African Impact Challenge 2026. Architecting the future of verified real estate in the Sahel.",
    quote: "Some days I genuinely lose sense of what I'm doing. That feeling isn't a sign to stop.",
  }
];

export default function FoundersPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            The <span className="text-gold-primary">Founders</span>
          </h1>
          <p className="text-dim-white text-xl max-w-2xl">
            A small group of operators with enterprise roots and global ambition,
            committed to staying in the room.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-10 group"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-32 h-32 rounded-full border-2 border-gold-primary p-1 shrink-0">
                  <div className="w-full h-full rounded-full bg-navy-primary overflow-hidden flex items-center justify-center text-gold-primary/30 font-display italic">
                    PHOTO
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-display font-bold text-white group-hover:text-gold-primary transition-colors">
                      {member.name}
                    </h2>
                    <p className="text-gold-pale font-mono text-xs uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-mono text-dim-white/50 uppercase tracking-widest">Focus: {member.focus}</p>
                    <p className="text-dim-white leading-relaxed">{member.bio}</p>
                  </div>

                  <p className="italic font-display text-xl text-white/90 border-l-2 border-gold-primary pl-6 py-2">
                    "{member.quote}"
                  </p>

                  <a href="#" className="inline-flex items-center gap-2 text-dim-white hover:text-white transition-colors">
                    <ArrowUpRight size={18} /> <span className="text-xs font-mono">LINKEDIN</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="text-center py-20 bg-navy-secondary/30 rounded-[40px] border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Expanding the Advisory</h2>
          <p className="text-dim-white max-w-xl mx-auto mb-10">
            If you're a senior professional who believes in the Northern Nigeria opportunity,
            we want to talk about how you can anchor these ventures.
          </p>
          <button className="glass-button">Become an Advisor</button>
        </section>
      </div>
    </div>
  );
}

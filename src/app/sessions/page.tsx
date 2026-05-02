"use client";

import { motion } from "framer-motion";

const SESSIONS = [
  {
    number: "04",
    date: "April 28, 2026",
    title: "Scaling Verified Infrastructure",
    topics: ["Satellite AI benchmarks", "Legal frameworks for Sahel Real Estate", "Enterprise integration"],
    quote: "Standardization is the only way to beat the trust deficit.",
  },
  {
    number: "03",
    date: "April 14, 2026",
    title: "The Physics of Growth",
    topics: ["Customer acquisition in Northern Nigeria", "Unit economics for high-impact institutions", "Distribution anchors"],
    quote: "You don't need a million users; you need a thousand who can't live without you.",
  },
  {
    number: "02",
    date: "March 31, 2026",
    title: "Global Standards, Local Context",
    topics: ["Engineering quality", "The YC roadmap for African founders", "YC Top 10% insights"],
    quote: "Quality is not an expense; it is our primary differentiator.",
  },
  {
    number: "01",
    date: "March 17, 2026",
    title: "The NS5 Thesis",
    topics: ["The 5-5-5 Framework", "Ecosystem gaps", "Identifying the first 5 sectors"],
    quote: "We are not building startups; we are building institutions.",
  }
];

export default function SessionsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            The <span className="text-gold-primary">Sessions</span>
          </h1>
          <p className="text-dim-white text-xl max-w-2xl">
            Bi-weekly deep-dives into the mechanics of building unicorn-trajectory institutions 
            in Northern Nigeria.
          </p>
        </header>

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gold-primary/20" />

          <div className="space-y-16">
            {SESSIONS.map((session, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-36px] md:left-1/2 md:translate-x-[-50%] w-4 h-4 rounded-full bg-navy-primary border-2 border-gold-primary z-10" />

                <div className="w-full md:w-1/2">
                  <div className={`glass-panel p-8 group hover:border-gold-primary transition-all ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <p className="font-mono text-gold-primary text-xs tracking-widest mb-2">
                      SESSION {session.number} · {session.date}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-gold-primary">
                      {session.title}
                    </h3>
                    
                    <ul className={`space-y-2 text-dim-white text-sm mb-8 ${
                      i % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""
                    }`}>
                      {session.topics.map((t, j) => (
                        <li key={j}>• {t}</li>
                      ))}
                    </ul>

                    <div className={`border-t border-white/5 pt-6 ${
                      i % 2 === 0 ? "md:flex md:justify-end" : ""
                    }`}>
                      <p className="italic text-gold-pale font-display text-lg">
                        "{session.quote}"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <div className="glass-panel p-10 max-w-2xl mx-auto border-dashed border-white/20">
            <h3 className="text-xl font-display font-bold text-white mb-4">Want the full transcripts?</h3>
            <p className="text-dim-white mb-8">All session notes are published bi-weekly on our Substack.</p>
            <button className="glass-button">Subscribe to Substack</button>
          </div>
        </div>
      </div>
    </div>
  );
}

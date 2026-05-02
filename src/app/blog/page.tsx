"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Quote, Sparkles } from "lucide-react";
import Link from "next/link";

const POSTS = [
  {
    title: "Why Staying in the Room is a Strategy",
    date: "April 28, 2026",
    author: "Nasir Ibrahim Imam",
    excerpt: "The missing anchor in the Northern Nigeria ecosystem isn't capital—it's the willingness to endure the quiet years.",
    category: "Philosophy",
  },
  {
    title: "Satellite AI: Verifying the Sahel",
    date: "April 15, 2026",
    author: "Muh'd Muh'd Tukur",
    excerpt: "How we're using computer vision to build the legal infrastructure for the next billion dollars in real estate.",
    category: "Technology",
  },
  {
    title: "The 5-5-5 Framework: A Retrospective",
    date: "March 30, 2026",
    author: "NS5 Collective",
    excerpt: "Breaking down the mechanics of building five unicorns in five sectors over the next five years.",
    category: "Strategy",
  },
  {
    title: "Unit Economics in Northern Markets",
    date: "March 12, 2026",
    author: "Fatima Bello",
    excerpt: "Understanding the distribution anchors required to make high-volume, low-margin products work in the Sahel.",
    category: "Economics",
  },
  {
    title: "Designing for the Next Billion Users",
    date: "February 28, 2026",
    author: "Nasir Ibrahim Imam",
    excerpt: "Visual languages that resonate with Northern Nigerian identity while meeting global UX standards.",
    category: "Design",
  }
];

const QUOTES = [
  {
    text: "Innovation in the Sahel isn't about inventing the new, it's about anchoring the inevitable.",
    author: "Nasir Ibrahim Imam"
  },
  {
    text: "Code doesn't care about geography, but infrastructure does. We're building both.",
    author: "Muh'd Muh'd Tukur"
  },
  {
    text: "The North is a sleeping giant that only wakes up when the trust is decentralized.",
    author: "Amina Yusuf"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
            The <span className="text-gold-primary">Journal</span>
          </h1>
          <p className="text-dim-white text-xl max-w-2xl leading-relaxed">
            Deep-dives into the architecture of an ecosystem, from the people staying in the room.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Posts Area */}
          <div className="lg:col-span-2 space-y-12">
            {POSTS.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 md:p-12 hover:border-gold-primary/30 transition-all group relative overflow-hidden"
              >
                {i === 0 && (
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={120} className="text-gold-primary" />
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gold-primary font-mono text-[10px] uppercase tracking-[0.3em] bg-gold-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-dim-white/40 font-mono text-[10px] tracking-widest uppercase">
                    {post.date}
                  </span>
                </div>
                
                <Link href={`/blog/${i}`}>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 group-hover:text-gold-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-dim-white text-lg leading-relaxed mb-8 max-w-2xl">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-primary/20 flex items-center justify-center text-[10px] text-gold-primary font-bold border border-gold-primary/20">
                      {post.author[0]}
                    </div>
                    <span className="text-white font-mono text-[10px] uppercase tracking-widest">{post.author}</span>
                  </div>
                  <Link href={`/blog/${i}`} className="flex items-center gap-2 text-gold-pale text-xs font-mono tracking-widest group">
                    READ STORY <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar Area */}
          <div className="space-y-12">
            {/* Quotes section */}
            <div className="liquid-glass p-10 space-y-12">
              <div className="flex items-center gap-3 text-gold-primary mb-2">
                <Quote size={20} />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em]">Featured Quotes</h3>
              </div>
              
              {QUOTES.map((q, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-xl font-display italic text-white/90 leading-snug">
                    "{q.text}"
                  </p>
                  <p className="text-gold-primary font-mono text-[10px] uppercase tracking-widest">— {q.author}</p>
                  {i !== QUOTES.length - 1 && <div className="h-px w-12 bg-white/5" />}
                </div>
              ))}
            </div>

            {/* Newsletter sidebar */}
            <div className="glass-panel p-10 bg-gold-primary/5 border-gold-primary/20">
              <MessageSquare className="text-gold-primary mb-6" size={24} />
              <h3 className="text-2xl font-display font-bold text-white mb-4">Stay Anchored</h3>
              <p className="text-dim-white text-sm mb-6 leading-relaxed">
                Receive bi-weekly deep-dives into ecosystem building and venture updates.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-gold-primary"
                />
                <button className="glass-button w-full py-3 text-sm">Subscribe</button>
              </div>
            </div>
            
            {/* Quick Links / Categories */}
            <div className="glass-panel p-10">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white mb-6">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {["Philosophy", "Technology", "Strategy", "Economics", "Design"].map((cat) => (
                  <span key={cat} className="text-[10px] font-mono uppercase tracking-widest text-dim-white hover:text-gold-primary cursor-pointer transition-colors border border-white/5 px-3 py-1 rounded-full bg-white/5">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

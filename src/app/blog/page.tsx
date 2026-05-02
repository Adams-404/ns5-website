"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Quote, Sparkles, Filter, Calendar, User } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Philosophy", "Technology", "Strategy", "Economics", "Design"];

const POSTS = [
  {
    title: "Why Staying in the Room is a Strategy",
    date: "April 28, 2026",
    author: "Nasir Ibrahim Imam",
    excerpt: "The missing anchor in the Northern Nigeria ecosystem isn't capital—it's the willingness to endure the quiet years.",
    category: "Philosophy",
    featured: true,
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? POSTS 
    : POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
              The <span className="text-gold-primary">Journal</span>
            </h1>
            <p className="text-dim-white text-xl max-w-xl leading-relaxed">
              Deep-dives into the architecture of an ecosystem, from the people staying in the room.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? "bg-gold-primary text-navy-primary font-bold" 
                  : "text-dim-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Featured Post (if All is active) */}
        {activeCategory === "All" && (
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
           >
              <Link href="/blog/0" className="group">
                <div className="liquid-glass p-8 md:p-16 border-gold-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sparkles size={240} className="text-gold-primary" />
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest">FEATURED</span>
                      <span className="text-dim-white/50 text-[10px] font-mono tracking-widest">APRIL 28, 2026</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white group-hover:text-gold-primary transition-colors leading-none tracking-tighter max-w-4xl">
                      {POSTS[0].title}
                    </h2>
                    
                    <p className="text-dim-white text-xl md:text-2xl leading-relaxed max-w-3xl">
                      {POSTS[0].excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center text-xs text-gold-primary font-bold border border-gold-primary/20">
                          N
                        </div>
                        <span className="text-white font-mono text-xs uppercase tracking-widest">Nasir Ibrahim Imam</span>
                      </div>
                      <span className="flex items-center gap-2 text-gold-pale text-xs font-mono tracking-widest group-hover:gap-4 transition-all">
                        READ STORY <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
           </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Posts Area */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.filter(p => !p.featured || activeCategory !== "All").map((post, i) => (
                <motion.article 
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-panel p-8 md:p-10 hover:border-gold-primary/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-gold-primary font-mono text-[10px] uppercase tracking-[0.3em] bg-gold-primary/10 px-3 py-1 rounded-full border border-gold-primary/10">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-dim-white/40 text-[10px] font-mono tracking-widest">
                      <Calendar size={12} /> {post.date}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${i}`}>
                    <h2 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-gold-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-dim-white leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-dim-white/60 uppercase tracking-widest">
                      <User size={12} /> {post.author}
                    </div>
                    <Link href={`/blog/${i}`} className="flex items-center gap-2 text-gold-pale text-[10px] font-mono tracking-widest group">
                      READ <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Quotes section */}
            <div className="liquid-glass p-10 space-y-12 bg-navy-secondary/50">
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
          </div>
        </div>
      </div>
    </div>
  );
}

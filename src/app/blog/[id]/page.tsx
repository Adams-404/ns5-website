"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const POSTS = [
  {
    id: "0",
    title: "Why Staying in the Room is a Strategy",
    date: "April 28, 2026",
    author: "Nasir Ibrahim Imam",
    category: "Philosophy",
    content: `
      The missing anchor in the Northern Nigeria ecosystem isn't capital—it's the willingness to endure the quiet years. 
      In Silicon Valley, they call it 'The Grind.' In the Sahel, we call it 'Staying in the Room.'
      
      Building a unicorn in a frontier market requires a different kind of psychological infrastructure. 
      It's not just about unit economics; it's about trust economics.
    `
  },
  {
    id: "1",
    title: "Satellite AI: Verifying the Sahel",
    date: "April 15, 2026",
    author: "Muh'd Muh'd Tukur",
    category: "Technology",
    content: `
      How we're using computer vision to build the legal infrastructure for the next billion dollars in real estate.
      Satellite imagery isn't just for maps; it's for legal truth.
    `
  },
  {
    id: "2",
    title: "The 5-5-5 Framework: A Retrospective",
    date: "March 30, 2026",
    author: "NS5 Collective",
    category: "Strategy",
    content: `
      Breaking down the mechanics of building five unicorns in five sectors over the next five years.
      Sector selection is the first and most critical pivot point.
    `
  }
];

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = POSTS.find(p => p.id === id) || POSTS[0];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gold-primary hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="bg-gold-primary/10 border border-gold-primary/20 text-gold-primary px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight tracking-tighter">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between py-6 border-y border-white/5 gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center text-xs text-gold-primary font-bold">
                    {post.author[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-mono text-xs uppercase tracking-widest">{post.author}</span>
                    <span className="text-dim-white/40 text-[10px] font-mono uppercase tracking-widest">Operator</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2 text-dim-white/50 text-[10px] font-mono tracking-widest uppercase">
                  <Calendar size={14} /> {post.date}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-3 bg-white/5 rounded-full border border-white/5 hover:border-gold-primary/30 text-dim-white hover:text-white transition-all">
                  <Share2 size={16} />
                </button>
                <button className="p-3 bg-white/5 rounded-full border border-white/5 hover:border-gold-primary/30 text-dim-white hover:text-white transition-all">
                  <Bookmark size={16} />
                </button>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-gold max-w-none">
            <div className="text-dim-white text-xl leading-relaxed whitespace-pre-line font-body">
              {post.content}
            </div>
          </div>

          <footer className="pt-20 border-t border-white/5">
             <div className="liquid-glass p-12 text-center space-y-6">
                <h3 className="text-2xl font-display font-bold text-white">Continue the conversation?</h3>
                <p className="text-dim-white max-w-md mx-auto">
                  Every Dienstag we send out a deep-dive into the Sahel's emerging institutions.
                </p>
                <Link href="/contact" className="glass-button inline-block px-12 py-4">
                  Join the Collective
                </Link>
             </div>
          </footer>
        </motion.article>
      </div>
    </div>
  );
}

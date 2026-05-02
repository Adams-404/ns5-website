"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, User, Building, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"founders" | "general">("founders");

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Join the <span className="text-gold-primary">Room</span>
          </h1>
          <p className="text-dim-white text-lg">
            Whether you are building the next unicorn or want to support the ecosystem, we're ready to listen.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Pathway Selector */}
          <div className="flex justify-center mb-12">
            <div className="glass-panel p-1.5 flex gap-1">
              <button 
                onClick={() => setActiveTab("founders")}
                className={`px-8 py-3 rounded-xl font-display font-semibold transition-all ${
                  activeTab === "founders" ? "bg-gold-primary text-navy-primary" : "text-white hover:bg-white/5"
                }`}
              >
                I'm a Founder
              </button>
              <button 
                onClick={() => setActiveTab("general")}
                className={`px-8 py-3 rounded-xl font-display font-semibold transition-all ${
                  activeTab === "general" ? "bg-gold-primary text-navy-primary" : "text-white hover:bg-white/5"
                }`}
              >
                General Inquiry
              </button>
            </div>
          </div>

          <div className="liquid-glass p-8 md:p-12">
            <AnimatePresence mode="wait">
              {activeTab === "founders" ? (
                <motion.form 
                  key="founders"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-primary/50" size={18} />
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Venture Name</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-primary/50" size={18} />
                      <input type="text" placeholder="Acme Corp" className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Sector</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all appearance-none">
                      <option className="bg-navy-primary">PropTech</option>
                      <option className="bg-navy-primary">AgriTech</option>
                      <option className="bg-navy-primary">Fintech</option>
                      <option className="bg-navy-primary">Food-Tech</option>
                      <option className="bg-navy-primary">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Stage</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all appearance-none">
                      <option className="bg-navy-primary">Concept</option>
                      <option className="bg-navy-primary">MVP / Building</option>
                      <option className="bg-navy-primary">Early Revenue</option>
                      <option className="bg-navy-primary">Scaling</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">One-Line Pitch</label>
                    <textarea rows={3} placeholder="What inevitable problem are you solving?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                  </div>
                  <div className="md:col-span-2 text-right pt-4">
                    <button className="glass-button w-full md:w-auto">
                      Submit Application <Send size={18} className="ml-2" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form 
                  key="general"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Full Name</label>
                      <input type="text" placeholder="Jane Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Email Address</label>
                      <input type="email" placeholder="jane@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gold-pale uppercase tracking-widest pl-4">Message</label>
                    <textarea rows={6} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-all" />
                  </div>
                  <div className="text-right pt-4">
                    <button className="glass-button w-full md:w-auto">
                      Send Message <Send size={18} className="ml-2" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 text-center text-dim-white/40 font-mono text-xs tracking-widest uppercase">
          LinkedIn · Instagram · Twitter · hello@ns5.org
        </div>
      </div>
    </div>
  );
}

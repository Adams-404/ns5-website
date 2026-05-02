"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, CheckCircle2, Video, Users, Lightbulb, Briefcase } from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<"founder" | "general">("founder");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
            Join the <span className="text-gold-primary">Room</span>
          </h1>
          <p className="text-dim-white text-xl leading-relaxed">
            Whether you are building the next anchor or looking to support the ecosystem, 
            the conversation starts here.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-8">
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => setFormType("founder")}
                className={`px-8 py-3 rounded-full font-mono text-xs tracking-widest transition-all ${
                  formType === "founder" 
                  ? "bg-gold-primary text-navy-primary shadow-[0_0_20px_rgba(184,151,58,0.3)]" 
                  : "bg-white/5 text-dim-white hover:bg-white/10"
                }`}
              >
                APPLY AS FOUNDER (YC-STYLE)
              </button>
              <button 
                onClick={() => setFormType("general")}
                className={`px-8 py-3 rounded-full font-mono text-xs tracking-widest transition-all ${
                  formType === "general" 
                  ? "bg-gold-primary text-navy-primary shadow-[0_0_20px_rgba(184,151,58,0.3)]" 
                  : "bg-white/5 text-dim-white hover:bg-white/10"
                }`}
              >
                GENERAL INQUIRY
              </button>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="liquid-glass p-12 text-center space-y-6"
                >
                  <CheckCircle2 className="text-gold-primary mx-auto" size={64} />
                  <h2 className="text-3xl font-display font-bold text-white">Application Received</h2>
                  <p className="text-dim-white max-w-md mx-auto">
                    We've added your data to the queue. Our team deep-dives into applications every Tuesday. 
                    Expect a response within 7-10 days.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-gold-primary font-mono text-xs tracking-widest uppercase mt-8">
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key={formType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {formType === "founder" ? (
                    /* YC Style Form */
                    <div className="space-y-12">
                      <section className="space-y-6">
                        <div className="flex items-center gap-3 text-gold-primary mb-2">
                          <Briefcase size={18} />
                          <h3 className="font-mono text-xs uppercase tracking-[0.3em]">The Basics</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Company Name</label>
                            <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Company Website (if any)</label>
                            <input type="url" placeholder="https://" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                          </div>
                        </div>
                      </section>

                      <section className="space-y-6">
                        <div className="flex items-center gap-3 text-gold-primary mb-2">
                          <Lightbulb size={18} />
                          <h3 className="font-mono text-xs uppercase tracking-[0.3em]">The Idea</h3>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">What is your company going to make? (140 chars max)</label>
                          <textarea maxLength={140} required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors h-24 resize-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Why did you pick this idea? Do you have domain expertise?</label>
                          <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors h-40" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">What do you know about this market that others don't?</label>
                          <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors h-40" />
                        </div>
                      </section>

                      <section className="space-y-6">
                        <div className="flex items-center gap-3 text-gold-primary mb-2">
                          <Users size={18} />
                          <h3 className="font-mono text-xs uppercase tracking-[0.3em]">The Team</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Number of Founders</label>
                            <input type="number" min="1" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Are you technical? (Can you build the MVP?)</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors appearance-none">
                              <option className="bg-navy-primary">Yes, I'm a developer</option>
                              <option className="bg-navy-primary">No, but we have a CTO</option>
                              <option className="bg-navy-primary">No, looking for a technical co-founder</option>
                            </select>
                          </div>
                        </div>
                      </section>

                      <section className="space-y-6">
                        <div className="flex items-center gap-3 text-gold-primary mb-2">
                          <Video size={18} />
                          <h3 className="font-mono text-xs uppercase tracking-[0.3em]">The Pitch</h3>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Link to 1-minute intro video (Loom, YouTube, etc.)</label>
                          <input type="url" placeholder="https://" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                        </div>
                      </section>
                    </div>
                  ) : (
                    /* General Inquiry Form */
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Full Name</label>
                          <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Email Address</label>
                          <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Subject</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors appearance-none">
                          <option className="bg-navy-primary">Partnership</option>
                          <option className="bg-navy-primary">Press Inquiry</option>
                          <option className="bg-navy-primary">Advisor Application</option>
                          <option className="bg-navy-primary">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Message</label>
                        <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold-primary transition-colors h-48" />
                      </div>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="glass-button w-full md:w-auto px-12 py-5 flex items-center justify-center gap-3 group"
                  >
                    Submit Application <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4">
            <div className="space-y-12 sticky top-32">
              <div className="glass-panel p-10 space-y-6">
                <h3 className="text-xl font-display font-bold text-white">Why the YC style?</h3>
                <p className="text-sm text-dim-white leading-relaxed">
                  We believe in clarity. If you can't explain what you do in 140 characters, 
                  you haven't staying in the room long enough yet. 
                </p>
                <div className="h-px w-full bg-white/5" />
                <p className="text-xs font-mono text-gold-primary tracking-widest uppercase">
                  No Fluff. No Noise. Just Anchors.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-dim-white/50">Other channels</h4>
                <div className="space-y-4">
                  <a href="#" className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-gold-primary/30 transition-all group">
                    <span className="text-white text-sm">Follow on X</span>
                    <ArrowRight size={16} className="text-gold-primary group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-gold-primary/30 transition-all group">
                    <span className="text-white text-sm">Join the Newsletter</span>
                    <ArrowRight size={16} className="text-gold-primary group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


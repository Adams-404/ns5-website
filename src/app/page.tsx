"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeScene from "@/components/ThreeScene";
import VentureCard from "@/components/VentureCard";
import Link from "next/link";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      
      tl.from(".hero-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      }, 0.9)
      .from(".hero-headline span", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      }, 1.2)
      .from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, 1.6)
      .from(".hero-cta", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
      }, 1.8);

      // Section Headers wiping in
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            once: true,
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
      
      // Floating Orbs parallax
      gsap.to(".orb", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        y: (i, target) => target.classList.contains("orb-gold") ? 200 : -150,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <ThreeScene />
        
        {/* Background Orbs */}
        <div className="orb orb-gold top-1/4 -left-20 opacity-20 hidden lg:block" />
        <div className="orb orb-blue bottom-1/4 right-0 opacity-15 hidden lg:block" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl lg:max-w-4xl">
            <p className="hero-label font-mono text-gold-primary tracking-[0.3em] mb-6 text-xs sm:text-sm">
              NORTHSTAR FIVE · EST. DECEMBER 2025
            </p>
            
            <h1 className="hero-headline text-6xl md:text-8xl lg:text-[120px] font-display font-bold leading-[0.85] text-white mb-8 tracking-tighter">
              <span className="block"><span className="text-gold-primary">5</span> Unicorns.</span>
              <span className="block"><span className="text-gold-primary">5</span> Sectors.</span>
              <span className="block"><span className="text-gold-primary">5</span> Years.</span>
            </h1>
            
            <p className="hero-sub text-dim-white text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              Northern Nigeria's first unicorn factory — building the institutions that make staying the obvious choice.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/vision" className="hero-cta glass-button text-base px-10">
                Explore the Vision
              </Link>
              <Link href="/ventures" className="hero-cta glass-button text-base px-10 border-white/20 text-white hover:border-gold-primary">
                Explore the Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dim-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Section 2: The Brief */}
      <section className="py-32 relative bg-navy-secondary/30 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { val: "5", label: "Months Active" },
              { val: "3", label: "Active Institutions" },
              { val: "5", label: "Target Sectors" }
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-12 text-center group hover:border-gold-primary/50 transition-all">
                <h2 className="text-7xl md:text-9xl font-display font-bold text-gold-primary mb-2 group-hover:scale-105 transition-transform duration-500">
                  {stat.val}
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl font-display italic text-white/90 leading-snug">
              "We are not different from them. They just stayed in the room long enough."
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Active Ventures Preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
            <h2 className="section-header text-5xl md:text-7xl font-display font-bold text-white">
              Active <span className="text-gold-primary">Portfolio</span>
            </h2>
            <Link href="/ventures" className="flex items-center gap-2 text-gold-pale font-mono text-sm group tracking-widest">
              SEE ALL PORTFOLIO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VentureCard 
              name="Zippatek Digital"
              oneLiner="Nigeria's first physically and legally verified AI real estate platform."
              sector="PropTech"
              stage="MVP"
              index={0}
            />
            <VentureCard 
              name="Plokitch"
              oneLiner="Revolutionizing how Northern Nigeria connects with local discovery."
              sector="Discovery"
              stage="Building"
              index={1}
            />
            <VentureCard 
              name="AgriNode"
              oneLiner="Decentralized supply chain for the Sahel's breadbasket."
              sector="AgriTech"
              stage="Concept"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Section 4: The Why */}
      <section className="py-32 relative overflow-hidden">
        <div className="orb orb-gold -right-1/4 top-1/2 opacity-10" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="section-header text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
                Northern Nigeria's <br />
                <span className="text-gold-primary italic">turn to prove <br /> what's inevitable.</span>
              </h2>
              <div className="space-y-8 text-dim-white text-xl leading-relaxed max-w-lg">
                <p>
                  We produce digital talent that competes globally. Then celebrate when they leave. 
                  <span className="text-white"> NS5 is about changing the math.</span>
                </p>
                <p>
                  The missing anchors in our ecosystem aren't just capital—they are institutions that scale. 
                  We are building the anchors.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="liquid-glass aspect-square flex items-center justify-center p-12 md:p-20">
                <div className="text-center space-y-6">
                  <p className="font-display text-4xl md:text-6xl text-white font-bold leading-tight">Raise the <br /> BAR Higher</p>
                  <div className="h-px w-24 bg-gold-primary mx-auto opacity-50" />
                  <p className="font-mono text-gold-primary tracking-[0.3em] text-[10px]">GLOBAL STANDARDS · LOCAL ROOTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA / Newsletter */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="liquid-glass p-12 md:p-24 max-w-5xl mx-auto border-gold-primary/20">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-10 leading-tight">
              Watch what happens when <br />
              Northern Nigeria <span className="text-gold-primary">stays in the room.</span>
            </h2>
            
            <div className="max-w-md mx-auto relative group">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-white focus:outline-none focus:border-gold-primary transition-all pr-40"
              />
              <button className="absolute right-2 top-2 bottom-2 glass-button px-8 py-2 text-sm font-bold">
                Subscribe
              </button>
            </div>
            
            <p className="mt-10 text-dim-white/40 font-mono text-[10px] tracking-[0.3em] flex items-center justify-center gap-3">
              <Mail size={12} className="text-gold-primary" /> SESSION UPDATES · VENTURE MILESTONES · NO NOISE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper to make it work with framer-motion in layout
import { motion } from "framer-motion";

"use client";

import { Download, Mail } from "lucide-react";

export default function PressPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            <span className="text-gold-primary">Press</span> Room
          </h1>
          <p className="text-dim-white text-xl max-w-2xl">
            Latest coverage and official resources for the NS5 ecosystem.
          </p>
        </header>

        {/* Section 1: Coverage */}
        <section className="mb-32">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Coverage</h2>
          <div className="glass-panel p-20 flex items-center justify-center border-dashed border-white/10 text-dim-white/30 italic text-xl">
            We're just getting started. Press kit below.
          </div>
        </section>

        {/* Section 2: Press Kit */}
        <section className="mb-32">
          <h2 className="text-2xl font-display font-bold text-white mb-12">Press Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "NS5 Factsheet", type: "PDF", size: "1.2 MB" },
              { title: "Brand Assets", type: "ZIP", size: "15.4 MB" },
              { title: "Venture Profiles", type: "PDF", size: "3.5 MB" }
            ].map((asset, i) => (
              <div key={i} className="glass-panel p-8 group flex items-center justify-between hover:border-gold-primary transition-all">
                <div className="space-y-1">
                  <h3 className="text-white font-semibold">{asset.title}</h3>
                  <p className="text-xs font-mono text-dim-white/50">{asset.type} · {asset.size}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-navy-primary transition-all">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Key Facts */}
        <section className="mb-32">
          <div className="liquid-glass p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Founded", val: "Dec 2025" },
                { label: "Region", val: "N. Nigeria" },
                { label: "Thesis", val: "5-5-5" },
                { label: "Active", val: "3 Institutions" }
              ].map((f, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl font-display font-bold text-white">{f.val}</p>
                  <p className="text-xs font-mono text-gold-primary uppercase tracking-widest">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section className="max-w-xl mx-auto text-center">
          <div className="glass-panel p-10 border-gold-primary/20">
            <Mail className="mx-auto mb-6 text-gold-primary" size={32} />
            <h2 className="text-2xl font-display font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-dim-white mb-6">For interviews, data requests, or media assets, reach out to our communications team.</p>
            <p className="text-gold-pale font-mono font-bold tracking-widest">press@ns5.org</p>
            <p className="mt-4 text-xs text-dim-white/40 italic">We respond within 48 hours.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

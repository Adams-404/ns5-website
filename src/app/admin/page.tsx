"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Quote as QuoteIcon, 
  Image as ImageIcon, 
  Plus, 
  Download, 
  Save,
  Trash2,
  Edit3,
  Star
} from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"blog" | "founders" | "quotes" | "graphics">("graphics");
  
  // Graphics State for the "Meet the Founder" card
  const [founderName, setFounderName] = useState("NASIR IMAM");
  const [founderRole, setFounderRole] = useState("FOUNDING OPERATOR");
  const [founderQuote, setFounderQuote] = useState("The 'how' already exists. The question is who's willing to stay in the room long enough.");
  const [accentColor, setAccentColor] = useState("#B8973A"); // Gold

  const downloadGraphic = () => {
    alert("Exporting high-resolution PNG... (Design optimized for LinkedIn/Twitter)");
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy-primary">
      <div className="container mx-auto px-6">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
              Ecosystem <span className="text-gold-primary">Terminal</span>
            </h1>
            <p className="text-dim-white font-mono text-[10px] uppercase tracking-[0.3em]">Subdomain: admin.ns5.org</p>
          </div>
          
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <TabButton active={activeTab === "blog"} onClick={() => setActiveTab("blog")} icon={<BookOpen size={16}/>} label="Blog" />
            <TabButton active={activeTab === "founders"} onClick={() => setActiveTab("founders")} icon={<Users size={16}/>} label="Founders" />
            <TabButton active={activeTab === "quotes"} onClick={() => setActiveTab("quotes")} icon={<QuoteIcon size={16}/>} label="Quotes" />
            <TabButton active={activeTab === "graphics"} onClick={() => setActiveTab("graphics")} icon={<ImageIcon size={16}/>} label="Graphics" />
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Editor Area */}
          <div className="lg:col-span-7">
            {activeTab === "graphics" ? (
              <div className="space-y-8">
                <div className="glass-panel p-8 space-y-6">
                  <h2 className="text-2xl font-display font-bold text-white">Graphic Editor</h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Founder Name</label>
                        <input 
                          value={founderName} 
                          onChange={(e) => setFounderName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-primary outline-none" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Role</label>
                        <input 
                          value={founderRole} 
                          onChange={(e) => setFounderRole(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-primary outline-none" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Signature Quote</label>
                      <textarea 
                        value={founderQuote} 
                        onChange={(e) => setFounderQuote(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-primary outline-none h-24 resize-none" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-dim-white uppercase tracking-widest">Accent Color</label>
                      <div className="flex gap-3">
                        {["#B8973A", "#FFFFFF", "#3A7FB8", "#B83A3A"].map(c => (
                          <button 
                            key={c}
                            onClick={() => setAccentColor(c)}
                            className={`w-8 h-8 rounded-full border-2 ${accentColor === c ? "border-white" : "border-transparent"}`}
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="glass-button flex-1 py-4 flex items-center justify-center gap-2">
                    <Save size={18} /> Save as Template
                  </button>
                  <button 
                    onClick={downloadGraphic}
                    className="glass-button flex-1 bg-gold-primary text-navy-primary border-transparent py-4 flex items-center justify-center gap-2"
                  >
                    <Download size={18} /> Export PNG
                  </button>
                </div>
              </div>
            ) : (
              <div className="liquid-glass p-12 text-center space-y-6">
                <Plus className="text-gold-primary mx-auto opacity-20" size={64} />
                <h3 className="text-2xl font-display font-bold text-white">Manage {activeTab}</h3>
                <p className="text-dim-white max-w-md mx-auto">
                  Add or edit {activeTab} entries for the ecosystem.
                </p>
                <button className="glass-button px-8 py-3">Add Entry</button>
              </div>
            )}
          </div>

          {/* Preview Area (Sample Design) */}
          <div className="lg:col-span-5">
             <div className="sticky top-32 space-y-6">
                <p className="text-[10px] font-mono text-gold-primary uppercase tracking-[0.4em] text-center">Output Preview</p>
                
                {/* THE SAMPLE DESIGN */}
                <div className="aspect-[4/5] bg-navy-secondary rounded-[32px] overflow-hidden border border-white/5 relative group shadow-2xl">
                  {/* Background Accents */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-primary to-navy-secondary" />
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-primary/5 rounded-full blur-[100px]" />
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                    <img src="/logo.svg" alt="logo" className="w-32 h-32" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex flex-col p-12">
                    <div className="flex-grow flex flex-col justify-center space-y-8">
                       <div className="space-y-4">
                          <Star className="text-gold-primary" size={24} style={{ color: accentColor }} />
                          <div className="h-1 w-12" style={{ backgroundColor: accentColor }} />
                       </div>
                       
                       <p className="text-3xl md:text-4xl font-display italic text-white leading-tight font-bold">
                         "{founderQuote}"
                       </p>
                    </div>

                    <div className="space-y-2 mt-auto">
                      <h3 className="text-3xl font-display font-bold text-white tracking-tight" style={{ color: accentColor === "#FFFFFF" ? "#B8973A" : "white" }}>
                        {founderName}
                      </h3>
                      <div className="flex items-center gap-3">
                         <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">{founderRole}</span>
                         <div className="h-px w-8 bg-white/10" />
                         <span className="text-[10px] font-mono text-gold-primary/60 uppercase tracking-[0.2em]" style={{ color: accentColor }}>NS5 COLLECTIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Glass Edge Shine */}
                  <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-[32px]" />
                </div>

                <div className="glass-panel p-6 text-center">
                  <p className="text-[10px] font-mono text-dim-white/50 uppercase tracking-widest">
                    Dimensions: 1080 x 1350 (Social Optimized)
                  </p>
                </div>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all ${
        active 
        ? "bg-gold-primary text-navy-primary font-bold shadow-lg" 
        : "text-dim-white hover:text-white"
      }`}
    >
      {icon} {label}
    </button>
  );
}

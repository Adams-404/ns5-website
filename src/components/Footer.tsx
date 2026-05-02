import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-secondary border-t border-gold-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 100 100">
                <path
                  d="M50 5 L61 38 L95 38 L68 59 L79 92 L50 72 L21 92 L32 59 L5 38 L39 38 Z"
                  fill="#B8973A"
                />
              </svg>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                NorthStar <span className="text-gold-primary">FIVE</span>
              </span>
            </Link>
            <p className="text-gold-pale italic font-display text-xl">
              "Raise the BAR Higher"
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-white font-semibold mb-2">Ecosystem</h4>
              <Link href="/vision" className="block text-dim-white hover:text-gold-primary transition-colors">Vision</Link>
              <Link href="/ventures" className="block text-dim-white hover:text-gold-primary transition-colors">Portfolio</Link>
              <Link href="/founders" className="block text-dim-white hover:text-gold-primary transition-colors">Founders</Link>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold mb-2">Connect</h4>
              <Link href="/sessions" className="block text-dim-white hover:text-gold-primary transition-colors">Sessions</Link>
              <Link href="/press" className="block text-dim-white hover:text-gold-primary transition-colors">Press</Link>
              <Link href="/contact" className="block text-dim-white hover:text-gold-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-2">Stay in the Room</h4>
            <div className="flex gap-4">
              <a href="#" className="text-dim-white hover:text-gold-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-dim-white hover:text-gold-primary transition-colors">Twitter</a>
              <a href="#" className="text-dim-white hover:text-gold-primary transition-colors">Instagram</a>
            </div>
            <p className="text-xs text-dim-white/50">
              © {new Date().getFullYear()} NS5. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dim-white/70">
            Built in Northern Nigeria. <span className="text-gold-pale">Competing globally.</span>
          </p>
          <div className="flex gap-6 text-xs text-dim-white/40">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

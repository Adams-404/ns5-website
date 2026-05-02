"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Vision", href: "/vision" },
  { name: "Portfolio", href: "/ventures" },
  { name: "Founders", href: "/founders" },
  { name: "Sessions", href: "/sessions" },
  { name: "Blog", href: "/blog" },
  { name: "Press", href: "/press" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="glass-panel px-6 py-3 flex items-center justify-between transition-all duration-300 bg-navy-secondary/70 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.svg" 
              alt="NS5 Logo" 
              className="w-10 h-10 transition-transform duration-500 group-hover:rotate-[72deg]"
            />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              NorthStar <span className="text-gold-primary">FIVE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-dim-white hover:text-gold-pale transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="glass-button text-sm py-2.5">
              Join NS5
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Liquid Glass Experience */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-primary/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0, originY: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-24 left-6 right-6 z-50 md:hidden"
            >
              <div className="liquid-glass p-8 space-y-8 shadow-2xl border-white/20 before:animate-[liquidRotate_8s_linear_infinite]">
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between text-2xl font-display font-semibold text-white group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                        <ChevronRight className="text-gold-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    className="glass-button w-full text-center py-4 flex items-center justify-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join NS5 <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

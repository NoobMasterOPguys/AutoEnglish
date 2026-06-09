import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(120,97,130,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18" style={{ height: 72 }}>
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #786182, #9a7da8)" }}>
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#786182", letterSpacing: "-0.02em" }}>
              Auto<span style={{ color: "#F79052" }}>English</span>
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.6rem", color: "#8a7a94", fontWeight: 500, letterSpacing: "0.08em" }}>LEARNING CENTER</span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-purple-50"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#4a3d54" }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2.5 rounded-2xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #F79052, #f5774a)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", boxShadow: "0 4px 14px rgba(247,144,82,0.4)" }}
          >
            Unlock Your Potential ✨
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-xl" style={{ color: "#786182" }} onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-6 pb-6 pt-2"
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)" }}
          >
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="block w-full text-left px-4 py-3 rounded-xl mb-1 hover:bg-purple-50 transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#4a3d54" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-3 w-full py-3 rounded-2xl text-white text-center"
              style={{ background: "linear-gradient(135deg, #F79052, #f5774a)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              Unlock Your Potential ✨
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion } from "motion/react";
import { ChevronDown, Play } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop&auto=format')`,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(120,97,130,0.88) 0%, rgba(30,18,45,0.78) 60%, rgba(247,144,82,0.4) 100%)" }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#F79052" }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#786182" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-sm"
            style={{ background: "rgba(247,144,82,0.2)", border: "1px solid rgba(247,144,82,0.4)", color: "#ffd4ab", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F79052" }} />
            One of the best English programs for kids in Indonesia!
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-white mb-6"
          style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.12, letterSpacing: "-0.02em", textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
        >
          Unlock Your{" "}
          <span style={{ color: "#F79052" }}>English Skill</span>
          <br />Automatically
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-10 mx-auto max-w-xl"
          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "clamp(1rem, 2.5vw, 1.18rem)", lineHeight: 1.65 }}
        >
          Fun, confidence-building English programs for children, teens, and adults. Crafted for lifelong fluency!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("#programs")}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #786182, #9a7da8)", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1rem", boxShadow: "0 6px 24px rgba(120,97,130,0.5)" }}
          >
            Explore Programs
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", color: "white", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "1rem", backdropFilter: "blur(8px)" }}
          >
            <Play className="w-4 h-4" />
            Contact Us
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { n: "5", label: "Programs Available" },
            { n: "98%", label: "Parent Satisfaction" },
            { n: "Years", label: "Of Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "#F79052", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 500, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-60 hover:opacity-100 transition-opacity animate-bounce"
      >
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", fontWeight: 500 }}>Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}

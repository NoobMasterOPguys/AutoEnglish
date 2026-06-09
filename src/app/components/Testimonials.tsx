import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Ratna Kusuma",
    role: "Parent of AutoKids student",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=120&h=120&fit=crop&auto=format",
    stars: 5,
    text: "My daughter used to be so shy speaking English. After just 3 months at AutoEnglish, she confidently presented in front of her class! The teachers are incredibly caring and professional.",
    location: "Jakarta",
  },
  {
    name: "Bapak Andi Prasetyo",
    role: "Parent of AutoToddler & AutoKids student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format",
    stars: 5,
    text: "Both my children attend AutoEnglish. The curriculum is exceptional — structured, fun, and genuinely effective. Their English level now surpasses many of their peers. Highly recommended!",
    location: "Tangerang",
  },
  {
    name: "Ibu Sari Dewi",
    role: "Parent of AutoTeens student",
    avatar: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=120&h=120&fit=crop&auto=format",
    stars: 5,
    text: "My son improved his TOEFL score significantly after joining AutoTeens. The teachers really understand what teenagers need — engaging lessons that don't feel like school. Worth every rupiah.",
    location: "Bekasi",
  },
  {
    name: "Michael Tan",
    role: "AutoSpeak adult learner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format",
    stars: 5,
    text: "I joined AutoSpeak for professional development and it exceeded all expectations. My speaking confidence at work meetings has transformed completely. The small class format is perfect.",
    location: "Surabaya",
  },
  {
    name: "Ibu Maya Wijaya",
    role: "Parent of Calistung student",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&auto=format",
    stars: 5,
    text: "The Calistung program is a gem! My 4-year-old now knows her ABCs and simple English words — all learned through songs and games. She begs me to go to class every week. ❤️",
    location: "Bogor",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const visible = [
    testimonials[idx],
    testimonials[(idx + 1) % testimonials.length],
    testimonials[(idx + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f0f7 0%, #fef8f3 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(120,97,130,0.1)", color: "#786182", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            Testimonials
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.18, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>
            Trusted by Thousands of{" "}
            <span style={{ color: "#786182" }}>Families</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 480, margin: "0 auto" }}>
            Real stories from real parents and students across Indonesia.
          </p>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 rounded-3xl relative"
              style={{ background: "#fff", boxShadow: i === 1 ? "0 16px 48px rgba(120,97,130,0.18)" : "0 4px 24px rgba(120,97,130,0.1)", transform: i === 1 ? "scale(1.03)" : "scale(1)" }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 opacity-10" style={{ color: "#786182" }} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F79052" }} />
                ))}
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4a3d54", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a1025", fontSize: "0.92rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.76rem" }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="p-7 rounded-3xl relative"
              style={{ background: "#fff", boxShadow: "0 8px 32px rgba(120,97,130,0.15)" }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 opacity-10" style={{ color: "#786182" }} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[idx].stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F79052" }} />
                ))}
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4a3d54", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>"{testimonials[idx].text}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a1025", fontSize: "0.92rem" }}>{testimonials[idx].name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.76rem" }}>{testimonials[idx].role} · {testimonials[idx].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-110" style={{ borderColor: "rgba(120,97,130,0.25)", color: "#786182" }}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className="rounded-full transition-all duration-300" style={{ width: i === idx ? 24 : 8, height: 8, background: i === idx ? "#786182" : "rgba(120,97,130,0.25)" }} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:scale-110" style={{ borderColor: "rgba(120,97,130,0.25)", color: "#786182" }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

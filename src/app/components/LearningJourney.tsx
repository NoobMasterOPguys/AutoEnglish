import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  { id: "calistung", name: "Calistung", age: "Early Years", emoji: "🎨", color: "#9b6bb5", bg: "#e8d5f5", desc: "The foundation of literacy (Reading, Writing, and Counting) integrated with basic English phonics." },
  { id: "autotoddler", name: "AutoToddler", age: "Ages 3–6", emoji: "🌟", color: "#E07A38", bg: "#fde8d5", desc: "Play-based immersion focusing on sensory learning, basic vocabulary, and social interaction." },
  { id: "autokids", name: "AutoKids", age: "Ages 7–12", emoji: "🚀", color: "#3a7db5", bg: "#d5e8f5", desc: "Building a strong grammatical foundation while encouraging creative expression and public speaking." },
  { id: "autoteens", name: "AutoTeens", age: "Ages 13–17", emoji: "💡", color: "#2e9e6d", bg: "#d5f5e8", desc: "Advanced communication, academic preparation, and critical thinking for the global stage." },
  { id: "autospeak", name: "AutoSpeak", age: "Ages 17+", emoji: "🎤", color: "#c07030", bg: "#f5e8d5", desc: "Practical fluency, business communication, and accent neutralization for professional success." },
];

export function LearningJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(247,144,82,0.12)", color: "#c06020", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            The Learning Journey
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.18, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>
            A Path That Grows{" "}
            <span style={{ color: "#F79052" }}>With Your Child</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
            Every stage builds on the last, ensuring continuous progress from first words to full fluency.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-1 rounded-full" style={{ background: "linear-gradient(90deg, #e8d5f5, #fde8d5, #d5e8f5, #d5f5e8, #f5e8d5)" }} />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center mb-4 shadow-lg"
                  style={{ background: s.bg, border: `3px solid ${s.color}40` }}
                >
                  <span className="text-3xl mb-1">{s.emoji}</span>
                  <span className="text-xs" style={{ color: s.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>{s.age}</span>
                </div>
                <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a1025", fontSize: "0.95rem", marginBottom: "0.4rem" }}>{s.name}</h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.78rem", lineHeight: 1.5 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-start gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: s.bg, border: `2px solid ${s.color}40` }}
                >
                  {s.emoji}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 my-1" style={{ background: `${s.color}30`, minHeight: 32 }} />
                )}
              </div>
              <div className="pb-6 pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a1025", fontSize: "1rem" }}>{s.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: s.bg, color: s.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>{s.age}</span>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    id: "calistung",
    name: "Calistung",
    age: "Early Years",
    emoji: "🎨",
    color: "#e8d5f5",
    accent: "#9b6bb5",
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=480&h=320&fit=crop&auto=format",
    desc: "The foundation of literacy (Reading, Writing, and Counting) integrated with basic English phonics.",
    tag: "Foundation",
  },
  {
    id: "autotoddler",
    name: "AutoToddler",
    age: "Ages 3–6",
    emoji: "🌟",
    color: "#fde8d5",
    accent: "#E07A38",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=480&h=320&fit=crop&auto=format",
    desc: "Play-based immersion focusing on sensory learning, basic vocabulary, and social interaction.",
    tag: "Toddler",
  },
  {
    id: "autokids",
    name: "AutoKids",
    age: "Ages 7–12",
    emoji: "🚀",
    color: "#d5e8f5",
    accent: "#3a7db5",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=480&h=320&fit=crop&auto=format",
    desc: "Building a strong grammatical foundation while encouraging creative expression and public speaking.",
    tag: "Kids",
  },
  {
    id: "autoteens",
    name: "AutoTeens",
    age: "Ages 13–17",
    emoji: "💡",
    color: "#d5f5e8",
    accent: "#2e9e6d",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=480&h=320&fit=crop&auto=format",
    desc: "Advanced communication, academic preparation, and critical thinking for the global stage.",
    tag: "Teens",
  },
  {
    id: "autospeak",
    name: "AutoSpeak",
    age: "Ages 17+",
    emoji: "🎤",
    color: "#f5e8d5",
    accent: "#c07030",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=480&h=320&fit=crop&auto=format",
    desc: "Practical fluency, business communication, and accent neutralization for professional success.",
    tag: "Adult",
  },
];

export function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" ref={ref} className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(247,144,82,0.12)", color: "#c06020", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            Our Programs
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.18, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>
            Programs Designed for{" "}
            <span style={{ color: "#F79052" }}>Every Stage</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 540, margin: "0 auto" }}>
            From toddlers to adults — we have a carefully crafted English program that matches your child's learning stage.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: "#fff",
                boxShadow: hovered === p.id
                  ? `0 20px 48px rgba(0,0,0,0.14), 0 0 0 2px ${p.accent}40`
                  : "0 4px 24px rgba(120,97,130,0.1)",
                transform: hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                ...(i === 2 ? { gridColumn: "span 1" } : {}),
              }}
            >
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                  style={{ background: p.color, color: p.accent, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {p.tag}
                </div>
                <div className="absolute bottom-4 left-4 text-3xl">{p.emoji}</div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", fontSize: "1.3rem" }}>{p.name}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: p.color, color: p.accent, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
                    {p.age}
                  </span>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.desc}</p>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-sm transition-all duration-200 group/btn"
                  style={{ color: p.accent, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

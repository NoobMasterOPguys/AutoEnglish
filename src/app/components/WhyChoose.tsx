import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, BookOpen, Heart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Expert Educators",
    desc: "Our certified teachers bring years of experience and genuine passion for guiding young learners to fluency.",
    color: "#786182",
    bg: "#f5f0f7",
  },
  {
    icon: BookOpen,
    title: "Adaptive Curriculum",
    desc: "Every lesson adapts to each student's pace, ensuring no child is left behind and every child is challenged.",
    color: "#F79052",
    bg: "#fef3ec",
  },
  {
    icon: Heart,
    title: "Holistic Growth",
    desc: "Beyond language skills, we build confidence, creativity, and character in every AutoEnglish student.",
    color: "#e06b8b",
    bg: "#fdf0f4",
  },
  {
    icon: TrendingUp,
    title: "Scalable Learning",
    desc: "Our five-stage program grows with your child — from Calistung all the way to professional AutoSpeak fluency.",
    color: "#2e9e6d",
    bg: "#edfaf4",
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#faf8fc" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(120,97,130,0.1)", color: "#786182", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            Why AutoEnglish
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.18, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>
            The AutoEnglish{" "}
            <span style={{ color: "#786182" }}>Difference</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 520, margin: "0 auto" }}>
            We combine world-class education with genuine care for every student's journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300"
              style={{ background: "#fff", boxShadow: "0 4px 24px rgba(120,97,130,0.1)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </div>
              <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: "#1a1025", fontSize: "1.15rem", marginBottom: "0.75rem" }}>{title}</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", fontSize: "0.88rem", lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

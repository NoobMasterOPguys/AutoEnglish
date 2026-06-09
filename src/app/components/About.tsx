import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";

const highlights = [
  { icon: CheckCircle2, text: "Official English Learning Center"},
  { icon: Award, text: "Expert Educators" },
  { icon: Users, text: "Scalable Learning" },
  { icon: Globe, text: "Adaptive Curriculum" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 overflow-hidden" style={{ background: "#faf8fc" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(120,97,130,0.22)" }}>
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=720&h=560&fit=crop&auto=format"
              alt="Happy students learning English in class"
              className="w-full object-cover"
              style={{ height: 460 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(120,97,130,0.3) 100%)" }} />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 text-white"
            style={{ background: "linear-gradient(135deg, #F79052, #f5774a)", boxShadow: "0 8px 24px rgba(247,144,82,0.4)" }}
          >
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}>Years</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600 }}>Of Excellence</div>
          </motion.div>
          {/* Decorative circle */}
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full opacity-30" style={{ background: "linear-gradient(135deg, #786182, #b09abf)", zIndex: -1 }} />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(120,97,130,0.1)", color: "#786182", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            About AutoEnglish
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.2, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1.25rem" }}>
            Where Every Child Finds Their{" "}
            <span style={{ color: "#786182" }}>English Voice</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b5c78", lineHeight: 1.75, fontSize: "1rem", marginBottom: "1.5rem" }}>
            At AutoEnglish, we believe that language is more than just a set of rules, it is the key to human connection, self-assurance, and global opportunity. Founded on the principles of Communication, Confidence, and Accessibility, we provide a premium educational experience that bridges the gap between traditional learning and real-world fluency.
Our curriculum is designed to meet high-level international standards while remaining deeply intuitive. We don't just teach English. we cultivate the "Auto" response enabling students to speak naturally and think critically without the barrier of hesitation
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b5c78", lineHeight: 1.75, fontSize: "1rem", marginBottom: "2rem" }}>
            We believe every child deserves a world-class English education — delivered by passionate educators who know how to inspire young minds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 p-3 rounded-2xl" style={{ background: "rgba(120,97,130,0.06)" }}>
                <div className="mt-0.5 p-1.5 rounded-xl" style={{ background: "rgba(120,97,130,0.12)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#786182" }} />
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#3d2f4a", fontSize: "0.88rem", lineHeight: 1.4 }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

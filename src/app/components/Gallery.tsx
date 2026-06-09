import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=480&h=320&fit=crop&auto=format", alt: "Children learning English in a bright classroom", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=320&h=320&fit=crop&auto=format", alt: "Young students engaged in English activity", span: "" },
  { src: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=320&h=400&fit=crop&auto=format", alt: "Teacher guiding toddler in reading", span: "" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=320&h=400&fit=crop&auto=format", alt: "Teenager focused during AutoTeens class", span: "" },
  { src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=480&h=300&fit=crop&auto=format", alt: "Group discussion during AutoSpeak session", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=320&h=320&fit=crop&auto=format", alt: "Kids playing word games in class", span: "" },
];

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm" style={{ background: "rgba(120,97,130,0.1)", color: "#786182", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
            Gallery
          </div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.18, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>
            Learning in{" "}
            <span style={{ color: "#F79052" }}>Action</span>
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#8a7a94", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 460, margin: "0 auto" }}>
            Glimpses of the joyful, immersive learning environment at AutoEnglish centers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`overflow-hidden rounded-3xl group cursor-pointer ${p.span}`}
              style={{ boxShadow: "0 4px 20px rgba(120,97,130,0.12)" }}
            >
              <div className="relative overflow-hidden" style={{ height: i === 0 || i === 4 ? 280 : 220 }}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(120,97,130,0.3)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

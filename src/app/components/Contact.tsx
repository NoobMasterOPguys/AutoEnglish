import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Instagram, MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 overflow-hidden" style={{ background: "#faf8fc" }}>
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-10 md:p-16 text-center text-white mb-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #786182 0%, #a07ab0 50%, #F79052 100%)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: "#fff", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{ background: "#F79052", transform: "translate(-20%, 30%)" }} />
          <div className="relative z-10">
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Unlock Your English Potential Today 🎉
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.05rem", opacity: 0.9, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 2rem" }}>
              Give your child the gift of confident English. Join tens of families who chose AutoEnglish. No commitments, just learning.
            </p>
            <a
              href="https://wa.me/6285692986080?text=Halo,%20saya%20ingin%20mendaftarkan%20free%20trial%20class%20di%20AutoEnglish"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.5)", fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.05rem", backdropFilter: "blur(8px)" }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </div>
        </motion.div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", fontSize: "1.6rem", marginBottom: "1.5rem" }}>
              Get in Touch
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+62 856-9298-6080",
                  href: "https://wa.me/6285692986080",
                  color: "#25D366",
                  bg: "#e8fef0",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "@autoenglish2.0",
                  href: "https://www.instagram.com/autoenglish2.0/",
                  color: "#E1306C",
                  bg: "#fde8f1",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "autoenglish2.0@gmail.com",
                  href: "mailto:autoenglish2.0@gmail.com",
                  color: "#786182",
                  bg: "#f5f0f7",
                },
                {
                  icon: Phone,
                  label: "TikTok",
                  value: "@auto.english",
                  href: "https://www.tiktok.com/@auto.english",
                  color: "#000",
                  bg: "#f0f0f0",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Jl. Amd Raya 39, Babakan, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120",
                  href: "https://maps.app.goo.gl/AcnEL5Ctds8KSMBX9",
                  color: "#F79052",
                  bg: "#fef3ec",
                },
              ].map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ background: "#fff", boxShadow: "0 2px 12px rgba(120,97,130,0.08)" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#8a7a94", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#1a1025", fontSize: "0.92rem" }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map placeholder */}
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, color: "#1a1025", lineHeight: 1.2, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1.25rem" }}>
            📍 AutoEnglish{" "}
            <h2 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 650, color: "#F79052", lineHeight: 1.2, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1rem" }}>Bogor, Indonesia</h2>
          <div className="rounded-3xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4605812603722!2d106.68682807475273!3d-6.463185493528417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7005a8a2f31%3A0x79672fdc7c0e136a!2sAutoEnglish!5e0!3m2!1sen!2sid!4v1780753613731!5m2!1sen!2sid"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="AutoEnglish Location"
  />
</div>
</h2>
        </div>
      </div>
    </section>
  );
}

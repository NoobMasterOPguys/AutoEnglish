import { GraduationCap, MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const programs = ["Calistung", "AutoToddler", "AutoKids", "AutoTeens", "AutoSpeak"];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1a1025" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #786182, #9a7da8)" }}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                  Auto<span style={{ color: "#F79052" }}>English</span>
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", fontWeight: 500 }}>LEARNING CENTER</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", lineHeight: 1.75 }}>
              Offline English learning for children and adults across Indonesia. Building confident speakers.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: MessageCircle, href: "https://wa.me/6285692986080", color: "#25D366" },
                { icon: Instagram, href: "https://www.instagram.com/autoenglish2.0/", color: "#E1306C" },
                { icon: Mail, href: "mailto:autoenglish2.0@gmail.com", color: "#786182" },
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem", marginBottom: "1.25rem", color: "rgba(255,255,255,0.9)" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="transition-colors hover:text-orange-300"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", fontWeight: 500 }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem", marginBottom: "1.25rem", color: "rgba(255,255,255,0.9)" }}>Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => scrollTo("#programs")}
                    className="transition-colors hover:text-orange-300"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", fontWeight: 500 }}
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem", marginBottom: "1.25rem", color: "rgba(255,255,255,0.9)" }}>Contact</h4>
            <div className="space-y-3">
              {[
                { icon: MessageCircle, text: "+62 856-9298-6080" },
                { icon: Mail, text: "autoenglish2.0@gmail.com" },
                { icon: Instagram, text: "@autoenglish2.0" },
                { icon: MapPin, text: "Jl. Amd Raya 39, Babakan, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F79052" }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.87rem" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
            © 2026 AutoEnglish Learning Center. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            Designed with ❤️ for Indonesian families
          </p>
        </div>
      </div>
    </footer>
  );
}

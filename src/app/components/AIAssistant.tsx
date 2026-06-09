import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const faqs: Record<string, string> = {
  programs: "We have 5 programs:\n• 🎨 Calistung (Early Years): The foundation of literacy (Reading, Writing, and Counting) integrated with basic English phonics.\n• 🌟 AutoToddler (3–6): Play-based immersion focusing on sensory learning, basic vocabulary, and social interaction.\n• 🚀 AutoKids (7–12): Building a strong grammatical foundation while encouraging creative expression and public speaking.\n• 💡 AutoTeens (13–17): Advanced communication, academic preparation, and critical thinking for the global stage.\n• 🎤 AutoSpeak (17+): Practical fluency, business communication, and accent neutralization for professional success.",
  price: "Our program fees vary by level and duration. Contact us via WhatsApp at +62 856-9298-6080 for our current pricing and available packages.",
  register: "To register, you can:\n1. WhatsApp us at +62 856-9298-6080\n2. DM us on Instagram @autoenglish2.0\n3. Visit one of our centers directly\n\nWe offer a FREE trial class — no commitment required! 🎉",
  location: "AutoEnglish has center in:\n\n📍 Bogor\nJl. Amd Raya 39, Babakan, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120\n\nContact us to find the nearest center to you.",
  trial: "Yes! We offer an affordable class for all programs. It's the best way to see if AutoEnglish is the right fit for your child. WhatsApp us to book your slot today!",
};

function getBotResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("program") || lower.includes("course") || lower.includes("class")) return faqs.programs;
  if (lower.includes("price") || lower.includes("fee") || lower.includes("cost") || lower.includes("harga") || lower.includes("biaya")) return faqs.price;
  if (lower.includes("register") || lower.includes("daftar") || lower.includes("enroll") || lower.includes("join")) return faqs.register;
  if (lower.includes("location") || lower.includes("where") || lower.includes("alamat") || lower.includes("lokasi")) return faqs.location;
  if (lower.includes("affordable") || lower.includes("cheap") || lower.includes("murah") || lower.includes("coba")) return faqs.trial;
  if (lower.includes("age") || lower.includes("umur") || lower.includes("year")) return "Our programs cover ages 3 to adult:\n• Calistung & AutoToddler: 3–6 years\n• AutoKids: 6–11 years\n• AutoTeens: 12–17 years\n• AutoSpeak: 17 and above";
  return "Thank you for your question! 😊 I can help you with:\n• Our programs & age groups\n• Registration & enrollment\n• Pricing information\n• Center locations\n• Affordable class\n\nOr contact us directly on WhatsApp: +62 856-9298-6080";
}

type Msg = { from: "user" | "bot"; text: string };

const suggestions = ["Tell me about your programs", "How to register?", "Are the classes affordable?", "Where are you located?"];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm Auto AI 👋\n\nI can help you find the perfect English program for your child, explain our courses, or assist with registration. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { from: "user", text: text.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: getBotResponse(text) }]);
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
            style={{ background: "linear-gradient(135deg, #786182, #a07ab0)", boxShadow: "0 8px 32px rgba(120,97,130,0.45)" }}
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse" style={{ background: "#F79052" }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[340px] sm:w-[380px] rounded-3xl overflow-hidden flex flex-col"
            style={{ height: 520, boxShadow: "0 24px 64px rgba(120,97,130,0.35), 0 0 0 1.5px rgba(120,97,130,0.15)" }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center gap-3 text-white" style={{ background: "linear-gradient(135deg, #786182, #9a7da8)" }}>
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: "0.95rem" }}>Auto AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#4ade80" }} />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", opacity: 0.85 }}>Online · Replies instantly</span>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#faf8fc" }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap"
                    style={{
                      background: m.from === "user" ? "linear-gradient(135deg, #786182, #9a7da8)" : "#fff",
                      color: m.from === "user" ? "#fff" : "#3d2f4a",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      lineHeight: 1.6,
                      fontSize: "0.85rem",
                      boxShadow: m.from === "bot" ? "0 2px 8px rgba(120,97,130,0.1)" : "none",
                      borderRadius: m.from === "user" ? "1rem 1rem 0.25rem 1rem" : "1rem 1rem 1rem 0.25rem",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl bg-white flex items-center gap-1" style={{ boxShadow: "0 2px 8px rgba(120,97,130,0.1)", borderRadius: "1rem 1rem 1rem 0.25rem" }}>
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="w-2 h-2 rounded-full animate-bounce" style={{ background: "#786182", opacity: 0.6, animationDelay: `${d * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2" style={{ background: "#faf8fc" }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                    style={{ borderColor: "rgba(120,97,130,0.3)", color: "#786182", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t flex gap-2" style={{ borderColor: "rgba(120,97,130,0.1)", background: "#fff" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask about our programs..."
                className="flex-1 px-4 py-2.5 rounded-2xl text-sm outline-none border"
                style={{ borderColor: "rgba(120,97,130,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#3d2f4a", fontSize: "0.85rem" }}
              />
              <button
                onClick={() => send(input)}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-110 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #F79052, #f5774a)" }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

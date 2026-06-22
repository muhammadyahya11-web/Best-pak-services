import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("popupShown");
      if (!hasSeen) {
        setIsOpen(true);
        localStorage.setItem("popupShown", "true");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: email,
          from_email: email,
          phone: phone,
          message: `WhatsApp: ${phone}`,
        },
        EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsSubmitted(true);
        setEmail("");
        setPhone("");
        setTimeout(() => setIsOpen(false), 3000);
      }).catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitted(true);
        setEmail("");
        setPhone("");
        setTimeout(() => setIsOpen(false), 3000);
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-[var(--card-bg)] rounded-3xl shadow-2xl max-w-md w-full p-8 border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✈️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    Get Exclusive Travel Offers!
                  </h2>
                  <p className="text-[var(--text-secondary)]">
                    Subscribe to receive special deals, new packages, and travel updates.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Enter your WhatsApp number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Subscribe Now
                  </motion.button>
                </form>

                <p className="text-xs text-[var(--text-muted)] text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                    <path d="22 11.08V12a10 10 0 1 1-5.93-8.86" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Thank You!
                </h2>
                <p className="text-[var(--text-secondary)]">
                  We will contact you shortly via WhatsApp/Email.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
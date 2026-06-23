import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("popupClosed");
    const timer = setTimeout(() => {
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("popupClosed", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone) {
      sessionStorage.setItem("userWhatsApp", phone);
      setIsSubmitted(true);
      setPhone("");
      setTimeout(() => handleClose(), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative bg-[var(--card-bg)] rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-[var(--border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  <p className="text-[var(--text-secondary)] text-sm">
                    Enter your WhatsApp number to receive special deals, new packages, and travel updates directly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="+974 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Get Offers via WhatsApp
                  </motion.button>
                </form>

                <p className="text-xs text-[var(--text-muted)] text-center mt-4">
                  We respect your privacy. No spam, unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Thank You!
                </h2>
                <p className="text-[var(--text-secondary)]">
                  We'll contact you shortly via WhatsApp with exclusive offers.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

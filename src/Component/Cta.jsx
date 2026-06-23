import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080b16] via-[#0c1220] to-[#080b16]" />

      {/* Animated Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[150px] -top-40 -left-40"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[150px] -bottom-40 -right-40"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 4 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-8 sm:mb-10"
        >
          <Sparkles size={12} className="sm:hidden text-[var(--accent)]" />
          <Sparkles size={14} className="hidden sm:block text-[var(--accent)]" />
          <span className="text-[10px] sm:text-xs font-bold text-[var(--accent)] tracking-[0.15em] sm:tracking-[0.2em] uppercase">Start Your Journey</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 sm:mb-8 px-2"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {t("home.ctaTitle")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4"
        >
          {t("home.ctaDesc")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="btn-premium px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
          >
            {t("home.ctaButton")}
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={18} className="hidden sm:block" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="btn-outline px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold w-full sm:w-auto"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

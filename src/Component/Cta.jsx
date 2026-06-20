import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden py-28 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      <motion.div
        className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {t("home.ctaTitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t("home.ctaDesc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 inline-block"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300 inline-block text-lg"
          >
            {t("home.ctaButton")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

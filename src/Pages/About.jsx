import { motion, useScroll, useTransform } from "framer-motion";
import about from "../assets/about-img.webp";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const stats = [
  { num: "30+", label: "Years of Excellence" },
  { num: "25K+", label: "Happy Clients" },
  { num: "120+", label: "Destinations" },
];

const features = [
  { title: "Credibility", desc: "We build trust with our customers by delivering on our promises, and providing reliable information and services to build a long term relationship" },
  { title: "Innovation", desc: "We embrace innovation & stay up to date with the latest trends and technologies in the travel industry to continuously enhance our services and provide innovative travel solutions" },
  { title: "Integrity", desc: "We maintain the highest ethical standards in all our operations, ensuring transparency and honesty in every client interaction" },
];

function About() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [600, 1200], [30, -30]);
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      className="py-24 bg-[var(--bg-tertiary)] overflow-hidden transition-colors duration-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 px-8 items-start">

        {/* ── Left: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Star rating */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[var(--accent)] tracking-widest text-sm">★★★★★</span>
            <span className="text-[var(--text-muted)] text-sm">
              {t("about.ratingText")}
            </span>
          </div>

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {t("about.eyebrow") || "About Millennium Travel"}
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-5"
          >
            {t("about.title.line1") || "Incorporated in 1995"}<br />
            <span className="text-[var(--accent)]">
              {t("about.title.line2") || "Under the leadership of Asia Khan Travels"}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] leading-8 text-base mb-8"
          >
            {t("about.description") || "Incorporated in 1995 under the leadership of Asia Khan Travels has evolved over the years leading the travel industry due to its best ethical practices and unrivaled knowledge and is now recognized as a premium and luxury travel agency."}
          </motion.p>

          {/* Feature checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="space-y-3 mb-10"
          >
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-semibold text-[var(--text-primary)]">{t(`about.features.${i}.title`) || f.title}</span>
                  {" — "}{t(`about.features.${i}.desc`) || f.desc}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-4 py-4"
              >
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-none">{s.num}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{t(`about.stats.${i}`) || s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/services")}
              className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition-all shadow-md"
            >
              {t("about.button")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/services")}
              className="px-7 py-3 bg-transparent border border-[var(--border)] text-[var(--text-primary)] rounded-full text-sm font-semibold hover:bg-[var(--bg-secondary)] transition-all"
            >
              {t("nav.services")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Right: Image ── */}
        <motion.div style={{ y: imgY }} className="relative pt-4">
          {/* Glow blob */}
          <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-3xl" />

          <motion.img
            initial={{ opacity: 0, scale: 0.93, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            src={about}
            alt="About Millennium Travel"
            loading="lazy"
            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
          />

          {/* Experience badge */}
          <div className="absolute -bottom-5 left-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="w-11 h-11 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">20+</span>
            </div>
            <div>
              <p className="text-[11px] text-[var(--text-muted)]">Years of</p>
              <p className="text-sm font-bold text-[var(--text-primary)]">Experience</p>
            </div>
          </div>

          {/* Floating trust card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 -left-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2"
          >
            <span className="text-amber-400 text-xs tracking-widest">★★★★★</span>
            <span className="text-xs text-[var(--text-muted)]">50K+ travellers</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
import { motion, useScroll, useTransform } from "framer-motion";
import about from "../assets/about-img.webp";
import ceoImg from "../assets/Untitled.png";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const stats = [
  { num: "6+", label: "Years of Excellence" },
  { num: "25K+", label: "Happy Clients" },
  { num: "120+", label: "Destinations" },
];

const features = [
  { title: "Our Mission", desc: "Our mission is to enrich lives through transformative travel experiences. We strive to exceed customer expectations by providing personalised and innovative travel solutions based on our years of rich experience in travel industry." },
  { title: "Vision", desc: "Our vision is to be the leading provider of extraordinary travel experiences. By fostering lasting partnerships, embracing innovation and staying ahead of industry trends, we aspire to shape the future of travel and be the first choice of travellers seeking unforgettable adventures around the globe." },
  { title: "Core Values", desc: "Credibility : We build trust with our customers by delivering on our promises, and providing reliable information and services to build a long term relationship. Innovation : We embrace innovation & stay up to date with the latest trends and technologies in the travel industry to continuously enhance our services and provide innovative travel solutions" },
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
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            {t("about.eyebrow") || "About Asia Khan Travels"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            {t("about.title.line1") || "Incorporated in"} <span className="text-emerald-600">{t("about.title.line2") || "1995"}</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mx-auto">
            {t("about.description") || "Incorporated in 1995 under the leadership of Asia Khan Travels has evolved over the years leading the travel industry due to its best ethical practices and unrivaled knowledge and is now recognized as a premium and luxury travel agency. Their expert team crafts tailor-made itineraries, meticulously curating every aspect of the journey to exceed expectations. With the commitment to deliver excellence, it has come a long way by earning best travel agent award initially in 2000, followed every year till date. With such diligence and integrity, it has gained worldwide exposure offering best tours and packages."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <img
              src={about}
              alt="About Asia Khan Travels"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((f, i) => (
              <div key={i} className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {t(`about.features.${i}.title`) || f.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {t(`about.features.${i}.desc`) || f.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src={ceoImg}
              alt="CEO"
              loading="lazy"
              className="w-32 h-32 rounded-full object-cover border-4 border-emerald-500/20 flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {t("about.ceo.title") || "Message from Our CEO"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed italic">
                {t("about.ceo.message") || "At Asia Khan Travels, we believe that travel is not just about reaching a destination, but about the journey of transformation. Since 1995, we have been committed to crafting experiences that go beyond expectations, building trust through every interaction, and setting new standards in luxury travel. Our success is measured by the smiles of our clients and the memories we create together."}
              </p>
              <p className="text-emerald-600 font-semibold mt-4">
                — {t("about.ceo.name") || "Asia Khan, CEO"}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{s.num}</p>
              <p className="text-sm text-[var(--text-muted)]">{t(`about.stats.${i}`) || s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mt-16"
        >
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            {t("about.button") || "Our Services"}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-transparent border border-[var(--border)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--bg-secondary)] transition-all"
          >
            {t("nav.contact") || "Contact Us"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
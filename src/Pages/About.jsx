import { motion, useScroll, useTransform } from "framer-motion";
import about from "../assets/about-img.webp";
import ceoImg from "../assets/Untitled.png";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

function About() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [600, 1200], [30, -30]);
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-8 sm:mt-20 mb-5 sm:mb-6">
            <span className="text-[var(--accent)]">{t("about.title.line2") || "About"}</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            {t("about.description") || "My purpose since the start was to build a company based on shared values and ethical practices. We focused on 'what we do the best' and achieved several milestones over the years. Our persistence to work with impact and thus together with our shared values, we are able to reach where we stand today as a successful and one of the top performing travel service providing company in the world. We are extremely grateful to our employees, clients, and supporters in our business area for their constant trust in Best Pak Services."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 lg:gap-8">
            <img
              src={ceoImg}
              alt="CEO"
              loading="lazy"
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-4 border-[var(--accent)]/20 flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
                {t("about.ceo.title") || "Message from Our CEO"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base italic">
                {t("about.ceo.message") || "AIncorporated in 2020 under the leadership of Ms. Aasia Khan Malezai, Best Pak Services has evolved over the years leading the travel industry due to its best ethical practices and unrivaled knowledge and is now recognized as a premium and luxury travel services company. Their expert team crafts tailor-made itineraries, meticulously curating every aspect of the journey to the exceed expectations. With the commitment to deliver excellence, it has come a long way by earning best travel agent award initially in 2025, followed every year till date. With such diligence and integrity, it has gained worldwide exposure offering best tours and packages."}
              </p>
              <p className="text-[var(--accent)] font-semibold mt-3 sm:mt-4 text-sm sm:text-base whitespace-nowrap">
                — {t("about.ceo.name") || "Aasia khan Malezai, CEO"}
              </p>
              <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1">
                {t("about.ceo.company") || "Best Pak Services W.L.L"}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[var(--accent)]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[var(--accent)]/5 rounded-full blur-3xl"></div>
            <motion.img
              src={about}
              alt="About Asia Khan Travels"
              loading="lazy"
              style={{ y: imgY }}
              className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-7 lg:space-y-8"
          >
            <div className="border-l-2 sm:border-l-4 border-[var(--accent)] pl-4 sm:pl-5 lg:pl-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
                {t("about.features.0.title") || "Mission"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                {t("about.features.0.desc") || "Our mission is to enrich lives through transformative travel experiences. We strive to exceed customer expectations by providing personalised and innovative travel solutions based on our years of rich experience in travel industry."}
              </p>
            </div>

            <div className="border-l-2 sm:border-l-4 border-[var(--accent)] pl-4 sm:pl-5 lg:pl-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
                {t("about.features.1.title") || "Vision"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                {t("about.features.1.desc") || "Our vision is to be the leading provider of extraordinary travel experiences. By fostering lasting partnerships, embracing innovation and staying ahead of industry trends, we aspire to shape the future of travel and be the first choice of travellers seeking unforgettable adventures around the globe."}
              </p>
            </div>

            <div className="border-l-2 sm:border-l-4 border-[var(--accent)] pl-4 sm:pl-5 lg:pl-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
                {t("about.features.2.title") || "Core Values"}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                <strong className="text-[var(--text-primary)]">{t("about.features.2.title1") || "Credibility"}:</strong> {t("about.features.2.desc1") || "We build trust with our customers by delivering on our promises, and providing reliable information and services to build a long term relationship."}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mt-2 text-sm sm:text-base">
                <strong className="text-[var(--text-primary)]">{t("about.features.2.title2") || "Innovation"}:</strong> {t("about.features.2.desc2") || "We embrace innovation & stay up to date with the latest trends and technologies in the travel industry to continuously enhance our services and provide innovative travel solutions."}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-14 lg:mt-16"
        >
          <button
            onClick={() => navigate("/services")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            {t("about.button") || "Our Services"}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-[var(--border)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--bg-secondary)] transition-all text-sm sm:text-base"
          >
            {t("nav.contact") || "Contact Us"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

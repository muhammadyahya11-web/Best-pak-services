import { motion, useScroll, useTransform } from "framer-motion";
import about2 from "../assets/about2.jpg";
import about1 from "./../assets/about-img.webp"
import ceoImg from "../assets/Untitled.png";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

// ============================================================
// Animation Presets
// Centralized motion variants so every section animates
// consistently while keeping JSX clean and readable.
// ============================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const viewOnce = { once: true, amount: 0.3 };

// ============================================================
// Sub-components
// Each handles one semantic section of the About page.
// This keeps the main component focused on composition.
// ============================================================

/** Page heading with title and introductory paragraph */
function PageHeader({ t }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={viewOnce}
      className="text-center mb-12 sm:mb-14 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-8 sm:mt-20 mb-5 sm:mb-6">
        <span className="text-[var(--accent)]">{t("about.title.line2") || "About"}</span>
      </h2>
     {/* ----------------about des and img------------------------------- */}
        <div className=" sm:grid grid-cols-2 mt-5 sm:gap-10  gap-5 flex flex-col-reverse">
           <motion.img
          src={about1}
          alt="About Best Pak Services"
          loading="lazy"
          
          className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
        />
           <p className="text-[var(--text-secondary)] text-left  text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
        {t("about.description")}
      </p>
        </div>
     {/* ------------------------------------------------- */}
    </motion.div>
  );
}

/** CEO card with portrait photo and leadership message */
function CeoMessageCard({ t, ceoImg }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpDelayed}
      viewport={viewOnce}
      className="bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 mb-12 sm:mb-14 md:mb-16 lg:mb-20"
    >
      <div className="flex flex-col sm:flex-row-reverse items-center gap-5 sm:gap-6 lg:gap-8">
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
            {t("about.ceo.title")}
          </h3>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base italic">
            {t("about.ceo.message")}
          </p>
          <p className="text-[var(--accent)] font-semibold mt-3 sm:mt-4 text-sm sm:text-base whitespace-nowrap">
            — {t("about.ceo.name")}
          </p>
          <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1">
            {t("about.ceo.company")}
          </p>
        </div>
        <img
          src={ceoImg}
          alt="CEO"
          loading="lazy"
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 sm:border-4 border-[var(--accent)]/20 flex-shrink-0"
        />
      </div>
    </motion.div>
  );
}

/** Single feature block with an accent left border */
function FeatureItem({ t, index }) {
  const title = t(`about.features.${index}.title`);
  const desc = t(`about.features.${index}.desc`);

  return (
    <div className="border-l-2 sm:border-l-4 border-[var(--accent)] pl-4 sm:pl-5 lg:pl-6">
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
        {title}
      </h3>
      {index !== 2 && (
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
          {desc}
        </p>
      )}
      {index === 2 && (
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
          <strong className="text-[var(--text-primary)]">{t("about.features.2.title1")}</strong>:{" "}
          {t("about.features.2.desc1")}
        </p>
      )}
      {index === 2 && (
        <p className="text-[var(--text-secondary)] leading-relaxed mt-2 text-sm sm:text-base">
          <strong className="text-[var(--text-primary)]">{t("about.features.2.title2")}</strong>:{" "}
          {t("about.features.2.desc2")}
        </p>
      )}
    </div>
  );
}

/** Two-column section combining hero image with mission/vision/values */
function AboutContent({ t, about2, imgY }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
        viewport={viewOnce}
        className="relative order-1"
      >
        <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-[var(--accent)]/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-[var(--accent)]/5 rounded-full blur-3xl" />

        <motion.img
          src={about2}
          alt="About Best Pak Services"
          loading="lazy"
          style={{ y: imgY }}
          className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
        viewport={viewOnce}
        className="space-y-5 sm:space-y-6 lg:space-y-7 order-2"
      >
        <FeatureItem t={t} index={0} />
        <FeatureItem t={t} index={1} />
        <FeatureItem t={t} index={2} />
      </motion.div>
    </div>
  );
}



// ============================================================
// Main About Page
// ============================================================

function About() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const { isRTL } = useLanguage();

  // Vertical parallax offset tied to page scroll position
  const imgY = useTransform(scrollY, [600, 1200], [30, -30]);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[var(--bg-secondary)] overflow-hidden transition-colors duration-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader t={t} />
        <CeoMessageCard t={t} ceoImg={ceoImg} />
        <AboutContent t={t} about2={about2} imgY={imgY} />
        
      </div>
    </section>
  );
}

export default About;

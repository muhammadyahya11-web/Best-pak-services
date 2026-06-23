import { motion } from "framer-motion";
import thilandImg from "../assets/thiland.jpg";
import malasiaImg from "../assets/malasia.jpg";
import singaporImg from "../assets/singapor.jpg";
import azabaijanImg from "../assets/azabaijan.jpg";
import uaeImg from "../assets/uae.jpg";
import uzbakistanImg from "../assets/uzbakistan.jpg";
import turkeyImg from "../assets/turkey.jpg";
import indonesiaImg from "../assets/indonesia.jpg";
import nepalImg from "../assets/nepal.jpg";
import chinaImg from "../assets/china.jpg";

import kazakhstanImg from "../assets/kazakhstan.jpg";
import japanImg from "../assets/japan.jpg";
import kygistanImg from "../assets/kygistan.jpg";
import southAfricaImg from "../assets/south africa.jpg";
import unitedKingdomImg from "../assets/united kingdom.jpg";
import newZealandImg from "../assets/newzland.jpg";
import moroccoImg from "../assets/morroco.jpg";
import georgiaImg from "../assets/georgia.jpg";
import shengen from "../assets/shengen.jpg";

import flightImg from "../assets/flight.jpg";
import hotelImg from "../assets/hotel.jpg";
import visaImg from "../assets/visa services.jpg";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const visaCountries = [
  { key: "thailand", image: thilandImg, alt: "Bangkok, Thailand" },
  { key: "malaysia", image: malasiaImg, alt: "Kuala Lumpur, Malaysia" },
  { key: "singapore", image: singaporImg, alt: "Singapore" },
  { key: "azerbaijan", image: azabaijanImg, alt: "Baku, Azerbaijan" },
  { key: "dubai", image: uaeImg, alt: "Dubai, UAE" },
  { key: "uzbekistan", image: uzbakistanImg, alt: "Tashkent, Uzbekistan" },
  { key: "turkey", image: turkeyImg, alt: "Istanbul, Turkey" },
  { key: "indonesia", image: indonesiaImg, alt: "Bali, Indonesia" },
  { key: "nepal", image: nepalImg, alt: "Kathmandu, Nepal" },
  { key: "china", image: chinaImg, alt: "Beijing, China" },
  { key: "kazakhstan", image: kazakhstanImg, alt: "Astana, Kazakhstan" },
  { key: "japan", image: japanImg, alt: "Tokyo, Japan" },
  { key: "kyrgyzstan", image: kygistanImg, alt: "Bishkek, Kyrgyzstan" },
  { key: "southAfrica", image: southAfricaImg, alt: "Cape Town, South Africa" },
  { key: "unitedKingdom", image: unitedKingdomImg, alt: "London, United Kingdom" },
  { key: "newZealand", image: newZealandImg, alt: "Auckland, New Zealand" },
  { key: "morocco", image: moroccoImg, alt: "Marrakech, Morocco" },
  { key: "georgia", image: georgiaImg, alt: "Tbilisi, Georgia" },
  { key: "schengen", image: shengen, alt: "Paris, Schengen Area" },
];

import saudiImg from "../assets/saudi arabia.jpg";

const servicesData = [
  { key: "flights", image: flightImg, icon: "✈️" },
  { key: "visaServices", image: visaImg, icon: "🎫" },
  { key: "hotels", image: hotelImg, icon: "🏛️" },
  { key: "umrah", image: saudiImg, icon: "🕋" },
];

function ServiceCard({ service, index }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-[2rem] bg-[var(--card-bg)] shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 border border-[var(--border)]"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={service.image} alt={t(`services.${service.key}Title`)} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/80 via-[var(--text-primary)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 group-hover:bg-[var(--accent)]/20 transition-all duration-300">
          {service.icon}
        </div>
        <div className="absolute bottom-3 left-4 text-white/60 text-xs font-medium tracking-widest uppercase">0{index + 1}</div>
      </div>

      <div className="p-5 sm:p-7 relative">
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
          {t(`services.${service.key}Title`)}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5">{t(`services.${service.key}Desc`)}</p>
        <motion.span whileHover={{ x: 6 }} className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
          
        </motion.span>
      </div>
    </motion.div>
  );
}

function Services() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const videoSrc = "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  return (
    <div className="min-h-[50%] bg-[var(--bg-primary)] transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[520px] w-full overflow-hidden">
        <motion.video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}>
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--text-primary)]/50 via-[var(--text-primary)]/30 to-[var(--text-primary)]/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-4 sm:mb-5 text-[var(--accent)] tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">
              {t("services.whatWeDo")}
            </motion.p>
            <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight px-4">
              {t("services.title")}
            </h1>
            <motion.div initial={{ width: 0 }} animate={{ width: "100px" }} transition={{ delay: 0.8, duration: 1 }} className="h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] mx-auto mt-6 sm:mt-8 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.4)]" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6 sm:mt-8 text-white/70 max-w-2xl mx-auto text-base sm:text-lg font-light px-4">
              Experience seamless travel with our premium services crafted for the discerning traveler.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative -mt-16 sm:-mt-20 pb-24 sm:pb-28 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.key} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Visa Countries Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--card-bg)] to-[var(--bg-tertiary)] overflow-hidden relative transition-colors duration-300">
        <div className="absolute top-20 left-10 w-60 h-60 sm:w-72 sm:h-72 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 sm:w-96 sm:h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-3 sm:mb-4">
              {t("services.worldwideCoverage")}
            </motion.p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-5 tracking-tight">
              {t("services.visaSectionTitle")}
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-4 sm:mb-5" />
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">{t("services.visaSectionDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {visaCountries.map((country, i) => (
              <motion.div
                key={country.key}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400 } }}
                className="group relative h-36 sm:h-40 md:h-44 rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-pointer border border-[var(--border)]"
              >
                <img src={country.image} alt={country.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/90 via-[var(--text-primary)]/40 to-transparent" />
                <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-3 sm:p-5">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight tracking-wide">{t(`services.countries.${country.key}`)}</h3>
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-[var(--accent)] text-[10px] sm:text-xs mt-1 font-semibold tracking-wider uppercase"
                  >
                    {t("services.visaPlusPackage")}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

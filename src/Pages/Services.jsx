import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
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
import shengen from "../assets/shengen.jpg";
import flightImg from "../assets/flight.jpg";
import hotelImg from "../assets/hotel.jpg";
import visaImg from "../assets/visa services.jpg";
import tourImg from "../assets/tour.jpg";
import { useNavigate } from "react-router-dom";

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
  { key: "schengen", image: shengen, alt: "Paris, Schengen Area" },
];

const servicesData = [
  { key: "flights", image: flightImg, icon: "✈️" },
  { key: "visaServices", image: visaImg, icon: "🎫" },
  { key: "hotels", image: hotelImg, icon: "🏛️" },
  { key: "tours", image: tourImg, icon: "🧭" },
  
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
      <div className="relative h-56 overflow-hidden">
        <img src={service.image} alt={t(`services.${service.key}Title`)} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/80 via-[var(--text-primary)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[var(--accent)]/20 transition-all duration-300">
          {service.icon}
        </div>
        <div className="absolute bottom-4 left-5 text-white/60 text-xs font-medium tracking-widest uppercase">0{index + 1}</div>
      </div>

      <div className="p-7 relative">
        <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
          {t(`services.${service.key}Title`)}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-5">{t(`services.${service.key}Desc`)}</p>
        <motion.span whileHover={{ x: 6 }} className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          
        </motion.span>
      </div>
    </motion.div>
  );
}

function Services() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { num: "01", title: "Expert Team", desc: "Dedicated professionals with years of experience" },
    { num: "02", title: "Global Access", desc: "Worldwide destinations and exclusive partnerships" },
    { num: "03", title: "Best Prices", desc: "Competitive rates with transparent pricing" },
  ];

  const videoSrc = "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  return (
    <div className="min-h-[50%] bg-[var(--bg-primary)] transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative h-[520px] w-full overflow-hidden">
        <motion.video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }}>
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--text-primary)]/50 via-[var(--text-primary)]/30 to-[var(--text-primary)]/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-5 text-[var(--accent)] tracking-[0.4em] uppercase text-xs sm:text-sm font-bold">
              {t("services.whatWeDo")}
            </motion.p>
            <h1 className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              {t("services.title")}
            </h1>
            <motion.div initial={{ width: 0 }} animate={{ width: "140px" }} transition={{ delay: 0.8, duration: 1 }} className="h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.4)]" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8 text-white/70 max-w-2xl mx-auto text-lg font-light">
              Experience seamless travel with our premium services crafted for the discerning traveler.
            </motion.p>
          </motion.div>
        </div>
      </section>

       <section className="relative -mt-20 pb-28 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.key} service={service} index={index} />
            ))}
          </div>
        </div>
      </section> 

      <section className="py-28 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--card-bg)] to-[var(--bg-tertiary)] overflow-hidden relative transition-colors duration-300">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-bold uppercase tracking-[0.4em] text-[var(--accent)] mb-4">
              {t("services.worldwideCoverage")}
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-5 tracking-tight">
              {t("services.visaSectionTitle")}
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-5" />
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">{t("services.visaSectionDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {visaCountries.map((country, i) => (
              <motion.div
                key={country.key}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 400 } }}
                className="group relative h-44 rounded-[1.5rem] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] cursor-pointer border border-[var(--border)]"
              >
                <img src={country.image} alt={country.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/90 via-[var(--text-primary)]/40 to-transparent" />
                <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-500" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight tracking-wide">{t(`services.countries.${country.key}`)}</h3>
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-[var(--accent)] text-xs mt-1.5 font-semibold tracking-wider uppercase"
                  >
                    {t("services.visaPlusPackage")}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[var(--hero-bg)] relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <p className="text-[var(--accent)] text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">{t("services.whyChooseUs")}</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">{t("services.whyChooseUsDesc")}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative bg-white/[0.03] backdrop-blur-sm rounded-[2rem] p-10 border border-white/[0.06] hover:border-[var(--accent)]/30 transition-all duration-500 group"
              >
                <div className="absolute top-6 right-6 text-[var(--accent)]/20 text-5xl font-bold tracking-tighter">{feature.num}</div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[var(--accent)]/10">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/50 to-[var(--accent)]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--card-bg)] relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-10 right-10 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <p className="text-[var(--accent)] text-sm font-bold uppercase tracking-[0.4em] mb-4">Exclusive Opportunities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-5 tracking-tight">{t("services.jobOpportunities")}</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto" />
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mt-5">{t("services.jobOpportunitiesDesc")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              onClick={() => navigate("/bps")}
              initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[var(--card-bg)] rounded-[2rem] p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer border border-[var(--border)] overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-80 h-80 bg-red-700 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:from-[var(--accent)]/15 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--text-primary)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🇱🇺</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">{t("services.luxembourgJobs")}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{t("services.luxembourgJobsDesc")}</p>
                <span className="inline-flex items-center gap-2 text-[var(--accent)] font-bold text-sm tracking-wider uppercase">
                  {t("services.viewDetails")}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>

            <motion.div
              onClick={() => navigate("/latvia")}
              initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[var(--card-bg)] rounded-[2rem] p-10 shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-700 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:from-[var(--accent)]/15 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full  bg-gradient-to-br from-[var(--text-primary)] to-[var(--text-secondary)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🇱🇻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">{t("services.latviaJobs")}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{t("services.latviaJobsDesc")}</p>
                <span className="inline-flex items-center gap-2 text-[var(--accent)] font-bold text-sm tracking-wider uppercase">
                  {t("services.viewDetails")}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

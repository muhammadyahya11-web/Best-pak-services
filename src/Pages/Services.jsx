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
  {
    key: "thailand",
    image: thilandImg,
    alt: "Bangkok, Thailand",
  },
  {
    key: "malaysia",
    image: malasiaImg,
    alt: "Kuala Lumpur, Malaysia",
  },
  {
    key: "singapore",
    image: singaporImg,
    alt: "Singapore",
  },
  {
    key: "azerbaijan",
    image: azabaijanImg,
    alt: "Baku, Azerbaijan",
  },
  {
    key: "dubai",
    image: uaeImg,
    alt: "Dubai, UAE",
  },
  {
    key: "uzbekistan",
    image: uzbakistanImg,
    alt: "Tashkent, Uzbekistan",
  },
  {
    key: "turkey",
    image: turkeyImg,
    alt: "Istanbul, Turkey",
  },
  {
    key: "indonesia",
    image: indonesiaImg,
    alt: "Bali, Indonesia",
  },
  {
    key: "nepal",
    image: nepalImg,
    alt: "Kathmandu, Nepal",
  },
  {
    key: "china",
    image: chinaImg,
    alt: "Beijing, China",
  },
  {
    key: "kazakhstan",
    image: kazakhstanImg,
    alt: "Astana, Kazakhstan",
  },
  {
    key: "japan",
    image: japanImg,
    alt: "Tokyo, Japan",
  },
  {
    key: "kyrgyzstan",
    image: kygistanImg,
    alt: "Bishkek, Kyrgyzstan",
  },
  {
    key: "southAfrica",
    image: southAfricaImg,
    alt: "Cape Town, South Africa",
  },
  {
    key: "schengen",
    image: shengen,
    alt: "Paris, Schengen Area",
  },
];

const servicesData = [
  {
    key: "flights",
    image: flightImg,
    icon: "🛫",
  },
  {
    key: "visaServices",
    image: visaImg,
    icon: "📋",
  },

  {
    key: "hotels",
    image: hotelImg,
    icon: "🏨",
  },
  {
    key: "tours",
    image: tourImg,
    icon: "🗺️",
  },
  {
    key: "inboundTour",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600",
    icon: "🌍",
  },

];

function ServiceCard({ service, index }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={t(`services.${service.key}Title`)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 right-4 text-3xl">{service.icon}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {t(`services.${service.key}Title`)}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-4">
          {t(`services.${service.key}Desc`)}
        </p>
        <motion.span
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all duration-300"
        >
          {t("services.learnMore")} →
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
    { icon: "✓", title: "Expert Team", desc: "Dedicated professionals at your service" },
    { icon: "✓", title: "Global Access", desc: "Worldwide destinations and partners" },
    { icon: "✓", title: "Best Prices", desc: "Competitive rates guaranteed" },
  ];

  const videoSrc = "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  return (
    <div className="min-h-[50%] bg-[#fcf9f3]" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative h-[430px] w-full overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-blue-400 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold">
              {t("services.whatWeDo")}
            </p>
            <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t("services.title")}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-[2px] bg-blue-500 mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="-mt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.key} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-[#f5f3ef] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-3"
            >
              {t("services.worldwideCoverage")}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("services.visaSectionTitle")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("services.visaSectionDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {visaCountries.map((country, i) => (
              <motion.div
                key={country.key}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative h-40 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer"
              >
                <img
                  src={country.image}
                  alt={country.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                    {t(`services.countries.${country.key}`)}
                  </h3>
                  <p className="text-white/70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t("services.visaPlusPackage")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#f5f3ef]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("services.whyChooseUs")}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t("services.whyChooseUsDesc")}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl mb-3 text-blue-600">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("services.jobOpportunities")}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("services.jobOpportunitiesDesc")}
            </p>
          </motion.div>

           <div className="grid md:grid-cols-2  gap-8 max-w-5xl mx-auto">
            <motion.div
             onClick={() => navigate("/bps")}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100 text-center cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🇱🇺</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("services.luxembourgJobs")}</h3>
              <p className="text-gray-600 mb-4">
                {t("services.luxembourgJobsDesc")}
              </p>
              <span className="text-blue-600 font-semibold">{t("services.viewDetails")} →</span>
            </motion.div>

            <motion.div
              onClick={() => navigate("/latvia")}
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100 text-center cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🇱🇻</div>
              <h3 className="text-2xl bg-green-500 font-bold text-gray-900 mb-3">{t("services.latviaJobs")}</h3>
              <p className="text-gray-600 mb-4">
                {t("services.latviaJobsDesc")}
              </p>
              <span className="text-purple-600 font-semibold">{t("services.viewDetails")} →</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
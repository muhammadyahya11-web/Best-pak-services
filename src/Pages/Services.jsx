import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const visaCountries = [
  {
    key: "thailand",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400",
    alt: "Bangkok, Thailand",
  },
  {
    key: "malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400",
    alt: "Kuala Lumpur, Malaysia",
  },
  {
    key: "singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400",
    alt: "Singapore",
  },
  {
    key: "azerbaijan",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400",
    alt: "Baku, Azerbaijan",
  },
  {
    key: "dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
    alt: "Dubai, UAE",
  },
  {
    key: "uzbekistan",
    image: "https://images.unsplash.com/photo-1627456838825-31652e8c4f14?w=400",
    alt: "Tashkent, Uzbekistan",
  },
  {
    key: "turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400",
    alt: "Istanbul, Turkey",
  },
  {
    key: "indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400",
    alt: "Bali, Indonesia",
  },
  {
    key: "nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
    alt: "Kathmandu, Nepal",
  },
  {
    key: "china",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400",
    alt: "Beijing, China",
  },
  {
    key: "kazakhstan",
    image: "https://images.unsplash.com/photo-1626908013351-800add11c3df?w=400",
    alt: "Astana, Kazakhstan",
  },
  {
    key: "japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
    alt: "Tokyo, Japan",
  },
  {
    key: "kyrgyzstan",
    image: "https://images.unsplash.com/photo-1469850407443-6f1b1337f8a5?w=400",
    alt: "Bishkek, Kyrgyzstan",
  },
  {
    key: "southAfrica",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e27?w=400",
    alt: "Cape Town, South Africa",
  },
  {
    key: "schengen",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
    alt: "Paris, Schengen Area",
  },
];

const servicesData = [
 
  {
    key: "flights",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600",
    icon: "🛫",
  },
  {
    key: "visaServices",
    image:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600",
    icon: "📋",
  },
 
  {
    key: "hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    icon: "🏨",
  },
  {
    key: "tours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
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
          Learn more →
        </motion.span>
      </div>
    </motion.div>
  );
}

function Services() {
  const { t } = useTranslation();

  const features = [
    { icon: "✓", title: "Expert Team", desc: "Dedicated professionals at your service" },
    { icon: "✓", title: "Global Access", desc: "Worldwide destinations and partners" },
    { icon: "✓", title: "Best Prices", desc: "Competitive rates guaranteed" },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f3]">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300 mb-4"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            {t("services.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            {t("services.subtitle")}
          </motion.p>
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
              Worldwide Coverage
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
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We deliver exceptional service backed by years of industry expertise and a commitment to your satisfaction.
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
              Overseas Job Opportunities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Build your career internationally with our placement services in Europe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.a
              href="/bps"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100 text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🇱🇺</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxembourg Jobs</h3>
              <p className="text-gray-600 mb-4">
                Work in Europe's richest economy with legal work permits and high salaries
              </p>
              <span className="text-blue-600 font-semibold">View Details →</span>
            </motion.a>

            <motion.a
              href="/latvia"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group block bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg border border-purple-100 text-center"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🇱🇻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Latvia Jobs</h3>
              <p className="text-gray-600 mb-4">
                European career opportunities with fast processing and secure environment
              </p>
              <span className="text-purple-600 font-semibold">View Details →</span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

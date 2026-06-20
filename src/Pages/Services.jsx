import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    key: "airCharter",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600",
    icon: "✈️",
  },
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
    key: "meetAssist",
    image:
      "https://images.unsplash.com/photo-1576189603084-42d1c4e3f5a1?w=600",
    icon: "🤝",
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
  {
    key: "drivingPermit",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
    icon: "🚗",
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
    </div>
  );
}

export default Services;

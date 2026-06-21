import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Bps() {
  const { t } = useTranslation();

  const sectors = [
    { key: "warehouse", icon: "📦" },
    { key: "construction", icon: "🧱" },
    { key: "hospitality", icon: "🏨" },
    { key: "cleaning", icon: "🧹" },
    { key: "supermarkets", icon: "🛒" }
  ];

  const advantages = [
    { key: "highSalary", icon: "💰" },
    { key: "fastGrowing", icon: "📈" },
    { key: "multinational", icon: "🌍" },
    { key: "workerProtection", icon: "🛡️" }
  ];

  const salaryLevels = [
    { key: "entry", gradient: "from-blue-500 to-cyan-500" },
    { key: "semiSkilled", gradient: "from-purple-500 to-violet-500" },
    { key: "skilled", gradient: "from-indigo-500 to-blue-600" }
  ];

  const benefits = [
    { key: "accommodation", icon: "🏠" },
    { key: "transport", icon: "🚌" },
    { key: "healthInsurance", icon: "🏥" },
    { key: "paidLeave", icon: "💵" }
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f3]">
      <section className="relative pt-40 pb-28 overflow-hidden">
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
            BPS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            {t("bps.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            {t("bps.heroDesc")}
          </motion.p>
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
              {t("bps.sectorsTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg text-center border border-blue-100 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {t(`bps.sectors.${sector.key}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#f5f3ef] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("bps.advantagesTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl mb-4">{adv.icon}</div>
                <p className="text-gray-700 font-medium">
                  {t(`bps.advantages.${adv.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("bps.salaryTitle")}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {salaryLevels.map((level, i) => (
              <motion.div
                key={level.key}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-3xl p-10 shadow-xl border border-blue-100 group"
              >
                <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t(`bps.salaryLevels.${level.key}`)}
                  </h3>
                </div>
                <div className="flex-1 text-center md:text-right">
                  <span className={`text-4xl font-extrabold bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent`}>
                    {t(`bps.salaryRanges.${level.key}`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("bps.benefitsTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {t(`bps.benefits.${benefit.key}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {t("bps.processingTitle")}
              </h3>
              <p className="text-3xl font-bold text-gradient-blue">
                {t("bps.processingTime")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {t("bps.costTitle")}
              </h3>
              <p className="text-3xl font-bold text-yellow-400">
                {t("bps.cost")}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-3">
              {t("bps.paymentTitle")}
            </h3>
            <p className="text-2xl font-bold text-gradient-blue">
              {t("bps.paymentPlan")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl mb-6 font-light">
              {t("bps.ctaText")}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-700/30 font-bold text-xl"
            >
              {t("bps.ctaButton")}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Bps;
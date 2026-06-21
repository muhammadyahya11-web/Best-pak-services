import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

function Latvia() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const sectors = [
    { key: "warehouse", icon: "📦" },
    { key: "logistics", icon: "🚚" },
    { key: "construction", icon: "🧱" },
  ];

  const highlights = [
    { key: "legal", icon: "✓", textKey: "latvia.highlights.legal" },
    { key: "processing", icon: "⚡", textKey: "latvia.highlights.processing" },
    { key: "demand", icon: "📈", textKey: "latvia.highlights.demand" },
    { key: "secure", icon: "🛡️", textKey: "latvia.highlights.secure" },
  ];

  const benefits = [
    { key: "accommodation", icon: "🏠", textKey: "latvia.benefits.accommodation" },
    { key: "transport", icon: "🚌", textKey: "latvia.benefits.transport" },
    { key: "medical", icon: "🏥", textKey: "latvia.benefits.medical" },
    { key: "meal", icon: "🍽️", textKey: "latvia.benefits.meal" },
    { key: "ticket", icon: "✈️", textKey: "latvia.benefits.ticket" },
    { key: "contract", icon: "📄", textKey: "latvia.benefits.contract" },
    { key: "safe", icon: "🔒", textKey: "latvia.benefits.safe" },
  ];

  const salaryLevels = [
    { key: "underMatric", rangeKey: "latvia.salaryRanges.underMatric" },
    { key: "intermediate", rangeKey: "latvia.salaryRanges.intermediate" },
    { key: "bachelor", rangeKey: "latvia.salaryRanges.bachelor" },
  ];

  const installments = [
    { step: "1st", amount: "2500 QAR", descKey: "latvia.installments.first" },
    { step: "2nd", amount: "2500 QAR", descKey: "latvia.installments.second" },
    { step: "3rd", amount: "2500 QAR", descKey: "latvia.installments.third" },
    { step: "4th", amount: "2500 QAR", descKey: "latvia.installments.fourth" },
  ];

  const notes = [
    { key: "professional", textKey: "latvia.notes.professional" },
    { key: "documents", textKey: "latvia.notes.documents" },
    { key: "approval", textKey: "latvia.notes.approval" },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f3]" dir={isRTL ? "rtl" : "ltr"}>
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
            {t("latvia.tagline")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            {t("latvia.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            {t("latvia.heroDesc")}
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
              {t("latvia.sectorsTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg text-center border border-blue-100"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {t(`latvia.sectors.${sector.key}`)}
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
              {t("latvia.highlightsTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, i) => (
              <motion.div
                key={highlight.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <p className="text-gray-700 font-medium">
                  {t(highlight.textKey)}
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
              {t("latvia.salaryTitle")}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t(`latvia.salaryLevels.${level.key}`)}
                  </h3>
                </div>
                <div className="flex-1 text-center md:text-right">
                  <span className="text-3xl font-extrabold text-blue-600">
                    {t(level.rangeKey)}
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
              {t("latvia.benefitsTitle")}
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
                <p className="text-gray-700 font-medium text-sm">
                  {t(benefit.textKey)}
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("latvia.processingTitle")}
            </h2>
            <p className="text-2xl text-blue-700 font-bold">
              {t("latvia.processingTime")}
            </p>
            <p className="text-gray-600 mt-4">
              {t("latvia.processingIncludes")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("latvia.costTitle")}
            </h2>
            <p className="text-3xl font-bold text-yellow-500">
              {t("latvia.cost")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("latvia.paymentTitle")}
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {installments.map((inst, i) => (
                <div key={i} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-700 mb-2">{inst.step}</div>
                  <div className="text-lg font-semibold text-gray-900">{inst.amount}</div>
                  <p className="text-gray-600 text-sm mt-2">{t(inst.descKey)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-white/10 rounded-2xl"
          >
            <p className="text-yellow-400 font-semibold mb-4">
              {t("latvia.notesTitle")}
            </p>
            <ul className="text-gray-300 space-y-2 text-sm">
              {notes.map((note) => (
                <li key={note.key}>{t(note.textKey)}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              {t("latvia.ctaTitle")}
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-700/30 font-bold text-xl"
            >
              {t("latvia.ctaButton")}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Latvia;
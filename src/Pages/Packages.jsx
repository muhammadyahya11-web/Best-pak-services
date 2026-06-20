import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { Check, Calendar, Plane, Hotel, Users } from "lucide-react";

function Packages() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [selectedPkg, setSelectedPkg] = useState(null);

  const packages = [
    {
      key: "businessPackage",
      icon: Plane,
      color: "from-blue-600 to-cyan-600",
    },
    {
      key: "luxuryPackage",
      icon: Hotel,
      color: "from-purple-600 to-pink-600",
    },
    {
      key: "adventurePackage",
      icon: Users,
      color: "from-orange-500 to-red-600",
    },
    {
      key: "familyPackage",
      icon: Calendar,
      color: "from-emerald-500 to-teal-600",
    },
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
            {t("packages.popular", "Popular")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            {t("packages.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            {t("packages.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className="-mt-10 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => {
              const data = t(`packages.${pkg.key}`, { returnObjects: true });
              const Icon = pkg.icon;
              const includesArr = data.includes || [];

              return (
                <motion.div
                  key={pkg.key}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon size={28} />
                        <h3 className="text-2xl font-bold">{data.name}</h3>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                        {t("packages.popular")}
                      </span>
                    </div>
                    <p className="mt-3 text-white/80 text-sm">
                      {data.desc}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <span className="text-sm text-gray-500">
                          {t("packages.startingFrom")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-500">QAR</span>
                          <span className="text-4xl font-bold text-gray-900">
                            {data.price}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">
                          {t("packages.duration")}
                        </span>
                        <p className="text-xl font-bold text-gray-900">
                          {data.duration} {t("packages.days")}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                        {t("packages.includes")}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {includesArr.slice(0, 5).map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600">
                            <Check size={16} className="text-emerald-500 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedPkg(data.name)}
                      className={`w-full py-4 rounded-2xl bg-gradient-to-r ${pkg.color} text-white font-bold text-lg transition-all`}
                    >
                      {t("packages.bookNow")}
                    </motion.button>
                  </div>

                  {selectedPkg === data.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20"
                    >
                      <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                          className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Check size={32} className="text-emerald-600" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {isRTL ? "تم الاستلام!" : "Request Received!"}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {isRTL
                            ? `سيتصل بك فريقنا قريباً لمناقشة "${data.name}"`
                            : `Our team will contact you soon to discuss "${data.name}"`}
                        </p>
                        <button
                          onClick={() => setSelectedPkg(null)}
                          className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-bold"
                        >
                          {isRTL ? "إغلاق" : "Close"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-[#f5f3ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {isRTL ? "باقة مخصصة؟" : "Need a Custom Package?"}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {isRTL
                ? "نصمم رحلات مخصصة تلبي احتياجاتك الفريدة. تواصل معنا لمناقشة أفكارك."
                : "We design custom trips tailored to your unique needs. Get in touch to discuss your ideas."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              {isRTL ? "تحدث إلى خبير" : "Talk to an Expert"}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Packages;

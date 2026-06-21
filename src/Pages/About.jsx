import { motion, useScroll, useTransform } from "framer-motion";
import about from "../assets/about-img.webp";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

function About() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [600, 1200], [40, -40]);
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-28 bg-[#f5f3ef] overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-yellow-500 mb-5 text-lg"
          >
            ★★★★★
            <span className="text-gray-600 text-sm ml-2">
              {t("about.ratingText")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900"
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-8 text-[16px]"
          >
            {t("about.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 font-semibold"
            >
              {t("about.button")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all border border-gray-200 font-semibold"
            >
              {t("nav.services")}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imgY }} className="relative">
          <div className="absolute -inset-4 bg-blue-200 blur-3xl opacity-30 rounded-3xl" />
          <motion.img
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            src={about}
            alt="About Millennium Travel"
            loading="lazy"
            className="relative rounded-3xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-700">20+</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Years of</p>
              <p className="font-bold text-gray-900">Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

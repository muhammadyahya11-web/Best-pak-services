import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const linkItems = [
    t("nav.home"),
    t("nav.about"),
    t("nav.services"),
    t("nav.packages"),
    t("nav.contact"),
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white tracking-wide mb-2">
            <span className="text-blue-400">MILLENNIUM</span>
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            {t("home.footer.brandDesc")}
          </p>

          <div className="flex gap-3 mt-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, backgroundColor: "#2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-full bg-gray-800 cursor-pointer flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-xs font-bold">●</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-white font-bold mb-5 text-lg">
            {t("home.footer.explore")}
          </h3>
          <ul className="space-y-3">
            {linkItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 group"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-300"
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-white font-bold mb-5 text-lg">
            {t("home.footer.contact")}
          </h3>
          <div className="space-y-4">
            <p className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
              <span className="text-blue-400">●</span>
              +974 4476 9222
            </p>
            <p className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-3">
              <span className="text-blue-400">●</span>
              info@flymi.com
            </p>
            <p className="text-gray-400 flex items-center gap-3">
              <span className="text-blue-400">●</span>
              Alfardan Centre, Doha, Qatar
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-16 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MILLENNIUM. All rights reserved.
      </div>
    </footer>
  );
}

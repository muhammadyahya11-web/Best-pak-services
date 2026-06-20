import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Commitment() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#17181d] text-white py-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/20 via-gray-900 to-[#17181d]" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400 mb-4"
            >
              Our Promise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              {t("home.commitmentTitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 leading-8 text-lg max-w-2xl"
            >
              {t("home.commitmentDesc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              {[
                { num: "15+", label: "Years" },
                { num: "25K+", label: "Clients" },
                { num: "120+", label: "Destinations" },
                { num: "4.9/5", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  className="bg-white/5 rounded-2xl p-4 text-center border border-white/10"
                >
                  <p className="text-3xl font-bold text-blue-400">{stat.num}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

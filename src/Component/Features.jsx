import { motion } from "framer-motion";
import {
  ShieldCheck,
  PhoneCall,
  Globe,
  LineChart,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const featuresData = [
  {
    icon: ShieldCheck,
    key: "customizedPolicy",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: PhoneCall,
    key: "support247",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: LineChart,
    key: "reporting",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Briefcase,
    key: "dutyOfCare",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Globe,
    key: "globalNetwork",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Sparkles,
    key: "innovation",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

function FeatureCard({ item, index }) {
  const { t } = useTranslation();
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500"
    >
      <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} className={item.color} />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {t(`home.features.${item.key}`)}
      </h3>
      <p className="text-gray-500 leading-7">
        {t(`home.features.${item.key}Desc`)}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-3">
            Our Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl leading-tight">
            {t("home.featuresTitle")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <FeatureCard key={item.key} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

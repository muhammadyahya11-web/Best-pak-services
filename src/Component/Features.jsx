import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
  },
  {
    icon: PhoneCall,
    key: "support247",
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-500/20",
  },
  {
    icon: LineChart,
    key: "reporting",
    gradient: "from-violet-500 to-purple-400",
    glow: "bg-violet-500/20",
  },
  {
    icon: Briefcase,
    key: "dutyOfCare",
    gradient: "from-amber-500 to-orange-400",
    glow: "bg-amber-500/20",
  },
  {
    icon: Globe,
    key: "globalNetwork",
    gradient: "from-cyan-500 to-blue-400",
    glow: "bg-cyan-500/20",
  },
  {
    icon: Sparkles,
    key: "innovation",
    gradient: "from-rose-500 to-pink-400",
    glow: "bg-rose-500/20",
  },
];

function FeatureCard({ item, index }) {
  const { t } = useTranslation();
  const Icon = item.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 overflow-hidden hover:border-[var(--accent)]/20 transition-all duration-500"
    >
      {/* Hover Glow */}
      <div className={`absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 ${item.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      {/* Number */}
      <span className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        0{index + 1}
      </span>

      {/* Icon */}
      <div className={`relative w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
        <Icon size={20} className="sm:hidden text-white" />
        <Icon size={20} className="hidden sm:block lg:hidden text-white" />
        <Icon size={22} className="hidden lg:block text-white" />
      </div>

      {/* Content */}
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
        {t(`home.features.${item.key}`)}
      </h3>
      <p className="text-[var(--text-secondary)] leading-6 sm:leading-7 text-xs sm:text-sm lg:text-base">
        {t(`home.features.${item.key}Desc`)}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px]">
        <div className={`h-full bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--section-bg-alt)' }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[var(--accent)]/[0.03] rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-teal-500/[0.03] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="section-divider" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--accent)]">
              Our Features
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-[1.1]">
            {t("home.featuresTitle")}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {featuresData.map((item, index) => (
            <FeatureCard key={item.key} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

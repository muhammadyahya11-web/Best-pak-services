import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Plane, Building, Hotel, Medal, TrendingUp, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const achievementsData = [
  { icon: Award, text: "Top Selling Agent of almost all the airline companies operational in the region" },
  { icon: Users, text: "Executive Member of 'POEPA' (Pakistan Overseas Employment Promoters Association)" },
  { icon: Plane, text: "PSA (Passenger Sale Agent) of PIA" },
  { icon: Medal, text: "Executive Member of 'TAAP' (Travel Agents Association of Pakistan)" },
  { icon: Star, text: "PAA (Preferred Agent Agreement) of Emirates Holiday (only one in Punjab)" },
  { icon: Building, text: "The only corporate member of Chambers of Commerce from travel industry" },
  { icon: Hotel, text: "One of the 3 distributors of 'Hotel Beds' in Pakistan" },
  { icon: TrendingUp, text: "Issuance of 1 M tickets since inception (only agent in the region till date)" },
  { icon: Plane, text: "Consolidating Agent of the following airlines; Emirates, PIA, Gulf, Qatar, Fly Dubai & Saudi" },
  { icon: Globe, text: "Pioneer in promoting tourism & leisure travel in the region" },
  { icon: TrendingUp, text: "Largest b2b hotel networks in the world" },
  { icon: Award, text: "Award winning agency since 2006" },
  { icon: ShieldCheck, text: "Professional Accreditations of IATA (International Air Transportation Authority) since 1990 & TAAP (Travel Agents Association of Pakistan)" },
];

export default function WhyBestPakServices() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 relative overflow-hidden"
      >
        <div className="absolute top-10 sm:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[var(--accent)]/[0.05] rounded-full blur-[80px] sm:blur-[100px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] mb-4 sm:mb-6">
              {t("whyBestPak.title")}
            </h1>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {t("whyBestPak.subtitle")}
            </p>
          </motion.div>
        </div>
      </motion.section>

 

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 bg-[var(--card-bg)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
              {t("whyBestPak.achievements.title")}
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg">
              {t("whyBestPak.achievements.subtitle")}
            </p>
          </motion.div>

          <ul className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {achievementsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-[var(--bg-primary)] rounded-xl border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="sm:hidden text-white" />
                    <Icon size={16} className="hidden sm:block lg:hidden text-white" />
                    <Icon size={18} className="hidden lg:block text-white" />
                  </div>
                  <span className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm lg:text-base">
                    • {item.text}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Award, Users, MapPin, Star } from "lucide-react";

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numTarget = parseFloat(target);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = numTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, numTarget, duration]);

  return (
    <span ref={ref}>
      {Number.isInteger(numTarget) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Commitment() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, num: "6", suffix: "+", label: "Years", sublabel: "Experience" },
    { icon: Users, num: "25", suffix: "K+", label: "Happy", sublabel: "Clients" },
    { icon: MapPin, num: "120", suffix: "+", label: "Global", sublabel: "Destinations" },
    { icon: Star, num: "4.9", suffix: "/5", label: "Client", sublabel: "Rating" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #080b16 100%)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-teal-500/[0.04] rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <div className="section-divider" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--accent)]">
                Our Promise
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-[1.1]"
            >
              <span className="text-white">{t("home.commitmentTitle")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[var(--text-secondary)] leading-6 sm:leading-7 text-sm sm:text-base lg:text-lg max-w-xl"
            >
              {t("home.commitmentDesc")}
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 * i + 0.4, duration: 0.5 }}
                  className="group bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-7 text-center relative overflow-hidden hover:border-[var(--accent)]/20 transition-all duration-500"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="sm:hidden text-[var(--accent)]" />
                      <Icon size={20} className="hidden sm:block lg:hidden text-[var(--accent)]" />
                      <Icon size={22} className="hidden lg:block text-[var(--accent)]" />
                    </div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--accent)] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">{stat.label}</p>
                    <p className="text-[10px] sm:text-xs text-[var(--text-muted)]">{stat.sublabel}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    { icon: Award, num: "15", suffix: "+", label: "Years", sublabel: "Experience" },
    { icon: Users, num: "25", suffix: "K+", label: "Happy", sublabel: "Clients" },
    { icon: MapPin, num: "120", suffix: "+", label: "Global", sublabel: "Destinations" },
    { icon: Star, num: "4.9", suffix: "/5", label: "Client", sublabel: "Rating" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #080b16 100%)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-teal-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="section-divider" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                Our Promise
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]"
            >
              <span className="text-white">{t("home.commitmentTitle")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[var(--text-secondary)] leading-8 text-lg max-w-xl"
            >
              {t("home.commitmentDesc")}
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 * i + 0.4, duration: 0.5 }}
                  className="group glass-card rounded-3xl p-7 text-center relative overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-[var(--accent)]" />
                    </div>
                    <p className="text-4xl font-bold text-[var(--accent)] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{stat.label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{stat.sublabel}</p>
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

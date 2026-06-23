import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Ahmed Al Thani",
      nameAr: "أحمد آل ثاني",
      role: "Business Traveler",
      roleAr: "مسافر أعمال",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      review: "Millennium Travel exceeded all expectations. Their team handled every aspect of our corporate travel with professionalism and precision.",
      reviewAr: "تجاوزت ميلينيوم للسفر كل التوقعات. تعامل فريقهم مع كل جانب من رحلتنا المؤسسية باحترافية ودقة.",
    },
    {
      name: "Sarah Williams",
      nameAr: "سارة ويليامز",
      role: "Luxury Traveler",
      roleAr: "مسافرة فاخرة",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      review: "Exceptional service from start to finish. Every booking and itinerary was perfectly organized.",
      reviewAr: "خدمة استثنائية من البداية إلى النهاية. كل حجز وبرنامج كان منظمًا بشكل مثالي.",
    },
    {
      name: "Mohammed Rashid",
      nameAr: "محمد رشيد",
      role: "Tourist",
      roleAr: "سائح",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
      review: "One of the best travel experiences I've ever had. Highly recommended for anyone seeking luxury travel services.",
      reviewAr: "واحدة من أفضل تجارب السفر التي مررت بها. أنصح بها بشدة لكل من يبحث عن خدمات سفر فاخرة.",
    },
  ];

  const isAr = i18n.language === "ar";

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden" style={{ background: 'var(--section-bg-alt)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-[var(--accent)]/[0.03] rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="section-divider" />
          </div>
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--accent)] mb-3 sm:mb-4 text-xs sm:text-sm font-bold">
            {t("home.testimonialsSubtitle")}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t("home.testimonialsTitle")}
          </h2>
          <div className="flex justify-center gap-1 sm:gap-1.5 text-[var(--accent)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="sm:hidden" fill="currentColor" />
            ))}
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="hidden sm:block" fill="currentColor" />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 ${dir === "rtl" ? "rtl" : ""}`}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden hover:border-[var(--accent)]/20 transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <Quote
                    size={28}
                    className="sm:hidden text-[var(--accent)]/30 group-hover:text-[var(--accent)]/60 transition-colors duration-500"
                  />
                  <Quote
                    size={32}
                    className="hidden sm:block text-[var(--accent)]/30 group-hover:text-[var(--accent)]/60 transition-colors duration-500"
                  />
                  <div className="flex gap-0.5 text-[var(--accent)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="sm:hidden" fill="currentColor" />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="hidden sm:block" fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-6 sm:leading-7 mb-6 sm:mb-8 text-sm sm:text-base">
                  "{isAr ? item.reviewAr : item.review}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[var(--border)]">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={isAr ? item.nameAr : item.name}
                      loading="lazy"
                      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                      <span className="text-[8px] sm:text-[10px] text-[var(--bg-primary)]">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm sm:text-base">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-[var(--text-muted)] text-xs sm:text-sm">
                      {isAr ? item.roleAr : item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

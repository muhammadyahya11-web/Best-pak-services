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
    <section ref={sectionRef} className="py-32 relative overflow-hidden" style={{ background: 'var(--section-bg-alt)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="section-divider" />
          </div>
          <p className="uppercase tracking-[0.3em] text-[var(--accent)] mb-4 text-sm font-bold">
            {t("home.testimonialsSubtitle")}
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t("home.testimonialsTitle")}
          </h2>
          <div className="flex justify-center gap-1.5 text-[var(--accent)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className={`grid lg:grid-cols-3 gap-6 ${dir === "rtl" ? "rtl" : ""}`}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group glass-card rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Quote
                    size={40}
                    className="text-[var(--accent)]/30 group-hover:text-[var(--accent)]/60 transition-colors duration-500"
                  />
                  <div className="flex gap-0.5 text-[var(--accent)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] leading-8 mb-8 text-base">
                  "{isAr ? item.reviewAr : item.review}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={isAr ? item.nameAr : item.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                      <span className="text-[10px] text-[#0c0f1a]">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-base">
                      {isAr ? item.nameAr : item.name}
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm">
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

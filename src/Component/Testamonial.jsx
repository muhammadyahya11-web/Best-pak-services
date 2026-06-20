import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const testimonials = [
    {
      name: "Ahmed Al Thani",
      nameAr: "أحمد آل ثاني",
      role: "Business Traveler",
      roleAr: "مسافر أعمال",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      review:
        "Millennium Travel exceeded all expectations. Their team handled every aspect of our corporate travel with professionalism and precision.",
      reviewAr:
        "تجاوزت ميلينيوم للسفر كل التوقعات. تعامل فريقهم مع كل جانب من رحلتنا المؤسسية باحترافية ودقة.",
    },
    {
      name: "Sarah Williams",
      nameAr: "سارة ويليامز",
      role: "Luxury Traveler",
      roleAr: "مسافرة فاخرة",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      review:
        "Exceptional service from start to finish. Every booking and itinerary was perfectly organized.",
      reviewAr: "خدمة استثنائية من البداية إلى النهاية. كل حجز وبرنامج كان منظمًا بشكل مثالي.",
    },
    {
      name: "Mohammed Rashid",
      nameAr: "محمد رشيد",
      role: "Tourist",
      roleAr: "سائح",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
      review:
        "One of the best travel experiences I've ever had. Highly recommended for anyone seeking luxury travel services.",
      reviewAr:
        "واحدة من أفضل تجارب السفر التي مررت بها. أنصح بها بشدة لكل من يبحث عن خدمات سفر فاخرة.",
    },
  ];

  const isAr = i18n.language === "ar";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const stats = [
    ["15+", t("home.stats.yearsExperience")],
    ["25K+", t("home.stats.happyTravelers")],
    ["120+", t("home.stats.destinations")],
    ["4.9", t("home.stats.clientRating")],
  ];

  return (
    <section className="py-28 bg-[#f8f6f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-gray-500 mb-4">
            {t("home.testimonialsSubtitle")}
          </p>

          <h2 className="text-5xl md:text-6xl font-light text-gray-900">
            {t("home.testimonialsTitle")}
          </h2>

          <div className="flex justify-center gap-1 mt-5 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`grid lg:grid-cols-3 gap-8 ${dir === "rtl" ? "rtl" : ""}`}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Quote
                size={50}
                className="text-blue-600 mb-6 group-hover:rotate-12 duration-500"
              />

              <p className="text-gray-600 leading-8 mb-8">
                "{isAr ? item.reviewAr : item.review}"
              </p>

              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={item.image}
                  alt={isAr ? item.nameAr : item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />

                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {isAr ? item.nameAr : item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {isAr ? item.roleAr : item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center"
        >
          {stats.map(([number, text]) => (
            <motion.div
              key={number}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-5xl font-light text-blue-700">
                {number}
              </h3>
              <p className="mt-3 text-gray-600 font-medium">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

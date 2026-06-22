import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Plane, MapPin, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const videoSrc = "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  const floatingItems = [
    { icon: Plane, label: "500+ Flights", delay: 0.8, x: "10%", y: "20%" },
    { icon: MapPin, label: "120+ Destinations", delay: 1.0, x: "75%", y: "15%" },
    { icon: Star, label: "4.9 Rating", delay: 1.2, x: "85%", y: "65%" },
  ];

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Video Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      {/* Multi-layer Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080b16]/60 via-[#080b16]/30 to-[#080b16]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080b16]/40 via-transparent to-[#080b16]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#080b16_70%)] opacity-40" />

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Stats Cards */}
      {floatingItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item.delay, duration: 0.8 }}
            className="absolute hidden lg:flex items-center gap-3 px-5 py-3 rounded-2xl glass-card backdrop-blur-xl z-20"
            style={{ left: item.x, top: item.y }}
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
              <Icon size={18} className="text-[var(--accent)]" />
            </div>
            <span className="text-sm font-semibold text-white/90">{item.label}</span>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center justify-center text-center px-5">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[var(--accent)] tracking-[0.25em] uppercase text-xs font-bold">
              Premium Travel Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-extrabold leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="text-white">Explore Unforgettable</span>
            <br />
            <span className="text-white">Journeys </span>
            <span className="text-gradient-gold">Around The World</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Your trusted partner for premium flights, luxury hotels, and seamless visa processing across 120+ destinations worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium px-10 py-4 rounded-full text-base font-bold shadow-xl"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline px-10 py-4 rounded-full text-base font-semibold"
            >
              Get a Quote
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-14 flex items-center justify-center gap-8 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-[var(--accent)] font-bold">IATA</span> Recognized
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span>25K+ Happy Clients</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Since 2009</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[var(--accent)]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

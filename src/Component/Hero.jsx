import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const videoSrc = "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--text-primary)]/50 via-[var(--text-primary)]/30 to-[var(--text-primary)]/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 via-transparent to-transparent" />

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6">
        <div className="max-w-5xl text-center">

       

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
          >
            Discover The World's{" "}
            <span className="text-[var(--accent)]">Most Beautiful</span> Places
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Flights, Hotels, Visa Services, and unforgettable travel experiences crafted for modern explorers.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mt-10 sm:mt-12 md:mt-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">120+</h3>
              <p className="text-white/60 text-xs sm:text-sm">Destinations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">25K+</h3>
              <p className="text-white/60 text-xs sm:text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">6+</h3>
              <p className="text-white/60 text-xs sm:text-sm">Years Experience</p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}

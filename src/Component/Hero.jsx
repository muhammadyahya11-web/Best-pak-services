import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const videoSrc =
    "https://www.youtube.com/embed/FePPVxewOh8?autoplay=1&mute=1&loop=1&playlist=FePPVxewOh8&controls=0&playsinline=1";

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <motion.iframe
        style={{ opacity }}
        className="
          absolute top-0 left-0 
          w-full h-full 
          scale-125
          md:scale-125
          sm:scale-150
        "
        src={videoSrc}
        title="Hero Video"
        allow="autoplay"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-white font-bold leading-tight
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            max-w-3xl
          "
        >
          Explore unforgettable journeys around the world  wirh <span className="text-blue-500">BEST PAK SERVICES</span>
        </motion.h1>

      </div>
    </section>
  );
}
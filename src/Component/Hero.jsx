import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

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
        className="absolute top-0 left-0 w-full h-full scale-125 object-cover"
        src={videoSrc}
        title="Hero Video"
        allow="autoplay"
      />

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >

          {/* Tagline */}
          <p className="mb-4 text-blue-400 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold">
            Premium Travel Experience
          </p>

          {/* Main Heading */}
          <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Explore unforgettable journeys around the world{" "}
            <span className="text-blue-500 relative">
              with{" "}
              <span className="text-white font-black drop-shadow-lg">
                BEST PAK
              </span>{" "}
              <span className="text-blue-400">SERVICES</span>
            </span>
          </h1>

          {/* Small underline effect */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[2px] bg-blue-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
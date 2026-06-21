import { motion, useScroll } from "framer-motion";

export default function Hero() {
  useScroll();

  const videoSrc =
    "https://flymi.com/wp-content/uploads/2025/08/travel-video-.-1.mp4";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <motion.video
        
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-blue-400 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold">
            Premium Travel Experience
          </p>

          <h1 className="text-white font-extrabold leading-tight text-xl sm:text-2xl md:text-3xl lg:text-3xl">
            Explore unforgettable journeys around the world{" "}
            <span className="text-blue-500">
              with <span className="text-white">BEST PAK</span>{" "}
              <span className="text-blue-400">SERVICES</span>
            </span>
          </h1>

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
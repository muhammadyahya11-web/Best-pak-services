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
   <section className="relative h-screen overflow-hidden">

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
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center px-6">

    <div className="max-w-5xl text-center">

     

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
        Discover The World's  Most Beautiful Places
        {/* <span className="block text-yellow-400">
        
        </span> */}
      </h1>

      <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
        Flights, Hotels, Visa Services, and unforgettable travel
        experiences crafted for modern explorers.
      </p>

     

      {/* Stats */}
      <div className=" hidden sm:grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white">120+</h3>
          <p className="text-white/60">Destinations</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white">25K+</h3>
          <p className="text-white/60">Happy Clients</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white">6+</h3>
          <p className="text-white/60">Years Experience</p>
        </div>

      </div>

    </div>

  </div>

</section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Hero from "../Component/Hero";
import About from "./About";
import Services from "./Services";
import Features from "../Component/Features";
import CTA from "../Component/Cta";
import Footer from "./../Component/Footer";
import Commitment from "../Component/Commitment";
import Testimonial from "../Component/Testamonial";

function Home() {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const aboutY = useTransform(scrollY, [200, 600], [80, 0]);

  return (
    <div dir={dir} className="bg-[var(--bg-primary)]">
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="sticky top-0 z-10">
        <Hero />
      </motion.div>

      <motion.div style={{ y: aboutY }} className="relative z-20 -mt-32">
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Features />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Commitment />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Testimonial />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <CTA />
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;

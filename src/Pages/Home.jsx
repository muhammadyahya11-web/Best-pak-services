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

  return (
    <div dir={dir} className="bg-[#fcf9f3]">
      <Hero />
      <About />
      <Features />
      <Services />
      <Commitment />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;

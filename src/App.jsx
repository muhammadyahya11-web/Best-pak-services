import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Component/Navbar";
import WhatsAppButton from "./Component/WhatsAppButton";
import Popup from "./Component/Popup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import WhyBestPakServices from "./Pages/WhyBestPakServices";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <Popup />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whybestpakservices" element={<WhyBestPakServices />} />
        </Routes>

        <WhatsAppButton />
      </LanguageProvider>
    </ThemeProvider>
  );
}

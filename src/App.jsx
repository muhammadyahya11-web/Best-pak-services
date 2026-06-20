import { LanguageProvider } from "./context/LanguageContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import WhatsAppButton from "./Component/WhatsAppButton";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppButton />
    </LanguageProvider>
  );
}

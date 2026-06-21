import { LanguageProvider } from "./context/LanguageContext.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import WhatsAppButton from "./Component/WhatsAppButton";
import Popup from "./Component/Popup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Bps from "./Pages/Bps";
import Latvia from "./Pages/Latvia";
import SearchResults from "./Pages/SearchResults";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Popup />
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bps" element={<Bps />} />
        <Route path="/latvia" element={<Latvia />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>

      <WhatsAppButton />
    </LanguageProvider>
  );
}

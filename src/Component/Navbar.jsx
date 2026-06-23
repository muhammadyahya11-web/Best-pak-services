import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, Globe, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";
import qatarLogo from "../assets/qatar-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { toggleLanguage, isRTL } = useLanguage();

  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 120], [0, -8]);
  const navScale = useTransform(scrollY, [0, 120], [1, 0.96]);

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("whyBestPak.title"), path: "/whybestpakservices" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <>
      {/* ✨ TOP BAR - Visible on all devices */}
      <div className="fixed top-0 left-0 w-full z-[1000] bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--border)] text-[var(--text-secondary)] h-20">
        <div className="flex flex-row justify-between items-center h-full px-4 sm:px-6 lg:px-8 gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <img src={qatarLogo} className="h-6 sm:h-7 opacity-90" />
            <span className="hidden sm:inline text-sm sm:text-base">Commercial Registration: 238052</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-sm sm:text-base">
            <a href="tel:+9745464665" className="flex items-center gap-1 hover:text-[var(--accent)] transition">
              <Phone size={14} />
              <span>+974 5464 665</span>
            </a>
            <a href="mailto:info@bestpakservices.com" className="flex items-center gap-1 hover:text-[var(--accent)] transition">
              <Mail size={14} />
              <span className="hidden xs:inline sm:inline">info@bestpakservices.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 💎 NAVBAR */}
      <motion.nav
        style={{ y: navY, scale: navScale }}
        className="fixed top-20 left-0 w-full z-[999] bg-[var(--bg-secondary)]/90 backdrop-blur-2xl border-b border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* LOGO */}
          <NavLink to="/">
            <div className="text-base sm:text-lg lg:text-xl tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.35em] font-light text-white">
              BEST <span className="text-[var(--accent)] font-medium">PAK</span> SERVICES
            </div>
          </NavLink>

          {/* LINKS */}
          <ul className="hidden lg:flex gap-8 xl:gap-10 text-sm tracking-wide text-[var(--text-secondary)]">
            {links.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 hover:text-[var(--accent)] ${
                      isActive ? "text-[var(--accent)]" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* LANGUAGE */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-[10px] sm:text-xs lg:text-sm"
            >
              <Globe size={12} className="inline mr-1 sm:mr-1.5" />
              {isRTL ? "EN" : "AR"}
            </button>

            {/* MOBILE MENU */}
            <button 
              onClick={() => setOpen(true)} 
              className="lg:hidden px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition"
            >
              <Menu className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-[9998]"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-[280px] sm:w-[320px] bg-[var(--bg-secondary)]/95 backdrop-blur-2xl z-[9999] p-6 sm:p-10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <h2 className="text-[var(--accent)] tracking-[0.3em] mb-8 sm:mb-10 text-sm font-bold">
                NAVIGATION
              </h2>

              <div className="flex flex-col gap-5 sm:gap-6 text-[var(--text-secondary)]">
                {links.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-[var(--accent)] transition text-base sm:text-lg font-medium"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { toggleLanguage, isRTL } = useLanguage();

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.packages"), path: "/packages" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-extrabold tracking-[0.2em]"
        >
          <span className="text-white">BEST PAK</span>{" "}
          <span className="text-blue-500">SERVICES</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {links.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative inline-block"
                  >
                    {item.name}

                    {/* underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-500 rounded-full"
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          {/* Language */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm text-white transition"
          >
            <Globe size={16} />
            {isRTL ? "EN" : "AR"}
          </motion.button>

          {/* Search */}
          <button className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition">
            <Search size={18} className="text-gray-300 hover:text-white" />
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed top-0 right-0 w-80 h-full bg-slate-950/95 backdrop-blur-xl border-l border-white/10 p-6 z-50"
          >

            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-white text-lg font-bold tracking-widest">
                MENU
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-5">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  <motion.div whileTap={{ x: -8 }}>
                    {item.name}
                  </motion.div>
                </NavLink>
              ))}
            </div>

            {/* Bottom branding */}
            <div className="absolute bottom-6 left-6 text-xs text-gray-500">
              BEST PAK SERVICES © {new Date().getFullYear()}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
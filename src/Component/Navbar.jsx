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

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold tracking-[0.15em]"
        >
          <span className="text-blue-400">BEST PAK SERVICES</span>
        </motion.h1>

        <ul className="hidden lg:flex gap-10 text-sm uppercase tracking-wider items-center">
          {links.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="relative inline-block transition-colors duration-300"
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full"
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300"
          >
            <Globe size={16} />
            <span>{isRTL ? "EN" : "عربي"}</span>
          </motion.button>

          <motion.div whileHover={{ scale: 1.1 }} className="hidden md:block">
            <Search size={20} className="cursor-pointer text-gray-400 hover:text-white transition-colors" />
          </motion.div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-72 h-full bg-slate-950 text-white p-6 shadow-2xl z-50"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold tracking-wider">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4 text-lg">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `pb-3 border-b border-white/10 transition-all duration-300 ${
                      isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  <motion.span whileTap={{ x: -10 }} className="inline-block">
                    {item.name}
                  </motion.span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

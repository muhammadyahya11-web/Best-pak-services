import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext.jsx";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  const { toggleLanguage, isRTL } = useLanguage();
  const navigate = useNavigate();

const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("bps.navLabel"), path: "/bps" },
    { name: t("services.latviaJobs"), path: "/latvia" },
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchOpen(true)}
            className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <Search size={18} className="text-gray-300 hover:text-white" />
          </motion.button>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">
                  {isRTL ? "بحث" : "Search"}
                </h3>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition"
                >
                  <X size={20} className="text-gray-300" />
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                      setSearchOpen(false);
                      setSearchQuery("");
                    }
                  }}
                  placeholder={isRTL ? "ابحث عن وجهة..." : "Search destinations..."}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-blue-500"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (searchQuery.trim()) {
                      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                      setSearchOpen(false);
                      setSearchQuery("");
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  {isRTL ? "بحث" : "Go"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
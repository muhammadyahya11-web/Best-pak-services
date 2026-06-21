
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

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">

          {/* Logo */}
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-extrabold tracking-[0.18em]"
            >
              <span className="text-white">BEST PAK</span>
              <span className="text-blue-500"> SERVICES</span>
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <motion.span
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className={`relative inline-block transition-colors duration-300 ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}

                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
                        />
                      )}
                    </motion.span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">

            {/* Language */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
            >
              <Globe size={16} />
              <span>{isRTL ? "EN" : "AR"}</span>
            </motion.button>

            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500/20 border border-white/10 transition-all"
            >
              <Search size={18} className="text-gray-300" />
            </motion.button>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="hidden lg:flex px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Apply Now
            </NavLink>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            >
              <Menu size={26} className="text-white" />
            </button>

          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-white">
                  {isRTL ? "بحث" : "Search"}
                </h3>

                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSearch()
                  }
                  placeholder={
                    isRTL
                      ? "ابحث هنا..."
                      : "Search jobs, countries, services..."
                  }
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500"
                />

                <button
                  onClick={handleSearch}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Go
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
              }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[9999] flex flex-col p-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-white text-lg font-bold tracking-[0.3em]">
                  MENU
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 flex flex-col items-center justify-center gap-8">

                {links.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-semibold tracking-wide transition ${
                          isActive
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Apply Now
                </NavLink>
              </div>

              {/* Footer */}
              <div className="text-center text-gray-500 text-sm">
                BEST PAK SERVICES © {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


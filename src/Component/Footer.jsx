import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  const linkItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("whyBestPak.title"), path: "/whybestpakservices" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="relative bg-[var(--bg-tertiary)] text-[var(--text-secondary)] pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-[var(--border)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-secondary)] via-[var(--card-bg)] to-[var(--bg-tertiary)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2 sm:mb-3">
            <span className="text-[var(--accent)]">BEST PAK</span> SERVICES
          </h2>
          <p className="mt-2 sm:mt-3 text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
            {t("home.footer.brandDesc")}
          </p>

          <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, backgroundColor: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-[var(--card-bg)] border border-[var(--border)] cursor-pointer flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-xs font-bold text-[var(--text-muted)]">●</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-white font-bold mb-4 sm:mb-5 text-base sm:text-lg">
            {t("home.footer.explore")}
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {linkItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] cursor-pointer transition-all duration-300 group text-sm"
                >
                  <motion.span
                    className="w-1 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300"
                  />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <h3 className="text-white font-bold mb-4 sm:mb-5 text-base sm:text-lg">
            {t("home.footer.contact")}
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <motion.a
              href="tel:+97444769222"
              whileHover={{ x: 5 }}
              className="hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2 sm:gap-3 text-sm"
            >
              <span className="text-[var(--accent)] text-xs">●</span>
              +974 4476 9222
            </motion.a>
            <motion.a
              href="mailto:info@bestpakservices.com"
              whileHover={{ x: 5 }}
              className="hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2 sm:gap-3 text-sm"
            >
              <span className="text-[var(--accent)] text-xs">●</span>
              info@bestpakservices.com
            </motion.a>
            <p className="text-[var(--text-muted)] flex items-center gap-2 sm:gap-3 text-sm">
              <span className="text-[var(--accent)] text-xs">●</span>
              Alfardan Centre, Doha, Qatar
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-10 sm:mt-12 lg:mt-16 border-t border-[var(--border)] pt-6 sm:pt-8 text-center text-[var(--text-muted)] text-xs sm:text-sm">
        © {new Date().getFullYear()} BEST PAK SERVICES. All rights reserved.
      </div>
    </footer>
  );
}

import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <main className="bg-[#FCF9F3]" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative bg-slate-950 py-24 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-sky-300"
          >
            {t("contact.heroTag")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-serif text-4xl md:text-6xl font-semibold leading-tight"
          >
            {t("contact.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl leading-8 text-white/70"
          >
            {t("contact.heroDesc")}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:py-24 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/10"
        >
          <h2 className="font-serif text-3xl font-semibold text-slate-950">
            {t("contact.getInTouch")}
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            {t("contact.getInTouchDesc")}
          </p>
          <div className="mt-8 space-y-5">
            <motion.a
              href="tel:+97444769222"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-center gap-4 text-slate-700 hover:text-sky-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <Phone className="text-sky-700" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {t("contact.phone")}
                </p>
                <p className="font-semibold">+974 4476 9222</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@flymi.com"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-center gap-4 text-slate-700 hover:text-sky-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <Mail className="text-sky-700" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {t("contact.email")}
                </p>
                <p className="font-semibold">info@flymi.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=Alfardan%20Centre%20Doha"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-start gap-4 text-slate-700 hover:text-sky-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                <MapPin className="text-sky-700" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {t("contact.address")}
                </p>
                <p className="font-semibold">{t("contact.addressValue")}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/97444769222"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {isRTL ? "واتساب" : "WhatsApp"}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/10"
        >
          <h3 className="font-serif text-2xl font-semibold text-slate-950 mb-6">
            {t("contact.getInTouch")}
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    {t("contact.form.name")}
                  </span>
                  <input
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700/10"
                    type="text"
                    placeholder={isRTL ? "اسمك" : "Your name"}
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    {t("contact.form.email")}
                  </span>
                  <input
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700/10"
                    type="email"
                    placeholder={isRTL ? "بريدك الإلكتروني" : "you@example.com"}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("contact.form.travelRequirement")}
                </span>
                <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700/10">
                  <option>{t("contact.form.requirements.corporate")}</option>
                  <option>{t("contact.form.requirements.flights")}</option>
                  <option>{t("contact.form.requirements.hotels")}</option>
                  <option>{t("contact.form.requirements.tours")}</option>
                  <option>{t("contact.form.requirements.visa")}</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">
                  {t("contact.form.message")}
                </span>
                <textarea
                  required
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all duration-300 focus:border-sky-700 focus:bg-white focus:ring-2 focus:ring-sky-700/10 resize-none"
                  placeholder={
                    isRTL
                      ? "أخبرنا عن رحلتك..."
                      : "Tell us about your travel plan..."
                  }
                />
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 px-8 py-4 font-bold text-white shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
              type="submit"
            >
              {t("contact.form.sendMessage")}
              <CheckCircle2 size={20} />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;

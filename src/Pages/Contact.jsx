import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelRequirement: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_email: "yahyaraza20@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      travel_requirement: formData.travelRequirement,
      message: formData.message
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", travelRequirement: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }).catch((error) => {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
      alert(isRTL ? "حدث خطأ أثناء إرسال البريد. يرجى المحاولة مرة أخرى." : "Error sending email. Please try again.");
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-[var(--bg-primary)] transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <section className="relative bg-[var(--bg-tertiary)] mt-20 py-20 sm:py-24 md:py-28 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--accent)]"
          >
            {t("contact.heroTag")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 sm:mt-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            {t("contact.heroTitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-2xl leading-6 sm:leading-7 text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg"
          >
            {t("contact.heroDesc")}
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 py-12 sm:py-14 md:py-16 lg:py-20 md:grid-cols-[0.9fr_1.1fr] md:px-6 lg:px-8 -mt-12 sm:-mt-14 md:-mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl bg-[var(--card-bg)] p-5 sm:p-6 lg:p-8 shadow-xl shadow-black/5 border border-[var(--border)]"
        >
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text-primary)]">
            {t("contact.getInTouch")}
          </h2>
          <p className="mt-3 sm:mt-4 leading-6 sm:leading-7 text-[var(--text-secondary)] text-sm sm:text-base">
            {t("contact.getInTouchDesc")}
          </p>
          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            <motion.a
              href="tel:+97444769222"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-center gap-3 sm:gap-4 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0">
                <Phone size={18} className="sm:hidden text-[var(--accent)]" />
                <Phone size={20} className="hidden sm:block text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {t("contact.phone")}
                </p>
                <p className="font-semibold text-sm sm:text-base">+974 6619 7607</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@bestpakservice.com"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-center gap-3 sm:gap-4 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0">
                <Mail size={18} className="sm:hidden text-[var(--accent)]" />
                <Mail size={20} className="hidden sm:block text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {t("contact.email")}
                </p>
                <p className="font-semibold text-sm sm:text-base">info@bestpakservice.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=Office+No+5+Mansura+Doha+Qatar"
              whileHover={{ x: isRTL ? -5 : 5 }}
              className="flex items-start gap-3 sm:gap-4 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0">
                <MapPin size={18} className="sm:hidden text-[var(--accent)]" />
                <MapPin size={20} className="hidden sm:block text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  {t("contact.address")}
                </p>
                <p className="font-semibold text-sm sm:text-base">{t("contact.addressValue")}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/97466197607"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-500/20 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
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
          className="rounded-2xl sm:rounded-3xl bg-[var(--card-bg)] p-5 sm:p-6 lg:p-8 shadow-xl shadow-black/5 border border-[var(--border)]"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
            {t("contact.getInTouch")}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              <div>
                <label className="block">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                    {t("contact.form.name")}
                  </span>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20 text-sm"
                    type="text"
                    placeholder={isRTL ? "اسمك" : "Your name"}
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                    {t("contact.form.email")}
                  </span>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20 text-sm"
                    type="email"
                    placeholder={isRTL ? "بريدك الإلكتروني" : "you@example.com"}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block">
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  {t("contact.form.travelRequirement")}
                </span>
                <select
                  name="travelRequirement"
                  value={formData.travelRequirement}
                  onChange={handleChange}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20 text-sm"
                >
                  <option value="">{t("contact.form.requirements.select")}</option>
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
                <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  {t("contact.form.message")}
                </span>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] px-3 sm:px-4 py-2.5 sm:py-3 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:bg-[var(--card-bg)] focus:ring-2 focus:ring-[var(--accent)]/20 resize-none text-sm"
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
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] px-6 sm:px-8 py-3 sm:py-4 font-bold text-white shadow-lg hover:shadow-[var(--accent)]/30 transition-all duration-300 disabled:opacity-50 text-sm sm:text-base w-full sm:w-auto justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (isRTL ? "جاري الإرسال..." : "Sending...") : t("contact.form.sendMessage")}
              <CheckCircle2 size={16} className="sm:hidden" />
              <CheckCircle2 size={20} className="hidden sm:block" />
            </motion.button>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 font-semibold text-sm"
              >
                {isRTL ? "تم إرسال رسالتك بنجاح!" : "Your message sent successfully!"}
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;
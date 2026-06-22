import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function SearchResults() {
  const { isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-20 transition-colors duration-300" dir={isRTL ? "rtl" : "ltr"}>
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent)]/10 rounded-full mb-6"
          >
            <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            {isRTL ? "نتائج البحث" : "Search Results"}
          </h1>
          <p className="text-[var(--text-secondary)] mb-8 text-lg">
            {isRTL ? `نتائج البحث عن: "${query}"` : `Results for: "${query}"`}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--card-bg)] rounded-3xl p-8 shadow-lg border border-[var(--border)]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[var(--text-muted)] text-lg">
                {isRTL ? "لا توجد نتائج بحث مطابقة." : "No matching results found."}
              </p>
              <p className="text-[var(--text-muted)] text-sm mt-2">
                {isRTL ? "جرب البحث بكلمات مختلفة" : "Try searching with different keywords"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default SearchResults;

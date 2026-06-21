import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function SearchResults() {
  const { isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="min-h-screen bg-[#fcf9f3] pt-32" dir={isRTL ? "rtl" : "ltr"}>
      <section className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {isRTL ? "نتائج البحث" : "Search Results"}
          </h1>
          <p className="text-gray-600 mb-8">
            {isRTL ? `نتائج البحث عن: "${query}"` : `Results for: "${query}"`}
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-500">
              {isRTL ? "لا توجد نتائج بحث مطابقة." : "No matching results found."}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default SearchResults;
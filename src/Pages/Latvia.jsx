import { motion } from "framer-motion";

function Latvia() {
  const sectors = [
    { key: "warehouse", label: "Warehouse Department", icon: "📦" },
    { key: "logistics", label: "Logistics", icon: "🚚" },
    { key: "construction", label: "Construction", icon: "🧱" }
  ];

  const highlights = [
    { key: "legal", icon: "✓", text: "100% Legal Work Permit Process" },
    { key: "processing", icon: "⚡", text: "Fast Processing (4-5 Months)" },
    { key: "demand", icon: "📈", text: "High Demand Jobs" },
    { key: "secure", icon: "🛡️", text: "Secure European Career Opportunity" }
  ];

  const benefits = [
    { key: "accommodation", icon: "🏠", text: "Accommodation provided" },
    { key: "transport", icon: "🚌", text: "Transportation provided" },
    { key: "medical", icon: "🏥", text: "Medical insurance (one time coverage)" },
    { key: "meal", icon: "🍽️", text: "Meal allowance" },
    { key: "ticket", icon: "✈️", text: "Annual return ticket" },
    { key: "contract", icon: "📄", text: "Legal employment contract" },
    { key: "safe", icon: "🔒", text: "Safe & secure working environment" }
  ];

  const installments = [
    { step: "1st", amount: "2500 QAR", desc: "Upon signing agreement" },
    { step: "2nd", amount: "2500 QAR", desc: "After Offer Letter" },
    { step: "3rd", amount: "2500 QAR", desc: "After Work Permit" },
    { step: "4th", amount: "2500 QAR", desc: "After Visa approval" }
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f3]">
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300 mb-4"
          >
            BPS - Your Partner in Progress
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
          >
            LATVIA WORK OPPORTUNITIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Explore genuine job opportunities in Latvia (Europe) under official work permit programs.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AVAILABLE SECTORS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg text-center border border-blue-100"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {sector.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#f5f3ef] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              KEY HIGHLIGHTS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, i) => (
              <motion.div
                key={highlight.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <p className="text-gray-700 font-medium">
                  {highlight.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SALARY STRUCTURE (in Euro)
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-3xl p-10 shadow-xl border border-blue-100"
            >
              <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Under Matric</h3>
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="text-3xl font-extrabold text-gradient-blue">
                  €1200-€2200
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-3xl p-10 shadow-xl border border-blue-100"
            >
              <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Intermediate</h3>
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="text-3xl font-extrabold text-gradient-purple">
                  €2200 - €3000
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-3xl p-10 shadow-xl border border-blue-100"
            >
              <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor/Master</h3>
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="text-3xl font-extrabold text-gradient-indigo">
                  €3000-€3500
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              COMPANY BENEFITS (As per Latvia Labour Law)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white rounded-3xl p-8 shadow-lg text-center border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PROCESSING TIME
            </h2>
            <p className="text-2xl text-blue-700 font-bold">
              Total processing time: 120 Days (4 Months)
            </p>
            <p className="text-gray-600 mt-4">
              Includes: Offer Letter, Work Permit, Embassy Appointment, Visa Filing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TOTAL SERVICE COST
            </h2>
            <p className="text-3xl font-bold text-yellow-500">
              Total Cost: 10.000 QAR
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PAYMENT PLAN (4 Installments in QAR)
            </h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              {installments.map((inst, i) => (
                <div key={i} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-700 mb-2">{inst.step}</div>
                  <div className="text-lg font-semibold text-gray-900">{inst.amount}</div>
                  <p className="text-gray-600 text-sm mt-2">{inst.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-white/10 rounded-2xl"
          >
            <p className="text-yellow-400 font-semibold mb-4">IMPORTANT NOTES</p>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>Process handled professionally & legally</li>
              <li>Genuine documents required</li>
              <li>Final visa approval depends on immigration authorities</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Start Your European Career with Latvia Today!
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-700/30 font-bold text-xl"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Latvia;
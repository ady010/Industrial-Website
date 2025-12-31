import React from "react";
import { motion } from "framer-motion";
import { Car, Hammer, Wrench, CheckCircle2, ChevronRight } from "lucide-react";

const IndustryCard = ({ title, icon: Icon, components, fit, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          {title}
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Typical Components
          </p>
          <ul className="space-y-2">
            {components.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
              >
                <ChevronRight
                  size={16}
                  className="mt-1 text-slate-400 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">
            Why We Fit
          </p>
          <ul className="space-y-2">
            {fit.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2
                  size={16}
                  className="mt-1 text-emerald-500 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Served = () => {
  const industries = [
    {
      title: "Automotive",
      icon: Car,
      components: [
        "Brackets & mountings",
        "Sheet metal press parts",
        "Precision machined components",
      ],
      fit: [
        "Consistent Quality",
        "Medium to high volume production",
        "Tight tolerances",
      ],
    },
    {
      title: "Heavy Engineering",
      icon: Hammer,
      components: [
        "Large machined parts",
        "Boring & milling components",
        "Fabricated structures",
      ],
      fit: [
        "HBM & VMC capabilities",
        "Heavy material handling",
        "Custom job work",
      ],
    },
    {
      title: "Industrial Machinery",
      icon: Wrench,
      components: [
        "Panels & enclosures",
        "Machined housings",
        "Sheet metal assemblies",
      ],
      fit: [
        "Precision sheet metal",
        "Repeatable production quality",
        "Clean finishing",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-6"
          >
            Industries Served
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Supporting manufacturers across key industrial sectors with
            precision machining and fabrication solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Served;

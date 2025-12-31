import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import VMC from "../assets/VMC.png";
// Fix potential space in filename if it exists in the filesystem, trusting the previous file reading
// defaulting to the import used in the previous file content: " Hori.png" -> handle carefully or rename if possible.
// Wait, the previous file had `import Hori from '../assets/ Hori.png'` which looks like a typo in the filename on disk.
// I will keep the import string exactly as it was to avoid breaking the build, assuming the file exists with that name.
import Hori from "../assets/ Hori.png";
import press from "../assets/press.png";
import fabri from "../assets/Fabri.png";

const ServiceCard = ({ title, description, image, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden bg-white p-6 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-transparent z-0" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <button className="group/btn relative overflow-hidden rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full flex items-center justify-center gap-2">
          <span>Get Quote</span>
          <ArrowRight
            size={18}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "VMC Machining",
      description:
        "High-precision Vertical Machining Center service for complex, custom parts with superior accuracy.",
      image: VMC,
    },
    {
      title: "Horizontal Machining",
      description:
        "Robust horizontal machining and milling capabilities, ensuring efficiency and consistency for large orders.",
      image: Hori,
    },
    {
      title: "Metal Pressing",
      description:
        "Precision sheet metal pressing and forming fabrication for diverse industrial applications.",
      image: press,
    },
    {
      title: "Custom Fabrication",
      description:
        "Tailored fabrication solutions with strict quality control to meet specific project requirements.",
      image: fabri,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-6"
          >
            Services We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Comprehensive manufacturing solutions delivering precision and
            quality for every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

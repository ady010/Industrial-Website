import React from "react";
import { motion } from "framer-motion";
import Metal from "../assets/mtbl.png";
import Cepl from "../assets/cepl.png";
import Kvul from "../assets/kvul.png";
import mungi from "../assets/mungi.png";
import bhagi from "../assets/bhagirath.png";

const Customers = () => {
  const logos = [Metal, Cepl, Kvul, mungi, bhagi];
  // Tripling the logos to ensure smooth infinite scroll without gaps
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
        >
          Trusted By Industry Leaders
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Our Customers
        </motion.h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center flex-shrink-0 pl-16"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed here (higher = slower)
                ease: "linear",
              },
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="h-64 w-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 transform"
              >
                <img
                  src={logo}
                  alt={`Customer logo ${index}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Customers;

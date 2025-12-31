import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

const About = () => {
  // Stats removed as per user request

  const features = [
    "Experienced technical team",
    "Transparent communication",
    "On time delivery",
    "Modern manufacturing facility",
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Precision Manufacturing Excellence
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We are a precision manufacturing workshop specializing in sheet
                metal pressings, machining, and fabrication for industrial
                applications.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Our Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded with a focus on quality and reliability, we have grown
                into a trusted manufacturing partner for multiple industries.
                Our commitment to innovation and customer satisfaction has been
                the driving force behind our success.
              </p>
            </div>

            
          </motion.div>

          {/* Right Column - Stats & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            {/* Stats removed */}

            {/* Visual Element underneath */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Why Customers Trust Us
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <ShieldCheck
                      className="text-emerald-500 shrink-0"
                      size={18}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-28  p-6 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Award size={120} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 relative z-10">
                Commitment to Quality
              </h3>
              <p className="text-slate-300 text-sm relative z-10">
                We adhere to strict quality control standards to ensure every
                part meets your exact specifications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

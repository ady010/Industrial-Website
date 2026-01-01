import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Upload,
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
} from "lucide-react";

const InputField = ({
  label,
  type,
  id,
  name,
  icon: Icon,
  required,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6 group">
      <label
        htmlFor={id}
        className={`absolute left-10 transition-all duration-300 pointer-events-none ${
          isFocused || props.value
            ? "-top-6 text-sm text-blue-500"
            : "top-3 text-slate-400"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`flex items-center border-b-2 transition-colors duration-300 py-2 ${
          isFocused
            ? "border-blue-500"
            : "border-slate-200 dark:border-slate-700"
        }`}
      >
        <Icon
          className={`mr-3 transition-colors duration-300 ${
            isFocused ? "text-blue-500" : "text-slate-400"
          }`}
          size={20}
        />
        <input
          type={type}
          id={id}
          name={name}
          className="w-full bg-transparent outline-none text-slate-800 dark:text-white pb-1"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          required={required}
          {...props}
        />
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-slate-700"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Request a Quote
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xqeaazyr"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Company Name"
                type="text"
                id="companyName"
                name="companyName"
                icon={Briefcase}
                required
              />
              <InputField
                label="Quotation For"
                type="text"
                id="quotationFor"
                name="quotationFor"
                icon={FileText}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Email Address"
                type="email"
                id="email"
                name="email"
                icon={Mail}
                required
              />
              <InputField
                label="Contact Number"
                type="tel"
                id="contact"
                name="contact"
                icon={Phone}
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-slate-600 dark:text-slate-300 text-sm font-medium mb-3">
                Drawings (PDF or DWG - Optional)
              </label>
              <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 text-center hover:border-blue-500 transition-colors cursor-pointer group">
                <input
                  type="file"
                  id="drawings"
                  name="drawings"
                  accept=".pdf,.dwg"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-blue-50 dark:bg-slate-700 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <Upload className="text-blue-500" size={24} />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="text-blue-500 font-semibold">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    PDF, DWG (Max 10MB)
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 dark:bg-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Submit Request
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Form;

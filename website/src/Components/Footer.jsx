import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Aditya Engineering
            </h2>
            <p className="mb-6 leading-relaxed text-slate-400">
              Precision manufacturing solutions for a modern world. We deliver
              quality, reliability, and innovation in every component.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  Industries Served
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                >
                  <ArrowRight
                    size={16}
                    className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "VMC Machining",
                "Horizontal Machining",
                "Metal Pressing",
                "Custom Fabrication",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin
                  className="text-blue-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <span>
                  46/1, F-II Block, MIDC, Pimpri Colony, Pimpri-Chinchwad, Pune
                  411018
                  <br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-blue-500 flex-shrink-0" size={20} />
                <a
                  href="tel:+919764483247"
                  className="hover:text-white transition-colors"
                >
                  +91 9764483247
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-blue-500 flex-shrink-0" size={20} />
                <a
                  href="mailto:adityaengg2020@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  adityaengg2020@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Company Name. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

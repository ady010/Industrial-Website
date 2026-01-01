import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Form from "./Form";

const DetailedServices = () => {
  const [activeTab, setActiveTab] = useState("vmc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = {
    vmc: {
      title: "VMC Machining",
      specs: [
        { label: "Table Size", value: "1200mm x 600mm" },
        { label: "Travel X/Y/Z", value: "1050/600/600 mm" },
        { label: "Spindle Speed", value: "10,000 RPM" },
        { label: "Max Load", value: "800 kg" },
      ],
      features: [
        "High precision component machining",
        "Complex 3D contouring",
        "Rigid tapping capabilities",
        "Automated tool changer (24 tools)",
      ],
      description:
        "Our Vertical Machining Centers (VMC) offer exceptional precision and speed for diverse component manufacturing. Equipped with state-of-the-art controls, we ensure tight tolerances and superior surface finishes.",
      images: [
        "https://images.unsplash.com/photo-1565514020176-11f868ad912c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1617781282273-0402f0853549?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1534353070497-2a4b85521b47?auto=format&fit=crop&q=80&w=800",
      ],
    },
    horizontal: {
      title: "Horizontal Boring",
      specs: [
        { label: "Table Size", value: "1000mm x 1000mm" },
        { label: "Travel X/Y/Z", value: "1500/1200/1000 mm" },
        { label: "Spindle Diameter", value: "110 mm" },
        { label: "Max Load", value: "3000 kg" },
      ],
      features: [
        "Deep bore machining capability",
        "Heavy workpiece handling",
        "Multi-face machining in single setup",
        "High torque cutting",
      ],
      description:
        "Our Horizontal Boring machines are tailored for heavy-duty operations on large workpieces. Perfect for gearbox casings, engine blocks, and complex structural components requiring high geometric accuracy.",
      images: [
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1563810145-20739f75a6c0?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1533062607886-f64f40f2b233?auto=format&fit=crop&q=80&w=800",
      ],
    },
    press: {
      title: "Press Machines",
      specs: [
        { label: "Capacity", value: "50 - 200 Tonnes" },
        { label: "Bed Size", value: "1000mm x 800mm" },
        { label: "Stroke Length", value: "Adjustable 10-150mm" },
        { label: "Speed", value: "30-60 SPM" },
      ],
      features: [
        "Progressive die stamping",
        "Deep drawing capabilities",
        "Precision blanking",
        "High-volume production",
      ],
      description:
        "We house a range of mechanical and hydraulic presses ranging from 50 to 200 tonnes. Our facility handles sheet metal forming, blanking, and piercing with consistent quality for high-volume orders.",
      images: [
        "https://images.unsplash.com/photo-1510523214959-5778a48b8133?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1558223637-259160a0300a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1629806454790-2581699f8d5e?auto=format&fit=crop&q=80&w=800",
      ],
    },
    fabrication: {
      title: "Fabrication",
      specs: [
        { label: "CO2 Welding", value: "MIG/MAG 400A" },
        { label: "Arc Welding", value: "Inverter based" },
        { label: "Material", value: "MS, SS, Al" },
        { label: "Certifications", value: "AWS D1.1" },
      ],
      features: [
        "Structural fabrication",
        "Custom sheet metal assemblies",
        "Certified welders",
        "NDT testing available",
      ],
      description:
        "Our fabrication shop is equipped with advanced welding stations for CO2 and Arc welding. We specialize in robust structural assemblies, tanks, and frames, ensuring strong, clean, and tested welds.",
      images: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1531637318721-5079e00eb230?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1504068228551-ce0b61d47196?auto=format&fit=crop&q=80&w=800",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex text-slate-800 dark:text-slate-200">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 sticky top-0 h-screen overflow-y-auto hidden lg:block">
        <div className="p-6">
          <Link
            to="/"
            className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <nav className="space-y-2">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                  activeTab === key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="font-medium">{services[key].title}</span>
                {activeTab === key && <ChevronRight size={18} />}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 mt-auto bg-slate-50 dark:bg-slate-800/50 m-4 rounded-xl">
          <h3 className="font-semibold mb-2">Need a Custom Quote?</h3>
          <p className="text-sm text-slate-500 mb-4">
            Get a detailed estimation for your project.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden p-4 bg-white dark:bg-slate-900 sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <Link to="/" className="p-2 -ml-2">
            <ArrowLeft size={24} />
          </Link>
          <span className="font-bold text-lg">Detailed Services</span>
          <div className="w-10"></div>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden p-4 overflow-x-auto whitespace-nowrap bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`inline-block px-4 py-2 rounded-full mr-2 text-sm font-medium transition-all ${
                activeTab === key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              {services[key].title}
            </button>
          ))}
        </div>

        <main className="p-6 md:p-12 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                {services[activeTab].title}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl">
                {services[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Specs */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    Technical Specifications
                  </h3>
                  <div className="space-y-4">
                    {services[activeTab].specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700 last:border-0"
                      >
                        <span className="text-slate-500 dark:text-slate-400">
                          {spec.label}
                        </span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {services[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full mt-0.5">
                          <Check
                            size={14}
                            className="text-green-600 dark:text-green-400"
                          />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Gallery */}
              <h3 className="text-2xl font-bold mb-6">Recent Work Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services[activeTab].images.map((img, index) => (
                  <motion.div
                    key={index}
                    className="group relative aspect-video rounded-xl overflow-hidden cursor-zoom-in"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={img}
                      alt={`${services[activeTab].title} work ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                        View Project
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Action Button for Mobile */}
          <div className="fixed bottom-6 right-6 lg:hidden z-30">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 font-bold px-2">
                Get Quote
              </div>
            </button>
          </div>
        </main>
      </div>

      {/* Form Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-2">
          <Form embedded={true} />
        </div>
      </Modal>
    </div>
  );
};

export default DetailedServices;

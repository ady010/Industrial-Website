import React, { useState } from "react";
import logo from "../assets/logo.png";
import quality from "../assets/quality.png";
import reliable from "../assets/reliable.png";
import punctual from "../assets/punctual.png";

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-500 via-gray-300 to-gray-500">
      <nav className=" bg-transparent sticky top-0 z-50 bg-blur ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <img className=" h-25 w-25 " src={logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-white ">
              <a
                href="#form"
                className=" hover:text-red-400 font-medium transition-colors duration-200 border border-white px-2 py-1 rounded"
              >
                Get Quote
              </a>
              <a
                href="#home"
                className=" hover:text-gray-400 font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#services"
                className=" hover:text-gray-400 font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#contact"
                className=" hover:text-gray-400 font-medium transition-colors duration-200"
              >
                Contacts
              </a>
            </div>

            {/* Mobile Menu Button & Get Quote */}
            <div className="md:hidden flex items-center gap-4">
              <a
                href="#form"
                className="text-white text-sm font-medium bg-slate-900/50 border border-white/30 px-3 py-2 rounded-lg backdrop-blur-sm hover:bg-slate-900/70 transition-colors"
              >
                Get Quote
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-200 focus:outline-none p-1"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-7 w-7 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg absolute top-16 left-0 w-full p-4 border-t border-slate-700/50 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200 h-screen">
            <div className="flex flex-col space-y-6 items-center py-8">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 text-xl font-medium hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 text-xl font-medium hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 text-xl font-medium hover:text-white transition-colors"
              >
                Contacts
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* <div className='flex h-[80vh] w-[30vw]' images>
             <img src={VMC} alt="" />
             <img src={Hori} alt="" />
             <img src="" alt="" />
             <img src="" alt="" />
         </div> */}
      <div className="text-gray-700 h-[50vh] flex flex-col justify-center items-center text-4xl px-4 text-center">
        <div>
          <span className="font-bold">Accuracy</span>
          <span> in Machining.</span>
        </div>
        <div>
          <span className="font-bold">Precision</span>
          <span> in Pressings.</span>
        </div>
        <div>
          <span className="font-bold">Excellence</span>
          <span> in Fabrication.</span>
        </div>
      </div>
      <div className="bg-gray-0 rounded  text-white h-auto py-10 my-10 mx-4 md:mx-40 flex flex-col md:flex-row justify-center gap-8 md:gap-13 items-center text-center font-semibold ">
        <div className=" w-full px-4 md:px-0 md:w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Quality</span>
          <img className="h-20 w-20 mb-4" src={quality} alt="" />
          <p className="font-light text-xl">
            High-quality working solutions, even for the most complex projects
          </p>
        </div>
        <div className="w-full px-4 md:px-0 md:w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Reliability</span>
          <img className="h-20 w-20 mb-4" src={reliable} alt="" />
          <p className="font-light text-xl">
            This is our primary objective and we are organised and structured to
            respect the commitments made to our clients
          </p>
        </div>
        <div className="w-full px-4 md:px-0 md:w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Punctuality</span>
          <img className="h-20 w-20 mb-4" src={punctual} alt="" />
          <p className="font-light text-xl">
            Our organization is geared and optimized to manage all types of
            order within expected timeframes, from simplest to most structured
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";
import logo from "../assets/logo.png";
import quality from "../assets/quality.png";
import reliable from "../assets/reliable.png";
import punctual from "../assets/punctual.png";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-500 via-gray-300 to-gray-500">
      <nav className=" bg-transparent sticky top-0 z-50 bg-blur ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="shrink-0">
              <img className=" h-25 w-25" src={logo} alt="Logo" />
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
                href="#Home"
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                aria-label="Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className='flex h-[80vh] w-[30vw]' images>
            <img src={VMC} alt="" />
            <img src={Hori} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div> */}
      <div className="text-gray-700 h-[50vh] flex flex-col justify-center items-center text-4xl">
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
      <div className="bg-gray-0 rounded  text-white h-[30vh] my-10 m-40 flex justify-center gap-13 items-center text-center font-semibold ">
        <div className=" h-[25vh] w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Quality</span>
          <img className="h-20 w-20" src={quality} alt="" />
          <p className="font-light text-xl">
            High-quality working solutions, even for the most complex projects
          </p>
        </div>
        <div className="h-[25vh] w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Reliability</span>
          <img className="h-20 w-20" src={reliable} alt="" />
          <p className="font-light text-xl">
            This is our primary objective and we are organised and structured to
            respect the commitments made to our clients
          </p>
        </div>
        <div className="h-[25vh] w-[25vw] flex flex-col items-center">
          <span className="font-bold text-3xl mb-2">Punctuality</span>
          <img className="h-20 w-20" src={punctual} alt="" />
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

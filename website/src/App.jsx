import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Services from "./Components/Services";
import Customers from "./Components/Customers";
import Served from "./Components/Served";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import DetailedServices from "./Components/DetailedServices";

const Home = () => {
  return (
    <div>
      <div id="home">
        <MainPage />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="industries">
        <Served />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="customers">
        <Customers />
      </div>
      <div id="form">
        <Form />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<DetailedServices />} />
    </Routes>
  );
};

export default App;

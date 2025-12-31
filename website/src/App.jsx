import React from "react";
import MainPage from "./Components/MainPage";
import Services from "./Components/Services";
import Customers from "./Components/Customers";
import Served from "./Components/Served";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

const App = () => {
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

export default App;

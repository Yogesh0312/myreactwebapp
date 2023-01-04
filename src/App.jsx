import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/myreactwebapp/" element={<Home/>} />
        <Route  path="/myreactwebapp/about" element={<About/>} />
        <Route  path="/myreactwebapp/service" element={<Service/>} />
        <Route  path="/myreactwebapp/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
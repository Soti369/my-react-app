import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Register from "./components/pages/SignupPage";
import AboutPage from "./components/pages/AboutPage";
import { Link } from "react-router-dom";
import andsti from "./components/assets/andsti.png";
import Navbar from "./components/Navbar";
import HeaDer from "./components/HeaDer";
import FooTer from "./components/FooTer";
import LogoComponent from "./components/LogoComponent";

const App = () => {
  return (
    <div className="bg-faltu rounded-3xl mx-9 bg-center h-screen">
      <div>
        <HeaDer />
        <Router>
          <div className=" mt-6 ml-20 mr-20 flex justify-end py-8 px-5 fixed top-0 left-0 right-0 h-44">
            <Navbar />
            <Link to="/">
              <img
                src={andsti}
                alt="rrr"
                className="h-32 w-32 rounded-full mt-6 border-2 border-black hover:-translate-y-3 duration-1000"
              ></img>
            </Link>
          </div>

          <Routes>
            <Route path="/" excat element={<LogoComponent />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
        <FooTer />
      </div>
    </div>
  );
};

export default App;

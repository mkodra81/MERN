import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Loading from "./pages/Loading";
import Navigation from "./components/Navbar";
import Login from "./pages/Login"; // Import Login
import SignUp from "./pages/SignUp"; // Import SignUp
import "bootstrap/dist/css/bootstrap.min.css";
import MovieDetails from "./pages/MovieDetails";
import MovieCategory from "./pages/MovieCategory";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category/:categoryName" element={<MovieCategory />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

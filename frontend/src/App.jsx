import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Loading from "./pages/Loading";
import Navigation from "./components/Navbar";
import Login from "./pages/Login"; 
import SignUp from "./pages/SignUp"; 
import MovieDetails from "./pages/MovieDetails";
import MovieCategory from "./pages/MovieCategory";
import Footer from "./components/Footer";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <BrowserRouter>
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
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

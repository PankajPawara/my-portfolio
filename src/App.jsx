import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Snippets from "./pages/Snippets";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" />
      <div className="bg-gray-200 dark:bg-gray-900 text-gray-100 min-h-screen min-w-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/snippets" element={<Snippets />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

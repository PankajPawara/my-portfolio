import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaEye, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 mb-24">
        
              {/* Left Side - Text */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  <p className="text-3xl">Hi, I’m</p> <span className="text-purple-500">Pankaj Pawara</span>
                </h1>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  I’m a{" "}
                  <ReactTyped
                    strings={[
                      "Full Stack Developer 💻",
                      "Problem Solver 🧠",
                      "Tech Enthusiast 🚀",
                      "Team Player 🤝",
                    ]}
                    typeSpeed={20}
                    backSpeed={20}
                    loop
                  />
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-md">
                  I am a passionate and detail-oriented <b>Full Stack Developer</b> eager to build scalable and user-friendly web applications.
                  I recently completed my B.Tech in Computer Engineering and am constantly learning new technologies like React, Node.js, and MongoDB.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  I love building modern, scalable web applications and learning new technologies to craft meaningful digital experiences.
                </p>
        
                <div className="flex justify-center md:justify-start gap-4 mb-6">
                  <Link
                    to="https://github.com/PankajPawara"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
                  >
                    <FaGithub size={35}/>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/pankaj-pawara-1a3026221/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
                  >
                    <FaLinkedin size={35}/>
                  </Link>
                  <Link
                    to="https://leetcode.com/u/Pankaj_Pawara_/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
                  >
                    <SiLeetcode size={35} />
                  </Link>
                  <Link
                    to="/contact"
                    rel="noreferrer"
                    className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
                  >
                    <FaEnvelope size={35} />
                  </Link>
                </div>
        
                <div className="flex justify-center md:justify-start gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 font-bold dark:text-white border border-purple-600 rounded-lg hover:text-purple-500 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                  >
                    <FaEye size={20} /> View Projects
                  </Link>
                  <a
                    href="/Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 font-bold rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
                  >
                   <FaDownload /> Download Resume
                  </a>
                </div>
              </div>
        
              {/* Right Side - Image */}
              <div className="flex-1 flex justify-center mb-10 md:mb-0 ">
                <img
                  src="Profile-pro.jpg"
                  alt="Profile"
                  className="w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 rounded-full object-cover border-4 border-purple-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_6px_rgba(168,85,247,0.9)]"
                />
              </div>
            </section>
    );
};

export default Home;

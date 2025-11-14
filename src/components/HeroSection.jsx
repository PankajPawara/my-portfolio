import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
      
      {/* Left Side - Text */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Hi, I’m <span className="text-purple-500">Pankaj Pawara</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          I’m a{" "}
          <ReactTyped
            strings={[
              "web Developer 🌐",
              "MERN Stack Developer 🌐",
              "Full Stack Developer 💻",
              "Problem Solver 🧠",
              "Tech Enthusiast 🚀",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
          I love building modern, scalable web applications and learning new technologies to craft meaningful digital experiences.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-700 dark:text-gray-300 text-2xl hover:text-purple-500"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            View Projects
          </Link>
          <a
            href="/files/Resume.pdf"
            download
            className="px-6 py-3 border border-purple-600 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

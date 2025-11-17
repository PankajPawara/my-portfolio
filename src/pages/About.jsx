import React from "react";
import { FaEye } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Hi, I'm <span className="text-purple-500">Pankaj Pawara</span></h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate and self-driven developer with a strong interest in building scalable web applications and intuitive user interfaces. I enjoy transforming ideas into real, functional projects using technologies like Java, React, Node.js, MongoDB and MySQL. I’m a quick learner, detail-oriented, and always eager to take on new challenges.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I recently completed my B.Tech in Computer Engineering and am constantly learning new technologies like React, Node.js, and MongoDB.
        </p>
        <div className="flex gap-4 mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 font-bold dark:text-white border border-purple-600 rounded-lg hover:text-purple-500 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"><FaEye size={20} /> View Projects</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 font-bold rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"><IoIosMail size={25}/> Contact Me</Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-purple-500 my-4">Career Objective</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I aim to build a strong career as a Full Stack Developer where I can apply my technical knowledge, problem-solving skills, and creativity to develop impactful digital solutions. My goal is to contribute to modern, user-focused applications while continuously learning new technologies and improving my craft.
      </p>
      <hr className="my-8 border-gray-700" />

      <h2 className="text-2xl font-bold text-purple-500 mb-4">What I’m Currently Working On?</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m currently enhancing my portfolio projects, including developing a full-featured Learning Management System (SkillForge) with user management, admin features, payment integration using Stripe, course management, and cloud media storage.
        I’m also working on improving UI/UX elements, responsive design, and theme handling in my personal portfolio website.
      </p>
      <hr className="my-8 border-gray-700" />

      <h2 className="text-2xl font-bold text-purple-500 mb-4">What I’m Passionate About?</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m passionate about building applications that solve real-world problems and simplify daily tasks.
        My interests focus on:
      </p>

      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <li>Full Stack Web Development</li>
        <li>Creating Intuitive User Interfaces</li>
        <li>Cloud technologies and deployment</li>
        <li>Writing clean and maintainable code</li>
        <li>Learning New Technologies and Frameworks</li>
        <li>Problem Solving and Algorithmic Thinking</li>
        <li>Collaborating in Team Environments</li>
        <li>Continuous Learning and Self-Improvement</li>
      </ul>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        I enjoy exploring new tools and frameworks that make development faster, smarter, and more efficient.
      </p>
      <hr className="my-8 border-gray-700" />
      
      <h2 className="text-2xl font-bold text-purple-500 mb-4">My Tech Journey (Diploma → Degree → Projects)</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        My journey in the world of technology began during my Diploma in Computer Engineering, where I developed strong fundamentals in programming, databases, and application development. This foundation inspired me to pursue a Bachelor’s degree in Computer Engineering, where I expanded my knowledge in full-stack development, cloud services, and real-time applications.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Over the years, I have worked on several meaningful projects, the most notable being:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <li><b>SkillForge LMS (Final Year Project)</b> – A full-stack Learning Management System built using React, Node.js, MongoDB, Cloudinary, and Stripe.</li>
        <li><b>Student Dashboard SPA</b> – A complete CRUD application with search, sort, and image handling built using React + ShadCN UI.</li>
        <li><b>Portfolio Website</b> – A responsive and theme-friendly personal portfolio showcasing my work.</li>
        <li><b>CloudNotes Project</b> – A cloud-based notes application with backend deployment and environment configuration.</li>
      </ul>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
        Each project has helped me grow as a developer and shaped my ability to build modern, scalable web applications from scratch.
      </p>
      

    </section>
  );
};

export default About;

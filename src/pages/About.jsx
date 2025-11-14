import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-400">About Me</h2>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-purple-500">Pankaj Pawara</span></h1>
        <p className="text-lg text-gray-300 mb-8">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <div className="flex gap-4">
          <a href="projects" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">View Projects</a>
          <a href="contact" className="px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">Contact Me</a>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">
        I am a passionate and detail-oriented developer eager to build scalable and user-friendly web applications.
        I recently completed my B.Tech in Computer Engineering and am constantly learning new technologies like React, Node.js, and MongoDB.
      </p>
    </section>
  );
};

export default About;

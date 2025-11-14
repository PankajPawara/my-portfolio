import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-purple-500">Your Name</span></h1>
                <p className="text-lg text-gray-300 mb-8">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
                <div className="flex gap-4">
                    <a href="projects" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">View Projects</a>
                    <a href="contact" className="px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">Contact Me</a>
                </div>
            </div>

        </>
    );
};

export default Home;

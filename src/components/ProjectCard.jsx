import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, desc, img, tech = [], github, live, status }) => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg border-gray-300 dark:border-gray-700 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)]">
      <img src={img} alt={title} className='w-full overflow-y-hidden p-2 border-t border-gray-300 dark:border-gray-700 rounded-t-xl'></img>
      <div className="px-6 py-2">
        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {title}
          </h3>

          {/* Status Badge */}
          {status && (
            <span
              className={`text-md -top-3 right-4 absolute px-2 py-1 rounded-full font-bold flex items-center gap-1
              ${status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-500 text-black"}`}
            >
              {status === "Completed" ? <FaCheckCircle /> : <FaHourglassHalf />} {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {github && (
            <Link
              to={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-purple-600 font-bold rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
            >
              <Github size={20} />
              GitHub
            </Link>
          )}

          {live && (
            <Link
              to={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 font-bold dark:text-white border border-purple-600 rounded-lg hover:text-purple-500 hover:bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]"
            >
              <ExternalLink size={20} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

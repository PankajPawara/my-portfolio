import React from "react";

const ProjectCard = ({ title, desc, tech, github, live }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{desc}</p>
      <p className="text-sm text-gray-500 mb-3">Tech: {tech}</p>
      <div className="flex gap-3">
        <a href={github} target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">GitHub</a>
        {live && <a href={live} target="_blank" rel="noreferrer" className="text-purple-500 hover:underline">Live Demo</a>}
      </div>
    </div>
  );
};

export default ProjectCard;

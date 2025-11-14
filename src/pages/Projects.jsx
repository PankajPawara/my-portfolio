import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "SkillForge LMS",
      desc: "A full-stack Learning Management System built using React, Node.js, MongoDB, and Stripe.",
      tech: "React, Node.js, MongoDB, Stripe",
      github: "https://github.com/yourname/skillforge",
      live: "https://skillforge-demo.vercel.app"
    },
    {
      title: "CloudNotes",
      desc: "A cloud-based notes app with secure authentication and sync features.",
      tech: "React, Express, MongoDB",
      github: "https://github.com/yourname/cloudnotes",
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-500 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;

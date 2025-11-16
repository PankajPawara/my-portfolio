import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "SkillForge LMS",
      desc: "A full-stack Learning Management System featuring user roles, course management, secure payments, video hosting, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Stripe"],
      github: "https://github.com/yourname/skillforge",
      live: "https://skillforge-demo.vercel.app"
    },
    {
      title: "CloudNotes",
      desc: "A cloud-based notes platform with JWT authentication, secure access, search, and real-time sync features.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      github: "https://github.com/yourname/cloudnotes",
    },
    {
      title: "Portfolio Website",
      desc: "A fully responsive personal portfolio built using React + Tailwind with dark mode, animations, and smooth interactions.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourname/portfolio",
      live: "https://your-portfolio.vercel.app"
    },
    {
      title: "E-Commerce API",
      desc: "A secure backend API with authentication, product management, orders, cart, and payment integration.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/yourname/ecommerce-api",
    },
    {
      title: "Student Management Dashboard",
      desc: "A powerful dashboard with CRUD operations, filtering, sorting, form validations, and responsive UI.",
      tech: ["React", "ShadCN UI", "Tailwind"],
      github: "https://github.com/yourname/student-dashboard",
    },
    {
      title: "WeatherPulse",
      desc: "Weather app with live API data, animated UI, and dynamic backgrounds based on conditions.",
      tech: ["React", "OpenWeather API", "CSS Animations"],
      github: "https://github.com/yourname/weatherpulse",
      live: "https://weatherpulse-demo.vercel.app"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

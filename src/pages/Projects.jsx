import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
     {
      img:"https://github.com/PankajPawara/Assets/blob/main/portfolio.png?raw=true",
      title: "My Portfolio Website",
      desc: "A fully responsive personal portfolio built using React + Tailwind with dark mode, animations, and smooth interactions.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/PankajPawara/my-portfolio",
      live: "https://pankaj-pawara.onrender.com",
      status: "Completed"
    },
    {
      img:"https://github.com/PankajPawara/Assets/blob/main/studentdash.png?raw=true",
      title: "Student Management Dashboard",
      desc: "A powerful dashboard with CRUD operations, filtering, sorting, form validations, and responsive UI.",
      tech: ["React", "ShadCN UI", "Tailwind"],
      github: "https://github.com/PankajPawara/Student-Dashboard-repo",
      live: "https://pankajpawara.github.io/Student-Dashboard-repo/",
      status: "Completed"
    },
    {
      img:"https://github.com/PankajPawara/Assets/blob/main/cloudnotes.png?raw=true",
      title: "CloudNotes",
      desc: "A cloud-based notes platform with JWT authentication, secure access, search, and real-time sync features.",
      tech: ["React", "Express", "MongoDB", "JWT"],
      github: "https://github.com/PankajPawara/CloudNotes-A-Note-keeping-website",
      live: "https://cloudnotes-sj43.onrender.com",
      status: "Completed"
    },
    {
      img:"https://github.com/PankajPawara/Assets/blob/main/skillforge.png?raw=true",
      title: "SkillForge LMS",
      desc: "A full-stack Learning Management System featuring user roles, course management, secure payments, video hosting, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Cloudinary", "Stripe"],
      // github: "https://github.com/yourname/skillforge",
      // live: "https://skillforge-demo.vercel.app"
      status: "In Progress"
    },
    {
      img:"https://github.com/PankajPawara/Assets/blob/main/dabba.png?raw=true",
      title: "Dabba.com - Mess Management System",
      desc: "A comprehensive mess management system with user roles, meal tracking, expense management, and real-time notifications.",
      tech: ["Java", "SpringBoot", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/PankajPawara/Dabba.com-MessManagementSystem",
      status: "In Progress"
    },
   
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center text-purple-500 mb-12">
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

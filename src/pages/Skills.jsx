import React from "react";
import SkillCard from "../components/SkillCard";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs, FaJava, FaGitAlt, FaStripeS, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiApachetomcat, SiCloudinary, SiEclipseide, SiExpress, SiGithub, SiHibernate, SiMongodb, SiSpringboot } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { data } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { TbBrandXamarin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {

  const frontend = [
  { name: "HTML", icon: <FaHtml5 />, description: "Markup language used to structure web pages and content on the browser." },
  { name: "CSS", icon: <FaCss3 />, description: "Stylesheet language used for designing attractive and responsive layouts." },
  { name: "JavaScript", icon: <FaJs />, description: "High-level programming language that enables interactive web pages." },
  { name: "React.js", icon: <FaReact />, description: "Frontend JavaScript library for building fast, dynamic, component-based UIs." },
  {name: "Tailwind CSS", icon: <RiTailwindCssFill />, description: "Utility-first CSS framework for rapidly building custom user interfaces." },
  {name:"Bootstrap", icon: <FaBootstrap />, description: "Popular CSS framework for developing responsive and mobile-first websites."}
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime environment used for server-side and backend development." },
  { name: "Express.js", icon: <SiExpress />, description: "Minimal and flexible Node.js framework for building APIs and backend logic." },
  { name: "Java", icon: <FaJava />, description: "Robust object-oriented programming language used in enterprise applications." },
  { name: "Spring Boot", icon: <SiSpringboot />, description: "Java-based framework for building production-ready backend systems easily." },
  { name: "Hibernate", icon: <SiHibernate />, description: "ORM framework that simplifies database communication using Java objects." },
];

const database = [
  { name: "MySQL", icon: <FaDatabase />, description: "Popular relational database used for structured data and transactions." },
  { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL document-based database ideal for scalable web applications." },
  { name: "SQLite", icon: <FaDatabase />, description: "Lightweight embedded SQL database used for mobile & small apps." },
];

const platforms = [
  { name: "VS Code", icon: <VscVscode />, description: "Lightweight yet powerful code editor with extensive extensions." },
  { name: "Eclipse IDE", icon: <SiEclipseide />, description: "Java-focused IDE used for enterprise development." },
  { name: "Git", icon: <FaGitAlt />, description: "Version control system for tracking changes in source code." },
  { name: "Github", icon: <SiGithub />, description: "Cloud platform for hosting repositories and collaborating on code." },
  { name: "Tomcat", icon: <SiApachetomcat />, description: "Java servlet container used to run Java-based web apps." },
];

const other = [
  { name: "REST API", icon: <IoSettings />, description: "Architectural style for building structured, scalable APIs." },
  { name: "Stripe", icon: <FaStripeS />, description: "Secure online payment platform used in modern web apps." },
  { name: "Cloudinary", icon: <SiCloudinary />, description: "Cloud-based media storage and optimization service." },
  { name: "Xamarin", icon: <TbBrandXamarin />, description: "Cross-platform mobile framework using C# for app development." },
];


  return (
    <section className="max-w-6xl mx-auto px-6 py-16 mb-24">
      <h2 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-8">My Skills</h2>

      {/* Frontend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Frontend:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {frontend.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Backend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Backend:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {backend.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Database Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Database:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {database.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Tools Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Tools:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Other Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Other:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {other.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import SkillCard from "../components/SkillCard";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs, FaJava, FaGitAlt, FaStripeS } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiApachetomcat, SiCloudinary, SiEclipseide, SiExpress, SiGithub, SiHibernate, SiMongodb, SiSpringboot } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { data } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { TbBrandXamarin } from "react-icons/tb";


const Skills = () => {

  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JS", icon: <IoLogoJavascript /> },
    { name: "React.js", icon: <FaReact /> },
  ];
  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Hibernate", icon: <SiHibernate /> },
  ];

  const database = [
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: < FaDatabase /> },
  ];

  const platforms = [
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Eclipse IDE", icon: <SiEclipseide /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Github", icon: <SiGithub /> },
    { name: "Tomcat", icon: <SiApachetomcat /> },
  ];
  const other = [
    { name: "REST API", icon: <IoSettings /> },
    { name: "Stripe", icon: <FaStripeS /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
    { name: "Xamarin", icon: <TbBrandXamarin /> },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 mb-24">
      <h2 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-8">My Skills</h2>

      {/* Frontend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Frontend Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {frontend.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Backend Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Backend Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {backend.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Database Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Database Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {database.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Tools Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Tools Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
        <hr className="my-8 border-gray-700" />
      </div>

      {/* Other Skills */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Other Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {other.map((s, i) => <SkillCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;

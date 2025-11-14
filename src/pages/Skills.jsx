import React from "react";
import SkillCard from "../components/SkillCard";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <FaDatabase /> },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-500 mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => <SkillCard key={i} {...s} />)}
      </div>
    </section>
  );
};

export default Skills;

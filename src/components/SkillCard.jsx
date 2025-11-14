import React from "react";

const SkillCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition">
      <div className="text-purple-500 text-3xl mb-2">{icon}</div>
      <p className="text-gray-700 dark:text-gray-200">{name}</p>
    </div>
  );
};

export default SkillCard;

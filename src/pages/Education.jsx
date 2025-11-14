import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
        Education
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">

        <div className="bg-gray-800 p-6 rounded-xl text-white shadow">
          <h2 className="text-xl font-semibold">B.Tech in Computer Engineering</h2>
          <p className="text-gray-300">SSVPS's College of Engineering, Dhule</p>
          <p className="text-gray-400 mt-1">2022 - 2025 | CGPA: 8.00</p>
          <span className="text-sm bg-indigo-600 px-2 py-1 rounded-md mt-2 inline-block">
            Student of the Year
          </span>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-white shadow">
          <h2 className="text-xl font-semibold">Diploma in Computer Engineering</h2>
          <p className="text-gray-300">Nikam Institute of Technology, Gondur</p>
          <p className="text-gray-400 mt-1">2020 - 2022 | 86.57%</p>
          <span className="text-sm bg-indigo-600 px-2 py-1 rounded-md mt-2 inline-block">
            1st Rank Holder
          </span>
        </div>

      </div>
    </section>
  );
};

export default Education;

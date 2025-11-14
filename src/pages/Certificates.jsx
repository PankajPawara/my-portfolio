import React from "react";

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <div className="bg-gray-800 p-6 rounded-xl text-white shadow">
          <h2 className="text-xl font-semibold">Java Full Stack Development</h2>
          <p className="text-gray-300 mt-2">Symbiosis Skills & Professional University, Pune</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-white shadow">
          <h2 className="text-xl font-semibold">Android & iOS App Development</h2>
          <p className="text-gray-300 mt-2">Infotech Incorporate, Dhule</p>
        </div>

      </div>
    </section>
  );
};

export default Certificates;

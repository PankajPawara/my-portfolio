import React from "react";

const Certificates = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-8">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <div className="bg-gray-800 p-6 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]">
          <h2 className="text-xl font-semibold">Java Full Stack Development</h2>
          <p className="text-gray-300 mt-2">Symbiosis Skills & Professional University, Pune</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]">
          <h2 className="text-xl font-semibold">Android & iOS App Development</h2>
          <p className="text-gray-300 mt-2">Infotech Incorporate, Dhule</p>
        </div>

      </div>
    </section>
  );
};

export default Certificates;

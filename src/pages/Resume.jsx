import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-purple-600 dark:text-purple-500 mb-4">
          My Resume
        </h1>

        {/* Resume Info */}
        <p className="text-gray-300 mb-4 text-lg">
          You can view my professional resume below or download it for offline access.
        </p>

        {/* Resume Preview (iframe for PDF) */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
          <iframe
            src="/Resume.pdf"
            title="My Resume"
            className="w-full h-300 border-none"
          ></iframe>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Resume.pdf"
            download
            className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://drive.google.com/your-resume-link" // optional public link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
          >
            View on Google Drive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

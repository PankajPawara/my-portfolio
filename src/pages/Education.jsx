import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBuildingColumns, FaSchool, FaDownload } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Engineering",
      institution:
        "SSVPS'S Bapusaheb Shivajirao Deore College of Engineering, Dhule",
      university: "Dr. Babasaheb Ambedkar Technological University, Lonere",
      duration: "2022 - 2025",
      grade: "CGPA: 8.00 | 75%",
      honors: "Student of the Year",
      summary:
        "Focused on full-stack development, algorithms, and cloud fundamentals. Built multiple MERN projects and integrated payments with Stripe.",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Nikam Institute of Technology, Gondur",
      university: "Maharashtra State Board of Technical Education, Mumbai",
      duration: "2020 - 2022",
      grade: "86.57%",
      honors: "1st Rank Holder",
      summary:
        "Solid foundation in core computer engineering subjects, practical labs and project-based learning.",
    },
    {
      degree: "12th Grade",
      institution:
        "SSVPS'S LK Dr. P. R. Ghogre Jr. Science College, Dhule",
      university: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
      duration: "2019 - 2020",
      grade: "57.54%",
      summary: "Science stream with focus on mathematics and physics.",
    },
    {
      degree: "10th Grade",
      institution: "Mahatma Fule Vidyalaya, Dhanur",
      university: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune",
      duration: "2017 - 2018",
      grade: "68.60%",
      summary: "Completed secondary education with strong extracurricular participation.",
    },
  ];

  // Right column highlights (certs & skills summary)
  const highlights = [
    { title: "Java Full Stack", issuer: "Symbiosis Skills", year: "2024" },
    { title: "Xamarin Mobile Apps", issuer: "Infotech Incorporate", year: "2023" },
  ];

  return (
    <section className="min-h-screen bg-gray-200 dark:bg-gray-900 px-6 py-16">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-purple-600 dark:text-purple-500 mb-4">
              Education
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-center mx-auto">
              A concise academic timeline highlighting my degrees, institutions, grades,
              and honors.
            </p>
          </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: Education Details (main column) */}
        <div className="lg:col-span-2 space-y-6">

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <article
                key={idx}
                className="relative border-l-8 border-gray-400 hover:border-purple-500 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700
                  shadow-sm hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)] hover:scale-[1.01] transition-all duration-300"
              >
                {/* Left accent badge for honors (if any) */}
                {edu.honors && (
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                      bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 font-semibold 
                      shadow-[0_0_12px_rgba(255,215,0,0.85)] animate-pulse border border-yellow-600 z-10">
                      <GrAchievement /> {edu.honors}
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-purple-50 dark:bg-purple-900/30
                      flex items-center justify-center text-purple-600 dark:text-purple-300
                      border border-purple-100 dark:border-purple-700">
                      <MdSchool size={22} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-purple-600 dark:text-gray-100">
                      {edu.degree}
                    </h2>
                    <p className="mt-1 text-lg font-medium text-gray-700 dark:text-purple-200 flex items-center gap-2">
                      <FaSchool /> {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 flex items-center gap-2">
                      <FaBuildingColumns /> {edu.university}
                    </p>

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-600 dark:text-gray-300">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt /> <strong>{edu.duration}</strong>
                      </span>
                      <span className="text-sm font-semibold px-2 py-1 bg-orange-200 dark:bg-orange-500 rounded-md">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {edu.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT: Sidebar (certificates, quick stats, resume CTA) */}
        <aside className="space-y-6">
          {/* Summary Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Quick Facts
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center justify-between">
                <span>Degrees</span>
                <span className="font-semibold">4</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Top Honors</span>
                <span className="font-semibold">Student of the Year</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Rank</span>
                <span className="font-semibold">1st (Diploma)</span>
              </li>
            </ul>
          </div>

          {/* Certificates */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Certificates</h3>
            <div className="space-y-3">
              {highlights.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-300">
                    <PiCertificateBold size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{c.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{c.issuer} · {c.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Download Resume</h3>
            <p className="text-sm mb-4">Clean PDF version suitable for HR & recruiters.</p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow px-4 py-2 rounded-md font-semibold transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Callout: Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1">Want to discuss my career?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Drop a message — I'm open to internships & roles.</p>
            <a href="/contact" className="px-4 py-2 border border-purple-600 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(147,51,234,0.8)]">Go to Contact →</a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Education;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-4 mt-10">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Name. Built with ❤️ using React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;

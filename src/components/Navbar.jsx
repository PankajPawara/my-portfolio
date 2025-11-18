import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaCode, FaEnvelope, FaHome, FaUserEdit } from "react-icons/fa";
import { BsPersonFillExclamation } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdSchool } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const pages = [
    {page:"Home", icon:<FaHome />},
    {page:"About", icon:<BsPersonFillExclamation />},
    {page:"Skills", icon:<FaCode />},
    {page:"Projects", icon:<CgWebsite />},
    {page:"Education", icon:<MdSchool />},
    {page:"Certificates", icon:<PiCertificateBold />},
    // {page:"Snippets", icon:<FaCode />},
    {page:"Resume", icon:<FaUserEdit />},
    {page:"Contact", icon:<FaEnvelope />},
  ];
  const icons = [
    <FaHome />,
    <BsPersonFillExclamation />,
    <FaCode />,
    <CgWebsite />,
    <MdSchool />,
    <PiCertificateBold />,
    // <FaCode />,
    <FaUserEdit />,
    <FaEnvelope />,
  ]
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex md:gap-2 lg:gap-4 justify-between items-center h-16">
        
        {/* Logo */}
        <Link
          to="/"
          className="sm:text-xl md:text-2xl font-extrabold text-purple-500"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className=" hidden md:flex md:gap-4 lg:gap-8 items-center overflow-x-auto px-2">
          {pages.map((item) => (
            <Link
              key={item.page}
              to={item.page === "Home" ? "/" : `/${item.page.toLowerCase()}`}
              className={`pb-1 font-bold text-gray-700 dark:text-gray-300 hover:text-purple-500 hover:scale-110 transition ${
                location.pathname ===
                (item.page === "Home" ? "/" : `/${item.page.toLowerCase()}`)
                  ? "font-extrabold text-purple-600 border-b-4 border-purple-500"
                  : ""
              }`}
            >
              {item.page}
            </Link>
          ))}

          {/* Theme Toggle */}
          {/* <button onClick={toggleTheme} className="ml-2 text-gray-800 dark:text-gray-200">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (dim background when menu is open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-gray-100 dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col px-6 space-y-4">
          {pages.map((item) => (
            <Link
              key={item.page}
              to={item.page === "Home" ? "/" : `/${item.page.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`inline-flex items-center gap-2 pl-4 text-gray-700 dark:text-gray-200 text-lg font-semibold hover:text-purple-500 transition ${
                location.pathname ===
                (item.page === "Home" ? "/" : `/${item.page.toLowerCase()}`)
                  ? "font-bold text-purple-600 px-1 border-2 border-purple-500 rounded-md scale-105"
                  : ""
              }`}
            >
              {item.icon} {item.page}
            </Link>
          ))}

          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="mt-6 flex items-center gap-3 text-purple-600 dark:text-gray-200 text-lg font-extrabold"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 font-bold text-xl border-b border-gray-700">
        Dashboard
      </div>
      <nav className="mt-4 flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-600"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-600"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 ${isActive ? "bg-gray-700" : "hover:bg-gray-600"}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

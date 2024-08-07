import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 p-5 flex gap-6 items-center justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

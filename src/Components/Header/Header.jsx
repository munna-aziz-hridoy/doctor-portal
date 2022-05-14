import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/">home</Link>
      </li>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/about">about</Link>
      </li>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/appointment">appointment</Link>
      </li>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/reviews">reviews</Link>
      </li>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/contact">contact us</Link>
      </li>
      <li className="capitalize hover:bg-accent hover:text-slate-100 duration-200 rounded-lg">
        <Link to="/login">login</Link>
      </li>
    </>
  );

  return (
    <div className="shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="navbar  justify-between h-16 container mx-auto">
        <div className="navbar-start w-full lg:w-fit justify-between">
          <div className="dropdown order-2">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2 right-0"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl capitalize">
            doctor portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-4">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

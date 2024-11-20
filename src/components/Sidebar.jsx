import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="btn btn-dark position-fixed top-0 start-0 m-3"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        style={{ zIndex: 1050 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"

        >
          <path
            fillRule="evenodd"
            d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`text-bg-dark sidebarr ${isOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        style={{
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1040,
          overflowX: "hidden",
          transition: "width 0.3s ease-in-out",
          width: isOpen ? "100px" : "0",

        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none p-3"
        >
          <span className={isOpen ? "d-inline" : "d-none"}> </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column ">
          <li>
            <NavLink to="/" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/action" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Action
            </NavLink>
          </li>
          <li>
            <NavLink to="/thriller" className="nav-link text-white " onClick={() => setIsOpen(false)}>
              Thriller
            </NavLink>
          </li>
          <li>
            <NavLink to="/drama" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Drama
            </NavLink>
          </li>
          <li>
            <NavLink to="/comedy" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Comedy
            </NavLink>
          </li>
          <li>
            <NavLink to="/mystry" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Mystry
            </NavLink>
          </li>
          <li>
            <NavLink to="/adventure" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Adventure
            </NavLink>
          </li>
          <li>
            <NavLink to="/horror" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Horror
            </NavLink>
          </li>
          <li>
            <NavLink to="/crime" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Crime
            </NavLink>
          </li>
          <li>
            <NavLink to="/romance" className="nav-link text-white" onClick={() => setIsOpen(false)}>
              Romance
            </NavLink>
          </li>
        </ul>
      </div >
    </>
  );
};

export default Sidebar;

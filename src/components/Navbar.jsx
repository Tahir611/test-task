import React from "react";
import logo from "../assets/images/Logo.png";
import darkLogo from "../assets/images/dark-logo.png";
import menu from "../assets/images/menu_icon.png";
import darkMenu from "../assets/images/dark-menu.png"

export const Navbar = ({ isDark, setIsDark }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setIsDark(!isDark);
  };
  console.log(isDark);

  return (
    <nav className="navbar navbar-expand-lg py-4 position-relative">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={!isDark ? logo : darkLogo} alt="logo" />
          <a
            style={!isDark ? { color: "#000" } : { color: "#fff" }}
            className="navbar-brand logo ps-3 pe-3"
            href="/"
          >
            Test App
          </a>
          {!isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
            >
              <path d="M0.999863 0V32" stroke="black" stroke-opacity="0.1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="32"
              viewBox="0 0 2 32"
              fill="none"
            >
              <path d="M0.999878 0V32" stroke="white" stroke-opacity="0.2" />
            </svg>
          )}
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon" /> */}
          <img src={darkMenu} alt="menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item list-items px-4">
              <a
                className={`nav-link ${!isDark ? "light-link" : "dark-link"}`}
                aria-current="page"
                href="/"
              >
                Services
              </a>
            </li>
            <li className="nav-item list-items px-4">
              <a
                className={`nav-link ${!isDark ? "light-link" : "dark-link"}`}
                href="/"
              >
                Features
              </a>
            </li>
            <li className="nav-item list-items px-4">
              <a
                className={`nav-link ${!isDark ? "light-link" : "dark-link"}`}
                href="/"
              >
                Demo
              </a>
            </li>
            <li
              className={`nav-item ${
                !isDark ? "active-mode" : "dark-active-mode"
              } px-3 mt-1 d-md-block d-none`}
            >
              <a
                href="/"
                onClick={(e) => handleClick(e)}
                className={`nav-link ${!isDark ? "light-link" : "dark-link"}`}
              >
                Active Dark Mode
              </a>
            </li>
          </ul>
          <div className="d-none d-md-flex">
            <button className={`${!isDark ? "text-light login-btn-light" : "text-dark login-btn-dark"}  px-3`}>Login</button>
            <img className="ms-5" src={!isDark ? menu : darkMenu} alt="menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

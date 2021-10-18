import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-lg-top self-navbar d-flex justify-content-end align-items-center self-nav">
      <div className="container w-50 ms-0 ps-3">
        <Link to="/home">
          <img
            className="rounded-circle"
            src={logo}
            alt=""
            width="111"
            height="92"
          />
        </Link>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right bg-light me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid d-flex">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto pe-lg-5 mb-2 mb-lg-0 fw-bold fs-5">
            <li className="nav-item">
              <Link
                className="nav-link active text-white
                                link-hover"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white link-hover"
                aria-current="page"
                to="/trainer"
              >
                Trainer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white
                                link-hover"
                aria-current="page"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            {user.email && (
              <li className="nav-item text-white p-2">{user.email}</li>
            )}
            {user.email ? (
              <button onClick={logOut}>Log Out</button>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link active text-white
                                link-hover"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

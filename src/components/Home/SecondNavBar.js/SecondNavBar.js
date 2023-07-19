import React, { useContext, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import OurServices from "../../OurServices/OurServices";
import { AuthContext } from "../../../context/AuthContext";

const SecondNavBar = () => {
  const [active, setActive] = useState(0);
  const auth = useContext(AuthContext);
  console.log(auth);
  const logoutHandle = () => {
    auth.setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <i className="fa fa-car me-3"></i>CarServ
        </h2>
      </Link>

      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          {/* <ul>
            <li> */}
          <NavLink to="/" className="nav-item nav-link ">
            Home
          </NavLink>
          {/* </li>
            <li> */}
          <NavLink to="/about" className="nav-item nav-link ">
            About
          </NavLink>
          {/* </li>
            <li> */}
          <NavLink to="/services" className="nav-item nav-link">
            services
          </NavLink>
          {/* </li> */}
          {/* </ul> */}

          <NavLink to="/contact" className="nav-item nav-link">
            Contact
          </NavLink>
          {auth.token === null && (
            <>
              <NavLink to="/login" className="nav-item nav-link">
                Login
              </NavLink>
              <NavLink to="/signup" className="nav-item nav-link">
                signup
              </NavLink>
            </>
          )}
          {auth.token !== null && (
            <>
              <NavLink to="/mybooking" className="nav-item nav-link">
                Mybooking
              </NavLink>
              <NavLink
                to="/"
                className="nav-item nav-link"
                onClick={logoutHandle}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>

        {auth.token !== null && (
          <NavLink to="/booking">
            <a
              href="#booking-container"
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
            >
              book now<i className="fa fa-arrow-right ms-3"></i>
            </a>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default SecondNavBar;

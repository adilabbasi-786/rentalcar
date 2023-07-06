import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import OurServices from "../../OurServices/OurServices";

const SecondNavBar = () => {
  const [active, setActive] = useState(0);
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
        </div>
        <a
          target="_blank"
          href="https://www.facebook.com/"
          className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >
          Get A Quote<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default SecondNavBar;

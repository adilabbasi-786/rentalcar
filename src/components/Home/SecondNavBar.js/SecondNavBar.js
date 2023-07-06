import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import OurServices from "../../OurServices/OurServices";

const SecondNavBar = () => {
  const [data, setData] = useState([]);
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
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link ">
            About
          </Link>
          <Link to="/services" className="nav-item nav-link">
            services
          </Link>

          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu fade-up m-0">
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Technicians
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
          Get A Quote<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default SecondNavBar;

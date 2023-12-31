import React, { useContext } from "react";
import { WebContext } from "../../../context/WebContext";

const TopNavBar = () => {
  const Webinfo = useContext(WebContext);

  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <small>{Webinfo.data.attributes.address}</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2"></small>
            <small>{Webinfo.data.attributes.opening_hours}</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <small>+012 345 6789</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="https://twitter.com/"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-sm-square bg-white text-primary me-1"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-sm-square bg-white text-primary me-0"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

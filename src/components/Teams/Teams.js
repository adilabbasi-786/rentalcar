import React, { useEffect, useState } from "react";
import { URL } from "../../utills";

const Teams = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(`${URL}/api/teams?populate=*`);
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">
              // Our Technicians //
            </h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>
          <div className="row g-4">
            {data.map((item) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={item.id}
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={`${URL}${item.attributes.img.data.attributes.url}`}
                      alt=""
                    />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">{item.attributes.name}</h5>
                    <small>{item.attributes.Designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;

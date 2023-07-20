import React, { useEffect, useState } from "react";
import { URL } from "../../utills";

const Service = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let request = await fetch(`${URL}/api/services`);
      let res = await request.json();
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {data.map((item) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={item.id}
              >
                <div className="d-flex py-5 px-4">
                  <i
                    className={`fa ${item.attributes.icon} fa-3x text-primary flex-shrink-0`}
                  ></i>
                  <div className="ps-4">
                    <h5 className="mb-3">{item.attributes.title}</h5>
                    <p>{item.attributes.paragraph}</p>
                    <a
                      target="_blank"
                      href={item.attributes.URL}
                      className="text-secondary border-bottom"
                    >
                      Read More
                    </a>
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

export default Service;

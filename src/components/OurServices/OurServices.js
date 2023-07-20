import React, { useEffect, useState } from "react";
import { URL } from "../../utills";
const OurServices = () => {
  const [active, setActive] = useState(0);
  const [data, setDate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let request = await fetch(`${URL}/api/our-services?populate=*`);
      let res = await request.json();
      setDate(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">{data?.attributes?.title}</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                {data.map((item, i) => {
                  return (
                    <button
                      onClick={() => setActive(i)}
                      className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                        active === i ? "active" : ""
                      }`}
                      data-bs-toggle="pill"
                      data-bs-target="#tab-pane-1"
                      type="button"
                    >
                      <i className="fa fa-car-side fa-2x me-3"></i>
                      <h4 className="m-0">{item.attributes.title1}</h4>
                    </button>
                  );
                })}
                ;
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {data.map((item, i) => (
                  <div
                    className={`tab-pane fade ${
                      active === i ? "active show" : ""
                    } `}
                    id="tab-pane-1"
                  >
                    <div className="row g-4">
                      <div className="col-md-6" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                          <img
                            className="position-absolute img-fluid w-100 h-100"
                            src={`${URL}${item.attributes.img.data.attributes.url}`}
                            style={{ objectFit: "cover" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3 className="mb-3">{item.attributes.title2}</h3>
                        <p className="mb-4">{item.attributes.desc}</p>

                        {item.attributes.check_list.map((item) => (
                          <p>
                            <i className="fa fa-check text-success me-3"></i>
                            {item.title}
                          </p>
                        ))}

                        <a
                          target="_blank"
                          href={item.attributes.URL}
                          className="btn btn-primary py-3 px-5 mt-3"
                        >
                          Read More<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

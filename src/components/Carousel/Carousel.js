import React, { useEffect, useState } from "react";
import { URL } from "../../utills";
const Carousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let request = await fetch(
        `${URL}/api/crousels?populate=background,frontEnd`
      );
      let res = await request.json();
      setData(res.data);
    };
    getData();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {data.map((item, i) => (
              <div
                className={`carousel-item ${i === activeIndex ? "active" : ""}`}
                key={item.id}
              >
                <img
                  className="w-100"
                  src={`http://localhost:1337${item?.attributes?.background?.data?.attributes?.url}`}
                  alt="Image"
                />
                <div className="carousel-caption d-flex align-items-center">
                  <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                      <div className="col-10 col-lg-7 text-center text-lg-start">
                        <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                          {item.attributes.title}
                        </h6>
                        <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                          {item.attributes.heading}
                        </h1>
                        <a
                          target="_blank"
                          href={item.attributes.URL}
                          className="btn btn-primary py-3 px-5 animated slideInDown"
                        >
                          Learn More<i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                      <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                        <img
                          className="img-fluid"
                          src={`http://localhost:1337${item?.attributes?.frontEnd?.data?.attributes?.url}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? data.length - 1 : activeIndex - 1
              )
            }
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex >= data.length - 1 ? 0 : activeIndex + 1
              )
            }
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

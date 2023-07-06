import React, { useState } from "react";

const Clients = () => {
  const [data, setData] = useState([
    {
      id: 1,
      attributes: {
        name: "alexandera",
        Designation: "nakamma",
        desc: "dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.",
        createdAt: "2023-07-06T10:25:28.073Z",
        updatedAt: "2023-07-06T10:25:30.214Z",
        publishedAt: "2023-07-06T10:25:30.203Z",
        img: {
          data: {
            id: 14,
            attributes: {
              name: "testimonial-1.jpg",
              alternativeText: null,
              caption: null,
              width: 100,
              height: 100,
              formats: null,
              hash: "testimonial_1_f3c82292e4",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 3.07,
              url: "/uploads/testimonial_1_f3c82292e4.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-06T10:25:23.353Z",
              updatedAt: "2023-07-06T10:25:23.353Z",
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: "kamalo",
        Designation: "Assistant",
        desc: "dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.",
        createdAt: "2023-07-06T10:26:16.792Z",
        updatedAt: "2023-07-06T10:26:17.653Z",
        publishedAt: "2023-07-06T10:26:17.648Z",
        img: {
          data: {
            id: 15,
            attributes: {
              name: "testimonial-2.jpg",
              alternativeText: null,
              caption: null,
              width: 100,
              height: 100,
              formats: null,
              hash: "testimonial_2_59d828b5bb",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 3.07,
              url: "/uploads/testimonial_2_59d828b5bb.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-06T10:26:06.489Z",
              updatedAt: "2023-07-06T10:26:06.489Z",
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: "jamica",
        Designation: "ffsac",
        desc: "dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.",
        createdAt: "2023-07-06T10:26:52.282Z",
        updatedAt: "2023-07-06T10:26:53.104Z",
        publishedAt: "2023-07-06T10:26:53.097Z",
        img: {
          data: {
            id: 16,
            attributes: {
              name: "testimonial-4.jpg",
              alternativeText: null,
              caption: null,
              width: 100,
              height: 100,
              formats: null,
              hash: "testimonial_4_6a0b4f0a1a",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 2.84,
              url: "/uploads/testimonial_4_6a0b4f0a1a.jpg",
              previewUrl: null,
              provider: "local",
              provider_metadata: null,
              createdAt: "2023-07-06T10:26:49.949Z",
              updatedAt: "2023-07-06T10:26:49.949Z",
            },
          },
        },
      },
    },
  ]);

  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Testimonial //</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            {data.map((item) => (
              <div className="testimonial-item text-center" key={item.id}>
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
                  style={{ width: "80px", height: "80px" }}
                />
                <h5 className="mb-0">{item.attributes.name}</h5>
                <p className="overflow hidden">{item.attributes.Designation}</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">{item.attributes.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;

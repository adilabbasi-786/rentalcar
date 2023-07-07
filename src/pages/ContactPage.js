import React, { useState } from "react";
import Crousel1 from "../img/carousel-bg-1.jpg";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { email: email, name: name, subject: subject, message: message },
      }),
    };
    const response = await fetch(
      "http://localhost:1337/api/contacts",
      requestOptions
    );

    const data = await response.json();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    let reqData = {
      datas: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    };
  };
  return (
    <>
      <div
        class="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: `url(${Crousel1})` }}
      >
        <div class="container-fluid page-header-inner py-5">
          <div class="container text-center">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Contact
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="text-primary text-uppercase">// Contact Us //</h6>
            <h1 class="mb-5">Contact For Any Query</h1>
          </div>
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                <div class="col-md-4">
                  <div class="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 class="text-uppercase">// Booking //</h5>
                    <p class="m-0">
                      <i class="fa fa-envelope-open text-primary me-2"></i>
                      book@example.com
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 class="text-uppercase">// General //</h5>
                    <p class="m-0">
                      <i class="fa fa-envelope-open text-primary me-2"></i>
                      info@example.com
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 class="text-uppercase">// Technical //</h5>
                    <p class="m-0">
                      <i class="fa fa-envelope-open text-primary me-2"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                style={{ minHeight: "350px", border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <p class="mb-4">
                  please provide us the problems that you faced during our
                  Services
                </p>

                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        class="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      onClick={handleClick}
                      class="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

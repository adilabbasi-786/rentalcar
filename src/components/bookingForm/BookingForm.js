import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [req, setReq] = useState("");
  const clickHandle = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { email: email, name: name, date: date, req: req },
      }),
    };
    const response = await fetch(
      "http://localhost:1337/api/bookings",
      requestOptions
    );
    const data = await response.json();
    setName("");
    setEmail("");
    setDate("");
    setReq("");
    let reqData = {
      datas: {
        name: name,
        email: email,
        date: date,
        req: req,
      },
    };
  };
  return (
    <>
      <div class="row g-3">
        <div class="col-12 col-sm-6">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            class="form-control border-0"
            placeholder="Your Name"
            style={{ height: "55px" }}
          />
        </div>
        <div class="col-12 col-sm-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            class="form-control border-0"
            placeholder="Your Email"
            style={{ height: "55px" }}
          />
        </div>
        <div class="col-12 col-sm-6">
          <select class="form-select border-0" style={{ height: "55px" }}>
            <option selected>Select A Service</option>
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
          </select>
        </div>
        <div class="col-12 col-sm-6">
          <div class="date" id="date1" data-target-input="nearest">
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="date"
              class="form-control border-0 datetimepicker-input"
              placeholder="Service Date"
              data-target="#date1"
              data-toggle="datetimepicker"
              style={{ height: "55px" }}
            />
          </div>
        </div>
        <div class="col-12">
          <textarea
            onChange={(e) => setReq(e.target.value)}
            value={req}
            class="form-control border-0"
            placeholder="Special Request"
          ></textarea>
        </div>
        <div class="col-12">
          <button
            onClick={clickHandle}
            class="btn btn-secondary w-100 py-3"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* <button>yikiyhk</button> */}
    </>
  );
};

export default BookingForm;

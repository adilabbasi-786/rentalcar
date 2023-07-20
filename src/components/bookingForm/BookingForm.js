import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../utills";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [req, setReq] = useState("");
  const [service, setService] = useState("");
  const auth = useContext(AuthContext);
  const clickHandle = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        data: {
          name: name,
          date: date,
          special_request: req,
          service_type: service,
        },
      }),
    };
    const response = await fetch(`${URL}/api/bookings`, requestOptions);
    const data = await response.json();
    setName("");
    setService("");
    setDate("");
    setReq("");
    alert("booking created succefully");
  };
  return (
    <>
      <div class="row g-3">
        <div class="col-12 col-sm-12">
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
          <select
            onChange={(e) => setService(e.target.value)}
            value={service}
            class="form-select border-0"
            style={{ height: "55px" }}
          >
            <option selected>Select A Service</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
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

import React, { useEffect, useState, useContext } from "react";
import { URL } from "../utills";
import { AuthContext } from "../context/AuthContext";
import Paypal from "../components/Paypal";
const modal = document.getElementById("id01");

function Mybooking() {
  const viewReview = () => {
    setViewReviewModal(true);
  };
  const submitReview = async (id) => {
    setOpenReviewModal(true);
  };
  const onClose = () => {
    setOpen(false);
    getData();
  };
  const auth = useContext(AuthContext);
  const [viewReviewModal, setViewReviewModal] = useState(false);
  const [viewOnlyReview, setViewOnlyReview] = useState("");
  const [rewiewText, setReviewText] = useState("");
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const getData = async () => {
    let req = await fetch(`${URL}/api/bookings`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    let res = await req.json();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handlePayment = (id) => {
    setOpen(true);
    setSelectedBooking(id);
  };
  const getPaymentBox = (Status, id, reviews) => {
    console.log(Status === "completed");
    if (Status === "confirmed") {
      return <div style={{ color: "green" }}>Paid</div>;
    } else if (Status === "rejected") {
      return <div style={{ color: "red" }}>Rejected</div>;
    } else if (Status === "pending") {
      return (
        <div
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            handlePayment(id);
          }}
        >
          Pay now
        </div>
      );
    } else if (Status === "completed" && reviews === null) {
      return (
        <div
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            setOpenReviewModal(true);
            setSelectedBooking(id);
          }}
        >
          Submit reviews
        </div>
      );
    } else if (Status === "completed" && reviews !== null) {
      return (
        <div
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => {
            setViewOnlyReview(reviews);
            viewReview();
          }}
        >
          View rewiew
        </div>
      );
    }
  };

  const deleteBooking = async (id) => {
    await fetch(`${URL}/api/bookings/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    getData();
  };
  const closeFunc = () => {
    setOpen(false);
  };
  const submitReviews = async (id) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer ${auth.token}`,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      data: {
        reviews: rewiewText,
      },
    });

    let response = await fetch(`${URL}/api/bookings/${selectedBooking}`, {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    setOpenReviewModal(false);
  };
  return (
    <div style={{ margin: "25px" }}>
      <h1>my booking</h1>
      <div style={{ marginTop: "20px" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Special Request</th>
              <th scope="col">Service Type</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              {/* <th scope="col">Paid Status</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item?.name}</td>
                <td>{item?.special_request}</td>
                <td>{item?.service_type}</td>
                <td>{new Date(item?.date).toDateString()}</td>
                <td>{getPaymentBox(item?.Status, item.id, item.reviews)}</td>
                <td>
                  {item.Status === "pending" && (
                    <button onClick={() => deleteBooking(item.id)}>
                      <i
                        class="fas fa-trash-alt"
                        style={{ color: "#d91c1c" }}
                      ></i>
                    </button>
                  )}
                </td>
                {/* <td>
                  {checkout ? (
                    <Paypal />
                  ) : (
                    <button
                      onClick={() => {
                        setCheckout(true);
                      }}
                    >
                      checkout
                    </button>
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open === true && <div class="modal-backdrop fade show"></div>}
      {open === true && (
        <div class="modal fade show" tabindex="-1" style={{ display: "block" }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Payment with PayPal</h5>
                <button
                  onClick={closeFunc}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <Paypal booking={selectedBooking} onFinish={onClose} />
              </div>
              <div class="modal-footer">
                <button
                  onClick={closeFunc}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openReviewModal == true && <div class="modal-backdrop fade show"></div>}
      {openReviewModal == true && (
        <div class="modal fade show" tabindex="-1" style={{ display: "block" }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Submit review</h5>
                <button
                  onClick={() => setOpenReviewModal(false)}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your reviews
                  </label>
                  <textarea
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="type your reviews"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  onClick={() => setOpenReviewModal(false)}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    submitReviews();
                    getData();
                  }}
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewReviewModal === true && <div class="modal-backdrop fade show"></div>}
      {viewReviewModal === true && (
        <div class="modal fade show" tabindex="-1" style={{ display: "block" }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">View review</h5>
                <button
                  onClick={() => setViewReviewModal(false)}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your reviews
                  </label>
                  <p>{viewOnlyReview}</p>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  onClick={() => setViewReviewModal(false)}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mybooking;

// import token
// 1-fetchapi thunder
//

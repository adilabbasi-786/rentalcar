import React from "react";
import BookingForm from "../bookingForm/BookingForm";

const Booking = () => {
  return (
    <>
      <div
        class="container-fluid bg-secondary booking my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-6 py-5">
              <div class="py-5">
                <h1 class="text-white mb-4">
                  Certified and Award Winning Car Repair Service Provider
                </h1>
                <p class="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 class="text-white mb-4">Book For A Service</h1>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

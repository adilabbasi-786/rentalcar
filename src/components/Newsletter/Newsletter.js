import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const handleClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { email: email },
      }),
    };
    const response = await fetch(
      "http://localhost:1337/api/newsletters",
      requestOptions
    );
    const data = await response.json();
    setEmail("");
  };
  return (
    <>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-light mb-4">Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div class="position-relative mx-auto" style={{ maxWidth: "400px" }}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            class="form-control border-0 w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            onClick={handleClick}
            type="button"
            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;

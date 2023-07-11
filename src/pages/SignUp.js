import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const clickHandle = () => {
    // let data = {
    //   data: {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //   },
    // };
  };
  console.log(clickHandle);
  return (
    <div>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign up</h3>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="first name"
                className="form-control mt-1"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="last name"
                className="form-control mt-1"
                placeholder="Enter your Last Name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                onClick={clickHandle}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <p className="forgot-password text-right mt-2">
              Already have an account <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

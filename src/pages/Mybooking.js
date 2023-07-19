import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const modal = document.getElementById("id01");

function Mybooking() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState([]);
  const getData = async () => {
    let req = await fetch("http://localhost:1337/api/bookings", {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    let res = await req.json();
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const sayHello = async (id) => {
    await fetch(`http://localhost:1337/api/bookings/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    getData();
  };
  console.log(auth);

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
                <td>{item?.Status}</td>
                {item.Status === "pending" && (
                  <button onClick={() => sayHello(item.id)}>
                    Delete booking
                  </button>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;

// import token
// 1-fetchapi thunder
//

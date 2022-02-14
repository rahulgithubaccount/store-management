import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import { Link, NavLink } from "react-router-dom";

const unique_id = uuid().slice(0, 6);

function SalesOrder() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const students = await axios.get(`http://localhost:3002/salesorders `);
    console.log(students.data);
    setuser(students.data);
  }

  const deletehandle = async (id) => {
    await axios.delete(`http://localhost:3002/salesorders/${id}`);
    var newuser = user.filter((item) => {
      return item.id !== id;
    });
    setuser(newuser);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <i className="fa-solid fa-house-chimney-medical"></i>
        <div className="logout">
          <Link to="/"> logOut</Link>
        </div>
      </div>

      <div className="row  my-5 ">
        <div className="col-lg-3 bg">
          <ul className="icons">
            <li>
              <NavLink activeClassName="active" to="/salescreateorder">
                {" "}
                <i className="fa-solid fa-pen"></i>Create Order
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/salesorder">
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>Orders
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-9 add-medicine ">
          <h2 className="text-center my-5 inven-color"> Order History</h2>

          {user.map((val) => {
            return (
              <div className="orders bg-white my-2 p-3">
                <div className="d-flex justify-content-between">
                  <p>
                    {" "}
                    coustmer Name:<span> {val.cName}</span>
                  </p>
                  <p>
                    {" "}
                    coustmer Phone Number: <span>{val.cPhone}</span>
                  </p>
                  <p>
                    {" "}
                    OrderId: <span>{unique_id}</span>
                  </p>
                  <p onClick={() => deletehandle(val.id)}>
                    {" "}
                    <i className="fa fa-trash-alt "></i>
                  </p>
                </div>

                <table className="table  ">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td className="fw-bold">Total</td>

                      <td className="fw-bold">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SalesOrder;

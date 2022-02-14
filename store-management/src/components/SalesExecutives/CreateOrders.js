import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function CreateOrders() {
  const [inputs, setinputs] = useState({
    Mname: "",
    quantity: "",
    cName: "",
    cPhone: "",
  });

  function handle(evt) {
    setinputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
  }

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3002/salesorders`, inputs);
    setinputs("");
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
          <div className="row">
            <h2 className="text-center my-5 inven-color">Create Order</h2>
            <div className="col-md-5">
              <div className="d-flex justify-content-between my-5">
                <div>
                  <label for="inputEmail4" className="form-label">
                    Medicine{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="medicine Name"
                    onChange={handle}
                    name="Mname"
                    value={inputs.medicineName}
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    placeholder="0"
                    onChange={handle}
                    name="quantity"
                    value={inputs.quantity}
                    className="form-control3 my-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 create-order-form">
              <div className="d-flex justify-content-between my-5">
                <div>
                  <label for="inputEmail4" className="form-label">
                    Coustmer Name
                  </label>
                  <input
                    type="text"
                    placeholder="coustmer Name"
                    onChange={handle}
                    name="cName"
                    value={inputs.cName}
                    className="form-control4"
                  />
                </div>
                <div>
                  <label for="inputEmail4" className="form-label">
                    {" "}
                    Coustmer Contact Number
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    onChange={handle}
                    name="cPhone"
                    value={inputs.cPhone}
                    className="form-control4"
                  />
                </div>
              </div>

              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price(per Unit)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
              <button className="add-btn" onClick={submit}>
                Create Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrders;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMedicine() {
  const notify = () => toast("Added successfully");

  const [inputs, setinputs] = useState({
    Mname: "",
    manufacturer: "",
    price: "",
    stock: "",
    discount: "",
  });

  const deletehandle = (id) => {
    const finaldata = [...data].filter((del) => {
      return del.id !== id;
    });
    setdata(finaldata);
  };

  React.useEffect(() => {
    if (localStorage.getItem("medicine")) {
      const strogeData = JSON.parse(localStorage.getItem("medicine"));
      setdata(strogeData);
    }
  }, []);

  const [data, setdata] = useState([]);

  function handle(evt) {
    setinputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
  }

  const submits = (event) => {
    event.preventDefault();
    const newdata = {
      id: new Date().getTime(),
      medicineName: inputs.Mname,
      manufacture: inputs.manufacturer,
      prices: inputs.price,
      stocks: inputs.stock,
      discounts: inputs.discount,
    };
    setdata([...data].concat(newdata));
    setinputs("");

    localStorage.setItem("medicine", JSON.stringify([...data, newdata]));
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <i className="fa-solid fa-house-chimney-medical"></i>
        <div className="logout">
          <Link to="/"> logOut</Link>
        </div>
      </div>

      <div className="row  ">
        <h2 className="text-center my-5 inven-color">Inventery</h2>
        <div className="col-lg-3 bg">
          <ul className="icons">
            <li>
              <NavLink activeClassName="  active" to="/admin">
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>Inventery
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/addsalesman">
                {" "}
                <i className="fa-solid fa-users"></i>Sales Excutivess
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="active" to="/createorder">
                {" "}
                <i className="fa-solid fa-pen"></i>Create Order
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/orders">
                {" "}
                <i className="fa-solid fa-bag-shopping"></i>Orders
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="col-lg-9 add-medicine ">
          <h4
            className="add-btn  "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-plus"></i>ADD NEW MEDICINES
          </h4>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog shadow-lg   bg-body rounded ">
              <div className="modal-content ">
                <div className="modal-header">
                  <h5 className="modal-title " id="exampleModalLabel">
                    Add Medicine Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  <form onSubmit={submits}>
                    <div className="d-flex justify-content-between my-5">
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Medicine Name
                        </label>
                        <input
                          type="text"
                          placeholder="medicine Name"
                          onChange={handle}
                          name="Mname"
                          value={inputs.Mname}
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Manufacturer
                        </label>
                        <input
                          type="text"
                          placeholder="manufacturer"
                          onChange={handle}
                          name="manufacturer"
                          value={inputs.manufacturer}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Price
                        </label>
                        <input
                          type="text"
                          placeholder="0"
                          onChange={handle}
                          name="price"
                          value={inputs.price}
                          className="  form-control1 "
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Stock
                        </label>
                        <input
                          type="text"
                          placeholder="0"
                          onChange={handle}
                          name="stock"
                          value={inputs.stock}
                          className="  form-control1 "
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Discount
                        </label>

                        <input
                          type="text"
                          placeholder="0"
                          onChange={handle}
                          name="discount"
                          value={inputs.discount}
                          className="  form-control1 "
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="add-btn my-3 "
                        onClick={notify}
                      >
                        submit
                      </button>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <table className="table ">
            <thead className="bg-white ">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Manufacturer</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Discount(%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.medicineName}</td>
                    <td>{item.manufacture}</td>
                    <td>{item.prices}</td>
                    <td>{item.stocks}</td>
                    <td>{item.discounts}</td>
                    <button onClick={() => deletehandle(item.id)}>
                      <i className="fa fa-trash-alt "></i>
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddMedicine;

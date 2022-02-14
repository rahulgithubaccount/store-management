import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSalesMan() {
  const notify = () => toast("Added successfully");

  const [inputs, setinputs] = useState({
    fName: "",
    Lname: "",
    Dob: "",
    Gender: "",
    Experience: "",
  });

  const deletehandle = (id) => {
    const finaldata = [...data].filter((del) => {
      return del.id !== id;
    });
    setdata(finaldata);
  };

  React.useEffect(() => {
    if (localStorage.getItem("salesman")) {
      const strogeData = JSON.parse(localStorage.getItem("salesman"));
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
      FName: inputs.fName,
      lname: inputs.Lname,
      dob: inputs.Dob,
      gender: inputs.Gender,
      experience: inputs.Experience,
    };
    setdata([...data].concat(newdata));
    setinputs("");

    localStorage.setItem("salesman", JSON.stringify([...data, newdata]));
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
        <h2 className="text-center my-5 inven-color">Sales Executives</h2>
        <div className="col-lg-3 bg">
          <ul className="icons">
            <li>
              <NavLink activeClassName="active" to="/admin">
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
            <i className="fa-solid fa-plus"></i>ADD Sales Executives
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
                    Add Sales Executives Details
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
                          {" "}
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder=" Name"
                          onChange={handle}
                          name="fName"
                          value={inputs.fName}
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="last name"
                          onChange={handle}
                          name="Lname"
                          value={inputs.Lname}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div>
                        <label for="inputEmail4" className="form-label">
                          DOB
                        </label>
                        <input
                          type="date"
                          placeholder="0"
                          onChange={handle}
                          name="Dob"
                          value={inputs.Dob}
                          className="  form-control2 "
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Gender(M/F/O)
                        </label>
                        <input
                          type="text"
                          placeholder="gender"
                          onChange={handle}
                          name="Gender"
                          value={inputs.Gender}
                          className="  form-control1 "
                        />
                      </div>
                      <div>
                        <label for="inputEmail4" className="form-label">
                          Experience(in year)
                        </label>

                        <input
                          type="number"
                          placeholder="0"
                          onChange={handle}
                          name="Experience"
                          value={inputs.Experience}
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
          <table className="table">
            <thead className="bg-white ">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col"> Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Gender</th>
                <th scope="col">Experience</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.FName}</td>
                    <td>{item.lname}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.experience}</td>
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

export default AddSalesMan;

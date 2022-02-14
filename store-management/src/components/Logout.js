import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <i className="fa-solid fa-house-chimney-medical"></i>
        <div className="logout">
          <Link to="/"> logOut</Link>
        </div>
      </div>
    </div>
  );
}

export default Logout;

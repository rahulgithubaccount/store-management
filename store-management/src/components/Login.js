import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "test-admin" && password === "test-admin") {
      navigate("/admin", { replace: true });
    } else if (username === "test-sales" && password === "test-sales") {
      navigate("/salescreateorder", { replace: true });
    } else {
      navigate("/logout", { replace: true });
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 mx-auto add-medicine">
          <h2 className="text-center my-3 inven-color">Login</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control my-3 rounded-pill p-2 "
              placeholder="username"
              name="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-3 rounded-pill p-2"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <center>
              <button type="submit " className=" login">
                Login
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

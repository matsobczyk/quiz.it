import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//TODO()
const loginCommand = (name, password) => {
  // axios
  //   .get("http://en.wikipeda.org/w/api.php", {
  //     params: {
  //       action: "query",
  //       list: "search",
  //       format: "json",
  //       origin: "*",
  //       search: term,
  //     },
  //   })
  //   .then((result) => {});
};

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <h4 className="textstyle">login</h4>
          <br />
          <h2 style={{ fontSize: "37px" }} className="textstyle">
            hello teacher!
          </h2>

          <form>
            <div className="col">
              <div className="row-lg-6">
                <input
                  className="inputStyle m-3 text-center"
                  type="text"
                  placeholder="login"
                />
              </div>
              <div className="row-lg-6">
                <input
                  className="inputStyle m-3 text-center"
                  type="text"
                  placeholder="password"
                />
              </div>
              <Link
                component={Link}
                to="/"
                className="ms-4 nav-link textstyle m-2"
                style={{ textDecoration: "none" }}
              >
                dont have account?
                <br /> create it here
              </Link>
              <div className="row-lg-6">
                <button className="submitButtonStyle mt-5 text-center">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navstyle navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link component={Link} to="/" style={{ textDecoration: "none" }}>
              <h2 className="ms-4 nav-link" style={{ color: "black" }}>
                quiz.it
              </h2>
            </Link>
          </div>
          <div
            className="collapse navbar-collapse position-absolute end-0 m-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="login"
                  className="nav-link border buttonStyle m-3 text-center"
                >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="register"
                  className="nav-link border buttonStyle m-3 text-center"
                >
                  register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

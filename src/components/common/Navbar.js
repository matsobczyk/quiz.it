import React from "react";
import VerticalButton from "./buttons/VerticalButton";
const Navbar = () => {
  return (
    <div>
      <nav className="navstyle navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand">quiz.it</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-absolute end-0 m-4" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <a class="nav-link border" href="#">bbb</a>
            </li>
            <li className="nav-item">
                <a class="nav-link border" href="#">aaa </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
};
export default Navbar
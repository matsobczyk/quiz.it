/* eslint-disable react/button-has-type */
import React from 'react';
// import axios from "axios";

// TODO()
// const registerCommand = (name, password, repeatedPassword) => {
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
// };
import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';

function Register() {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello teacher!" header="register" />

          <form>
            <div className="container">
              <EntranceButton name="email" />
              <EntranceButton name="password" />
              <EntranceButton name="repeat password" />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

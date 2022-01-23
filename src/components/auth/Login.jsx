/* eslint-disable react/button-has-type */
import React from 'react';
// import axios from "axios";

// TODO()
// const loginCommand = (name, password) => {
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
import AuthLink from './AuthLink';

function Login() {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello teacher!" header="login" />
          <form>
            <div className="container">
              <EntranceButton name="login" />
              <EntranceButton name="password" />
              <AuthLink linkTo="/register" lineOne="don't have account?" lineTwo="create it" accent="here" />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

// TODO()
// const enterQuizCommand = (code, name, index) => {
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

function EntranceButton(props) {
  return (
    <div className="row justify-content-md-center">
      <input
        className="inputStyle m-4 text-center"
        type="text"
        placeholder={props.name}
      />
    </div>
  );
}
function SubmitButton() {
  return (
    <button className="submitButtonStyle mt-5 align-self-end">
      Submit form
    </button>
  );
}
function QuizEntrance() {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <h4 className="textstyle mt-3">enter quiz</h4>
          <br />
          <h2 style={{ fontSize: '37px' }} className="textstyle">
            hello user!
          </h2>

          <form>
            <div className="container">
              <EntranceButton name="code" />
              <EntranceButton name="name" />
              <EntranceButton name="index" />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizEntrance;

import React from "react";
import axios from "axios";

//TODO()
const enterQuizCommand = (code, name, index) => {
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

const QuizEntrance = () => {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <h4 className="textstyle">enter quiz</h4>
          <br />
          <h2 style={{ fontSize: "37px" }} className="textstyle">
            hello user!
          </h2>

          <form>
            <div className="col">
              <div className="row-lg-6">
                <input
                  className="inputStyle m-3 text-center"
                  type="text"
                  placeholder="entrance code"
                />
              </div>
              <div className="row-lg-6">
                <input
                  className="inputStyle m-3 text-center"
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="row-lg-6">
                <input
                  className="inputStyle m-3 text-center"
                  type="text"
                  placeholder="index"
                />
              </div>
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

export default QuizEntrance;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

function Question(props) {
  return (
    <div className="row">
      <div className="m-5 mb-1 row">
        <div className="w-10 mx-1  text-center headContainerStyleNum">
          {props.number}
        </div>
        <div className="w-75 mx-1 headContainerStyleNum">
          {props.question}
        </div>

      </div>
      <div className="col-10 m-5 mt-2 smallContainerStyle position-relative">
        <div className="m-3">
          <div className="form-check">
            {props.answers.map((answer, i) => {
              return (
                <div>
                  <input className="form-check-input" type="radio" name={`exampleRadio${props.number}`} id={`exampleRadio${props.number}${i}`} value="option1" />
                  <label className="form-check-label" htmlFor={`exampleRadio${props.number}${i}`}>
                    {answer}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;

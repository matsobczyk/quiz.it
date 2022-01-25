/* eslint-disable react/prop-types */
import React from 'react';

function QuizListRow(props) {
  const { name, entranceCode } = props;
  return (
    <div className="row surveyRow m-3">
      <div className="col-md-1 m-2 ms-3">1.</div>
      <div className="surveyRowSeparator" />
      <div className="col m-2">{name}</div>
      <div className="surveyRowSeparator" />
      <div className="col-md-1 m-2">3/11</div>
      <div className="surveyRowSeparator" />
      <div className="col-md-1 m-2 ms-3">75%</div>
      <div className="surveyRowSeparator" />
      <div className="col-md-2 m-2">{entranceCode}</div>
      <div className="surveyRowSeparator" />
      <div className="col-md-1 m-2 ms-5 ps-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
          <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
        </svg>
      </div>
    </div>
  );
}

export default QuizListRow;

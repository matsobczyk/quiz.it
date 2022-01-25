/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import 'survey-react/modern.min.css';
import React from 'react';

import Question from './Question';

function MySurvey() {
  const survey = localStorage.getItem('survey');
  const name = localStorage.getItem('name');
  const parsedSurvey = JSON.parse(survey);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="row">
      <div className="mt-5 col-11 position-absolute start-50 surveyContainerInfoStyle">
        <div className="row">
          <div className="col m-2">
            quiz:
            {' '}
            {parsedSurvey.name}
          </div>
          <div className="col m-2">
            name:
            {' '}
            {name}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-5 w-50 col-md-11 surveyContainerStyle position-absolute top-50 start-50 translate-middle overflow-auto">
          {parsedSurvey.questions.map((question, i) => (
            <Question number={`${i + 1} `} question={`${question[0].question}`} answers={question[0].availableAnswers} />
          ))}
          <button className="m-5 btn btn-secondary">submit survey</button>
        </div>
      </form>

    </div>
  );
}

export default MySurvey;

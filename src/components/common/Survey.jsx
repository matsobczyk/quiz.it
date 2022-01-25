import 'survey-react/modern.min.css';
import React from 'react';

import Question from './Question';

const result = {
  questions: [
    [
      {
        availableAnswers: [
          '1410',
          '1492',
          '999',
          '1969',
        ],
        _id: '61ed73404b478e6dbec34076',
        question: 'Kiedy była bitwa pod Grunwaldem',
        rightAnswer: 0,
      },
    ],
    [
      {
        availableAnswers: [
          'Aleksander Kwaśniewski',
          'Abraham Lincoln',
          'Gabriel Narutowicz',
          'Lech Wałęsa',
        ],
        _id: '61ed73404b478e6dbec34077',
        question: 'Jak nazywał się pierwszy prezydent?',
        rightAnswer: 2,
      },
    ],
    [
      {
        availableAnswers: [
          '12',
          '51',
          '49',
          '16',
        ],
        _id: '61ed73404b478e6dbec34078',
        question: 'Ile jest województw w Polsce',
        rightAnswer: 3,
      },
    ],
  ],
  _id: '61ed73404b478e6dbec34075',
  author: '61ed6cd53090376c68099a87',
  name: 'Polska',
  date: '2022-01-23T15:24:48.324Z',
  __v: 0,
};

function MySurvey() {
  return (
    <div className="row">
      <div className="mt-5 w-50 col-md-11 surveyContainerStyle position-absolute top-50 start-50 translate-middle overflow-auto">
        {result.name}
        {result.questions.map((question, i) => (
          <Question number={`${i + 1} `} question={`${question[0].question}`} answers={question[0].availableAnswers} />
        ))}
      </div>
    </div>
  );
}

export default MySurvey;

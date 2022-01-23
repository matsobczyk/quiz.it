/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';

import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';

function QuizEntrance() {
  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello user!" header="enter quiz" />
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

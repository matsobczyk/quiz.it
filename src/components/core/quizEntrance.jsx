/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';

function QuizEntrance() {
  const [name, setName] = useState('');
  const [index, setIndex] = useState('');

  const navigate = useNavigate();


  function entranceCommand() {
    axios
      .get(`http://localhost:3001/test/${index}`)
      .then((result) => {
        if (result.data) {
          localStorage.setItem('survey', JSON.stringify(result.data));
          localStorage.setItem('name', name);
          navigate('/survey');
        }
        return false;
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    entranceCommand();
  }

  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello user!" header="enter quiz" />
          <form onSubmit={handleSubmit}>
            <div className="container">
              <EntranceButton
                name="code"
              />
              <EntranceButton
                name="name"
                value={name}
                onChangeValue={(val) => setName(val)}
              />
              <EntranceButton
                name="index"
                value={index}
                onChangeValue={(val) => setIndex(val)}
              />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuizEntrance;

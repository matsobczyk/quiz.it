import axios from 'axios';
import {
  React, useState, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import QuizListRow from '../common/QuizListRow';

let downlaod = true;

function TeacherPanel() {
  // eslint-disable-next-line no-unused-vars
  const [surveyList, setSurveyList] = useState([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!downlaod) {
      return;
    }
    const authToken = localStorage.getItem('auth');
    if (!authToken) {
      console.log('Auth token is invalid');
      navigate('/login');
    }
    axios
      .get('http://localhost:3001/test', {
        headers: {
          'auth-token': authToken,
        },
      })
      .then((result) => {
        if (!result) {
          console.log('Ups, something went wrong with fetching list');
          navigate('/login');
        }

        setSurveyList(result.data);
        downlaod = false;
      });
  });

  // temp
  const codes = ['English', 'fuzzy-menlo-apple', 'PolskaGurom'];


  return (
    <div>
      <div className="row ps-5">
        <div className="mt-5">
          <h4 style={{ fontSize: '18px' }} className="textstyle ps-5">Hello teacher</h4>
          <br />
          <h2 style={{ fontSize: '30px' }} className="textstyle ps-5">
            Your surveys
          </h2>
        </div>
        <div className="mt-5 text-center col-md-11 containerStyle position-absolute top-50 start-50 translate-middle">
          <ul>
            <div className="row m-3 surveyRowHeadings">
              <div className="col-md-1 me-5" />
              <div className="col-md-4">title</div>
              <div className="col-md-1 ms-5">respondents</div>
              <div className="col-md-1 ms-5">avg score</div>
              <div className="col-md-2 ms-5">entrance code</div>
              <div className="col-md-1" />
            </div>
            {surveyList.map((item, index) => (
              <QuizListRow name={item.name} entranceCode={codes[index]} />
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default TeacherPanel;

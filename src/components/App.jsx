/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import '../styles.css';
import QuizEntrance from './core/quizEntrance';
import Login from './auth/Login';
import Register from './auth/Register';
import 'survey-react/modern.min.css';
import MySurvey from './common/Survey';
import TeacherPanel from './core/TeacherPanel';

function App() {
  const showContainer = useState(true);

  return (
    <div>
      <Router>
        <Navbar />
        <div className="bgstyle">
          <Routes>
            <Route path="/" element={<QuizEntrance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/survey" element={<MySurvey />} />
            <Route path="/panel" element={<TeacherPanel />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

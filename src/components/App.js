import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import "../styles.css";
import { useState } from "react";
import QuizEntrance from "./core/views/quizEntrance";
import Login from "./core/views/login";
import Register from "./core/views/register";

const App = () => {
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
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

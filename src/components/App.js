import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import "../styles.css";
import { useState } from "react";
import QuizEntrance from "./core/quizEntrance";
import Login from "./auth/login";
import Register from "./auth/register";

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

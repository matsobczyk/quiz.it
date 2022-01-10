import React from "react";
import Navbar from "./common/Navbar"
import "../styles.css"
import Container from "./core/Container";
import { useState } from "react";

const App = () => {

  const showContainer = useState(true)

  return (
    <div>
      <Navbar/>
      <div className="bgstyle">
        <Container show={showContainer}/>
      </div>
    </div>
  )
};


export default App;
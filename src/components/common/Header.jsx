/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Header(props) {
  return (
    <div>
      <h4 className="textstyle mt-3">{props.header}</h4>
      <br />
      <h2 style={{ fontSize: '37px' }} className="textstyle">
        {props.title}
      </h2>
    </div>
  );
}

export default Header;

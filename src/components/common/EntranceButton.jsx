/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function EntranceButton(props) {
  return (
    <div className="row justify-content-md-center">
      <input
        className="inputStyle m-4 text-center"
        type="text"
        placeholder={props.name}
      />
    </div>
  );
}

export default EntranceButton;

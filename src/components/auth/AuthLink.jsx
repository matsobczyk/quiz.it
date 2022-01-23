/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

function AuthLink(props) {
  return (
    <Link
      component={Link}
      to={props.linkTo}
      className="ms-4 nav-link textstyle m-2"
      style={{ textDecoration: 'none' }}
    >
      {props.lineOne}
      <br />
      {' '}
      {props.lineTwo}
      {' '}
      <b>{props.accent}</b>
    </Link>
  );
}

export default AuthLink;

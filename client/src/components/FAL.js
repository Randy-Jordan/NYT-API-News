import React from 'react';
import { Link } from 'react-router-dom';
import './FAL.css';

function FAL(props) {
  const { url } = props;

  return (
    
    <Link to={url} id="FAL">
      <i className="fa-solid fa-arrow-up-right-from-square" />
     NYT Link
    </Link>

  );
}

export default FAL;

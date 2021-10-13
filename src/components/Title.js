import React from 'react';
import './css files/title.css';

const Title = ({ name }) => {
  return (
    <div className="common-title flex-row">
      <h1 className="title">{name}</h1>
    </div>
  );
};

export default Title;

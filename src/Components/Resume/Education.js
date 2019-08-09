/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Education = ({ education }) => (
  <div key={education.school}>
    <h3>{education.school}</h3>
    <p className="info">
      {education.degree}
      {' '}
      <span>&bull;</span>
      <em className="date">{education.graduated}</em>
    </p>
    <p>{education.description}</p>
  </div>
);

export default Education;

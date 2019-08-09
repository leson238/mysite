/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Skill = ({ skill }) => {
  const className = `bar-expand ${skill.name.toLowerCase()}`;
  return (
    <li key={skill.name}>
      <span style={{ width: skill.level }} className={className} />
      <em>{skill.name}</em>
    </li>
  );
};

export default Skill;

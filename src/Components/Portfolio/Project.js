/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Project = ({ project }) => {
  const projectImage = `images/portfolio/${project.image}`;
  return (
    <div key={project.title} className="columns portfolio-item">
      <div className="item-wrap">
        <a href={project.url} title={project.title}>
          <img alt={project.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.title}</h5>
              <p>{project.category}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="fa fa-link" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;

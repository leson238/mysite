/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Project = ({ project }) => {
  const {
    url, title, category, image,
  } = project;
  const projectImage = `images/portfolio/${image}`;
  return (
    <a href={url} title={title}>
      <div key={title} className="columns portfolio-item">
        <div className="item-wrap">
          <img alt={title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{title}</h5>
              <p>{category}</p>
            </div>
          </div>
          <div className="link-icon">
            <i className="fa fa-link" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;

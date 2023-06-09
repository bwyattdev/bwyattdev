import './ProjectCardStyles.css';

import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt='Website Frontpage'></img>
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <a href={props.view} className='btn' target='_blank' rel='noreferrer'>View</a>
          <a href={props.source} className='btn' target='_blank' rel='noreferrer'>Source</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
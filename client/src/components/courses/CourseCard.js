import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseCard = ({ title, description, instructor }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>Instructeur: {instructor}</small>
    </div>
  );
};

export default CourseCard; 
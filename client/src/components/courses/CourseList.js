import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Erreur lors du chargement des cours');
        }

        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="courses-container">
      <h1>Nos Cours</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <img src={course.thumbnail || '/images/default-course.jpg'} alt={course.title} />
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description.substring(0, 100)}...</p>
              <div className="course-meta">
                <span className="price">{course.price} €</span>
                <span className="level">{course.level}</span>
              </div>
              <Link to={`/courses/${course._id}`} className="view-course-btn">
                Voir le cours
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList; 
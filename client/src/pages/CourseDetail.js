import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="course-detail">
      {/* Course Header */}
      <div className="course-header">
        <div className="course-header-content">
          <h1>Introduction au Développement Web</h1>
          <div className="course-meta">
            <span>4.5 ⭐ (1200 avis)</span>
            <span>5000+ étudiants</span>
            <span>Dernière mise à jour: Mars 2024</span>
          </div>
          <div className="course-instructor">
            <img src="/images/instructor.jpg" alt="Instructor" />
            <div>
              <h3>Par John Doe</h3>
              <p>Développeur Web Senior</p>
            </div>
          </div>
        </div>
        <div className="course-preview">
          <img src="/images/course-preview.jpg" alt="Course Preview" />
          <div className="course-price">
            <span className="price">49.99 €</span>
            <button className="enroll-button">S'inscrire maintenant</button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="course-content">
        <div className="course-tabs">
          <button 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            Aperçu
          </button>
          <button 
            className={activeTab === 'curriculum' ? 'active' : ''}
            onClick={() => setActiveTab('curriculum')}
          >
            Programme
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Avis
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview">
              <h2>Description du cours</h2>
              <p>Apprenez les bases du développement web moderne avec ce cours complet...</p>
              
              <h3>Ce que vous allez apprendre</h3>
              <ul className="learning-objectives">
                <li>Comprendre les bases du HTML et CSS</li>
                <li>Maîtriser JavaScript et ses frameworks</li>
                <li>Créer des applications web responsives</li>
                <li>Déployer votre site web</li>
              </ul>

              <h3>Prérequis</h3>
              <ul>
                <li>Aucune expérience préalable requise</li>
                <li>Un ordinateur avec accès à Internet</li>
              </ul>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="curriculum">
              <div className="section">
                <h3>Section 1: Introduction</h3>
                <div className="lessons">
                  <div className="lesson">
                    <span className="lesson-title">Bienvenue dans le cours</span>
                    <span className="lesson-duration">10:00</span>
                  </div>
                  <div className="lesson">
                    <span className="lesson-title">Configuration de l'environnement</span>
                    <span className="lesson-duration">15:00</span>
                  </div>
                </div>
              </div>
              {/* Plus de sections... */}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews">
              <div className="reviews-summary">
                <div className="average-rating">
                  <h2>4.5</h2>
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>Basé sur 1200 avis</p>
                </div>
                <div className="rating-bars">
                  {/* Rating bars... */}
                </div>
              </div>
              <div className="reviews-list">
                {/* Reviews... */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail; 
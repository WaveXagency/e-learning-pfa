import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ajouter la logique de mise à jour du profil
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Mon Profil</h1>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Annuler' : 'Modifier'}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={user?.avatar || '/images/default-avatar.png'} alt="Profile" />
            {isEditing && (
              <button className="change-avatar">
                Changer la photo
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <>
                <div className="form-group">
                  <label>Mot de passe actuel</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Nouveau mot de passe</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Confirmer le nouveau mot de passe</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isEditing && (
              <button type="submit" className="save-button">
                Enregistrer les modifications
              </button>
            )}
          </form>
        </div>

        <div className="profile-stats">
          <h2>Statistiques</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Cours suivis</h3>
              <p>5</p>
            </div>
            <div className="stat-item">
              <h3>Cours terminés</h3>
              <p>3</p>
            </div>
            <div className="stat-item">
              <h3>Certificats</h3>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
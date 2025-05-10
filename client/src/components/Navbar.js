import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">E-Learning Platform</Link>
      </div>
      
      <div className="navbar-menu">
        <Link to="/" className="nav-item">Accueil</Link>
        <Link to="/courses" className="nav-item">Cours</Link>
        
        {isAuthenticated ? (
          <>
            {user?.role === 'instructor' && (
              <Link to="/instructor/dashboard" className="nav-item">Dashboard Instructeur</Link>
            )}
            {user?.role === 'admin' && (
              <Link to="/admin/dashboard" className="nav-item">Dashboard Admin</Link>
            )}
            <Link to="/profile" className="nav-item">Mon Profil</Link>
            <button onClick={handleLogout} className="nav-item logout-btn">
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">Connexion</Link>
            <Link to="/register" className="nav-item">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
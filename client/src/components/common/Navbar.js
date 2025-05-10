import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/courses">Cours</a></li>
        <li><a href="/dashboard">Tableau de bord</a></li>
        <li><a href="/profile">Profil</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; 
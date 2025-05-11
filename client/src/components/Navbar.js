import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50">
      {/* Brand Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center hover:scale-105 transition-transform">
          <span className="mr-2">🎓</span> E-Learning
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/courses" className="text-white hover:text-indigo-200 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10">
          Courses
        </Link>

        {user ? (
          <>
            <Link to="/dashboard" className="text-white hover:text-indigo-200 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10">
              Dashboard
            </Link>

            {/* Profile Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-indigo-200 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 flex items-center">
                {user.name} <span className="ml-2">▼</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl hidden group-hover:block transform transition-all duration-300 origin-top">
                <Link to="/profile" className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 rounded-t-xl">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-b-xl transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-indigo-200 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10">
              Login
            </Link>
            <Link to="/register" className="bg-white text-indigo-600 px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none hover:scale-110 transition-transform"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col items-center mt-2 py-4 shadow-xl md:hidden">
          <Link to="/courses" className="text-white hover:text-indigo-200 px-4 py-3 w-full text-center hover:bg-white/10 transition-all duration-300">Courses</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-indigo-200 px-4 py-3 w-full text-center hover:bg-white/10 transition-all duration-300">Dashboard</Link>
              <Link to="/profile" className="text-white hover:text-indigo-200 px-4 py-3 w-full text-center hover:bg-white/10 transition-all duration-300">Profile</Link>
              <button onClick={handleLogout} className="text-red-300 hover:text-red-100 px-4 py-3 w-full text-center hover:bg-red-500/20 transition-all duration-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-indigo-200 px-4 py-3 w-full text-center hover:bg-white/10 transition-all duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-indigo-200 px-4 py-3 w-full text-center hover:bg-white/10 transition-all duration-300">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

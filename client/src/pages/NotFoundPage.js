import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';

const NotFoundPage = () => {
  return (
    <PageTemplate
      title="404 - Page Not Found"
      description="Oops! The page you're looking for doesn't exist."
    >
      <div className="text-center">
        <div className="mb-8">
          <span className="text-6xl">🔍</span>
        </div>
        <p className="text-gray-600 mb-8">
          The page you're looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Go Back Home
        </Link>
      </div>
    </PageTemplate>
  );
};

export default NotFoundPage; 
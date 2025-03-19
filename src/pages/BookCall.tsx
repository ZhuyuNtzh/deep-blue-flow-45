
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const BookCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to BookDemo since we've consolidated the functionality
  return <Navigate to="/book-demo" replace />;
};

export default BookCall;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // ✅ Clear anything related to login (optional)
//     localStorage.removeItem('token'); // example, if you store token
//     localStorage.clear();             // or clear everything

//     // Navigate to login or home page
//     navigate('/login');
//   };

//   return null;

// export default Logout;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear stored user data, tokens, etc.
    localStorage.clear();  

    // Redirect to login or home page
    navigate('/login');
  }, [navigate]);

  return null; // or return a loading spinner if you want
};

export default Logout;


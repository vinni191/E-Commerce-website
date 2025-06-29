import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/shop'); // Change this to your confirmation page route
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="payment-success">
      <div className="success-icon">&#10003;</div> {/* Unicode check mark */}
      <h2>Payment success!</h2>
      <p>Please wait a moment we will redirect you to the confirmation page</p>
      <div className="spinner"></div>
    </div>
  );
};




export default Payment
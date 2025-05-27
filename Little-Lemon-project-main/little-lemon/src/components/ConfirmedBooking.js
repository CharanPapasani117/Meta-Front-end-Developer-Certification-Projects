import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

export default function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="confirmation-icon">✓</div>
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-message">
          Thank you for your reservation at Little Lemon 🍋
        </p>
        <div className="confirmation-details">
          <p>Your booking has been successfully recorded.</p>
          <p>We will contact you soon to confirm the details.</p>
        </div>
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

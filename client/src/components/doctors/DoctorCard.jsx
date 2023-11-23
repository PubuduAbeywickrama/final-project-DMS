// DoctorCard.js
import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import './doctors.css';
import Topbar from '../topbar/Topbar';

const DoctorCard = ({ image, name, qualification, openingTimes, contact }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped}>
      {/* Front side of the card */}
      <div className="doctor-card" onClick={handleFlip}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Qualification: {qualification}</p>
        <p>Opening Times:</p>
        <ul>
          {openingTimes.map(time => (
            <li key={time}>{time}</li>
          ))}
        </ul>
        <p>Contact: {contact}</p>
        <button onClick={handleFlip}>Book Now</button>
      </div>

      {/* Back side of the card */}
      <div className="doctor-card flipped" onClick={handleFlip}>
        {/* Add your booking form and buttons here */}
        <div className="booking-form">
          <p>Date: <input type="date" /></p>
          <p>Time: <input type="time" /></p>
          <button>Confirm Booking</button>
        </div>
      </div>
    </CardFlip>
  );
};

export default DoctorCard;

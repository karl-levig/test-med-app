// src/Components/DoctorCard/DoctorCard.js
import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, rating }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-card-header">
        <i className="fa fa-user-md doctor-icon"></i>
      </div>

      <div className="doctor-card-body">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-speciality">{speciality}</p>
        <p className="doctor-experience">{experience} years experience</p>
        <p className="doctor-rating">Ratings: {"⭐".repeat(rating)}</p>
      </div>

      <div className="doctor-card-footer">
        <button className="book-btn">Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;

// src/Components/DoctorCard/DoctorCard.js
import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({ name, speciality, experience, rating }) => {
  const [showForm, setShowForm] = useState(false);

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
        <button className="book-btn" onClick={() => setShowForm(true)}>
          Book Appointment
        </button>
      </div>

      {/* Louvri AppointmentForm.js la lè yo klike sou bouton an */}
      {showForm && (
        <AppointmentForm
          doctor={{ name, speciality }}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default DoctorCard;

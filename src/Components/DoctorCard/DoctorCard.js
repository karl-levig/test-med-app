// src/Components/DoctorCard/DoctorCard.js
import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({ name, speciality, experience, rating }) => {
  const [showForm, setShowForm] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const handleBook = (formData) => {
    setAppointment(formData); // sove done form nan
    setShowForm(false);
  };

  const handleCancel = () => {
    setAppointment(null); // efase randevou an
    alert(`Appointment with Dr. ${name} has been cancelled.`);
  };

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
        {!appointment ? (
          <button className="book-btn" onClick={() => setShowForm(true)}>
            Book Appointment
          </button>
        ) : (
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel Appointment
          </button>
        )}
      </div>

      {/* Louvri AppointmentForm lè showForm = true */}
      {showForm && (
        <AppointmentForm
          doctor={{ name, speciality }}
          onClose={() => setShowForm(false)}
          onSubmit={handleBook}
        />
      )}
    </div>
  );
};

export default DoctorCard;

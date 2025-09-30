// src/Components/AppointmentForm/AppointmentForm.js
import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${formData.name} with Dr. ${doctor?.name} on ${formData.date} at ${formData.time}`
    );
    if (onClose) onClose();
  };

  return (
    <div className="appointment-form-overlay">
      <div className="appointment-form">
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Date of Appointment:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Book Time Slot:</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time slot</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>

          <button type="submit" className="btn-submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

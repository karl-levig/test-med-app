// src/Components/BookingConsultation/BookingConsultation.js
import React, { useEffect, useState } from "react";
import "./BookingConsultation.css"; // ou ka kreye style pita
import FindDoctorSearch from "../FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "../DoctorCard/DoctorCard";

const BookingConsultation = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  // API call pou pran doktè yo (tankou nan InstantConsultation.js)
  const getDoctorsDetails = () => {
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  };

  const handleSearch = (searchText) => {
    if (!searchText) {
      setFilteredDoctors([]);
      setIsSearched(false);
      return;
    }
    const filtered = doctors.filter((doctor) =>
      doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setIsSearched(true);
  };

  useEffect(() => {
    getDoctorsDetails();
  }, []);

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Book Your Consultation</h1>
        <p>Search and book appointments with top doctors.</p>
      </div>

      {/* Search bar */}
      <FindDoctorSearch onSearch={handleSearch} />

      {/* Rezilta yo */}
      <div className="search-results-container">
        {isSearched ? (
          filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.name}
                name={doctor.name}
                speciality={doctor.speciality}
                experience={doctor.experience}
                rating={doctor.rating || 4}
              />
            ))
          ) : (
            <p>No doctors found.</p>
          )
        ) : (
          <p>Type a speciality to find doctors.</p>
        )}
      </div>
    </div>
  );
};

export default BookingConsultation;

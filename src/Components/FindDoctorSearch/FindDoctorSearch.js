import React, { useState } from "react";
import "./FindDoctorSearch.css";
import { useNavigate } from "react-router-dom";

const initSpeciality = [
  "Dentist",
  "Gynecologist/Obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-Nose-Throat (ENT) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearch = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities] = useState(initSpeciality);
  const navigate = useNavigate();

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/appointments?speciality=${speciality}`);
  };

  return (
    <div className="find-doctor-container">
      <center>
        <h2>Search for a Doctor</h2>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Enter doctor's specialty..."
            onFocus={() => setDoctorResultHidden(false)}
            onBlur={() => setDoctorResultHidden(true)}
            value={searchDoctor}
            onChange={(e) => setSearchDoctor(e.target.value)}
          />

          <div
            className="search-results"
            hidden={doctorResultHidden}
          >
            {specialities
              .filter((speciality) =>
                speciality.toLowerCase().includes(searchDoctor.toLowerCase())
              )
              .map((speciality) => (
                <div
                  className="result-item"
                  key={speciality}
                  onMouseDown={() => handleDoctorSelect(speciality)}
                >
                  {speciality}
                </div>
              ))}
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearch;

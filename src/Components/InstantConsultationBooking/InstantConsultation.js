import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getDoctorsDetails = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => {
        if (searchParams.get('speciality')) {
          const filtered = data.filter(
            doctor =>
              doctor.speciality.toLowerCase() ===
              searchParams.get('speciality').toLowerCase()
          );

          setFilteredDoctors(filtered);
          setIsSearched(true);
          window.reload();
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
        setDoctors(data);
      })
      .catch(err => console.log(err));
  };

  const handleSearch = searchText => {
    if (searchText === '') {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter(doctor =>
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredDoctors(filtered);
      setIsSearched(true);
      window.location.reload();
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    getDoctorsDetails();
  }, [searchParams]);

  return (
    <div className="instant-page">
      {/* Tit prensipal sèlman */}
      <div className="instant-header">
        <h1>Find a doctor at your own ease</h1>
      </div>

      {/* Imaj doktè */}
      <div className="instant-image">
        <img
          src="/images/doctor_finder.png"
          alt="Doctor Finder illustration"
          style={{ maxWidth: "350px", height: "auto" }}
        />
      </div>

      {/* Search box */}
      <FindDoctorSearchIC onSearch={handleSearch} />

      {/* Rezilta rechèch */}
      <div className="search-results-container">
        {isSearched ? (
          <div className="results">
            <h2>
              {filteredDoctors.length} doctors are available{' '}
              {searchParams.get('location')}
            </h2>
            <h3>
              Book appointments with minimum wait-time & verified doctor details
            </h3>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doctor => (
                <DoctorCardIC
                  className="doctorcard"
                  {...doctor}
                  key={doctor.name}
                />
              ))
            ) : (
              <p>No doctors found.</p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InstantConsultation;

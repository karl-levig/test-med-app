// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation"; // ✅ nouvo import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Paj prensipal yo */}
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Instant Consultation deja egziste */}
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />

          {/* ✅ Nouvo route pou Booking Consultation */}
          <Route
            path="/booking-consultation"
            element={<BookingConsultation />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

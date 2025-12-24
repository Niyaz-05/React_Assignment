import React from "react";
import AvailableCourses from "./hooks/AvailableCourses.jsx";
import EnrolledCourses from "./hooks/EnrolledCourses.jsx";
import './Assignment1.css';


function MainPage() {
  return (
    <div className="container">
      <h1>Student Course Management Dashboard</h1>
      <div className="dashboard">
        <AvailableCourses />
        <EnrolledCourses />
      </div>
    </div>
  );
}

export default MainPage;

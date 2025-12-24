import React, { createContext, useState, useEffect } from "react";

export const CourseContext = createContext();

const courseList = ["React", "Java", "DBMS", "CNS", "SalesForce"];

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses"));
    if (savedCourses) setEnrolledCourses(savedCourses);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const dropCourse = (course) => {
    setEnrolledCourses(enrolledCourses.filter((c) => c !== course));
  };

  return (
    <CourseContext.Provider
      value={{ courseList, enrolledCourses, enrollCourse, dropCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

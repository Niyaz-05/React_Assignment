import React, { useContext } from "react";
import { CourseContext } from "./CourseContext.jsx";

const EnrolledCourses = () => {
  const { enrolledCourses, dropCourse } = useContext(CourseContext);

  return (
    <div className="card">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No Courses enrolled</p>
      ) : (
        enrolledCourses.map((course) => (
          <div key={course} className="course">
            <span>{course}</span>
            <button onClick={() => dropCourse(course)}>Drop</button>
          </div>
        ))
      )}
    </div>
  );
};

export default EnrolledCourses;

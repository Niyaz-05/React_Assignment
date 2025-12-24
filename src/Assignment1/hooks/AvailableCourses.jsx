import React, { useContext } from "react";
import { CourseContext } from "./CourseContext.jsx";

const AvailableCourses = () => {
  const { courseList, enrolledCourses, enrollCourse } = useContext(CourseContext);

  return (
    <div className="card">
      <h2>Available Courses</h2>
      {courseList.map((course) => (
        <div key={course} className="course">
          <span>{course}</span>
          <button
            disabled={enrolledCourses.includes(course)}
            onClick={() => enrollCourse(course)}
          >
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
};

export default AvailableCourses;

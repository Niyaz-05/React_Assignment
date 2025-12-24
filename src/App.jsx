import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Assignment 1 */
import { CourseProvider } from "./Assignment1/hooks/CourseContext";
import Assignment1Main from "./Assignment1/MainPage";

/* Assignment 2 */
import { AuthProvider } from "./Assignment2/auth/AuthContext";
import Assignment2Main from "./Assignment2/MainPage";

/* Assignment 3 */
import Assignment3Main from "./Assignment3/MainPage";

/* Assignment 4 */
import Assignment4Main from "./Assignment4/MainPage";

/* Assignment 5 */
import Assignment5Main from "./Assignment5/MainPage";

/* Assignment 6*/ 
import Assignment6Demo from "./Assignment6/Demo";

/* Assignment 7*/
import Assignment7Main from "./Assignment7/MainPage";

/* Assignment 8*/ 
import Assignment8Main from "./Assignment8/MainPage"
import { ThemeProvider } from "./Assignment8/ThemeContext";

/* Assignment 9*/ 
import Assignment9Main from "./Assignment9/MainPage";

/* Assignment 10*/
import { NotificationProvider } from "./Assignment10/NotificationContext";
import Assignment10Main from "./Assignment10/MainPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route path="/" element={<Navigate to="/assignment1" />} />

        {/* Assignment 1 */}
        <Route
          path="/assignment1"
          element={
            <CourseProvider>
              <Assignment1Main />
            </CourseProvider>
          }
        />

        {/* Assignment 2 */}
        <Route
          path="/assignment2/*"
          element={
            <AuthProvider>
              <Assignment2Main />
            </AuthProvider>
          }
        />

        {/* Assignment 3 */}
        <Route
          path="/assignment3"
          element={<Assignment3Main />}
        />

        {/* Assignment 4 */}
        <Route
          path="/assignment4"
          element={<Assignment4Main />}
        />
        {/* Assignment 5 */}
        <Route
          path="/assignment5"
          element={<Assignment5Main/>}
        />
        {/* Assignment 6 */}
        <Route
          path="/assignment6"
          element={<Assignment6Demo/>}
        />
        {/* Assignment 7 */}
        <Route
          path="/assignment7"
          element={<Assignment7Main/>}
        />
        {/* Assignment 8 */}
        <Route
          path="/assignment8"
          element={<ThemeProvider><Assignment8Main /></ThemeProvider>}
        />
        {/* Assignment 9 */}
        <Route 
          path="/assignment9" 
          element={<Assignment9Main />} 
        />
        {/* Assignment 10 */}
        <Route
          path="/assignment10"
          element={<NotificationProvider><Assignment10Main/></NotificationProvider>}
        />


        {/* Short URL redirects */}
        <Route path="/admin" element={<Navigate to="/assignment2/admin" />} />
        <Route path="/teacher" element={<Navigate to="/assignment2/teacher" />} />
        <Route path="/student" element={<Navigate to="/assignment2/student" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

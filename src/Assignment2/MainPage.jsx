import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import ProtectedRoute from "./auth/ProtectedRoute";

function MainPage() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />

      {/* DASHBOARDS */}
      <Route
        path="admin"
        element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="teacher"
        element={
          <ProtectedRoute role="teacher">
            <Teacher />
          </ProtectedRoute>
        }
      />
      <Route
        path="student"
        element={
          <ProtectedRoute role="student">
            <Student />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default MainPage;

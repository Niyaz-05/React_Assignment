import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ VERY IMPORTANT

    if (username === "" || role === "") {
      alert("Please enter username and select role");
      return;
    }

    login(username, role);

    // ✅ CORRECT PATHS
    navigate(`/assignment2/${role}`);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

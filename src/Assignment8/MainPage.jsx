import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./theme.css";

function MainPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-container">
      <h2>Theme Switcher</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default MainPage;

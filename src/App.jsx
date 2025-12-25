import React, { useState } from "react";
import "./App.css";
import { MemoryRouter } from "react-router-dom";


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

/* Assignment 6 */
import Assignment6Demo from "./Assignment6/Demo";

/* Assignment 7 */
import Assignment7Main from "./Assignment7/MainPage";

/* Assignment 8 */
import { ThemeProvider } from "./Assignment8/ThemeContext";
import Assignment8Main from "./Assignment8/MainPage";

/* Assignment 9 */
import Assignment9Main from "./Assignment9/MainPage";

/* Assignment 10 */
import { NotificationProvider } from "./Assignment10/NotificationContext";
import Assignment10Main from "./Assignment10/MainPage";

/* Assignment 11 */
import Assignment11Main from "./Assignment11/MainPage";

/* Assignment 12 */
import Assignment12Main from "./Assignment12/MainPage";

/* Assignment 13 */
import Assignment13Main from "./Assignment13/MainPage";

/* Assignment 14 */
import Assignment14Main from "./Assignment14/MainPage";

/* Assignment 15 */
import Assignment15Main from "./Assignment15/MainPage";

function App() {
  const [active, setActive] = useState(1);

  const renderAssignment = () => {
    switch (active) {
      case 1:
        return (
          <CourseProvider>
            <Assignment1Main />
          </CourseProvider>
        );

      case 2:
        return (
          <AuthProvider>
            <MemoryRouter initialEntries={["/login"]}>
              <Assignment2Main />
            </MemoryRouter>
          </AuthProvider>
        );


      case 3:
        return <Assignment3Main />;

      case 4:
        return <Assignment4Main />;

      case 5:
        return <Assignment5Main />;

      case 6:
        return <Assignment6Demo />;

      case 7:
        return <Assignment7Main />;

      case 8:
        return (
          <ThemeProvider>
            <Assignment8Main />
          </ThemeProvider>
        );

      case 9:
        return <Assignment9Main />;

      case 10:
        return (
          <NotificationProvider>
            <Assignment10Main />
          </NotificationProvider>
        );

      case 11:
        return <Assignment11Main />;

      case 12:
        return <Assignment12Main />;

      case 13:
        return <Assignment13Main />;

      case 14:
        return <Assignment14Main />;

      case 15:
        return <Assignment15Main />;

      default:
        return <h2>Select an Assignment</h2>;
    }
  };

  return (
    <div className="app-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>React Assignments</h2>

        {[...Array(15)].map((_, i) => (
          <button
            key={i}
            className={active === i + 1 ? "active" : ""}
            onClick={() => setActive(i + 1)}
          >
            Assignment {i + 1}
          </button>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="content">
        <h1>Assignment {active}</h1>
        <div className="assignment-box">{renderAssignment()}</div>
      </main>
    </div>
  );
}

export default App;

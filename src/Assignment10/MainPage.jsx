import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import NotificationContainer from "./NotificationContainer";

function MainPage() {
  const { addNotification } = useContext(NotificationContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notification System</h2>

      <button onClick={() => addNotification("Success!", "success")}>
        Success
      </button>

      <button onClick={() => addNotification("Something went wrong", "error")}>
        Error
      </button>

      <button onClick={() => addNotification("This is info", "info")}>
        Info
      </button>

      <NotificationContainer />
    </div>
  );
}

export default MainPage;

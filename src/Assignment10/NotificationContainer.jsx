import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import "./notification.css";

function NotificationContainer() {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          {n.message}
        </div>
      ))}
    </div>
  );
}

export default NotificationContainer;

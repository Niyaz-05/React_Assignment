import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <strong>{user.name}</strong>
      <p>{user.email}</p>
    </div>
  );
}

export default React.memo(UserCard);

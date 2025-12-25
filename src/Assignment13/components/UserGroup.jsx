import React from "react";
import UserCard from "./UserCard";

function UserGroup({ letter, users }) {
  return (
    <div className="user-group">
      <h3>{letter}</h3>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default React.memo(UserGroup);

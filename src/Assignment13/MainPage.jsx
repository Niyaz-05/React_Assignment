import React, { useState, useMemo } from "react";
import { users } from "./data";
import SearchBar from "./components/SearchBar";
import UserGroup from "./components/UserGroup";

function MainPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const groupedUsers = useMemo(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const grouped = {};
    filtered.forEach((user) => {
      const letter = user.name[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(user);
    });

    return grouped;
  }, [searchTerm]);

  return (
    <div>
      <h2>User Directory</h2>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {Object.keys(groupedUsers).length === 0 && <p>No users found</p>}

      {Object.keys(groupedUsers)
        .sort()
        .map((letter) => (
          <UserGroup
            key={letter}
            letter={letter}
            users={groupedUsers[letter]}
          />
        ))}
    </div>
  );
}

export default MainPage;

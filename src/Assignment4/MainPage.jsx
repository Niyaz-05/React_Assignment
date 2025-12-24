import React, { useState, useEffect, useMemo } from "react";
import { products } from "./data";

const Assignment4Main = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 🔹 MANUAL DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔹 FILTER LOGIC (Optimized)
  const filteredData = useMemo(() => {
    return products.filter((item) => {
      const matchSearch =
        item.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());

      const matchCategory =
        category === "All" || item.category === category;

      return matchSearch && matchCategory;
    });
  }, [debouncedSearch, category]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Assignment 4: Real-Time Search & Filter</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      {/* Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        <option value="All">All</option>
        <option value="Books">Books</option>
        <option value="Courses">Courses</option>
        <option value="Electronics">Electronics</option>
      </select>

      {/* Results */}
      <ul style={{ marginTop: "20px" }}>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} – ₹{item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment4Main;

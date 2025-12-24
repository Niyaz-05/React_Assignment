import React from "react";

function ExpenseList({ expenses, onDelete }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          {exp.title} - ₹{exp.amount}
          <button onClick={() => onDelete(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

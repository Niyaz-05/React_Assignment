import React from "react";

function ExpenseChart({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h3>Total Spent: ₹{total}</h3>
      <div style={{ background: "lightblue", width: total / 10 + "px", height: "20px" }} />
    </div>
  );
}

export default ExpenseChart;

import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

function MainPage() {
  const [expensesById, setExpensesById] = useState({});
  const [expenseIds, setExpenseIds] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  const addExpense = (expense) => {
    setExpensesById((prev) => ({
      ...prev,
      [expense.id]: expense,
    }));
    setExpenseIds((prev) => [...prev, expense.id]);
  };

  const deleteExpense = (id) => {
    const updated = { ...expensesById };
    delete updated[id];
    setExpensesById(updated);
    setExpenseIds(expenseIds.filter((eid) => eid !== id));
  };

  const filteredExpenses = expenseIds
    .map((id) => expensesById[id])
    .filter((exp) =>
      selectedMonth
        ? new Date(exp.date).getMonth() === Number(selectedMonth)
        : true
    );

  return (
    <div>
      <h1>Expense Tracker</h1>

      <ExpenseForm onAdd={addExpense} />

      <select onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="">All Months</option>
        <option value="0">Jan</option>
        <option value="1">Feb</option>
        <option value="2">Mar</option>
      </select>

      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default MainPage;

import React, { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) return;

    onAdd({
      id: Date.now(),
      title,
      amount: Number(amount),
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

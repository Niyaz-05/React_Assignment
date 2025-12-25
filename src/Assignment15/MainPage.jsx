import React, { useState } from "react";
import "./calendar.css";

function MainPage() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const toMinutes = (time) => {
    const [h, m] = time.split(":");
    return Number(h) * 60 + Number(m);
  };

  const hasConflict = (newEvent) => {
    return events.some((e) => {
      if (editingId === e.id) return false;
      if (e.date !== newEvent.date) return false;

      const startA = toMinutes(newEvent.startTime);
      const endA = toMinutes(newEvent.endTime);
      const startB = toMinutes(e.startTime);
      const endB = toMinutes(e.endTime);

      return startA < endB && endA > startB;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.title || !form.date || !form.startTime || !form.endTime) {
      setError("All fields are required");
      return;
    }

    if (toMinutes(form.startTime) >= toMinutes(form.endTime)) {
      setError("End time must be after start time");
      return;
    }

    if (hasConflict(form)) {
      setError("Event time conflicts with another event");
      return;
    }

    if (editingId) {
      setEvents((prev) =>
        prev.map((e) =>
          e.id === editingId ? { ...form, id: editingId } : e
        )
      );
      setEditingId(null);
    } else {
      setEvents((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    setForm({ title: "", date: "", startTime: "", endTime: "" });
  };

  const handleEdit = (event) => {
    setForm(event);
    setEditingId(event.id);
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="calendar-container">
      <h2>Calendar Event Planner</h2>

      <form onSubmit={handleSubmit} className="event-form">
        <input
          placeholder="Event title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="time"
          value={form.startTime}
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
        />
        <input
          type="time"
          value={form.endTime}
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
        />

        <button type="submit">
          {editingId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <h3>Events</h3>
      {events.length === 0 && <p>No events added</p>}

      {events.map((e) => (
        <div key={e.id} className="event">
          <strong>{e.title}</strong>
          <p>
            {e.date} | {e.startTime} - {e.endTime}
          </p>
          <button onClick={() => handleEdit(e)}>Edit</button>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MainPage;

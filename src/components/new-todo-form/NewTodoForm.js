import { useState } from "react";

import nextId from "react-id-generator";

import "./NewTodoForm.scss";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("happy");

  const id = nextId();

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myTodo = {
      title,
      date,
      mood,
      id,
    };
    console.log(myTodo);
    addEvent(myTodo);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Add Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </label>
      <label>
        <span>Your Mood:</span>
        <select onChange={(e) => setMood(e.target.value)}>
          <option value="happy">😀</option>
          <option value="sad">😔</option>
          <option value="cool">😎</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

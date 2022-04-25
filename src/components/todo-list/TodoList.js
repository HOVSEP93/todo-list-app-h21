import React from "react";
import "./TodoList.scss";

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className="card" key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.mood} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

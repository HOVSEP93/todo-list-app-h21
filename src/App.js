import "./App.scss";
import React, { useState } from "react";
import Title from "./components/title/Title";
import Modal from "./components/modal/Modal";
import EventList from "./components/todo-list/TodoList";
import NewEventForm from "./components/new-todo-form/NewTodoForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showList, setShowList] = useState(true);
  const [todo, setTodo] = useState([]);

  const addEvent = (e) => {
    setTodo((prevList) => {
      return [...prevList, e];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setTodo((prevList) => {
      return prevList.filter((e) => id !== e.id);
    });
  };

  const subtitle = "<HOVSEP21/>";

  return (
    <div className="App">
      <Title title="Todo List App" subtitle={subtitle} />

      {showList && (
        <div>
          <button onClick={() => setShowList(false)}>Hide List</button>
        </div>
      )}
      {!showList && (
        <div>
          <button onClick={() => setShowList(true)}>Show List</button>
        </div>
      )}
      {showList && <EventList events={todo} handleClick={handleClick} />}

      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

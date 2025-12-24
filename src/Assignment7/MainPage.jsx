import React, { useState } from "react";
import Column from "./components/Column";
import "./kanban.css";

function MainPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", status: "todo" },
    { id: 2, title: "Build Project", status: "inprogress" },
    { id: 3, title: "Revise Concepts", status: "done" }
  ]);

  const [draggedTaskId, setDraggedTaskId] = useState(null);

  const moveTask = (newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTaskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  return (
    <div className="board">
      <Column
        title="To Do"
        status="todo"
        tasks={tasks}
        setDraggedTaskId={setDraggedTaskId}
        moveTask={moveTask}
      />
      <Column
        title="In Progress"
        status="inprogress"
        tasks={tasks}
        setDraggedTaskId={setDraggedTaskId}
        moveTask={moveTask}
      />
      <Column
        title="Done"
        status="done"
        tasks={tasks}
        setDraggedTaskId={setDraggedTaskId}
        moveTask={moveTask}
      />
    </div>
  );
}

export default MainPage;

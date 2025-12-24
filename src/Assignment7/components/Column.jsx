import TaskCard from "./TaskCard";

function Column({ title, status, tasks, setDraggedTaskId, moveTask }) {
  const allowDrop = (e) => e.preventDefault();

  const handleDrop = () => {
    moveTask(status);
  };

  return (
    <div
      className="column"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <h3>{title}</h3>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            setDraggedTaskId={setDraggedTaskId}
          />
        ))}
    </div>
  );
}

export default Column;

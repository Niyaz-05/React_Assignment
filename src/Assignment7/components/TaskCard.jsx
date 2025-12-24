function TaskCard({ task, setDraggedTaskId }) {
  const handleDragStart = () => {
    setDraggedTaskId(task.id);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
    >
      {task.title}
    </div>
  );
}

export default TaskCard;

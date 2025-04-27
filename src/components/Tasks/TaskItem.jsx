import '../../styles/components/tasks.css'

export default function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id, task.completed)}
        className="task-checkbox"
      />
      <div className="task-details">
        <span className="task-text">{task.text}</span>
        <span className="task-priority">Priority: {task.priority}</span>
        <span className="task-dates">
          Start: {task.startDate || 'N/A'} | End: {task.endDate || 'N/A'}
        </span>
      </div>
      <button 
        onClick={() => onDelete(task.id)} 
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
  }
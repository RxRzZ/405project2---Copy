import { useState } from 'react';
import { addTask } from '../../services/firebase';
import '../../styles/components/tasks.css'

export default function TaskForm({ userId }) {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!taskText.trim()) {
      setError('Task cannot be empty');
      return;
    }

    try {
      await addTask({
        text: taskText,
        priority,
        startDate,
        endDate,
        userId,
        completed: false,
        createdAt: new Date()
      });
      setTaskText('');
      setPriority('');
      setStartDate('');
      setEndDate('');
      setError('');
    } catch (err) {
      setError('Failed to add task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
    <div className="form-group">
      <label className="form-label" htmlFor="taskText">Task:</label>
      <input
        id="taskText"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter new task"
        className="task-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="priority">Priority:</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="">Select Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="startDate">Start Date:</label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="date-input"
      />
    </div>
    <div className="form-group">
      <label className="form-label" htmlFor="endDate">End Date:</label>
      <input
        id="endDate"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="date-input"
      />
    </div>
    <button type="submit" className="add-btn">
      Add Task
    </button>
    {error && <p className="error-message">{error}</p>}
  </form>
);}
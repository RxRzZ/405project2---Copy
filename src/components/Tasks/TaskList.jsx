import { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask } from '../../services/firebase';
import TaskItem from './TaskItem';
import '../../styles/components/tasks.css'


export default function TaskList({ userId }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getTasks(userId, (tasks) => {
      setTasks(tasks);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await updateTask(id, { completed: !completed });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (loading) return <div>Loading tasks...</div>;

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add your first task!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      )}
    </ul>
  );
}
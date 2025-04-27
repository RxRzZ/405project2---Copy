import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';

export default function Dashboard() {
  const [user] = useAuthState(auth);

  return (
    <div className="dashboard-page">
      <h1>Your Tasks</h1>
      <TaskForm userId={user?.uid} />
      <TaskList userId={user?.uid} />
    </div>
  );
}
import { Navigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}
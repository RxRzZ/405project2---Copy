import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import '../styles/components/profile.css';

export default function Profile() {
  const [user] = useAuthState(auth);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.displayName || 'User'}</p>
        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
      </div>
    </div>
  );
}
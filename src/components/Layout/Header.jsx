import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';
import '../../styles/components/header.css'; // Update path as needed

export default function Header({ user }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="app-header">
      <Link to={user ? "/dashboard" : "/"} className="logo">TaskMaster</Link>
      <Link to="/about" className="nav-link">About</Link>
      <nav>
      
        {user ? (
          <div className="user-nav">
            <span className="user-greeting">Hi, {user.displayName || 'User'}!</span>
            <Link to="/profile" className="profile-btn">Profile</Link>
            <button onClick={handleSignOut} className="sign-out-btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="auth-nav">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
import { Link } from 'react-router-dom';
import '../styles/components/home.css';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to TaskMaster</h1>
      <p>Simple task management for teams and individuals</p>
      <div className="cta-buttons">
        <Link to="/signup" className="cta-btn">Get Started</Link>
        <Link to="/login" className="cta-btn secondary">Login</Link>
      </div>
    </div>
  );
}
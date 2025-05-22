// src/components/Welcome.jsx
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="mobile-frame">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
        <div className="button-group">
          <Link to="/signup" className="btn btn-primary">Create Account</Link>
          <Link to="/login" className="btn btn-secondary">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
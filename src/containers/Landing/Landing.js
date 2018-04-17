import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <p>Welcome</p>
      <div>
        <Link to="/login">Log in</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Landing;
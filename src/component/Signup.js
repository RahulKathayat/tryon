


import React, { useState } from 'react';
import "./Signup.css"

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your signup logic here
    console.log('Signing up...');
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Sign Up</h1>
        <div className="user">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <i className="fas fa-envelope"></i>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fas fa-unlock-alt"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fas fa-unlock-alt"></i>
        
        </div>
        <div className="login-btn">
          <button className="btn" onClick={handleSignUp}>
            Submit
          </button>
          <p className="signup">
            Already have an account ? <a href="#"><span>Log In</span></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
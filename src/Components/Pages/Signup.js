import React, { useState } from "react";

const Signup = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  console.log(value);
  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(value);
    localStorage.setItem("user", jsonData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          //   value={email}
          name="email"
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          //   value={password}
          name="password"
          onChange={handleInput}
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <button>Switch to Sign In</button>
      </div>
    </div>
  );
};

export default Signup;

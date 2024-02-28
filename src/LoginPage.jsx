import React from "react";
import "./styles.css";

const LoginPage = () => {
  return (
    <div>
      <div className="logo">Clinic Connect</div>
      <div className="container">
        <h2>Login Page</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

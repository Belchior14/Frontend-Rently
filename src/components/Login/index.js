import { AuthContext } from "context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

export function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className="loginDiv">
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="loginbtn" type="onSubmit">Login</button>
      <p className="signupLink">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
    </div>
  );
}

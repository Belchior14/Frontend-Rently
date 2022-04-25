import { AuthContext } from "context";
import { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export function SignupForm() {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, firstName, lastName, username);
      };

  return (
    <div className="signupDiv">
      <div>
        <form className="signupForm" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="6 characters and contain at least one number, one lowercase and one uppercase letter"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button disabled={!(email && password && firstName && lastName && username)}>Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Click here</Link>
        </p>
      </div>
    </div>
  );
}

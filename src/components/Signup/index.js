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
        <h2>Create an Account</h2>
        <form className="signupForm" onSubmit={handleSubmit}>
          <label className="signupInput"></label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label></label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label></label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label></label>
          <input
            type="password"
            id="password"
            placeholder="Password"/* 6 characters and contain at least one number, one lowercase and one uppercase letter */
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
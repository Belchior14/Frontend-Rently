import { AuthContext } from "context";
import { useContext, useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>FirstName:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <label>LastName:</label>
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
      <button type="onSubmit">Signup</button>
    </form>
  );
}

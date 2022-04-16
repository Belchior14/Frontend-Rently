import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context";


export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/product"> Products </Link>
      <Link to="/product/add"> Add Products </Link>
      {user && <Link to={`/profile/${user._id}`}> Profile </Link>}

      <Link to="/signup"> Signup </Link>
      <Link to="/login"> Login </Link>
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

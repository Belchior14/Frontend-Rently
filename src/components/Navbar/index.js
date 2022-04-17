import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context";
import "./navbar.css";

export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="mainNavbar">
      <Link className="navLink" to="/">
        <button className="navbarBtns">Home</button>
      </Link>
      <div className="navbarRoutes">
        <Link className="navLink" to="/product">
          <button className="navbarBtns">Products</button>
        </Link>
        {user && (
          <Link className="navLink" to="/product/add">
            <button className="navbarBtns">Add Products</button>
          </Link>
        )}
        {user && (
          <Link className="navLink" to={`/profile/${user._id}`}>
            <button className="navbarBtns">Profile</button>
          </Link>
        )}
        {!user && (
          <Link className="navLink" to="/signup">
            <button className="navbarBtns">Signup</button>
          </Link>
        )}
        {!user && (
          <Link className="navLink" to="/login">
            <button className="navbarBtns">Login</button>
          </Link>
        )}
        {user && (
          <button className="navbarBtns" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

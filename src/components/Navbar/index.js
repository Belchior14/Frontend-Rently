import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context";
import "./navbar.css";

export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="mainNavbar">
      <Link className="navLink" to="/">
        <a className="navbarLinks">Home</a>
      </Link>
        <Link className="navLink" to="/product">
          <a className="navbarLinks">Products</a>
        </Link>
        {user && (
          <Link className="navLink" to="/product/add">
            <a className="navbarLinks">Add Products</a>
          </Link>
        )}
        {user && (
          <Link className="navLink" to={`/profile/${user._id}`}>
            <a className="navbarLinks">Profile</a>
          </Link>
        )}
        {!user && (
          <Link className="navLink" to="/signup">
            <a className="navbarLinks">Signup</a>
          </Link>
        )}
        {!user && (
          <Link className="navLink" to="/login">
            <a className="navbarLinks">Login</a>
          </Link>
        )}
        {user && (
          <a className="navLink" onClick={logout}>
            Logout
          </a>
        )}
      </div>
  );
}

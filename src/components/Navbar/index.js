import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context";
import "./navbar.css";

export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="mainNavbar">
      <Link className="navLink" to="/">
        <p className="navbarLinks">Home</p>
      </Link>
      <Link className="navLink" to="/about">
        <p className="navbarLinks">About</p>
      </Link>
      <Link className="navLink" to="/product">
        <p className="navbarLinks">Products</p>
      </Link>
      {user && (
        <Link className="navLink" to="/product/add">
          <p className="navbarLinks">Add Products</p>
        </Link>
      )}
      {user && (
        <Link className="navLink" to={`/profile/${user._id}`}>
          <p className="navbarLinks">Profile</p>
        </Link>
      )}
      {!user && (
        <Link className="navLink" to="/signup">
          <p className="navbarLinks">Signup</p>
        </Link>
      )}
      {!user && (
        <Link className="navLink" to="/login">
          <p className="navbarLinks">Login</p>
        </Link>
      )}
      {user && (
        <p className="navLink" onClick={logout}>
          Logout
        </p>
      )}
    </div>
  );
}

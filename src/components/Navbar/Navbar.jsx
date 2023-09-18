import { NavLink } from "react-router-dom";
import profileLogo from "../../assets/avatar-icon.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        #Vanlife
      </NavLink>

      <nav className="navbar__nav">
        <li>
          <NavLink
            to="host"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vans"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
              };
            }}
          >
            Vans
          </NavLink>
        </li>
        <li>
          <NavLink to="login">
            <img
              src={profileLogo}
              alt="profile"
              width={25}
              height={25}
              style={{ objectFit: "contain" }}
            />
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;

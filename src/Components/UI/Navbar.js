import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavBox">
      <div>
        <p className="text"> Some Logo here</p>
      </div>
      <div className="NavLinkBox">
        <Link to="/" className="NavLink">
          <button type="button" className="NavButton">
            Home
          </button>
        </Link>

        <Link to="/About" className="NavLink">
          <button type="button" className="NavButton">
            About
          </button>
        </Link>

        <Link to="/Resume" className="NavLink">
          <button type="button" className="NavButton">
            Resumé
          </button>
        </Link>

        <Link to="/Contact" className="NavLink">
          <button type="button" className="NavButton">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

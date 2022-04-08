import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handlerNav = () => setNav(!nav);

  return (
    <div className={nav ? "NavBox-Bg" : "NavBox"}>
      <div>
        <p className="text"> JZH</p>
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
      <div className="Hamburger" onClick={handlerNav}>
        {!nav ? (
          <AiOutlineMenu size={35} className="icon" />
        ) : (
          <AiOutlineCloseCircle
            size={35}
            style={{ color: "#000" }}
            className="icon"
          />
        )}
      </div>

      <div className={nav ? "small active" : "small"}>
        <div className="small-menu">
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
    </div>
  );
}

export default Navbar;

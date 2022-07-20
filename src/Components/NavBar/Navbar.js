import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div div className={style["nav-box"]}>
      <p> JZH</p>
      <ul>
        <li>
          <Link to="/" className={style["nav-link"]}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className={style["nav-link"]}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Resume" className={style["nav-link"]}>
            Resumé
          </Link>
        </li>
        <li>
          <Link to="/Contact" className={style["nav-link"]}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

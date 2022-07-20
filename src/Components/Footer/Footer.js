import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div div className={style["footer-box"]}>
      <p> JZH</p>
      <ul>
        <li>
          <Link to="/" className={style["footer-link"]}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className={style["footer-link"]}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Resume" className={style["footer-link"]}>
            Resumé
          </Link>
        </li>
        <li>
          <Link to="/Contact" className={style["footer-link"]}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

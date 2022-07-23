import style from "./Footer.module.css";

import { Github, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className={style["footer-box"]}>
      <p>© 2022 James Z. Howes. All rights reserved.</p>
      <div>
        <a href="https://github.com/zhowez">
          <Github /> Check Out My Github
        </a>
        <a href="https://www.linkedin.com/in/jameszhowes/">
          <Linkedin /> Let's Connect!
        </a>
      </div>
    </div>
  );
};

export default Footer;

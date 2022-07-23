import style from "./Footer.module.css";

import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={style["footer-box"]}>
      <p>© 2022 James Z. Howes. All rights reserved.</p>
      <div>
        <a href="https://github.com/zhowez">
          <GithubOutlined /> Check Out My Github
        </a>
        <a href="https://www.linkedin.com/in/jameszhowes/">
          <LinkedinOutlined /> Let's Connect!
        </a>
      </div>
    </div>
  );
};

export default Footer;

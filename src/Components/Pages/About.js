import Footer from "../Footer/Footer";
import style from "./About.module.css";
import ContentBox from "../UI/ContentBox";
import babPic from "../../pictures/bab-pic.png";
import disneyPic from "../../pictures/disney-pic.png";
import gradPic from "../../pictures/graduation-pic.png";

const About = () => {
  return (
    <>
      <div className={style.main}>
        <h1>ABOUT</h1>
        <hr />
        <div className={style.organize}>
          <ContentBox className={style.box}>
            <img src={babPic} alt="Pic of me" />
            <div className={style["info-box-right"]}>
              <h2>Life Before Clemson</h2>
              <p className={style["right-text"]}>
                Before attending Clemson University, James spent several years
                working at Build-A-Bear Workshop. During his time there he
                learned creative problem solving and how to work in a large team
                setting. After several years, he was promoted to Associate Store
                Manager. As an ASM, he led his team to become one of the top
                performing stores in the company in gift card sales. In 2017, he
                decide to go back to school the following year.
              </p>
            </div>
          </ContentBox>
          <ContentBox className={style.box}>
            <div className={style["info-box-left"]}>
              <h2>Life At Clemson</h2>
              <p className={style["left-text"]}>
                During His time at Clemson Univeristy, James studied computer
                science. He was able to take a wide variety of classing
                including Cloud Commputing, Database Administration, and Web
                Design. During the spring of 2020 he had the amazing opportunity
                to work at Walt Disney World Resort through the Disney College
                Program! As a Merchandise Intern, James worked with students
                from around the world on Main Street U.S.A in the Magic Kingdom.
                There he was able to help thousands of guests and create magical
                moments every day for guests. Afterwards he adapted to online
                learning due to COVID-19, and earned a 4.0 summer of 2021.
                During his senior year, James worked hard to learn about web
                development and RESTful API's. This work helped him tremendouly
                in his senior group project, where he earned an A.
              </p>
            </div>
            <img src={disneyPic} alt="Pic of me" />
          </ContentBox>

          <ContentBox className={style.box}>
            <img src={gradPic} alt="Pic of me" />
            <div className={style["info-box-right"]}>
              <h2>Life Before Clemson</h2>
              <p className={style["right-text"]}>
                James graduated on time in May 2022 with a 3.52 GPA. He is now
                seeking new oppurtunites as a junior software developer.While he
                appiles for jobs he is learning new skills in Angular, Java,
                Spring, Docker, and Swift/SwiftUI.
                <p>
                  You can find all his projects on
                  <a href="https://github.com/zhowez"> Github.</a>
                </p>
                <p>
                  {" "}
                  If you would like to connect please reach out on
                  <a href="https://www.linkedin.com/in/jameszhowes/">
                    {" "}
                    LinkedIn
                  </a>
                </p>
              </p>
            </div>
          </ContentBox>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

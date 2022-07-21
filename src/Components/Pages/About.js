import Navbar from "../NavBar/Navbar";
import Main from "../UI/Main";
import Footer from "../Footer/Footer";
import style from "./About.module.css";
import ContentBox from "../UI/ContentBox";
import babPic from "../../pictures/bab-pic.png";
import disneyPic from "../../pictures/disney-pic.png";
import gradPic from "../../pictures/graduation-pic.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Main className={style.main}>
        <h1>ABOUT</h1>
        <hr />

        <ContentBox className={style.box}>
          <img src={babPic} alt="Pic of me" />
          <div className={style["info-box-right"]}>
            <h2>Life Before Clemson</h2>
            <p className={style["right-text"]}>
              Before attending Clemson University I worked at Build-A-Bear
              Workshop, eventually becomeing an assistant manager. I was an
              amazing place to work a learn how to lead teams and work with a
              variety of people and opinions. During the spring of 2020 I had
              the amazing oppurtunity to work at Walt Disney World Resort
              through the Disney College Program! While the program was cut
              short due to COVID-19, I had an amazing time meeting people from
              all around the world and working in a fast paced enviroment.
            </p>
          </div>
        </ContentBox>
        <ContentBox className={style.box}>
          <div className={style["info-box-left"]}>
            <h2>Life Before Clemson</h2>
            <p className={style["left-text"]}>
              Before attending Clemson University I worked at Build-A-Bear
              Workshop, eventually becomeing an assistant manager. I was an
              amazing place to work a learn how to lead teams and work with a
              variety of people and opinions. During the spring of 2020 I had
              the amazing oppurtunity to work at Walt Disney World Resort
              through the Disney College Program! While the program was cut
              short due to COVID-19, I had an amazing time meeting people from
              all around the world and working in a fast paced enviroment.
            </p>
          </div>
          <img src={disneyPic} alt="Pic of me" />
        </ContentBox>

        <ContentBox className={style.box}>
          <img src={gradPic} alt="Pic of me" />
          <div className={style["info-box-right"]}>
            <h2>Life Before Clemson</h2>
            <p className={style["right-text"]}>
              Before attending Clemson University I worked at Build-A-Bear
              Workshop, eventually becomeing an assistant manager. I was an
              amazing place to work a learn how to lead teams and work with a
              variety of people and opinions. During the spring of 2020 I had
              the amazing oppurtunity to work at Walt Disney World Resort
              through the Disney College Program! While the program was cut
              short due to COVID-19, I had an amazing time meeting people from
              all around the world and working in a fast paced enviroment.
            </p>
          </div>
        </ContentBox>
      </Main>
      <Footer />
    </>
  );
};

export default About;

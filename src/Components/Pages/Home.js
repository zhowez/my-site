import Navbar from "../NavBar/Navbar";
import style from "./Home.module.css";
import ContentBox from "../UI/ContentBox";
import Main from "../UI/Main";
import pic from "../../profile_pic.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main className={style.main}>
        <ContentBox className={style.box}>
          <img className={style.image} src={pic} alt="Pic of me" />
          <div className={style.text}>
            <h1>Hi I'm James!</h1>

            <p>
              Welcome to my site! Feel free to look around. Take a look at my
              github to the soucre code of this site. While your there check out
              my other projects. If you have any questions send me a message on
              LinkedIn or send me a message on the contact form
            </p>
          </div>
        </ContentBox>
      </Main>
      <Footer />
    </>
  );
};

export default Home;

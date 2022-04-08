import Navbar from "../NavBar/Navbar";
import "./Home.css";
import myPic from "../../testimg.jpeg";

const Home = () => {
  return (
    <div className="Background">
      <Navbar />
      <div className="Content">
        <div className="Top">
          <div className="ContentBox">
            <img src={myPic} alt="React Logo" className="Image" />
            <h1>Welcome to My Site! </h1>
          </div>
        </div>
        <div className="Bottom">
          <div className="ContentBox">
            <p>
              To all who come to this Coding place... Welcome! Check out the
              tabs at the top to learn more about me.
            </p>
            <p>All my coding project can be found at www.github.com/zhowez</p>
            <p>
              {" "}
              P.S. Try resizing your screen. Most of site doesnt move correctly
              but the navbar looks so cool!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

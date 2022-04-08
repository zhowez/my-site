import Navbar from "../NavBar/Navbar";
import "./Home.css";
import myPic from "../../testimg.jpeg";

const Home = () => {
  return (
    <div className="Background">
      <Navbar />
      <div className="InfoBox">
        <h1>Home</h1>
        <div className="ContentBox">
          <img src={myPic} alt="React Logo" className="Image" />
          <p className="Text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
            lectus, dictum at vehicula rutrum, lacinia non lorem. Vestibulum
            posuere bibendum congue. Sed viverra varius luctus. Aliquam rutrum
            vel dui sit amet molestie. Sed finibus urna a finibus rhoncus. Sed
            in quam nibh. Phasellus commodo ullamcorper nibh, nec faucibus lorem
            feugiat at. Morbi sollicitudin vel nulla et volutpat. Morbi nec
            risus vitae sem porta efficitur. Proin pulvinar velit turpis, id
            volutpat odio convallis et. Aenean commodo felis lectus, ut finibus
            risus commodo eu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

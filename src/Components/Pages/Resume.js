import Navbar from "../NavBar/Navbar";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="Content">
        <div className="Left-Side">Left Side</div>
        <div className="Right-Side">Right Side</div>
      </div>
    </div>
  );
};

export default Resume;

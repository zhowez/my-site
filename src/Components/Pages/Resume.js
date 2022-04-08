import Navbar from "../NavBar/Navbar";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="Content-Resume">
        <div className="Left-Side">
          <div className="Education">
            <h1>Education</h1>
            <hr className="Line-Education" />
            <div className="Education-Uni">
              <h2>Clemson University</h2>
              <h2>2018-2022</h2>
            </div>
            <div>
              <h2>Bachelor of Science: Computer Science</h2>
              <div className="Education-Awards">
                <h3>GPA: 3.52</h3>
                <h3>Dean's List: Fall 2019, Fall 2020, Fall 2021</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Right-Side">Right Side</div>
      </div>
    </div>
  );
};

export default Resume;

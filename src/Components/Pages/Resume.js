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
            <hr className="Line-Left" />
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
          <div className="Skills">
            <h1>Skills</h1>
            <hr className="Line-Left" />
            <div className="Skills-List">
              <ul>
                <li>C/C++</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>React.JS</li>
                <li>SQL - MySQL</li>
                <li>Amazon Web Services (AWS) </li>
                <div>
                  <ul className="Skills-AWS">
                    <li>EC2</li>
                    <li>RDS</li>
                    <li>VPC</li>
                    <li>Security Groups</li>
                  </ul>
                </div>
                <li>Agile/Scrum</li>
                <li>GIT</li>
                <li>Azure DevOps</li>
              </ul>
            </div>
          </div>

          <div className="Courses">
            <h1>Relevent Courses</h1>
            <hr className="Line-Left" />
            <div className="Courses-List">
              <ul>
                <li>Software Development Foundations</li>
                <li>Software Engineering</li>
                <li>Network Programming</li>
                <li>Web Application Development</li>
                <li>Cloud Computing Architecture</li>
                <li>Computer Security Principles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Right-Side">
          <div className="Work">
            <h1>Work History</h1>
            <hr className="Line-Right" />
            <div className="Job">
              <div className="Job-Header">
                <h2>Southern Tide - Greenville, SC</h2>
                <h2>2021-Current</h2>
              </div>
              <h3>Sales Associate</h3>
              <div className="Job-List">
                <ul>
                  <li>Interacting with guest</li>
                  <li>Opening and closing the store</li>
                  <li>Providing an excellent transaction experience</li>
                </ul>
              </div>
            </div>

            <div className="Job">
              <div className="Job-Header">
                <h2>Walt Disney World Resort - Lake Buena Vista, FL</h2>
                <h2>Spring of 2020</h2>
              </div>
              <h3>Disney College Program</h3>
              <div className="Job-List">
                <ul>
                  <li>Providing Excellent Customer Service</li>
                  <li>Resolve guests concerns</li>
                  <li>Keep a balanced register</li>
                </ul>
              </div>
            </div>

            <div className="Job">
              <div className="Job-Header">
                <h2>Build - A - Bear Workshop - Greenville, SC</h2>
                <h2>2014 – 2020</h2>
              </div>
              <h3>Sales Associate/ Associate Store Manager</h3>
              <div className="Job-List">
                <ul>
                  <li>Training new employees in company standards</li>
                  <li>
                    Responsible for creating a fun and inviting atmosphere
                  </li>
                  <li>Delegate responsible to team members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Add Footer */}
    </div>
  );
};

export default Resume;

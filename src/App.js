import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Resume from "./Components/Pages/Resume";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

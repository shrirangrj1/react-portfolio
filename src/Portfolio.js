import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
  return <div>Home Content</div>;
}

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0px 8px" }}>
      <div style={{ fontSize: "20px" }}>About :</div>
      <div> A software developer having 2 years of experience in ReactJS software development</div>
    </div>
  );
}

function Contact() {
  return <div>Contact Content</div>;
}

function Experience() {
  return <div>Experience Content</div>;
}

function MyData() {
  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <div style={{ display: "grid", gridTemplateRows: "40px 1fr", height: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "0px 6px", fontFamily: "Segoe UI", fontSize: "18px" }}>Shrirang Joshi</div>
          <div style={{ display: "grid", gridTemplateColumns: "20% 1fr", height: "100%" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column", padding: "10px" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/experience">Experience</Link>
            </div>
            <div >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default MyData;

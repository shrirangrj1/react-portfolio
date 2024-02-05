import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import "./Portfolio.css";

function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0px 8px", border: "1px dashed white" }}>
      <div style={{ fontSize: "20px", color: "#ffffff" }}>About</div>
      <div style={{ color: "#ffffff" }}>
        Results-driven and detail-oriented React Developer with a proven track record of delivering high-quality web applications. Adept at translating complex requirements into clean, efficient, and
        maintainable code. Possesses a strong foundation in front-end technologies, excellent problem-solving skills, and a passion for creating seamless user experiences. Continuously stays updated
        with the latest industry trends and technologies.
      </div>
    </div>
  );
}

function Contact() {
  return <div style={{fontSize: "20px", color: "#ffffff" }}>
    Content
  </div>;
}
function Skills() {
  return <div style={{fontSize: "20px", color: "#ffffff" }}>Skills</div>;
}

function Experience() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0px 8px", border: "1px dashed white" }}>
      <div style={{ fontSize: "20px", color: "#ffffff" }}>React Developer | Laminaar Aviation InfoTech | Mumbai | May 2022 - Present</div>
      <ul style={{ fontSize: "18px", color: "#ffffff" }}>
        <li>
          <p>Developed and maintained several React-based single-page applications, meeting project requirements and deadlines consistently.</p>
        </li>
        <li>
          <p>Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow and real-time updates for users.</p>
        </li>
        <li>
          <p>Implemented responsive designs and mobile optimizations, enhancing the user experience across various devices.</p>
        </li>
        <li>
          <p>Resolved complex technical issues and bugs, reducing the overall number of production incidents by 20%.</p>
        </li>
        <li>
          <p>Actively participated in Agile development sprints, contributing to the refinement of user stories and sprint planning sessions.</p>
        </li>
      </ul>
    </div>
  );
}

function Portfolio() {
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  console.log("activeLink", activeLink);

  return (
    <Router>
      <div style={{ height: "100vh", boxSizing: "border-box", padding: "20px", backgroundColor: "#000000" }}>
        <div style={{ display: "grid", gridTemplateRows: "40px 1fr", height: "100%", gap: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "0px 10px", fontFamily: "Segoe UI", fontSize: "40px", color: "#ffffff", fontWeight: "600" }}>Shrirang Joshi</div>
          <div style={{ display: "grid", gridTemplateColumns: "30% 1fr", height: "100%" }}>
            <div style={{ display: "flex", gap: "25px", flexDirection: "column", padding: "10px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <NavLink to="/" onClick={() => handleNavLinkClick("/")} activeClassName="active-link" style={{ color: "#ffffff", textDecoration: "none", fontSize: "25px" }}>
                    About
                  </NavLink>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>{activeLink === "/" && <div className="dot"></div>}</div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <NavLink to="/contact" onClick={() => handleNavLinkClick("/contact")} activeClassName="active-link" style={{ color: "#ffffff", textDecoration: "none", fontSize: "25px" }}>
                    Contact
                  </NavLink>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>{activeLink === "/contact" && <div className="dot"></div>}</div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <NavLink to="/experience" onClick={() => handleNavLinkClick("/experience")} activeClassName="active-link" style={{ color: "#ffffff", textDecoration: "none", fontSize: "25px" }}>
                    Experience
                  </NavLink>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>{activeLink === "/experience" && <div className="dot"></div>}</div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <NavLink to="/skills" onClick={() => handleNavLinkClick("/skills")} activeClassName="active-link" style={{ color: "#ffffff", textDecoration: "none", fontSize: "25px" }}>
                    Skills
                  </NavLink>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>{activeLink === "/skills" && <div className="dot"></div>}</div>
              </div>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Portfolio;

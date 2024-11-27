import React, { useState } from "react";
import { motion } from "framer-motion";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const skills = [
    "Prompt Engineering",
    "ChatGPT",
    "Natural Language Processing (NLP)",
    "Artificial Intelligence (AI)",
    "Software Development",
    "Research and Development (R&D)",
    "Project Management",
    "Sphinx",
    "Swagger API",
    "Kubernetes",
    "Docker",
    "REST APIs",
    "Proof of Concept",
    "Jenkins",
    "Azure DevOps",
    "MongoDB",
    "Linux",
    "Data Structures",
    "Python (Programming Language)",
  ];

  const projectsData = [
    {
      title: "Chief Technology Officer",
      descrption: "Apr 2024 - Present 8 mos",
      image: "img.jpg",
    },
    {
      title: "CTO @FacesearchAI",
      descrption: "Nov 2023 - Present 1 yr 1 mo",
      image: "img.jpg",
    },
    {
      title: "Full Statck Engineer",
      descrption: "OCT 2023 - Present 1 yr 2 mos",
      image: "img.jpg",
    },
  ];

  const test = [
    {
      id: 1,
      name: "IBM",
      position: "Applied Data Science Capstone",
      feedback: "Issued jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Data Analysis with Python",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Data Visualization with Python",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Databases & SQL for Data Science with Python",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Machine Learning with Python",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Python Project for Data Science",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Python for Data Science AI & Development",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "Tools for Data Science",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "Infosys",
      position: "Data Science Foundation Certificate",
      feedback: "Issued Jun 2022",
      image: "infosys.png",
    },
    {
      id: 1,
      name: "IBM",
      position: "Data Science Methodlogy",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "IBM",
      position: "IBM What is Data Science",
      feedback: "Issued Jun 2022",
      image: "ibm.jpg",
    },
    {
      id: 1,
      name: "Infosys",
      position: "Python Programmer Certification",
      feedback: "Issued Jun 2022",
      image: "infosys.png",
    },
  ];

  return (
    <div>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="logo">My Website</div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar open  " : "bar"}></div>
          <div className={isMenuOpen ? "bar open  " : "bar"}></div>
          <div className={isMenuOpen ? "bar open  " : "bar"}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.nav>

      <section className="hero" id="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">
              Welcome to <span>My Portfolio Bhavya Bansal</span>
            </h1>
            <p className="hero-description">
              Chief Technology Officer @Persist Venture{" "}
              <span>Chief Technology Officer</span> Present
            </p>

            <motion.a
              href="#projects"
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src="img.png"></img>
          </motion.div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <motion.div
            className="profile-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="img.png"></img>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2>About Me</h2>
            <p>
              As a seasoned technology leader, I bring over 3 years of
              experience in software engineering, AI development, and technical
              leadership. Currently serving as Chief Technology Officer at
              Persist Ventures and FacesearchAI, I have a proven track record of
              driving innovation and growth.
            </p>
            <p>
              My academic foundation in software engineering from Dr. A.P.J.
              Abdul Kalam Technical University, combined with my professional
              experience and certifications in Applied Data Science and Data
              Analysis with Python from IBM, have equipped me with a unique
              blend of technical expertise and leadership acumen.
            </p>

            <div className="skills">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-badge"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Works</h2>
        <p>My Previous Work</p>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card"
            >
              <img src={project.image}></img>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.descrption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              required
              autoCapitalize="off"
              placeholder="Yor Name"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              required
              autoCapitalize="off"
              placeholder="Yor Name"
            ></input>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="name"
              required
              autoCapitalize="off"
              placeholder="Yor Name"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </motion.div>
      </section>
      <section id="test" className="test">
        <h2>Licenses & certifications</h2>
        <div className="test-container">
          {test.map((tes) => (
            <motion.div
              key={test.id}
              className="test-card"
              initial={{ opacity: 0, scale: 0.09 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: tes.id * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={tes.image} className="client-img"></img>
              <h3>{tes.name}</h3>
              <p className="position">{tes.position}</p>
              <p className="feedback">"{tes.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>Bhavya Bansal Portfolio </h2>
          </div>
          <div className="footer-links">
            <a>About</a>
            <a>Projects</a>
            <a>Test</a>
            <a>Contact</a>
          </div>
          <div className="footer-social">
            <a>
              <i className="fab fa-twitter"></i>
            </a>
            <a>
              <i className="fab fa-github"></i>
            </a>
            <a>
              <i className="fab fa-linkedin"></i>
            </a>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; Bhavya Bansal Portfolio. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

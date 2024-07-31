import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/bigScreenComponent/Navbar/Header';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Project/Projects';
import Skill from './pages/Skill/Skill';
import Contact from './pages/contact/contact';
import ProjectDescription from './pages/ProjectDescription/ProjectDescription';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { textColor, bgColor } = useContext(ThemeContext);

  return (
    <div className={`${bgColor} ${textColor}`}>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="about">
                <About />
              </section>
              <section id="experience">
                <Education />
              </section>
              <section id="skills">
                <Skill />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contacts">
                <Contact />
              </section>
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <section id="projects">
              <ProjectDescription />
            </section>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

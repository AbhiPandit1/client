import { useContext } from 'react';
import './App.css';
import Header from './components/bigScreenComponent/Navbar/Header';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Project/Projects';
import Skill from './pages/Skill/Skill';

import { ThemeContext } from './context/ThemeContext';

function App() {
  const { textColor, bgColor } = useContext(ThemeContext);

  return (
    <div className={`${bgColor} ${textColor}`}>
      <Header />

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
    </div>
  );
}

export default App;

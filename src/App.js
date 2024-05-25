import './App.css';
import Header from './components/bigScreenComponent/Navbar/Header';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Projects from './pages/Project/Projects';
import Skill from './pages/Skill/Skill';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About/About';
import Contact from './components/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </>
    </div>
  );
}

export default App;

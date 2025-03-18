import React from 'react';
import './App.css';
// Import components with explicit file extensions
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Courses from './components/Courses/Courses.jsx';
import Team from './components/Team/Team.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
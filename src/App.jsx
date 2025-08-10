import React from 'react';
import './styles/main.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

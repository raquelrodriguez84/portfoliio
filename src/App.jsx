import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Projects from './components/Proyectos/Proyects';
import Home from './components/Home/Home';
import About from './components/About/About'


        
        function App() {
          return (
            <Router>
              <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sobre-mi" element={<About />}/>
                    <Route path="/Proyectos" element={<Projects />}/>
                  </Routes>
                </main>
            </Router>
          );
        }

        export default App;

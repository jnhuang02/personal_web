import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';
import Home from './components/Home.jsx';
import Landing from './components/Landing.tsx'

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <NavBar />
    //     <Routes>
    //       <Route path = "/Home" element = {<Home />} />
    //       <Route path="/AboutMe" element={<AboutMe />} />
    //       <Route path="/Projects" element={<Projects />} />
    //       <Route path="/ContactMe" element={<ContactMe />} />
    //     </Routes>
    //   </div>
    // </Router>
     <Landing/>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AboutMe from './components/AboutMe';
// import ContactMe from './components/ContactMe';
// import Projects from './components/Projects';
import './index.css'; // or './App.css'
import App from './App'; // Import the App component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(
  
//   <Router>
//     <div className="App">
//       <header className="App-header">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">About Me</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Me</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<AboutMe />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<ContactMe />} />
//         </Routes>
//       </header>
//     </div>
//   </Router>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

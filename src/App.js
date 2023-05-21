import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import linkedin from './images/linkedin.png';

function App() {
  return (
    <>
    <div className="App">
    <div className="navbar">
      <div className="logo">
        <ul className='list'>
        <Link to="/disclaimer" style={{ textDecoration: 'none' }}><li className='item'>Disclaimer</li></Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}><li className='item'>Contact</li></Link>
        </ul>
      </div>
    </div>
      <div className="body">
        <h1 className='heading'>The Prayers</h1>
        <p className='para'>The grass withers, the flower fades, but the word of our GOD will stand forever.</p>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}><button className='btn'>Explore</button></Link>
      </div>
    </div>
    <div className="footer">
        <div>Designed By: Charandeep Singh Chawla | &copy;2023 | <a href="https://www.linkedin.com/in/charandeepsingh01/"><img className="icon" alt="" src={linkedin}></img></a>
                </div>
    </div>
    </>
  );
}

export default App;

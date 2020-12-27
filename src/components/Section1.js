import React from 'react';
import '../styles/section1.css';
import Navbar from './Navbar';

function Section1() {
  return (
    <div className="section1">
      <Navbar/>
      <div className="section1__container">
        <h1 style={{fontSize:45}}>PANTANAL</h1>
        <h3 style={{fontSize:25}}>HOME TO THE BIGGEST WETLANDS OF THE PLANET</h3>
      </div>
    </div>
  );
}

export default Section1;

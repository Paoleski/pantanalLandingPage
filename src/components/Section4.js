import React from 'react';
import '../styles/section4.css';
import image from '../img/pantaDex-SS.png'
import Footer from './Footer';

function Section4() {
  return (
    <div className="section4">
      <div className="section4__container">
        <div className="section4__title">
          <h2>THE PANTANALDEX</h2>
          <h5 style={{marginTop:3}}>Web app with Pantanal's animal list</h5>
        </div>
        <div className="section4__ss">
            <img  style={{width:'100%'}} src={image} alt=""/>
        </div>
        <h5 style={{textAlign:'center'}}><a href="https://paoleski.github.io/pantanalDex/">Click here to check it out</a></h5>
      </div>
      <Footer/>
    </div>
  );
}

export default Section4;

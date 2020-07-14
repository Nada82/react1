import React from 'react';
import scrdaisy from './scrdaisy.jpg';
import hxh from './hxh.mp4';
import './App.css';

function App() {
  return (
   
<div style={{
   border: '1px solid black',
   maxWidth:'100vw',}}> 
 
     <h1 className="titlered"> Nada Amami </h1> 
     <br/> <img src={scrdaisy} /> <br/> 
      <img src='/publicshop.jpg'/>
      <br/> 
      <video width="320" height="240" controls>  
        <source src={hxh} type="video/mp4"/> 
      </video>
      <br/> 
  </div>
  );
}

export default App;

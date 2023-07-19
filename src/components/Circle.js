import React, { useState } from 'react';
import '../styles/Circle.css';
import HelloText from './HelloText';

function Circle_Main() {

  const [Click, setClick] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const MouseDown = (e) => {
    setClick(true);
    setStartX(e.clientX);
  };
  
  const MouseUp = () => {
    setClick(false);
  };

  const MouseMove = (e) =>{
    if(Click){
      const moveX = e.clientX - startX;
      const sensitivity  = 0.1;
      const angleChange = (moveX * sensitivity) % 360;
      setRotationAngle((prevAngle) => (prevAngle + angleChange + 360) % 360);
      setStartX(e.clientX)
    }
  }  

  return (
    <>
      <div
        className='circle_wrap'
        onMouseDown={MouseDown}
        onMouseMove={MouseMove}
        onMouseUp={MouseUp}
      >
        <div className='circle-text'>
          <div className='introduction'>
            <HelloText/>
          </div>
        </div>
        <div
          className="circle-container"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          <div class="circle-center">
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
            <div className='circle-item'></div>
          </div>           
        </div>

      </div>
    </>
  );
}

export default Circle_Main;

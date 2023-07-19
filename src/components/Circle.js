import React, { useState } from 'react';
import '../styles/Circle.css';
import HelloText from './HelloText';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        className="circle_wrap start end"
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
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                About Me
              </div>
              <Link className="circle-btn" to={"/AboutMe"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                Skils
              </div>
              <Link className="circle-btn" to={"/Skils"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                Project 1
              </div>
              <Link className="circle-btn" to={"/Project1"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                Project 2
              </div>
              <Link className="circle-btn" to={"/Project2"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                Project 3
              </div>
              <Link className="circle-btn" to={"/Project3"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
                Career
              </div>
              <Link className="circle-btn" to={"/Career"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
               License
              </div>
              <Link className="circle-btn" to={"/License"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>
            <div className='circle-item'>
              <div className='circle-Mainitem'>
               Cover Letter
              </div>
              <Link className="circle-btn" to={"/CoverLetter"}>
               <Button variant="outline-secondary">바로가기</Button>
              </Link>
            </div>            
          </div>           
        </div>

      </div>
    </>
  );
}

export default Circle_Main;

import React from 'react';
import './Intro.css'; // Importing the corresponding CSS file
import 'bootstrap-icons/font/bootstrap-icons.css';
import hexagonImage from '../images/bg.jpeg';
import my_pic_bg from '../images/mypic_bg.png';
import my_pic from '../images/my_pic.jpg';

function Intro() {
  return (
    <div className="section1-container">
      {/* Hexagon in left corner */}
      <div className="hexagon-container">
        <img src={hexagonImage} alt="hexagon background" />
      </div>
      
      <div className="introduction">
        <h2 className="my_name">Hi, I'm Asal</h2>
        <p>A Developer</p>
        <div className="quote">
          <p>"Python approach: They'll lie in wait for the right moment to strike."</p>
          <div className="author">
            <p>-Mr. Robot</p>
          </div>
        </div>
      </div>

      {/* My pic on right corner */}
      <div className="my_pic">
        <img src={my_pic} alt="my profile" />
      </div>
      
      {/* My pic background below my pic */}
      {/* <div className="my_pic_bg">
        <img src={my_pic_bg} alt="my background" />
      </div> */}
      
      {/* This is for mobile view */}
      <div className="my_pic2">
        <img src={my_pic_bg} alt="my background mobile" />
      </div>
    </div>
  );
}

export default Intro;
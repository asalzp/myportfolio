import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";
import "./Projects.css"; // Importing the corresponding CSS file

function Project() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1-left",
      { path: "#blob1-left" },
      { path: "#blob2-left" },
      { repeat: 999, duration: 1500, yoyo: true }
    ).start();
  }, []);

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob2-right",
      { path: "#blob2-right" },
      { path: "#blob1-right" },
      { repeat: 999, duration: 1500, yoyo: true }
    ).start();
  }, []);

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob2-middle",
      { path: "#blob2-middle" },
      { path: "#blob1-middle" },
      { repeat: 999, duration: 1500, yoyo: true }
    ).start();
  }, []);

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1-last",
      { path: "#blob1-last" },
      { path: "#blob2-last" },
      { repeat: 999, duration: 1500, yoyo: true }
    ).start();
  }, []);

  const openGame = () => {
    window.open('https://asalzp.github.io/slide.html', '_blank')
  }

  const openCalendarApp = () => {
    window.open('https://github.com/asalzp/calendarapp', '_blank')
  }

  const openCalorXApp = () => {
    window.open('https://www.youtube.com/watch?v=549-b2WlWQA', '_blank')
  }

  const openMalefiz = () => {
    window.open('https://github.com/asalzp/Projects-Done/tree/main/Malefiz%20Game%20Project', '_blank')
  }

  useEffect(() => {
    const blobElement1 = document.querySelector('.blob_itself');
    const blobElement2 = document.querySelector('.blob_itself');
    

    if (blobElement1) {
      blobElement1.addEventListener('click', openGame);
    }

    if (blobElement2) {
      blobElement2.addEventListener('click', openCalendarApp);
    }

    return () => {
      if (blobElement1) {
        blobElement1.removeEventListener('click', openGame);
      }
      if (blobElement2) {
        blobElement2.removeEventListener('click', openCalendarApp);
      }
    };
  }, []);

  return (
    <div id="projects" className="section_container">
      <div className="title">
        <h1>My Projects</h1>
      </div>
      <div className="spacer">
        <div className="left-blob">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="800"
            height="500"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <g transform="translate(491.9400486868151 297.3234330424008)">
              <path
              className="blob_itself"
              onClick={openGame} 
                id="blob1-left"
                d="M149.9 -164.4C174.9 -124.9 162.5 -62.5 151.5 -11C140.5 40.5 131.1 81.1 106.1 125.7C81.1 170.4 40.5 219.2 -2.1 221.3C-44.8 223.5 -89.6 178.9 -139.6 134.2C-189.6 89.6 -244.8 44.8 -248.2 -3.4C-251.6 -51.6 -203.2 -103.2 -153.2 -142.7C-103.2 -182.2 -51.6 -209.6 5.4 -215C62.5 -220.5 124.9 -203.9 149.9 -164.4"
                fill="#303030"
              />
            </g>
            <g transform="translate(414.8630586732182 307.1500272025332)" style={{visibility:"hidden"}}>
              <path id="blob2-left"
                d="M190.9 -168.4C240.4 -141.4 268.7 -70.7 258.2 -10.5C247.7 49.7 198.5 99.5 149 130.5C99.5 161.5 49.7 173.7 7.2 166.5C-35.4 159.4 -70.7 132.7 -108.4 101.7C-146 70.7 -186 35.4 -189.8 -3.8C-193.6 -42.9 -161.1 -85.8 -123.5 -112.8C-85.8 -139.8 -42.9 -150.9 13.9 -164.8C70.7 -178.7 141.4 -195.4 190.9 -168.4"
                fill="#303030"
              />
            </g>
            <text  className="game-text"
              style={{
                fontFamily: "monospace",
                fontSize: "28px",
                whiteSpace: "pre",
                fill: "#e4e2e2"
              }}
            >
              <tspan x="440.24" y="280.109" style={{ filter: "none" }}>
                My Game
              </tspan>
            </text>
          </svg>
          
        </div>

        <div className="right-blob">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="800"
            height="500"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            
            <g transform="translate(414.8630586732182 307.1500272025332)" >
              <path onClick={openCalendarApp}  className="blob_itself2"
               id="blob2-right"
                d="M190.9 -168.4C240.4 -141.4 268.7 -70.7 258.2 -10.5C247.7 49.7 198.5 99.5 149 130.5C99.5 161.5 49.7 173.7 7.2 166.5C-35.4 159.4 -70.7 132.7 -108.4 101.7C-146 70.7 -186 35.4 -189.8 -3.8C-193.6 -42.9 -161.1 -85.8 -123.5 -112.8C-85.8 -139.8 -42.9 -150.9 13.9 -164.8C70.7 -178.7 141.4 -195.4 190.9 -168.4"
                fill="#303030"
              />
            </g>
            <g transform="translate(491.9400486868151 297.3234330424008)" style={{visibility:"hidden"}}>
              <path
              
              onClick={openCalendarApp} 
                id="blob1-right"
                d="M149.9 -164.4C174.9 -124.9 162.5 -62.5 151.5 -11C140.5 40.5 131.1 81.1 106.1 125.7C81.1 170.4 40.5 219.2 -2.1 221.3C-44.8 223.5 -89.6 178.9 -139.6 134.2C-189.6 89.6 -244.8 44.8 -248.2 -3.4C-251.6 -51.6 -203.2 -103.2 -153.2 -142.7C-103.2 -182.2 -51.6 -209.6 5.4 -215C62.5 -220.5 124.9 -203.9 149.9 -164.4"
                fill="#303030"
              />
            </g>
            <text 
              style={{
                fontFamily: "monospace",
                fontSize: "28px",
                whiteSpace: "pre",
                fill: "#e4e2e2"
              }}
            >
              <tspan x="280.24" y="280.109" style={{ filter: "none" }}>
                The Calendar App
              </tspan>
            </text>
          </svg>
        </div>

        <div className="middle-blob">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="800"
            height="500"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            
            <g transform="translate(414.8630586732182 307.1500272025332)" >
              <path onClick={openCalorXApp}  className="blob_itself2"
               id="blob2-middle"
                d="M190.9 -168.4C240.4 -141.4 268.7 -70.7 258.2 -10.5C247.7 49.7 198.5 99.5 149 130.5C99.5 161.5 49.7 173.7 7.2 166.5C-35.4 159.4 -70.7 132.7 -108.4 101.7C-146 70.7 -186 35.4 -189.8 -3.8C-193.6 -42.9 -161.1 -85.8 -123.5 -112.8C-85.8 -139.8 -42.9 -150.9 13.9 -164.8C70.7 -178.7 141.4 -195.4 190.9 -168.4"
                fill="#303030"
              />
            </g>
            <g transform="translate(491.9400486868151 297.3234330424008)" style={{visibility:"hidden"}}>
              <path
              
              onClick={openCalorXApp} 
                id="blob1-middle"
                d="M149.9 -164.4C174.9 -124.9 162.5 -62.5 151.5 -11C140.5 40.5 131.1 81.1 106.1 125.7C81.1 170.4 40.5 219.2 -2.1 221.3C-44.8 223.5 -89.6 178.9 -139.6 134.2C-189.6 89.6 -244.8 44.8 -248.2 -3.4C-251.6 -51.6 -203.2 -103.2 -153.2 -142.7C-103.2 -182.2 -51.6 -209.6 5.4 -215C62.5 -220.5 124.9 -203.9 149.9 -164.4"
                fill="#303030"
              />
            </g>
            <text 
              style={{
                fontFamily: "monospace",
                fontSize: "28px",
                whiteSpace: "pre",
                fill: "#e4e2e2"
              }}
            >
              <tspan x="280.24" y="280.109" style={{ filter: "none" }}>
                CalorX Mobile App
              </tspan>
            </text>
          </svg>
        </div>

        <div className="last-blob">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="800"
            height="500"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            
            <g transform="translate(414.8630586732182 307.1500272025332)" >
              <path onClick={openMalefiz}  className="blob_itself2"
               id="blob1-last"
                d="M190.9 -168.4C240.4 -141.4 268.7 -70.7 258.2 -10.5C247.7 49.7 198.5 99.5 149 130.5C99.5 161.5 49.7 173.7 7.2 166.5C-35.4 159.4 -70.7 132.7 -108.4 101.7C-146 70.7 -186 35.4 -189.8 -3.8C-193.6 -42.9 -161.1 -85.8 -123.5 -112.8C-85.8 -139.8 -42.9 -150.9 13.9 -164.8C70.7 -178.7 141.4 -195.4 190.9 -168.4"
                fill="#303030"
              />
            </g>
            <g transform="translate(491.9400486868151 297.3234330424008)" style={{visibility:"hidden"}}>
              <path
              
              onClick={openMalefiz} 
                id="blob2-last"
                d="M149.9 -164.4C174.9 -124.9 162.5 -62.5 151.5 -11C140.5 40.5 131.1 81.1 106.1 125.7C81.1 170.4 40.5 219.2 -2.1 221.3C-44.8 223.5 -89.6 178.9 -139.6 134.2C-189.6 89.6 -244.8 44.8 -248.2 -3.4C-251.6 -51.6 -203.2 -103.2 -153.2 -142.7C-103.2 -182.2 -51.6 -209.6 5.4 -215C62.5 -220.5 124.9 -203.9 149.9 -164.4"
                fill="#303030"
              />
            </g>
            <text 
              style={{
                fontFamily: "monospace",
                fontSize: "28px",
                whiteSpace: "pre",
                fill: "#e4e2e2"
              }}
            >
              <tspan x="280.24" y="280.109" style={{ filter: "none" }}>
                Malefiz Game
              </tspan>
            </text>
          </svg>
        </div>
        
      </div>
    </div>
  );
}

export default Project;

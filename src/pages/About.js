// SecondPage.js
import React, { useState } from "react";
import "./About.css"; // Importing the corresponding CSS file
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleHoverOut = () => {
    setHoveredButton(null);
  };

  return (
    <div id="about" className="section-container">
      <div className="summary">
        <p>
          Hey there! 👋 I'm Asal, a full-stack developer passionate about
          turning coffee into code. <br /> With experience in both front-end and
          back-end, I craft dynamic web apps and robust APIs. When I'm not
          coding, I'm exploring nature, baking pies, or diving into a good read. <br />
          Ready to tackle any challenge? <a href="mailto:azrepakziab@mun.ca">Let's chat!</a> 🚀
        </p>
      </div>

      <div className="skills">
        <h1>I am skilled in</h1>

        <div className="skills-items">
          <ul>
            <li>
              <button
                onMouseEnter={() => handleHover("webdev")}
                onMouseLeave={handleHoverOut}
                type="button"
                class="btn btn-rect-to-round btn-rect-to-round--black"
              >
                Web Development
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => handleHover("languages")}
                onMouseLeave={handleHoverOut}
                type="button"
                class="btn btn-rect-to-round btn-rect-to-round--black"
              >
                Programming Languages
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => handleHover("frameworks")}
                onMouseLeave={handleHoverOut}
                type="button"
                class="btn btn-rect-to-round btn-rect-to-round--black"
              >
                Frameworks and Tools
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="skills-details">
        <div
          className={`webdev-details ${
            hoveredButton === "webdev" ? "heartbeat" : "hidden"
          }`}
        >
          <ul>
            <li>
              <p>TypeScript</p>
            </li>
            <li>
              <p>HTML/CSS</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Vue3</p>
            </li>
            <li>
              <p>Node.js</p>
            </li>
          </ul>
        </div>

        <div
          className={`languages-details ${
            hoveredButton === "languages" ? "heartbeat" : "hidden"
          }`}
        >
          <ul>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>R</p>
            </li>
            <li>
              <p>Java</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>C/C#</p>
            </li>
            <li>
              <p>Dart</p>
            </li>
          </ul>
        </div>

        <div
          className={`frameworks-details ${
            hoveredButton === "frameworks" ? "heartbeat" : "hidden"
          }`}
        >
          <ul>
            <li>
              <p>Spring Boot</p>
            </li>
            <li>
              <p>Bootstrap</p>
            </li>
            <li>
              <p>Flutter</p>
            </li>
            <li>
              <p>Unity</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>NoSQL</p>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='likes'>
        <h1>I like</h1>

        <div className='likes-items'>
            <ul>
              <li>
              <button onMouseEnter={() => handleHover('guitar')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Playing the guitar</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('books')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Reading books</button>
              </li>
              <li>
              <button onMouseEnter={() => handleHover('baking')}
                      onMouseLeave={handleHoverOut}
                      type="button" class="btn btn-rect-to-round btn-rect-to-round--black">Baking</button>
              </li>
            </ul>
        </div>
      </div>

      <div className='likes_images'>
        <div className={`guitar_img ${hoveredButton === 'guitar' ? 'heartbeat' : 'hidden'}`}>
          <img src='images/guitar.jpg' alt='guitar'></img>
        </div>
        <div className={`books_img ${hoveredButton === 'books' ? 'heartbeat' : 'hidden'}`}>
          <img src='images/books.jpg' alt='books'></img>
        </div>
        <div className={`baking_img ${hoveredButton === 'baking' ? 'heartbeat' : 'hidden'}`}>
          <img src='images/baking.jpg' alt='baking'></img>
        </div>

      </div> */}
    </div>
  );
}

export default About;

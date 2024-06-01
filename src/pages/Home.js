import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Entertainment from './Entertainment';
import Contact from './Contact';

function Home() {
   
    return (
        <div id='home'>
            <div>
                <Intro />
            </div>

            <div>
                <About />
            </div>

            <div>
                <Projects />
            </div>

            <div>
                <Entertainment />
            </div>

            <div>
                <Contact />
            </div>
        </div>
        
    );
}

export default Home;

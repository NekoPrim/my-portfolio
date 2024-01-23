import React from 'react';
// import { ScreenSize } from './app/ScreenSize';
import { About } from './features/about/About';
import { Projects } from './features/projects/Projects';
import { Resume } from './features/resume/Resume';
import { Contact } from './features/contact/Contact';
import { Credits } from './features/credits/Credits';
import './App.css';

function App() {
  // const { windowDimension } = ScreenSize();

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-header-name'>
          <div>Desiree Quade</div>
          <div className='App-header-sub-name'>software engineer</div>
        </div>
        <div></div>
      </header>
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Credits />
    </div>
  );
}

export default App;

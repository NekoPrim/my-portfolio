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
      {/* { windowDimension.width >= 508 ?
        (
          <> */}
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Credits />
          {/* </>
        ) : (
          null
        ) */}
    {/* } */}
       


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;

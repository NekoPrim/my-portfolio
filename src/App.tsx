import { useState } from 'react';
import { ScreenSize } from './app/ScreenSize';
import { Alert, Dropdown, NavItem, NavLink } from 'react-bootstrap';

import { About } from './features/about/About';
import { Projects } from './features/projects/Projects';
import { Resume } from './features/resume/Resume';
import { Contact } from './features/contact/Contact';
import { Credits } from './features/credits/Credits';
import './App.css';

function App() {
  const { windowDimension } = ScreenSize();
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] =useState<boolean>(false);

  return (
    <div className='App'>
      <header className='App-header' id='1'>
        <div className='App-header-name'>
          <div>Desiree Quade</div>
          <div className='App-header-sub-name'>software engineer</div>
        </div>
      </header>
      { (windowDimension.width <= 550) ?
        (<Alert
            show={show}
            variant='danger'
            className='App-alert'
            dismissible
            onClick={() => setShow(false)}
        >
          <p>
            Please rotate device to side for better viewing experience.
          </p>
        </Alert>)
      : null}
      <Dropdown as={NavItem} className='App-nav' role='button' autoClose='outside'>
          <Dropdown.Toggle as={NavLink} data-bs-toggle='App-nav' className='App-nav-toggle'>
            menu
          </Dropdown.Toggle>
          <Dropdown.Menu variant='dark' className='App-nav-menu' show={isOpen}>
            <Dropdown.Item href='#1' className='App-nav-item' onSelect={() => setIsOpen(false)}>
              top
            </Dropdown.Item>
            <Dropdown.Item href='#2' className='App-nav-item'>
              projects
            </Dropdown.Item>
            <Dropdown.Item href='#3' className='App-nav-item'>
              resume
            </Dropdown.Item>
            <Dropdown.Item href='#4' className='App-nav-item'>
              contact
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>

      <About />
      <div id='2'>
        <Projects />
      </div>
      <div id='3'>
        <Resume />
      </div>
      <div id='4'>
        <Contact />
      </div>
      <Credits />

    </div>
  );
}

export default App;

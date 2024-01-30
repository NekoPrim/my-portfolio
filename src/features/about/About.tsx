import { Container, Nav } from 'react-bootstrap';
import { ScreenSize } from '../../app/ScreenSize';
import meNpups from '../../images/meNpups.jpg';
import mesNpup from '../../images/mesNpup.png';
import './about.css';

export const About = () => {
    const { windowDimension } = ScreenSize();

    return(
        <Container className='App-container'>
            <div className='about-margin'>
                <div>
                    <div className='about-links'>
                        <Nav.Link
                            href='https://www.linkedin.com/in/desiree-quade-b614b6225/'
                            className='about-link'
                            target='_blank'
                        >
                        LinkedIn
                        </Nav.Link>
                        <Nav.Link
                            href='https://github.com/NekoPrim'
                            className='about-link'
                            target='_blank'
                        >
                        GitHub
                        </Nav.Link>
                    </div>
                    <div className='App-about-info'>
                        <div className='App-text'>
                            Driven by a passion for learning and a love for tackling new challenges, I bring a unique blend of skills and experiences to software engineering. My career path has taken me from assisting those with disabilities, to teaching English in Japan, to deciphering airplane blueprints, and even resolving customer telecommunications issues. I've managed quality assurance for incoming products, spearheaded operations for a research and development department, and have now embarked on the exciting journey of software development. My diverse background provides me with valuable perspectives and allows for seamless adaptation within any environment.
                        </div>
                        { windowDimension.width > 992 ?
                            <div className='App-game'>
                            {/* <MyButton text='GAME' action={onGame}/> */}
                            </div>
                        : null}
                    </div>
                    </div>
                    <div>
                    { windowDimension.width <= 992 ?
                        <div className='App-game'>
                        {/* <MyButton text='GAME' action={onGame}/> */}
                        </div>
                    : null}
                    
                </div>
                <div className='about-img-area'>
                    <div className='about-wrapper'>
                        {/* <div className='about-image' /> */}
                        {/* <img src={meNpups} className='about-image' alt='img-1' /> */}
                        {/* <img src={mesNpup} className='about-image' alt='img-2' /> */}
                    </div>
                </div>
            </div>
        </Container>
    );
};
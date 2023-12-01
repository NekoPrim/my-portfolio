import { Container, Nav } from "react-bootstrap";
import { ScreenSize } from "../../app/ScreenSize";
import pupsAndI from '../../images/pupsAndI.jpg';
import './about.css';

export const About = () => {
    const { windowDimension } = ScreenSize();

    return(
        <Container className='App-container'>
            <div className='about-margin'>
            <div>
                <div className='App-links'>
                    <Nav.Link
                    href='https://www.linkedin.com/in/desiree-quade-b614b6225/'
                    className='App-link'
                    >
                    LinkedIn
                    </Nav.Link>
                    <Nav.Link
                    href='https://github.com/NekoPrim'
                    className='App-link'
                    >
                    GitHub
                    </Nav.Link>
                </div>
                <div className='App-about-info'>
                    {/* <img src={pupsAndI} className='App-image' alt='' /> */}
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
                {/* <img src={pupsAndI} className='App-image' alt='' /> */}
                { windowDimension.width <= 992 ?
                    <div className='App-game'>
                    {/* <MyButton text='GAME' action={onGame}/> */}
                    </div>
                : null}
                
            </div>
            <img src={pupsAndI} className='App-image' alt='' />
            </div>
        </Container>
    );
};
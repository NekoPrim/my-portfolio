import { Container } from 'react-bootstrap';
import './credits.css';

export const Credits = () => {
    return (
        <Container className='App-container'>
            <div className='credits'>
                <div className='credits-thanks'>
                    Thank you for taking the time to view this!
                </div>
                <div>
                    Technologies used:
                </div>
                <ul className='credits-list'>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BootStrap</li>
                    <li>SMTP.js</li>
                    <li>Redux</li>
                    <li>Express-Node.js</li>
                    <li>GitHub-Pages</li>
                </ul>
            </div>
        </Container>
    )
}
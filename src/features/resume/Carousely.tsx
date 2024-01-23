import { Carousel } from 'react-bootstrap';
import { skills } from '../../app/data';
import './resume.css';

export const Carousely = () => {
    return (
        <div className='resume-carousel'>
            <Carousel className='resume-carousel' variant='light' >
                <Carousel.Item>
                    <div className='resume-skills-title'>Languages</div>
                    <div className='resume-skills-info-sx'>
                        {skills.languages.map((language) => (
                            <li key={language}>{language}</li>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='resume-skills-title'>Libraries</div>
                    <div className='resume-skills-info-sx'>
                        {skills.libraries.map((library) => (
                            <li key={library}>{library}</li>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='resume-skills-title'>FrameWorks</div>
                    <div className='resume-skills-info-sx'>
                        {skills.frameWorks.map((framework) => (
                            <li key={framework}>{framework}</li>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='resume-skills-title'>Tools</div>
                    <div className='resume-skills-info-sx'>
                        {skills.tools.map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='resume-skills-title'>TCP</div>
                    <div className='resume-skills-info-sx'>
                        {skills.TCPs.map((TCP) => (
                            <li key={TCP}>{TCP}</li>
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='resume-skills-title'>Ect.</div>
                    <div className='resume-skills-info-sx'>
                        {skills.ect.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};
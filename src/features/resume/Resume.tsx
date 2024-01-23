import { Container, Form, Stack } from 'react-bootstrap';
import { experience, education } from '../../app/data';
import { ScreenSize } from '../../app/ScreenSize';
import { Skills } from './Skills';
import './resume.css';
import { Carousely } from './Carousely';

export const Resume = () => {
    const { windowDimension } = ScreenSize();

    return (
        <Container className='App-container'>
            <div className='App-title'>
                Resume
            </div>
            <Form.Group className='resume-form'>
                <Form.Label className='resume-label'>
                    Bio
                </Form.Label>
                <Form.Text className='resume-text' as='div'>
                    Software engineer with 2+ years of experience in building and deploying web and mobile applications. Proven ability to work independently and as part of a team to deliver high-quality products on time and within budget. Seeking a challenging role in a fast-paced environment where I can use my skills to make a positive impact.
                </Form.Text>
            </Form.Group>
            <Form.Group className='resume-form'>
                <Form.Label className='resume-label'>
                    Skills
                </Form.Label>
                { windowDimension.width > 992 ? (
                    <Skills />
                ) : (
                    <div className='resume-carousel-container' >
                        <Carousely />
                    </div>
                )}
            </Form.Group>
            
            <Form.Group className='resume-form'>
                <Form.Label className='resume-label'>
                    Experience
                </Form.Label>
                <Stack>
                    {experience.map((job) => (
                        <div key={job.id} className='resume-info'>
                            <div className='resume-info-title'>
                                <div>{job.name}</div>
                                <div>{job.date}</div>
                            </div>
                            <div className='resume-info-note'>{job.location}</div>
                            {job.note ? (
                                <div className='resume-info-note' key={job.note}>
                                    {job.note}
                                </div>
                            ): null}
                            <div>{job.title}</div>
                            <ul>
                                {job.description.map((text) => (
                                    <li key={text.bullet}>{text.bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Stack>
            </Form.Group>
            <Form.Group className='resume-form'>
                <Form.Label className='resume-label'>
                    Education
                </Form.Label>
                <Stack className='resume-stack'>
                    {education.map((school) => (
                        <div key={school.id} className='resume-info-edu'>
                            <div className='resume-info-title'>
                                <div>{school.name}</div>
                                <div>{school.date}</div>
                            </div>
                            <div className='resume-info-text'>
                                <div className='resume-info-note'>{school.location}</div>
                                <div>{school.title} ({school.degree})</div>
                            </div>
                        </div>
                    ))}
                </Stack>
            </Form.Group>
        </Container>
    );
};
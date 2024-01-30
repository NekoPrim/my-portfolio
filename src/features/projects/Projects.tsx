import { useState } from 'react';
import { Container, Stack, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { ScreenSize } from '../../app/ScreenSize';
import { projects } from '../../app/data';
import './projects.css';

export const Projects = () => {
    const { windowDimension } = ScreenSize();
    const [build, setBuild] = useState<number>(0);

    const popover = (
        <Popover id='project-popover'>
            <Popover.Body>
                <ul className='project-build-side'>
                    {projects[build].build.map((text) => (
                        <li key={text.tool}>{text.tool}</li>
                    ))}
                </ul>
            </Popover.Body>
        </Popover>
    );

    return (
        <Container className='App-container'>
            <div className='App-title'>
                Projects
            </div>
            <Stack>
            {projects.map((project) => (
                <div className='project' key={project.id}>
                    { windowDimension.width >= 992 ?
                        <iframe className='project-video' src={project.video} title={project.title}>
                        </iframe>
                    : null}
                    <div className='project-info'>
                        <div className='project-title'>
                            {project.title}
                        </div>
                        <div className='project-type'>
                            {project.type}
                        </div>
                        { windowDimension.width < 992 ?
                            <div className='project-video-container'>
                                <iframe className='project-video' src={project.video} title={project.title}>
                                </iframe>
                                { windowDimension.width > 515 ? (
                                    <ul className='project-build-side'>
                                        {project.build.map((text) => (
                                            <li key={text.tool}>{text.tool}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        : null}
                        { windowDimension.width < 515 ? (
                            <OverlayTrigger
                                trigger='click'
                                placement='bottom'
                                overlay={popover}
                            >
                            <Button
                                className='project-button'
                                onClick={() => setBuild(project.id)}
                            >
                                Technologies
                            </Button>
                            </OverlayTrigger>
                        ): null}
                        <div className='project-description'>
                            {project.description}
                        </div>
                    </div>
                    { windowDimension.width >= 992 ?
                        <ul className='project-build'>
                            {project.build.map((text) => (
                                <li key={text.tool}>{text.tool}</li>
                            ))}
                        </ul>
                    : null}
                </div>
            ))}
        </Stack>    
        </Container>
    );
};
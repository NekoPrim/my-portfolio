import { Container, Stack } from "react-bootstrap";
import { ScreenSize } from "../../app/ScreenSize";
import { projects } from "../../app/data";
import './projects.css';

export const Projects = () => {
    const { windowDimension } = ScreenSize();

    return (
        <Container className='App-container'>
            <div className='App-title'>
                Projects
            </div>
            <Stack>
            {projects.map((project) => (
                <div className='project' key={project.id}>
                    { windowDimension.width >= 800 ?
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
                        { windowDimension.width < 800 ?
                            <div className='project-video-container'>
                                <iframe className='project-video' src={project.video} title={project.title}>
                                </iframe>
                                <ul className='project-build-side'>
                                    {project.build.map((text) => (
                                        <li key={text.tool}>{text.tool}</li>
                                    ))}
                                </ul>
                            </div>
                        : null}
                        <div className='project-description'>
                            {project.description}
                        </div>
                    </div>
                    { windowDimension.width >= 800 ?
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
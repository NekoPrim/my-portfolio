import { Stack } from 'react-bootstrap';
import { skills } from '../../app/data';
import './resume.css';

export const Skills = () => {
    return (
        <Stack direction='horizontal' className='resume-stack'>
            <div className='resume-skills'>
                <div className='resume-skills-title'>Languages</div>
                <div className='resume-skills-info'>
                    {skills.languages.map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </div>
            </div>
            <div className='resume-skills'>
                <div className='resume-skills-title'>Libraries</div>
                <div className='resume-skills-info'>
                    {skills.libraries.map((library) => (
                        <li key={library}>{library}</li>
                    ))}
                </div>
            </div>
            <div className='resume-skills'>
                <div className='resume-skills-title'>FrameWorks</div>
                <div className='resume-skills-info'>
                    {skills.frameWorks.map((framework) => (
                        <li key={framework}>{framework}</li>
                    ))}
                </div>
            </div>
            <div className='resume-skills'>
                <div className='resume-skills-title'>Tools</div>
                <div className='resume-skills-info'>
                    {skills.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </div>
            </div>
            <div className='resume-skills'>
                <div className='resume-skills-title'>TCP</div>
                <div className='resume-skills-info'>
                    {skills.TCPs.map((TCP) => (
                        <li key={TCP}>{TCP}</li>
                    ))}
                </div>
            </div>
            <div className='resume-skills'>
                <div className='resume-skills-title'>Ect.</div>
                <div className='resume-skills-info'>
                    {skills.ect.map((x) => (
                        <li key={x}>{x}</li>
                    ))}
                </div>
            </div>
        </Stack>
    )
}
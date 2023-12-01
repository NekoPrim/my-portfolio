import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
// import { MyButton } from '../resusable/MyButton';
import { validate } from '../../app/util';
import pups from '../../images/pups.jpg'
import './contact.css';

declare global {
    interface Window {
        Email: any;
    }
};

export const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSend = () => {
        const contactError: string = validate(name, email, message);
        setError(contactError);

        if (!contactError) {
            try {
                window.Email.send({
                    SecureToken: '546c28aa-90ef-45b7-b995-5279623e7acb',
                    To: 'nekodez@gmail.com',
                    From: email,
                    Subject: name,
                    Body: message,
                }).then()
            } catch (e) {
                throw e;
            }
        }
    };

    return (
        <Container className='App-container'>
            <div className='App-title'>
                Contact
            </div>
            <div className='contact'>
                <div className='contact-info'>
                    <Form.Group
                        className="contact-form"
                    >
                        <Form.Label className='contact-label'>
                            Your name:
                        </Form.Label>
                        <Form.Control
                            size='lg'
                            className='contact-input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="contact-form"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label className='contact-label'>
                            Your email:
                        </Form.Label>
                        <Form.Control
                            type="email"
                            size='lg'
                            placeholder="text@example.com"
                            className='contact-input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="contact-form" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='contact-label'>
                            Message:
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            size='lg'
                            className='contact-input'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    {error ?
                        <Container className='contact-error'>
                            ** {error} **
                        </Container>
                        : null}
                    <Button onClick={onSend}>
                        Submit
                    </Button>
                </div>
                <img src={pups} className='App-image contact-image' alt='' />
            </div>
        </Container>
    );
};
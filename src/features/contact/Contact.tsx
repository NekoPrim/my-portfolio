import { useState } from 'react';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import { validate } from '../../app/util';
import { ScreenSize } from '../../app/ScreenSize';
import pups from '../../images/pups.jpg'
import './contact.css';

declare global {
    interface Window {
        Email: any;
    }
};

export const Contact = () => {
    const { windowDimension } = ScreenSize();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [sent, setSent] = useState<boolean>(false);

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
                }).then(
                    setName(''),
                    setEmail(''),
                    setMessage(''),
                    setSent(true)
                )
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
            { (windowDimension.width < 800) ? (
                <div className='contact-image-container'>
                    <img src={pups} className='App-image contact-image' alt='' />
                </div>
            ) : (
                null
            )}
            <div className='contact'>
                <div className='contact-info'>
                    <Form.Group
                        className='contact-form'
                        controlId='yourName'
                    >
                        <Form.Label className='contact-label'>
                            Your name:
                            <Form.Control
                            size='lg'
                            className='contact-input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group
                        className='contact-form'
                        controlId='yourEmail'
                    >
                        <Form.Label className='contact-label'>
                            Your email:
                            <Form.Control
                            type='email'
                            size='lg'
                            placeholder='text@example.com'
                            className='contact-input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group
                        className='contact-form'
                        controlId='yourMessage'
                    >
                        <Form.Label className='contact-label'>
                            Message:
                            <Form.Control
                            as='textarea'
                            rows={5}
                            size='lg'
                            className='contact-input'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        </Form.Label>
                    </Form.Group>
                    <div className='contact-submit-area'>
                        {error ?
                            <Container className='contact-error'>
                                ** {error} **
                            </Container>
                        : null}
                        { sent ?
                            <Toast className='contact-toast' onClose={() => setSent(false)}>
                                <Toast.Header className='contact-toast-header'>
                                    Success!
                                </Toast.Header>
                                <Toast.Body className='contact-toast-body'>
                                    Thank you, your email has been sent.
                                </Toast.Body>
                            </Toast>
                        : null}
                        <Button onClick={onSend} className='contact-button'>
                            Submit
                        </Button>
                    </div>
                </div>
                { (windowDimension.width >= 800) ? (
                    <img src={pups} className='App-image contact-image' alt='' />
                ) : (
                    null
                )}
            </div>
        </Container>
    );
};
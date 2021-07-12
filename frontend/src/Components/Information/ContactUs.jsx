import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../../CSS/Pages.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('feedback');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setTopic('feedback');
        setMessage('');
    }

    const handleShow = () => setShow(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('qacinema', 'template_kn9ua19', e.target, 'user_uiL5ntpceYUPx25miHmY0')
            .then((result) => {
                handleShow();
            }, (error) => {
                alert("Something went wrong. We couldn't sent your message!")
            });
    }



    return (
        <div class='background'>
            <div class='container'>
                <h1 class='landing-text'> Contact Us </h1>
                <Card>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label> Your E-mail </label><br />
                        <input type='email' id='email' name='email' onChange={(event) => {
                            setEmail(event.target.value);
                        }} value={email}></input><br />
                        <label> Topic of your Message </label><br />
                        <select name='subject' id='subject' onChange={(event) => {
                            setTopic(event.target.value);
                        }} value={topic}>
                            <option value='feedback'> Feedback </option>
                            <option value='booking'> Venue Booking </option>
                            <option value='message'> Other </option>
                        </select><br />
                        <label> Your Message </label><br />
                        <textarea id='message' name='message' onChange={(event) => {
                            setMessage(event.target.value);
                        }} value={message}></textarea><br />
                        <button class='button btn-primary' id='submit' type='submit'> Send </button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> Thanks for your E-mail!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>We appreciate your {topic} and will get back you as soon as we can. You can expect a reply from us sent to {email} within the next 5 working days.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ContactUs;
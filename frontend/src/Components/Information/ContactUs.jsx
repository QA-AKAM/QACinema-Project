import { Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../../CSS/Pages.css';

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
        sendMessage();
    }

    const sendMessage = () => {
        handleShow();
    }

    return (
        <div class='background'>
            <div class='container'>
                <h1 class='landing-text'> Contact Us </h1>
                <Card>
                    <form>
                        <label> Your E-mail </label><br />
                        <input type='email' id='email' onChange={(event) => {
                            return setEmail(event.target.value);
                        }} value={email}></input><br />
                        <label> Topic of your Message </label><br />
                        <select name='subject' id='subject' onChange={(event) => {
                            return setTopic(event.target.value);
                        }} value={topic}>
                            <option value='feedback'> Feedback </option>
                            <option value='booking'> Venue Booking </option>
                            <option value='message'> Other </option>
                        </select><br />
                        <label> Your Message </label><br />
                        <textarea id='message' onChange={(event) => {
                            return setMessage(event.target.value);
                        }} value={message}></textarea><br />
                        <button class='button btn-primary' id='submit' type='submit' onClick={handleSubmit}> Send </button>

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
import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'



const Contact = () => {
    const form = useRef();
    const [notification, setNotification] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.checkValidity()) {
            emailjs
                .sendForm('service_ly4n5rc', 'template_b376xsz', form.current, 'F1Jzrgq6nIX5L8e6Y')
                .then(
                    (result) => {
                        console.log(result.text);
                        setNotification('Message sent!!');
                    },
                    (error) => {
                        console.log(error.text);
                        setNotification('Failed to send email. Please try again later.');
                    }
                );

            e.target.reset();
            setTimeout(() => {
                setNotification('');
            }, 3000);
        } else {
            form.current.reportValidity();
        }
    };

    const [inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div>
            <Navbar />
            <div className="container-fluid py-5" >
                <div className="container">

                    <div className="row">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <div className="bg-primary text-light text-center p-4">
                                <h5 className="m-0">
                                    <i className="fa fa-map-marker-alt text-white mr-2"></i>
                                    Bushaqer Building, Al Garhoud, Dubai, UAE.
                                </h5>
                            </div>
                            <iframe
                                title="Google Maps"
                                style={{ width: '100%', height: '470px', border: '0' }}
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.609556175961!2d55.338421815010605!3d25.250072483871605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzAwLjMiTiA1NcKwMjAnMjYuMiJF!5e0!3m2!1sen!2slk!4v1689681281179!5m2!1sen!2slk"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className="col-lg-7">

                            <h5 className="text-secondary text-uppercase mb-3">Contact Us</h5>
                            <h2 className="mb-5 text-primary font-weight-bold" style={{ fontWeight: 'bold' }}>UNIVERSAL <span className="text-secondary" >FREIGHT SOLUTIONS LLC</span></h2>
                            <div className="contact-form bg-light" style={{ padding: '30px', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                <div id="success"></div>
                                <form ref={form} onSubmit={sendEmail} name="sentMessage" id="contactForm" noValidate>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            data-validation-required-message="Please enter your name"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="email"
                                            className="form-control border-0 p-4"
                                            id="email"
                                            name="email"
                                            placeholder="Your Email"
                                            required
                                            data-validation-required-message="Please enter your email"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            id="subject"
                                            name="subject"
                                            placeholder="Subject"
                                            required
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control border-0 py-3 px-4"
                                            rows="3"
                                            id="message"
                                            name="message"
                                            placeholder="Message"
                                            required
                                            data-validation-required-message="Please enter your message"
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                                            Send Message
                                        </button>
                                        {notification && (
                                            <div
                                                className="emailshow"
                                                style={{
                                                    marginTop: '10px',
                                                    color: '#fff',
                                                    backgroundColor: '#233463',
                                                    padding: '10px',
                                                    borderRadius: '4px',
                                                    width: '150px',
                                                    height: '40px',
                                                    transition: 'opacity 0.5s ease-in-out',
                                                    opacity: notification ? 1 : 0,
                                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                    zIndex: 9999,
                                                }}
                                            >
                                                {notification}
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;

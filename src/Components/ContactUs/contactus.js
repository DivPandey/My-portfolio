import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './contactus.css';

const ContactUs = () => {
    return (
        <>
        <h1>
            Contact Us
        </h1>
      <div className="contact-us">
        <div className="contact-card">
          <h3 className='Contact-types'>
          <FaMapMarkerAlt className="icon" />
            Address
            </h3>
          <p>SST Campus<br />E-City, Bengaluru</p>
        </div>
        <div className="contact-card">
          <h3 className='Contact-types'>
          <FaPhoneAlt className="icon" />
            Phone</h3>
          <p>+91-945-320-XXXX</p>
        </div>
        <div className="contact-card">
          <h3 className='Contact-types'>
          <FaEnvelope className="icon" />
            Email</h3>
          <p>divyanshu1116@outlook.com</p>
        </div>
        <div className="contact-card">
          <h3 className='Contact-types'>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/divyanshu-pandey-0418a12ab/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
            <a href="https://github.com/DivPandey/" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
          </div>
        </div>
      </div>
      </>
    );
  }
  
    export default ContactUs;

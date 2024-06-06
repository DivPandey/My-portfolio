import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Socialmedia.css';

function Socialmedia() {
    return (
        <div className="social-media">
            <a href="https://github.com/DivPandey/" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/divyanshu-pandey-0418a12ab" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="mailto:divyanshu1106@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    )
}

export default Socialmedia;
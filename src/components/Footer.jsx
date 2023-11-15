import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Footer() {
    return (
        <footer>
            <h2>Check out my GitHub and LinkedIn here!</h2>
            <ul className='list-unstyled d-flex justify-content-center'>
                <li className='me-5'>
                    <a href='https://github.com/cslunsford' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github fa-3x iconLink'></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/christopher-lunsford-45b5b1159/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin fa-3x iconLink'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
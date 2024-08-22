import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Footer() {
    return (
        <footer>
            <h2>Check out my GitHub here!</h2>
            <ul className='list-unstyled d-flex justify-content-center'>
                <li className='me-5'>
                    <a href='https://github.com/cslunsford' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github fa-3x iconLink'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
import React from 'react';

function Footer() {
    return (
        <footer>
            <h1>Check out my GitHub and LinkedIn here!</h1>
            <ul>
                <li>
                    <a href='https://github.com/cslunsford' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/christopher-lunsford-45b5b1159/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
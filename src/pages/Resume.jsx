import React from 'react';

function Resume() {
    return (
        <div>
            <h2>My Proficiencies</h2>
            <div>
                <h3>Front-End</h3>
                <ul>
                    <li>
                        <i className='fa-solid fa-code'></i>HTML
                    </li>
                    <li>
                        <i className='fab fa-css3'></i>CSS
                    </li>
                    <li>
                        <i className='fab fa-bootstrap'></i>Bootstrap
                    </li>
                    <li>
                        <i className='fab fa-js'></i>JavaScript & jQuery
                    </li>
                    <li>
                        <i className='fab fa-react'></i>React
                    </li>
                </ul>
            </div>
            <div>
                <h3>Back-End</h3>
                <ul>
                    <li>
                        <i className='fab fa-node'></i>Node.js
                    </li>
                    <li>
                        <i className='fab fa-server'></i>Express
                    </li>
                    <li>
                        <i className='fab fa-database'></i>SQL
                    </li>
                    <li>
                        <i className='fab fa-js'></i>JavaScript
                    </li>
                    <li>
                        <i className='fab fa-database'></i>MongoDB
                    </li>
                    <li>
                        <i className='fab fa-database'></i>GraphQL
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
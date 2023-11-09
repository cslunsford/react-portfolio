import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Homepage() {
    return (
        <div className='container text-center mt-3 aboutContainer'>
            <h2 className=''>About Me</h2>
            <div>
                <img src='/ProfilePicture.png' alt='Profile picture' className='img-thumbnail img-fluid proPic m-3'></img>
            </div>
            <div>
                <p>Hello! My name is Christopher Lunsford and I am a 26 year old web-developer based out of Connecticut. I participated in a 24-week-long coding bootcamp where I learned both front-end and back-end development. I've become proficient in multiple technologies such as JavaScript, Node, SQL, MongoDB, React, and more! Please explore the site to learn more about projects I've taken part in, and be sure to checkout my GitHub and LinkedIn linked in the footer of the page!</p>
            </div>
        </div>
    );
}

export default Homepage;
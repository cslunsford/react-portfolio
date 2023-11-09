import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {
    return (
        <header className='d-flex justify-content-between align-items-center p-3'>
            <h1 className='m-0'>Christopher Lunsford</h1>
            <Navigation />
        </header>
    );
}

export default Header;
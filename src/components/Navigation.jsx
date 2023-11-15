import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navigation() {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-item ms-auto'>
                    <NavLink to='/' className='nav-link' exact='true'>About Me</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/resume' className='nav-link'>Resume</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-link'>Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
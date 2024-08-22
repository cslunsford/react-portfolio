import React from 'react';
import Project from '../components/Project';
import { Row } from 'react-bootstrap';

const projects = [
    {
        title: '456 Print Co',
        image: '/456logo.png',
        deployedLink: 'https://456printco.com/',
        repoLink: 'https://olivebranchgrowth.com/',
    }, {
        title: 'Belleville Screen Printing Co',
        image: '/astro-man2.png',
        deployedLink: 'https://bellevillescreen.com/',
        repoLink: 'https://olivebranchgrowth.com/',
    }, {
        title: 'Book Search Engine Refactor',
        image: '/BookSearchEngine.png',
        deployedLink: 'https://calm-inlet-40932-ce4898dd1f2a.herokuapp.com/',
        repoLink: 'https://github.com/cslunsford/book-search-engine',
    }, {
        title: 'Note Taker App',
        image: '/NoteTakerApp.png',
        deployedLink: 'https://github.com/cslunsford/note-taker-app#readme',
        repoLink: 'https://github.com/cslunsford/note-taker-app',
    }, {
        title: 'Social Network API',
        image: '/SocialNetworkAPI.png',
        deployedLink: 'https://drive.google.com/file/d/1OCUMadj8j1r1LbJMOk_LmELRKp4a8HMi/view',
        repoLink: 'https://github.com/cslunsford/social-network-api',
    }, {
        title: 'Ecommerce Backend',
        image: '/EcommerceBackend.png',
        deployedLink: 'https://drive.google.com/file/d/1IhcQt76UhR1hanOq0ca75cr4AXm1G5ej/view?pli=1',
        repoLink: 'https://github.com/cslunsford/ecommerce-backend',
    }
];

function Portfolio() {
    return (
        <div className='text-center'>
            <h2>My Projects</h2>
            <Row xs={1} md={2}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Row>
        </div>
    );
}

export default Portfolio;
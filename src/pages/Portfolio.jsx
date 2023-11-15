import React from 'react';
import Project from '../components/Project';
import { Row } from 'react-bootstrap';

const projects = [
    {
        title: 'Wallet Whiz',
        image: '/WalletWiz.png',
        deployedLink: 'https://walletwizzz-e48c873597e2.herokuapp.com/homepage',
        repoLink: 'https://github.com/cslunsford/wallet-wiz',
    }, {
        title: 'Cooking With What You Got',
        image: '/CookingWithWhatYouGot.png',
        deployedLink: 'https://lukiangelxd.github.io/Cookingwithwhatyougot/',
        repoLink: 'https://github.com/Lukiangelxd/Cookingwithwhatyougot',
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
            <h5>Please note apps that are spun down or are not deployed will link to repository's README or video demonstration when applicable!</h5>
            <Row xs={1} md={2}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Row>
        </div>
    );
}

export default Portfolio;
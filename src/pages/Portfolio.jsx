import React from 'react';
import Project from '../components/Project';

const projects = [
    {
        title: 'Wallet Whiz',
        image: '../assets/WalletWiz.png',
        deployedLink: 'https://walletwizzz-e48c873597e2.herokuapp.com/homepage',
        repoLink: 'https://github.com/cslunsford/wallet-wiz',
    }, {
        title: 'Cooking With What You Got',
        image: '../assets/CookingWithWhatYouGot',
        deployedLink: 'https://lukiangelxd.github.io/Cookingwithwhatyougot/',
        repoLink: 'https://github.com/Lukiangelxd/Cookingwithwhatyougot',
    }, {
        title: 'Book Search Engine Refactor',
        image: '../assets/BookSearchEngine.png',
        deployedLink: 'https://calm-inlet-40932-ce4898dd1f2a.herokuapp.com/',
        repoLink: 'https://github.com/cslunsford/book-search-engine',
    }, {
        title: 'Note Taker App',
        image: '../assets/NoteTakerApp.png',
        deployedLink: 'https://github.com/cslunsford/note-taker-app#readme',
        repoLink: 'https://github.com/cslunsford/note-taker-app',
    }, {
        title: 'Social Network API',
        image: '../assets/SocialNetworkAPI.png',
        deployedLink: 'https://drive.google.com/file/d/1OCUMadj8j1r1LbJMOk_LmELRKp4a8HMi/view',
        repoLink: 'https://github.com/cslunsford/social-network-api',
    }, {
        title: 'Ecommerce Backend',
        image: '../assets/EcommerceBackend.png',
        deployedLink: 'https://drive.google.com/file/d/1IhcQt76UhR1hanOq0ca75cr4AXm1G5ej/view?pli=1',
        repoLink: 'https://github.com/cslunsford/ecommerce-backend',
    }
];

function Portfolio() {
    return (
        <div>
            <h2>My Projects</h2>
            <h5>Please note apps that are spun down or are not deployed will link to repository's README or video demonstration when applicable!</h5>
            <div>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
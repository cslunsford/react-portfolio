import React from 'react';

function Project(props) {
    const { title, image, deployedLink, repoLink } = props;

    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div>
                <a href={deployedLink} target='_blank' rel='noopener noreferrer'>Deployed App</a>
                <a href={repoLink} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
            </div>
        </div>
    );
}

export default Project;
import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import '../App.css';

function Project(props) {
    const { title, image, deployedLink, repoLink } = props;

    return (
        <Col md={4} className='mb-4'>
            <Card className='h-100 align-items-center card'>
                <Card.Img src={image} alt={title} className='img-fluid img-thumbnail projectPic' />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <div className='d-flex justify-content-around mt-auto'>
                        <Button size='sm' href={deployedLink} target='_blank' rel='noopener noreferrer' className='button'>
                            Deployed App
                        </Button>
                        <Button size='sm' href={repoLink} target='_blank' rel='noopener noreferrer' className='button'>
                            GitHub Repository
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Project;
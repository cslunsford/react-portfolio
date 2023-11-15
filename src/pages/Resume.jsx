import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Resume() {
    return (
        <Container className='d-flex flex-column align-items-center justify-content-center'>
            <h2 className='my-3'>My Proficiencies</h2>
            <Row>
                <Col>
                    <ListGroup className='customListGroup'>
                    <h3>Front-End</h3>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-code me-2'></i>HTML
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-css3 me-2'></i>CSS
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-bootstrap me-2'></i>Bootstrap
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-js me-2'></i>JavaScript & jQuery
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-react me-2'></i>React
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup className='customListGroup'>
                    <h3>Back-End</h3>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-node me-2'></i>Node.js
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-server me-2'></i>Express
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-table me-2'></i>SQL
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-js me-2'></i>JavaScript
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-database me-2'></i>MongoDB
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-network-wired me-2'></i>GraphQL
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
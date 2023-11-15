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
                            <i className='fa-solid fa-code'></i>HTML
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-css3'></i>CSS
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-bootstrap'></i>Bootstrap
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-js'></i>JavaScript & jQuery
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-react'></i>React
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup className='customListGroup'>
                    <h3>Back-End</h3>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-node'></i>Node.js
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-server'></i>Express
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-table'></i>SQL
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fab fa-js'></i>JavaScript
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-database'></i>MongoDB
                        </ListGroup.Item>
                        <ListGroup.Item className='customListItem'>
                            <i className='fa-solid fa-network-wired'></i>GraphQL
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Resume;
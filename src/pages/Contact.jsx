import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                <Form.Group controlId='formName' className='mb-3 mt-3'>
                    <Form.Control type='text' placeholder='Please enter your name!' {...register('name', { required: true })} />
                </Form.Group>
                <Form.Group controlId='formEmail' className='mb-3'>
                    <Form.Control type='email' placeholder='Please enter a valid email!' {...register('email', { required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })} />
                </Form.Group>
                <Form.Group controlId='formMessage' className='mb-3'>
                    <Form.Control as='textarea' placeholder='Please enter your message!' rows={3} {...register('message', { required: true })} />
                </Form.Group>
                <Button className='button mb-3' type='submit'>Submit</Button>
            </Form>
        </Container>
    );
}

export default Contact;
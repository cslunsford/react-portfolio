import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Please enter your name!' {...register('name', { required: true })} />
                <input placeholder='Please enter a valid email!' {...register('email', { required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })} />
                <textarea placeholder='Please enter your message!' {...register('message', { required: true })} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
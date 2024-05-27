import React from 'react';
import Home from './Home';
const Contact = ({visits}) => {
    return (
        <>
        <h1>Welcome to our Contact Page!</h1>
        <p>This page will give you ways to contact us. Below are the following ways to do that...</p>
        <p>Oh by the way, the home page has been visited {visits} times.</p>
        <address>
			<p>Luke University</p>
			<p>Luke Town, LT 020424</p>
			<p>Phone: +1 (123) 456-7890</p>
		</address>
        </>
    )
}
export default Contact;
import React from 'react';
import Home from './Home';
const About = ({visits}) => {
    return (
        <>
        <h1>Welcome to our About Page!</h1>
        <p>This page will tell you about our page, which dun dun dun, doesn't have much :O</p>
        <p>Home was visited {visits} times</p>
        </>
    )
}
export default About;
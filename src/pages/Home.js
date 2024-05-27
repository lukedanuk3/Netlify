import React from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import Contact from './Contact';
import About from './About';
import Counter from './Counter';
function Home ({visits, setCount}) {
    useEffect(() => {
        setCount(visits + 1);
        console.log('CHANGE WAS MADE TO VALUE!');   
    }, []);
     
    return( 
    <div>
    <h1>Banner ID: B00906247</h1>
    </div>
    )
}
export default Home;
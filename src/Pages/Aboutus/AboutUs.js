import React from 'react';
import me from '../../img/sajol.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <h1 className='text-center'>About Me</h1>
            <img src={me} alt='sajol bhadra' className='d-flex mx-auto image rounded-circle'></img>
            <h3 className='text-center'>Sajol Bhadra</h3>
            <h3 className='text-center'>I am a student in BS.c in Electrical and Electronics Engineerning in North Western University, Khulna.</h3>
        </div>
    );
};

export default AboutUs;
import React from 'react';
import Layout from '../components/layout'

import ImageSlideShow from '../components/ImageSlideShow'

// Assets
import headshot from './../images/me.png'
import collabImg from '../assets/SwimSense/SwimSense8.jpg'


const AboutMe = () => (
    <Layout>
    <h1>About Me</h1>
        <ImageSlideShow style={{height: '400px'}} imageList={[collabImg, headshot]}> </ImageSlideShow>

    </Layout>
);


export default AboutMe;
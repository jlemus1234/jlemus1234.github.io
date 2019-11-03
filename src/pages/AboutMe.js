import React from 'react';
import Layout from '../components/layout'
import ImageSlideShow from '../components/ImageSlideShow'

// Assets
import headshot from './../images/me.png'
import collabImg from '../assets/SwimSense/SwimSense8.jpg'


const AboutMe = () => (
    <Layout currentPage="/AboutMe">
        <h1 style={style.title}>About Me</h1>
        <ImageSlideShow style={{ height: '400px' }} imageList={[collabImg, headshot]}> </ImageSlideShow>
        <div style={style.text}>
            <p>
                Hello I'm Jose Lemus. I like to tinker with computers.
            </p>
        </div>
    </Layout>
);

const style = {
    text: {
        marginTop: '50px',
        marginBottom: '50px'
    },
    title: {
        textAlign: 'center'

    }
}

export default AboutMe;
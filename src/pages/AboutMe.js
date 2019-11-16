import React from 'react';
import Layout from '../components/layout'
import ImageSlideShow from '../components/ImageSlideShow'
// Assets
import headshot from './../images/me.png'
import collabImg from '../assets/SwimSense/SwimSense8.jpg'
import Container from '../components/Container'
import TextContainer from '../components/TextContainer'

const AboutMe = () => (
    <Layout currentPage="/AboutMe">
        <ImageSlideShow style={{ height: '400px' }} imageList={[collabImg, headshot]}/>
        <Container>
            <TextContainer>
                <h1 style={style.title}>About Me</h1>
                <div style={style.text}>
                    <p>
                        Hello I'm Jose Lemus. I like to tinker with computers and program. In my free time I also like to
                        do calligraphy, exercise, and write.
                    </p>
                </div>
            </TextContainer>
        </Container>
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
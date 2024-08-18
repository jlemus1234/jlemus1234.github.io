import React from 'react';
import Layout from '../components/layout'
import ImageCircle from '../components/ImageCircle'
// Assets
import img1 from '../assets/misc/IMG.jpg'

import Container from '../components/Container'
import TextContainer from '../components/TextContainer'

const AboutMe = () => (
    <Layout currentPage="/AboutMe">
        <Container style = {styles.container}>
            <ImageCircle image={img1} style={styles.image}/>
            <TextContainer style={styles.textContainer}>
                <h1 style={styles.title}>About Me</h1>
                <div style={styles.description}>
                    <p>
                        Hello I'm Jose Lemus. I like to tinker with computers and program. In my free time I also like to
                        do calligraphy, exercise, and write.
                    </p>
                </div>
            </TextContainer>
        </Container>
    </Layout>
);

const styles = {
    description: {
        marginTop: '50px',
        marginBottom: '50px'
    },
    title: {
        textAlign: 'center'

    },
    image: {
        //width: '40%'
    },
    container: {
        display: 'flex',
        marginBottom: '100px',
        marginTop: '100px',

    },
    textContainer: {
        width: '60%'
    }


}

export default AboutMe;
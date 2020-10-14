import React from 'react'
import Container from '../components/Container'
import TextContainer from '../components/TextContainer'
import ImageGallery from '../components/ImageGallery'

import testImage from '../images/me.png'

const fonts = 'Bahnschrift, Arial, sansSerif'

const styles = {
    writingPage: {
        fontFamily: fonts,
        marginTop: '20px',
        marginBottom: '20px'

    },
    title:{
        textAlign: 'center'
    },
    collaborators:{
        textAlign: 'center'
    },
    summary:{

    },
    caption:{

    },
    image:{
        width: '100%',
        maxHeight: '400px',
        objectFit: 'cover'

    },
    subsectionTitle:{
        textAlign: 'center'

    },
    mainText:{

    },
    date:{
        textAlign: 'center'
    }

}

const WritingPage = ({Title, Image, Caption, GalleryImages, Collaborators, Summary, MainText, Date}) => {
    return(
        <Container style={{marginBottom:'50px'}}>
            <div style={styles.writingPage}>
                <h1 style={styles.title}>{Title}</h1>
                <p style={styles.date}>{Date}</p>
                <h2 style={styles.collaborators}>{Collaborators}</h2>

                <img style={styles.image} src={Image}/>
                <TextContainer>
                    <h3 style={styles.subsectionTitle}>Summary</h3>
                    <h3>{Summary}</h3>

                    <h3 style={styles.mainText}>{MainText}</h3>

                </TextContainer>
            </div>
        </Container>
    )
}

WritingPage.defaultProps = {
    Title: 'Title',
    Image: testImage,
    Caption: 'Caption',
    GalleryImages: [],
    Collaborators: 'Collaborators',
    Summary: 'Summary',
    Date: 'Date',
    MainText: 'Essay goes here'

}

export default WritingPage;
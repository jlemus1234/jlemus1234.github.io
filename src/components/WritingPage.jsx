import React from 'react'
import Container from '../components/Container'
import TextContainer from '../components/TextContainer'
import ImageGallery from '../components/ImageGallery'

import testImage from '../images/me.png'

const fonts = 'Bahnschrift, Arial, sansSerif'

const styles = {
    WritingPage: {

    },
    title:{

    },
    collaborators:{

    },
    summary:{

    },
    caption:{

    },
    image:{

    }

}

const WritingPage = ({Title, Image, Caption, GalleryImages, Collaborators, Summmary, MainText}) => {
    return(
        <Container>
            <div style={styles.WritingPage}>
                Hi
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
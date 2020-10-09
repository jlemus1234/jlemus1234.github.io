import React from 'react'
import bannerImage from './../images/senior.jpg'

const styles = {
    bannerStyling: {
        background: 'black',
        //background: 'rgb(181, 188, 199)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px 10px 0 0',
        marginBottom: '0'

    },

    bannerImageStyling: {
        maxWidth: '100%',
        minWidth: '100%',
        //maxWidth: '2000px',
        maxHeight: '100%',
        marginBottom: '0',
        objectFit:'contain' //'cover'
    }

};

const ImageBanner = ({image, propStyles}) => {

    return (
        <img style={styles.bannerImageStyling} className="bannerImage" src={image} alt="Banner Image"></img>

/*         <div style={{ ...styles.bannerStyling, ...propStyles}} className="banner">
            <img style={styles.bannerImageStyling} className="bannerImage" src={image} alt="Banner Image"></img>
        </div> */
    )
}

ImageBanner.defaultProps = {
    bannerImage: bannerImage,
}


export default ImageBanner;
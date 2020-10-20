import React from 'react'
import bannerImage from './../images/senior.jpg'

const styles = {
    bannerStyling: {
        background: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px 10px 0 0',
        marginBottom: '0'

    },
    bannerImageStyling: {
        maxWidth: '100%',
        minWidth: '100%',
        maxHeight: 500,    
        marginBottom: '0',
        objectFit:'cover'
    }

};

const ImageBanner = ({image, propStyles}) => {

    return (
        <img style={{...styles.bannerImageStyling, ...propStyles}} className="bannerImage" src={image} alt="Banner Image"></img>
    )
}

ImageBanner.defaultProps = {
    image: bannerImage
}


export default ImageBanner;
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
        maxHeight: '100%',
        marginBottom: '0',
        objectFit: 'contain'
    }

};

class ImageBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div style={{ ...styles.bannerStyling, ...this.props.style }} className="banner">
                <img style={styles.bannerImageStyling} className="bannerImage" src={this.props.bannerImage} alt="Banner Image"></img>
            </div>
        )
    }
}

ImageBanner.defaultProps = {
    bannerImage: bannerImage,
}


export default ImageBanner;
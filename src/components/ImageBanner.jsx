import React from 'react'
import bannerImage from './../images/senior.jpg'

const bannerStyling = {
    background: 'black',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
};

const bannerImageStyling = {    
    
};

// add cycle through images
// fix styling at some point

class ImageBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }



    render() {
        return (
            <div>
                {/* Testing */}
                <div style={bannerStyling} class="banner">
                    <img style = {bannerImageStyling} class="bannerImage" src={this.props.bannerImage} alt="Banner Image"></img>
                </div>
            </div>
        )
    }
}

ImageBanner.defaultProps = {
    bannerImage: bannerImage,
}


export default ImageBanner;
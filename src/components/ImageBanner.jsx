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

            // create function that swaps which photo to display...
            // lets just say there are four of them
            // swap through after a few seconds...

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
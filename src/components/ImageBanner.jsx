import React from 'react'
import bannerImage from './../images/senior.jpg'

const styles = {
    bannerStyling : {
    background: 'black',
    //background: 'rgb(181, 188, 199)',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
    },

    bannerImageStyling : { 
    }   
    
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
                <div style={styles.bannerStyling} className="banner">
                    <img style = {styles.bannerImageStyling} className="bannerImage" src={this.props.bannerImage} alt="Banner Image"></img>
                </div>
            </div>
        )
    }
}

ImageBanner.defaultProps = {
    bannerImage: bannerImage,
}


export default ImageBanner;
import React from 'react'
import bannerImage from './../images/senior.jpg'

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
                <div class="banner">
                    <img class="portrait" src={this.props.bannerImage} alt="Banner Image"></img>
                </div>
            </div>
        )
    }
}

ImageBanner.defaultProps = {
    bannerImage: bannerImage,
}


export default ImageBanner;
import React from 'react'

import headshot from './../images/me.png'

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
                <div class="userBanner">
                    <img class="portrait" src={headshot} alt="Head shot"></img>
                </div>
            </div>
        )
    }
}

export default ImageBanner;
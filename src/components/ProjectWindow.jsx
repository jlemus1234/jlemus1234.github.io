import React from 'react'

import vidTest from '../images/clips/testClip.mp4'

class ProjectWindow extends React.Component {
    constructor(props){
        // required props include a name and an image/video
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div id="video">
                <video controls autoplay>
                    <source src={vidTest} type="video/mp4"></source>
                    Your browser does not support the video tag
                </video>

            </div>
        )
    }
}

export default ProjectWindow;